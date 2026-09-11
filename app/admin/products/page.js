'use client'
import { useState, useEffect } from "react"
import Link from "next/link"
import { PRODUCTS_DATA } from "@/data/products"
import { supabase, isSupabaseConfigured } from "@/lib/supabase"

export default function AdminProductsPage() {
    const [products, setProducts] = useState(PRODUCTS_DATA)
    const [searchTerm, setSearchTerm] = useState("")

    useEffect(() => {
        async function fetchAdminProducts() {
            if (isSupabaseConfigured && supabase) {
                try {
                    const { data } = await supabase
                        .from('products')
                        .select('*, categories(name)')
                        .order('created_at', { ascending: false })

                    if (data && data.length > 0) {
                        setProducts(data)
                    }
                } catch (err) {
                    console.warn("Supabase fetch products error:", err)
                }
            }
        }
        fetchAdminProducts()
    }, [])

    const handleDelete = async (id, name) => {
        if (!confirm(`Are you sure you want to delete product "${name}"?`)) return

        if (isSupabaseConfigured && supabase) {
            try {
                await supabase.from('products').delete().eq('id', id)
            } catch (err) {
                console.error("Delete product error:", err)
            }
        }
        setProducts(prev => prev.filter(p => p.id !== id))
    }

    const handleToggleActive = async (id, currentStatus) => {
        const newStatus = !currentStatus
        if (isSupabaseConfigured && supabase) {
            try {
                await supabase.from('products').update({ is_active: newStatus }).eq('id', id)
            } catch (err) {
                console.error("Update active status error:", err)
            }
        }
        setProducts(prev => prev.map(p => p.id === id ? { ...p, is_active: newStatus } : p))
    }

    const filtered = products.filter(p => 
        p.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
        (p.category && p.category.toLowerCase().includes(searchTerm.toLowerCase())) ||
        (p.brand && p.brand.toLowerCase().includes(searchTerm.toLowerCase()))
    )

    return (
        <div>
            <div className="d-flex justify-content-between align-items-center mb-4">
                <div>
                    <h2 className="mb-1">Product Catalogue Management</h2>
                    <p className="text-muted small">Add, edit, publish, or remove B2B sourcing products.</p>
                </div>
                <Link href="/admin/products/new" className="theme-btn btn-style-one py-2 px-3">
                    <span className="btn-title">+ New Product</span>
                </Link>
            </div>

            <div className="mb-3">
                <input 
                    type="text"
                    className="form-control w-50"
                    placeholder="Filter products by name, category, or brand..."
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                />
            </div>

            <div className="card shadow-sm border-0">
                <div className="table-responsive">
                    <table className="table table-hover mb-0 small">
                        <thead className="thead-light">
                            <tr>
                                <th>Image</th>
                                <th>Product Details</th>
                                <th>Category</th>
                                <th>Brand / Model</th>
                                <th>Status</th>
                                <th className="text-right">Actions</th>
                            </tr>
                        </thead>
                        <tbody>
                            {filtered.map((product) => (
                                <tr key={product.id}>
                                    <td style={{ width: "70px" }}>
                                        <img 
                                            src={product.featured_image || "/assets/images/shop/product-1.jpg"} 
                                            alt={product.name} 
                                            style={{ width: "50px", height: "50px", objectFit: "contain", borderRadius: "4px", backgroundColor: "#f8f9fa" }}
                                        />
                                    </td>
                                    <td>
                                        <strong>{product.name}</strong>
                                        <div className="text-muted small">Slug: <code>{product.slug}</code></div>
                                    </td>
                                    <td>{product.categories?.name || product.category || "Unassigned"}</td>
                                    <td>{product.brand || "—"} {product.model ? `(${product.model})` : ""}</td>
                                    <td>
                                        <button 
                                            onClick={() => handleToggleActive(product.id, product.is_active)}
                                            className={`btn btn-sm ${product.is_active ? 'btn-outline-success' : 'btn-outline-secondary'}`}
                                        >
                                            {product.is_active ? "Published" : "Draft"}
                                        </button>
                                    </td>
                                    <td className="text-right">
                                        <Link href={`/products/${product.slug}`} target="_blank" className="btn btn-sm btn-outline-info mr-2">
                                            View ↗
                                        </Link>
                                        <Link href={`/admin/products/${product.id}/edit`} className="btn btn-sm btn-outline-secondary mr-2">
                                            Edit
                                        </Link>
                                        <button onClick={() => handleDelete(product.id, product.name)} className="btn btn-sm btn-outline-danger">
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
    )
}
