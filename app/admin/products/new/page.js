'use client'
import { useState, useEffect } from "react"
import { useRouter } from "next/navigation"
import Link from "next/link"
import { CATEGORIES_DATA } from "@/data/products"
import { supabase, isSupabaseConfigured } from "@/lib/supabase"

export default function NewProductAdminPage() {
    const router = useRouter()
    const [categories, setCategories] = useState(CATEGORIES_DATA)
    const [loading, setLoading] = useState(false)
    const [uploading, setUploading] = useState(false)

    const [form, setForm] = useState({
        name: "",
        slug: "",
        category_id: CATEGORIES_DATA[0]?.id || "",
        category: CATEGORIES_DATA[0]?.name || "",
        brand: "",
        model: "",
        short_description: "",
        description: "",
        featured_image: "/assets/images/shop/product-1.jpg",
        is_featured: false,
        is_active: true,
        sort_order: 1
    })

    const [specs, setSpecs] = useState([
        "Processor: Intel Core i7 13th Gen",
        "Memory: 16GB DDR5 RAM",
        "Storage: 512GB NVMe SSD"
    ])
    const [newSpec, setNewSpec] = useState("")

    useEffect(() => {
        async function loadCategories() {
            if (isSupabaseConfigured && supabase) {
                const { data } = await supabase.from('categories').select('*').order('sort_order', { ascending: true })
                if (data && data.length > 0) {
                    setCategories(data)
                    setForm(prev => ({
                        ...prev,
                        category_id: data[0].id,
                        category: data[0].name
                    }))
                }
            }
        }
        loadCategories()
    }, [])

    const handleNameChange = (e) => {
        const name = e.target.value
        const slug = name.toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/(^-|-$)+/g, '')
        setForm(prev => ({ ...prev, name, slug }))
    }

    const handleAddSpec = () => {
        if (newSpec.trim()) {
            setSpecs(prev => [...prev, newSpec.trim()])
            setNewSpec("")
        }
    }

    const handleRemoveSpec = (index) => {
        setSpecs(prev => prev.filter((_, i) => i !== index))
    }

    const handleImageUpload = async (e) => {
        const file = e.target.files?.[0]
        if (!file) return

        if (!isSupabaseConfigured || !supabase) {
            alert("Supabase is not configured yet. Using mock image path for local mode.")
            return
        }

        try {
            setUploading(true)
            const fileExt = file.name.split('.').pop()
            const fileName = `${Date.now()}-${Math.random().toString(36).substring(2)}.${fileExt}`
            const filePath = `products/${fileName}`

            const { error: uploadError } = await supabase.storage
                .from('product-images')
                .upload(filePath, file)

            if (uploadError) throw uploadError

            const { data: { publicUrl } } = supabase.storage
                .from('product-images')
                .getPublicUrl(filePath)

            setForm(prev => ({ ...prev, featured_image: publicUrl }))
        } catch (err) {
            alert(`Image upload error: ${err.message}`)
        } finally {
            setUploading(false)
        }
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
                const { error } = await supabase.from('products').insert([payload])
                if (error) throw error
            } catch (err) {
                alert(`Error saving product: ${err.message}`)
                setLoading(false)
                return
            }
        }

        router.push('/admin/products')
    }

    return (
        <div style={{ maxWidth: "850px" }}>
            <div className="d-flex flex-column flex-sm-row justify-content-between align-items-start align-items-sm-center gap-3 mb-4">
                <div>
                    <h2 className="mb-1">Add Sourcing Product</h2>
                    <p className="text-muted small">Create a new hardware item for the catalogue.</p>
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
                                placeholder="e.g. Enterprise Business Laptop 14-inch"
                                value={form.name}
                                onChange={handleNameChange}
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
                                placeholder="e.g. Dell / HP / Cisco"
                                value={form.brand}
                                onChange={(e) => setForm({ ...form, brand: e.target.value })}
                            />
                        </div>
                        <div className="col-md-4 form-group mb-3">
                            <label className="font-weight-bold small">Model / Series</label>
                            <input 
                                type="text"
                                className="form-control"
                                placeholder="e.g. Latitude 5440"
                                value={form.model}
                                onChange={(e) => setForm({ ...form, model: e.target.value })}
                            />
                        </div>

                        <div className="col-md-12 form-group mb-3">
                            <label className="font-weight-bold small">Short Summary</label>
                            <input 
                                type="text"
                                className="form-control"
                                placeholder="Brief overview for catalogue cards..."
                                value={form.short_description}
                                onChange={(e) => setForm({ ...form, short_description: e.target.value })}
                            />
                        </div>

                        <div className="col-md-12 form-group mb-3">
                            <label className="font-weight-bold small">Detailed Description</label>
                            <textarea 
                                rows="3"
                                className="form-control"
                                placeholder="Full product overview..."
                                value={form.description}
                                onChange={(e) => setForm({ ...form, description: e.target.value })}
                            />
                        </div>

                        <div className="col-md-12 form-group mb-4">
                            <label className="font-weight-bold small">Featured Image</label>
                            <div className="d-flex align-items-center gap-3">
                                <input 
                                    type="text"
                                    className="form-control mr-3"
                                    placeholder="Image URL or upload file..."
                                    value={form.featured_image}
                                    onChange={(e) => setForm({ ...form, featured_image: e.target.value })}
                                />
                                <label className="btn btn-outline-secondary mb-0" style={{ cursor: "pointer", whiteSpace: "nowrap" }}>
                                    {uploading ? "Uploading..." : "Upload File 📁"}
                                    <input type="file" accept="image/*" onChange={handleImageUpload} style={{ display: "none" }} />
                                </label>
                            </div>
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
                                    id="is_active"
                                    className="form-check-input"
                                    checked={form.is_active}
                                    onChange={(e) => setForm({ ...form, is_active: e.target.checked })}
                                />
                                <label className="form-check-label small font-weight-bold" htmlFor="is_active">
                                    Publish to Catalogue
                                </label>
                            </div>
                            <div className="form-check form-check-inline">
                                <input 
                                    type="checkbox"
                                    id="is_featured"
                                    className="form-check-input"
                                    checked={form.is_featured}
                                    onChange={(e) => setForm({ ...form, is_featured: e.target.checked })}
                                />
                                <label className="form-check-label small font-weight-bold" htmlFor="is_featured">
                                    Feature on Homepage
                                </label>
                            </div>
                        </div>

                        <div className="col-md-12 d-flex justify-content-end">
                            <Link href="/admin/products" className="btn btn-outline-secondary px-4 mr-2">
                                Cancel
                            </Link>
                            <button type="submit" disabled={loading} className="btn btn-primary px-5">
                                {loading ? "Saving..." : "Save Product"}
                            </button>
                        </div>
                    </div>
                </form>
            </div>
        </div>
    )
}
