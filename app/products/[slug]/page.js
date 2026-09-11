'use client'
import { useState, useEffect } from "react"
import Layout from "@/components/layout/Layout"
import Link from "next/link"
import { useParams, useRouter } from "next/navigation"
import { PRODUCTS_DATA } from "@/data/products"
import { supabase, isSupabaseConfigured } from "@/lib/supabase"

export default function ProductDetailPage() {
    const params = useParams()
    const router = useRouter()
    const slug = params?.slug

    const [product, setProduct] = useState(null)
    const [quantity, setQuantity] = useState(1)
    const [loading, setLoading] = useState(true)
    const [activeTab, setActiveTab] = useState(1)

    useEffect(() => {
        async function fetchProduct() {
            if (isSupabaseConfigured && supabase) {
                try {
                    const { data } = await supabase
                        .from('products')
                        .select('*')
                        .eq('slug', slug)
                        .single()

                    if (data) {
                        setProduct(data)
                        setLoading(false)
                        return
                    }
                } catch (err) {
                    console.warn("Supabase fetch fallback:", err)
                }
            }

            const localProd = PRODUCTS_DATA.find(p => p.slug === slug)
            setProduct(localProd || PRODUCTS_DATA[0])
            setLoading(false)
        }

        if (slug) {
            fetchProduct()
        }
    }, [slug])

    const handleQuantityChange = (delta) => {
        setQuantity(prev => Math.max(1, prev + delta))
    }

    const handleQuoteRedirect = () => {
        if (!product) return
        router.push(`/contact?product=${encodeURIComponent(product.name)}&qty=${quantity}&category=${encodeURIComponent(product.category || "")}#quote`)
    }

    if (loading || !product) {
        return (
            <Layout headerStyle={1} footerStyle={1} breadcrumbTitle="Loading Sourcing Product..." wrapperCls="home_1">
                <div className="auto-container py-5 text-center">
                    <h3>Loading product specifications...</h3>
                </div>
            </Layout>
        )
    }

    const specsList = Array.isArray(product.specifications) 
        ? product.specifications 
        : (typeof product.specifications === 'string' ? JSON.parse(product.specifications || '[]') : [])

    return (
        <Layout headerStyle={1} footerStyle={1} breadcrumbTitle={product.name} wrapperCls="home_1">
            <section className="product-details">
                <div className="auto-container">
                    <div className="product-details-content">
                        <div className="row clearfix">
                            {/* Product Image */}
                            <div className="col-lg-6 col-md-12">
                                <div className="product-image-box text-center p-4 bg-light rounded border">
                                    <img 
                                        src={product.featured_image || "/assets/images/shop/product-1.jpg"} 
                                        alt={product.name}
                                        style={{ maxHeight: "380px", maxWidth: "100%", height: "auto", objectFit: "contain", margin: "0 auto" }}
                                    />
                                </div>
                            </div>

                            {/* Product Info & Quote CTA */}
                            <div className="col-lg-6 col-md-12">
                                <div className="content-box pl-lg-4 mt-4 mt-lg-0">
                                    <span className="badge badge-secondary mb-2 px-3 py-2" style={{ fontSize: "13px" }}>
                                        {product.category || "Corporate Hardware"}
                                    </span>
                                    <h2 className="mt-2 mb-3">{product.name}</h2>
                                    
                                    <div className="d-flex gap-4 mb-3 text-muted" style={{ fontSize: "14px" }}>
                                        {product.brand && <div className="mr-3"><strong>Brand Sourcing:</strong> {product.brand}</div>}
                                        {product.model && <div><strong>Model Series:</strong> {product.model}</div>}
                                    </div>

                                    <div className="text mb-4">
                                        <p>{product.short_description}</p>
                                    </div>

                                    <div className="item-quantity p-4 bg-light rounded border mb-4">
                                        <div className="d-flex align-items-center mb-3">
                                            <label className="font-weight-bold mr-3 mb-0">Required Quantity:</label>
                                            <div className="d-flex align-items-center bg-white border rounded">
                                                <button type="button" onClick={() => handleQuantityChange(-1)} className="btn btn-sm px-3 font-weight-bold">-</button>
                                                <input 
                                                    type="number" 
                                                    min="1" 
                                                    value={quantity} 
                                                    onChange={(e) => setQuantity(Math.max(1, parseInt(e.target.value) || 1))}
                                                    style={{ width: "60px", textAlign: "center", border: "none", fontWeight: "bold", outline: "none" }}
                                                />
                                                <button type="button" onClick={() => handleQuantityChange(1)} className="btn btn-sm px-3 font-weight-bold">+</button>
                                            </div>
                                            <span className="text-muted ml-2">Units</span>
                                        </div>

                                        <button 
                                            type="button" 
                                            onClick={handleQuoteRedirect}
                                            className="theme-btn btn-style-one w-100 py-3"
                                        >
                                            <span className="btn-title">Request Quotation for {quantity} {quantity > 1 ? 'Units' : 'Unit'}</span>
                                        </button>
                                    </div>

                                    <div className="sourcing-notes text-muted" style={{ fontSize: "13px" }}>
                                        <i className="fa fa-shield-alt mr-2 text-warning" />
                                        Genuine OEM warranty verified • Direct B2B billing • Coordinated doorstep delivery
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Product Tabs */}
                    <div className="product-info-tabs mt-5">
                        <div className="product-tab-btns">
                            <ul className="tab-btns tab-buttons clearfix">
                                <li className={activeTab === 1 ? "tab-btn active-btn" : "tab-btn"} onClick={() => setActiveTab(1)}>
                                    Technical Specifications
                                </li>
                                <li className={activeTab === 2 ? "tab-btn active-btn" : "tab-btn"} onClick={() => setActiveTab(2)}>
                                    Product Description
                                </li>
                            </ul>
                        </div>
                        <div className="tabs-content">
                            {activeTab === 1 && (
                                <div className="tab active-tab p-4 bg-light rounded border">
                                    <h4 className="mb-3">Hardware Specifications</h4>
                                    <ul className="list-unstyled">
                                        {specsList.map((spec, idx) => (
                                            <li key={idx} className="py-2 border-bottom d-flex align-items-center">
                                                <i className="fa fa-check text-warning mr-3" />
                                                <span>{spec}</span>
                                            </li>
                                        ))}
                                    </ul>
                                </div>
                            )}
                            {activeTab === 2 && (
                                <div className="tab active-tab p-4 bg-light rounded border">
                                    <h4 className="mb-3">Overview &amp; Deployment Scope</h4>
                                    <p style={{ lineHeight: "1.8" }}>{product.description}</p>
                                </div>
                            )}
                        </div>
                    </div>
                </div>
            </section>
        </Layout>
    )
}
