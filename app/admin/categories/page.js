'use client'
import { useState, useEffect } from "react"
import { CATEGORIES_DATA } from "@/data/products"
import { supabase, isSupabaseConfigured } from "@/lib/supabase"

export default function AdminCategoriesPage() {
    const [categories, setCategories] = useState(CATEGORIES_DATA)
    const [newCatName, setNewCatName] = useState("")
    const [newCatDesc, setNewCatDesc] = useState("")

    useEffect(() => {
        async function fetchCategories() {
            if (isSupabaseConfigured && supabase) {
                try {
                    const { data } = await supabase.from('categories').select('*').order('sort_order', { ascending: true })
                    if (data && data.length > 0) {
                        setCategories(data)
                    }
                } catch (err) {
                    console.warn("Categories fetch error:", err)
                }
            }
        }
        fetchCategories()
    }, [])

    const handleCreateCategory = async (e) => {
        e.preventDefault()
        if (!newCatName.trim()) return

        const slug = newCatName.toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/(^-|-$)+/g, '')
        const newCat = {
            id: `cat-${Date.now()}`,
            name: newCatName.trim(),
            slug,
            description: newCatDesc.trim() || 'Procurement equipment category.',
            sort_order: categories.length + 1,
            is_active: true
        }

        if (isSupabaseConfigured && supabase) {
            try {
                const { data, error } = await supabase.from('categories').insert([{
                    name: newCat.name,
                    slug: newCat.slug,
                    description: newCat.description,
                    sort_order: newCat.sort_order,
                    is_active: true
                }]).select()

                if (error) throw error
                if (data && data[0]) {
                    setCategories(prev => [...prev, data[0]])
                }
            } catch (err) {
                alert(`Error creating category: ${err.message}`)
                return
            }
        } else {
            setCategories(prev => [...prev, newCat])
        }

        setNewCatName("")
        setNewCatDesc("")
    }

    const handleDeleteCategory = async (id, name) => {
        if (!confirm(`Are you sure you want to delete category "${name}"?`)) return

        if (isSupabaseConfigured && supabase) {
            try {
                await supabase.from('categories').delete().eq('id', id)
            } catch (err) {
                console.error("Delete category error:", err)
            }
        }
        setCategories(prev => prev.filter(c => c.id !== id))
    }

    return (
        <div>
            <div className="mb-4">
                <h2 className="mb-1">Category Management</h2>
                <p className="text-muted small">Manage product classification categories for the B2B sourcing portal.</p>
            </div>

            <div className="row">
                {/* Create Category Form */}
                <div className="col-lg-4 mb-4">
                    <div className="card shadow-sm p-4 border-0">
                        <h4 className="mb-3">+ Add Category</h4>
                        <form onSubmit={handleCreateCategory}>
                            <div className="form-group mb-3">
                                <label className="font-weight-bold small">Category Name *</label>
                                <input 
                                    type="text"
                                    required
                                    className="form-control"
                                    placeholder="e.g. Storage & Memory"
                                    value={newCatName}
                                    onChange={(e) => setNewCatName(e.target.value)}
                                />
                            </div>
                            <div className="form-group mb-4">
                                <label className="font-weight-bold small">Description</label>
                                <textarea 
                                    rows="3"
                                    className="form-control"
                                    placeholder="Brief scope..."
                                    value={newCatDesc}
                                    onChange={(e) => setNewCatDesc(e.target.value)}
                                />
                            </div>
                            <button type="submit" className="btn btn-primary w-100">
                                Save Category
                            </button>
                        </form>
                    </div>
                </div>

                {/* Categories Table */}
                <div className="col-lg-8">
                    <div className="card shadow-sm border-0">
                        <div className="table-responsive">
                            <table className="table table-hover mb-0 small">
                                <thead className="thead-light">
                                    <tr>
                                        <th>Order</th>
                                        <th>Category Name</th>
                                        <th>Slug</th>
                                        <th>Description</th>
                                        <th className="text-right">Actions</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {categories.map((cat, idx) => (
                                        <tr key={cat.id || idx}>
                                            <td className="font-weight-bold">{cat.sort_order || idx + 1}</td>
                                            <td><strong>{cat.name}</strong></td>
                                            <td><code>{cat.slug}</code></td>
                                            <td className="text-muted">{cat.description}</td>
                                            <td className="text-right">
                                                <button 
                                                    onClick={() => handleDeleteCategory(cat.id, cat.name)}
                                                    className="btn btn-sm btn-outline-danger"
                                                >
                                                    Delete
                                                </button>
                                            </td>
                                        </tr>
                                    ))}
                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
