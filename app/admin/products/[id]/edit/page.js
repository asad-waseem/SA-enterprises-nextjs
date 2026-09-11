'use client'
import { useState, useEffect } from "react"
import { useRouter, useParams } from "next/navigation"
import Link from "next/link"
import { CATEGORIES_DATA, PRODUCTS_DATA } from "@/data/products"
import { supabase, isSupabaseConfigured } from "@/lib/supabase"

export default function EditProductAdminPage() {
    const router = useRouter()
    const params = useParams()
    const id = params?.id

    const [categories, setCategories] = useState(CATEGORIES_DATA)
    const [loading, setLoading] = useState(false)
    const [fetching, setFetching] = useState(true)

    const [form, setForm] = useState({
        name: "",
        slug: "",
        category_id: "",
        category: "",
        brand: "",
        model: "",
        short_description: "",
        description: "",
        featured_image: "/assets/images/shop/product-1.jpg",
        is_featured: false,
        is_active: true,
        sort_order: 1
    })

    const [specs, setSpecs] = useState([])
    const [newSpec, setNewSpec] = useState("")

    useEffect(() => {
        async function loadProductAndCategories() {
            if (isSupabaseConfigured && supabase) {
                try {
                    const { data: catData } = await supabase.from('categories').select('*').order('sort_order', { ascending: true })
                    if (catData) setCategories(catData)

                    const { data: prodData } = await supabase.from('products').select('*').eq('id', id).single()
                    if (prodData) {
                        setForm({
                            name: prodData.name || "",
                            slug: prodData.slug || "",
                            category_id: prodData.category_id || "",
                            category: prodData.category || "",
                            brand: prodData.brand || "",
                            model: prodData.model || "",
                            short_description: prodData.short_description || "",
                            description: prodData.description || "",
                            featured_image: prodData.featured_image || "/assets/images/shop/product-1.jpg",
                            is_featured: prodData.is_featured ?? false,
                            is_active: prodData.is_active ?? true,
                            sort_order: prodData.sort_order || 1
                        })
                        const parsedSpecs = Array.isArray(prodData.specifications) 
                            ? prodData.specifications 
                            : (typeof prodData.specifications === 'string' ? JSON.parse(prodData.specifications || '[]') : [])
                        setSpecs(parsedSpecs)
                        setFetching(false)
                        return
                    }
                } catch (err) {
                    console.warn("Fetch product failed:", err)
                }
            }

            const localProd = PRODUCTS_DATA.find(p => p.id === id || p.slug === id) || PRODUCTS_DATA[0]
            if (localProd) {
                setForm({
                    name: localProd.name || "",
                    slug: localProd.slug || "",
                    category_id: localProd.category_id || "",
                    category: localProd.category || "",
                    brand: localProd.brand || "",
                    model: localProd.model || "",
                    short_description: localProd.short_description || "",
                    description: localProd.description || "",
                    featured_image: localProd.featured_image || "/assets/images/shop/product-1.jpg",
                    is_featured: localProd.is_featured ?? false,
                    is_active: localProd.is_active ?? true,
                    sort_order: localProd.sort_order || 1
                })
                setSpecs(localProd.specifications || [])
            }
            setFetching(false)
        }
        loadProductAndCategories()
    }, [id])

    const handleAddSpec = () => {
        if (newSpec.trim()) {
            setSpecs(prev => [...prev, newSpec.trim()])
            setNewSpec("")
        }
    }

    const handleRemoveSpec = (index) => {
        setSpecs(prev => prev.filter((_, i) => i !== index))
    }

    const handleSubmit = async (e) => {
        e.preventDefault()
        setLoading(true)

        const selectedCatObj = categories.find(c => c.id === form.category_id)
        const payload = {
            ...form,
            category: selectedCatObj?.name || form.category,
            specifications: specs
        }

        if (isSupabaseConfigured && supabase) {
            try {
                const { error } = await supabase.from('products').update(payload).eq('id', id)
                if (error) throw error
            } catch (err) {
                alert(`Error updating product: ${err.message}`)
                setLoading(false)
                return
            }
        }

        router.push('/admin/products')
    }

    if (fetching) {
        return <div className="py-5 text-center">Loading product data...</div>
    }

    return (
        <div style={{ maxWidth: "850px" }}>
            <div className="d-flex flex-column flex-sm-row justify-content-between align-items-start align-items-sm-center gap-3 mb-4">
                <div>
                    <h2 className="mb-1">Edit Product</h2>
                    <p className="text-muted small">Update specifications and catalog details.</p>
                </div>
                <Link href="/admin/products" className="btn btn-sm btn-outline-secondary">
                    ← Back to Products
                </Link>
            </div>

            <div className="card shadow-sm p-4 border-0">
                <form onSubmit={handleSubmit}>
                    <div className="row">
                        <div className="col-md-8 form-group mb-3">
                            <label className="font-weight-bold small">Product Name *</label>
                            <input 
                                type="text"
                                required
                                className="form-control"
                                value={form.name}
                                onChange={(e) => setForm({ ...form, name: e.target.value })}
                            />
                        </div>
                        <div className="col-md-4 form-group mb-3">
                            <label className="font-weight-bold small">URL Slug *</label>
                            <input 
                                type="text"
                                required
                                className="form-control"
                                value={form.slug}
                                onChange={(e) => setForm({ ...form, slug: e.target.value })}
                            />
                        </div>

                        <div className="col-md-4 form-group mb-3">
                            <label className="font-weight-bold small">Category *</label>
                            <select 
                                className="form-control"
                                value={form.category_id}
                                onChange={(e) => setForm({ ...form, category_id: e.target.value })}
                            >
                                {categories.map(cat => (
                                    <option key={cat.id} value={cat.id}>{cat.name}</option>
                                ))}
                            </select>
                        </div>
                        <div className="col-md-4 form-group mb-3">
                            <label className="font-weight-bold small">Brand</label>
                            <input 
                                type="text"
                                className="form-control"
                                value={form.brand}
                                onChange={(e) => setForm({ ...form, brand: e.target.value })}
                            />
                        </div>
                        <div className="col-md-4 form-group mb-3">
                            <label className="font-weight-bold small">Model / Series</label>
                            <input 
                                type="text"
                                className="form-control"
                                value={form.model}
                                onChange={(e) => setForm({ ...form, model: e.target.value })}
                            />
                        </div>

                        <div className="col-md-12 form-group mb-3">
                            <label className="font-weight-bold small">Short Summary</label>
                            <input 
                                type="text"
                                className="form-control"
                                value={form.short_description}
                                onChange={(e) => setForm({ ...form, short_description: e.target.value })}
                            />
                        </div>

                        <div className="col-md-12 form-group mb-3">
                            <label className="font-weight-bold small">Detailed Description</label>
                            <textarea 
                                rows="3"
                                className="form-control"
                                value={form.description}
                                onChange={(e) => setForm({ ...form, description: e.target.value })}
                            />
                        </div>

                        <div className="col-md-12 form-group mb-4">
                            <label className="font-weight-bold small">Featured Image URL</label>
                            <input 
                                type="text"
                                className="form-control"
                                value={form.featured_image}
                                onChange={(e) => setForm({ ...form, featured_image: e.target.value })}
                            />
                        </div>

                        <div className="col-md-12 form-group mb-4">
                            <label className="font-weight-bold small">Specifications List</label>
                            <div className="mb-2">
                                {specs.map((spec, idx) => (
                                    <div key={idx} className="d-flex align-items-center justify-content-between p-2 mb-1 bg-light rounded small">
                                        <span>• {spec}</span>
                                        <button type="button" onClick={() => handleRemoveSpec(idx)} className="btn btn-sm text-danger p-0">✕</button>
                                    </div>
                                ))}
                            </div>
                            <div className="d-flex gap-2">
                                <input 
                                    type="text"
                                    className="form-control mr-2"
                                    placeholder="Add specification line..."
                                    value={newSpec}
                                    onChange={(e) => setNewSpec(e.target.value)}
                                    onKeyDown={(e) => { if (e.key === 'Enter') { e.preventDefault(); handleAddSpec(); }}}
                                />
                                <button type="button" onClick={handleAddSpec} className="btn btn-secondary">
                                    + Add Spec
                                </button>
                            </div>
                        </div>

                        <div className="col-md-12 form-group mb-4">
                            <div className="form-check form-check-inline mr-4">
                                <input 
                                    type="checkbox"
                                    id="is_active_edit"
                                    className="form-check-input"
                                    checked={form.is_active}
                                    onChange={(e) => setForm({ ...form, is_active: e.target.checked })}
                                />
                                <label className="form-check-label small font-weight-bold" htmlFor="is_active_edit">
                                    Published
                                </label>
                            </div>
                            <div className="form-check form-check-inline">
                                <input 
                                    type="checkbox"
                                    id="is_featured_edit"
                                    className="form-check-input"
                                    checked={form.is_featured}
                                    onChange={(e) => setForm({ ...form, is_featured: e.target.checked })}
                                />
                                <label className="form-check-label small font-weight-bold" htmlFor="is_featured_edit">
                                    Featured
                                </label>
                            </div>
                        </div>

                        <div className="col-md-12 d-flex justify-content-end">
                            <Link href="/admin/products" className="btn btn-outline-secondary px-4 mr-2">
                                Cancel
                            </Link>
                            <button type="submit" disabled={loading} className="btn btn-primary px-5">
                                {loading ? "Updating..." : "Update Product"}
                            </button>
                        </div>
                    </div>
                </form>
            </div>
        </div>
    )
}
