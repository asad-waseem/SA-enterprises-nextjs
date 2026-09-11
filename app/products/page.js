'use client'
import { useState, useEffect } from "react"
import Layout from "@/components/layout/Layout"
import Link from "next/link"
import { PRODUCTS_DATA, CATEGORIES_DATA } from "@/data/products"
import { supabase, isSupabaseConfigured } from "@/lib/supabase"

export default function ProductsPage() {
    const [products, setProducts] = useState(PRODUCTS_DATA)
    const [categories, setCategories] = useState(CATEGORIES_DATA)
    const [selectedCategory, setSelectedCategory] = useState("all")
    const [searchQuery, setSearchQuery] = useState("")

    useEffect(() => {
        async function fetchProducts() {
            if (isSupabaseConfigured && supabase) {
                try {
                    const { data: catData } = await supabase
                        .from('categories')
                        .select('*')
                        .eq('is_active', true)
                        .order('sort_order', { ascending: true })

                    if (catData && catData.length > 0) {
                        setCategories(catData)
                    }

                    const { data: prodData } = await supabase
                        .from('products')
                        .select('*')
                        .eq('is_active', true)
                        .order('sort_order', { ascending: true })

                    if (prodData && prodData.length > 0) {
                        setProducts(prodData)
                    }
                } catch (err) {
                    console.warn("Supabase fetch fallback to local products:", err)
                }
            }
        }
        fetchProducts()
    }, [])

    const filteredProducts = products.filter(prod => {
        const matchesCategory = selectedCategory === "all" || prod.category_id === selectedCategory || prod.category === selectedCategory
        const matchesSearch = !searchQuery || 
            prod.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
            (prod.short_description && prod.short_description.toLowerCase().includes(searchQuery.toLowerCase())) ||
            (prod.brand && prod.brand.toLowerCase().includes(searchQuery.toLowerCase()))
        return matchesCategory && matchesSearch
    })

    return (
        <Layout headerStyle={1} footerStyle={1} breadcrumbTitle="Product Sourcing Catalogue" wrapperCls="home_1">
            <section className="sidebar-page-container">
                <div className="auto-container">
                    <div className="row clearfix">
                        {/* Main Product Grid */}
                        <div className="col-lg-8 content-side">
                            <div className="our-shop">
                                <div className="items-sorting row m-0 justify-content-between align-items-center mb-4">
                                    <div className="text">
                                        <p>Showing {filteredProducts.length} sourcing items {selectedCategory !== "all" && `in ${categories.find(c => c.id === selectedCategory || c.name === selectedCategory)?.name || selectedCategory}`}</p>
                                    </div>
                                    {selectedCategory !== "all" && (
                                        <button 
                                            onClick={() => setSelectedCategory("all")}
                                            className="theme-btn btn-style-two py-1 px-3"
                                            style={{ fontSize: "13px" }}
                                        >
                                            <span className="btn-title">Clear Category Filter ✕</span>
                                        </button>
                                    )}
                                </div>

                                {filteredProducts.length === 0 ? (
                                    <div className="text-center py-5 bg-light rounded">
                                        <h4>No Products Found Matching Your Selection</h4>
                                        <p className="text-muted">Need something different, specialized, or not listed? We source custom hardware specifications and bespoke equipment on demand.</p>
                                        <Link href="/contact?category=Custom+Demand+%26+Sourcing#quote" className="theme-btn btn-style-one mt-3">
                                            <span className="btn-title">Submit Custom Demand Request</span>
                                        </Link>
                                    </div>
                                ) : (
                                    <div className="row clearfix">
                                        {filteredProducts.map((product) => (
                                            <div key={product.id} className="col-md-6 product-block">
                                                <div className="product-block-one">
                                                    <div className="inner-box">
                                                        <figure className="image-box">
                                                            <img 
                                                                src={product.featured_image || "/assets/images/shop/product-1.jpg"} 
                                                                alt={product.name} 
                                                            />
                                                            <span className="category">
                                                                {product.category || "Hardware"}
                                                            </span>
                                                            <div className="cart-btn">
                                                                <Link href={`/contact?product=${encodeURIComponent(product.name)}&qty=1#quote`} className="theme-btn btn-style-one">
                                                                    <span className="btn-title">REQUEST A QUOTE</span>
                                                                </Link>
                                                            </div>
                                                        </figure>
                                                        <div className="lower-content">
                                                            <h3>
                                                                <Link href={`/products/${product.slug}`}>
                                                                    {product.name}
                                                                </Link>
                                                            </h3>
                                                            <div className="link-btn mt-2">
                                                                <Link href={`/products/${product.slug}`} className="theme-btn btn-style-two py-1 px-3" style={{ fontSize: "12px" }}>
                                                                    <span className="btn-title">View Specifications</span>
                                                                </Link>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        ))}
                                    </div>
                                )}
                            </div>
                        </div>

                        {/* Sidebar */}
                        <aside className="col-lg-4">
                            <div className="shop-sidebar">
                                {/* Search Widget */}
                                <div className="widget widget_search">
                                    <div className="default-form">
                                        <div className="form-group">
                                            <input 
                                                type="search" 
                                                placeholder="Search catalogue..." 
                                                value={searchQuery}
                                                onChange={(e) => setSearchQuery(e.target.value)}
                                            />
                                            <button type="button"><i className="flaticon-search" /></button>
                                        </div>
                                    </div>
                                </div>

                                {/* Categories Widget */}
                                <div className="widget widget_categories">
                                    <h4 className="widget-title">Categories</h4>
                                    <div className="widget-content">
                                        <ul className="categories-list clearfix">
                                            <li className={selectedCategory === "all" ? "active" : ""}>
                                                <a href="#all" onClick={(e) => { e.preventDefault(); setSelectedCategory("all"); }}>
                                                    All Categories <span>({products.length})</span>
                                                </a>
                                            </li>
                                            {categories.map((cat) => {
                                                const count = products.filter(p => p.category_id === cat.id || p.category === cat.name).length
                                                return (
                                                    <li key={cat.id} className={(selectedCategory === cat.id || selectedCategory === cat.name) ? "active" : ""}>
                                                        <a href={`#${cat.slug}`} onClick={(e) => { e.preventDefault(); setSelectedCategory(cat.id || cat.name); }}>
                                                            {cat.name} <span>({count})</span>
                                                        </a>
                                                    </li>
                                                )
                                            })}
                                        </ul>
                                    </div>
                                </div>

                                {/* Custom Demand Widget */}
                                <div className="widget widget_contact" style={{ backgroundImage: 'linear-gradient(rgba(14, 21, 38, 0.78), rgba(14, 21, 38, 0.88)), url(/assets/images/background/bg-25.jpg)' }}>
                                    <div className="widget-content">
                                        <img src="/assets/images/icons/icon-55.png" alt="" />
                                        <h4>Have a Custom Demand?</h4>
                                        <div className="text-white mb-3">Looking for something specific or not in the catalogue? We source custom equipment and bespoke hardware on demand.</div>
                                        <div className="link-btn">
                                            <Link href="/contact?category=Custom+Demand+%26+Sourcing#quote" className="theme-btn btn-style-one text-white">
                                                <span className="btn-title">Submit Custom Demand</span>
                                            </Link>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </aside>
                    </div>
                </div>
            </section>
        </Layout>
    )
}
