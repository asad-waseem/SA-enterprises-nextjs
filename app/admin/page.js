'use client'
import { useState, useEffect } from "react"
import Link from "next/link"
import { PRODUCTS_DATA, CATEGORIES_DATA } from "@/data/products"
import { supabase, isSupabaseConfigured } from "@/lib/supabase"

export default function AdminDashboardPage() {
    const [stats, setStats] = useState({
        productsCount: PRODUCTS_DATA.length,
        categoriesCount: CATEGORIES_DATA.length,
        quotesCount: 0,
        newQuotesCount: 0
    })
    const [recentQuotes, setRecentQuotes] = useState([])

    useEffect(() => {
        async function loadDashboardData() {
            if (isSupabaseConfigured && supabase) {
                try {
                    const { count: prodCount } = await supabase.from('products').select('*', { count: 'exact', head: true })
                    const { count: catCount } = await supabase.from('categories').select('*', { count: 'exact', head: true })
                    const { count: quoteCount } = await supabase.from('quote_requests').select('*', { count: 'exact', head: true })
                    const { count: newCount } = await supabase.from('quote_requests').select('*', { count: 'exact', head: true }).eq('status', 'New')

                    const { data: quotes } = await supabase
                        .from('quote_requests')
                        .select('*')
                        .order('created_at', { ascending: false })
                        .limit(5)

                    setStats({
                        productsCount: prodCount ?? PRODUCTS_DATA.length,
                        categoriesCount: catCount ?? CATEGORIES_DATA.length,
                        quotesCount: quoteCount ?? 0,
                        newQuotesCount: newCount ?? 0
                    })

                    if (quotes) setRecentQuotes(quotes)
                } catch (err) {
                    console.warn("Dashboard data fetch error:", err)
                }
            }
        }
        loadDashboardData()
    }, [])

    return (
        <div>
            <div className="d-flex flex-column flex-sm-row justify-content-between align-items-start align-items-sm-center gap-3 mb-4">
                <div>
                    <h2 className="mb-1">Procurement Dashboard</h2>
                    <p className="text-muted small">Manage product catalogue items, categories, and incoming B2B quote requests.</p>
                </div>
                <Link href="/admin/products/new" className="theme-btn btn-style-one py-2 px-3">
                    <span className="btn-title">+ Add Sourcing Product</span>
                </Link>
            </div>

            {/* Metrics Cards */}
            <div className="row mb-4">
                <div className="col-md-3 col-sm-6 mb-3">
                    <div className="card shadow-sm p-3 border-0">
                        <div className="text-muted small font-weight-bold text-uppercase">Catalogue Products</div>
                        <h2 className="mt-2 mb-0 font-weight-bold">{stats.productsCount}</h2>
                    </div>
                </div>
                <div className="col-md-3 col-sm-6 mb-3">
                    <div className="card shadow-sm p-3 border-0">
                        <div className="text-muted small font-weight-bold text-uppercase">Active Categories</div>
                        <h2 className="mt-2 mb-0 font-weight-bold">{stats.categoriesCount}</h2>
                    </div>
                </div>
                <div className="col-md-3 col-sm-6 mb-3">
                    <div className="card shadow-sm p-3 border-0">
                        <div className="text-muted small font-weight-bold text-uppercase">New Quote Leads</div>
                        <h2 className="mt-2 mb-0 font-weight-bold text-success">{stats.newQuotesCount}</h2>
                    </div>
                </div>
                <div className="col-md-3 col-sm-6 mb-3">
                    <div className="card shadow-sm p-3 border-0">
                        <div className="text-muted small font-weight-bold text-uppercase">Total RFQs</div>
                        <h2 className="mt-2 mb-0 font-weight-bold">{stats.quotesCount}</h2>
                    </div>
                </div>
            </div>

            {/* Recent Quotes */}
            <div className="card shadow-sm p-4 border-0">
                <div className="d-flex justify-content-between align-items-center mb-3">
                    <h4 className="mb-0">Recent Sourcing Requests</h4>
                    <Link href="/admin/quotes" className="small font-weight-bold">View All Quotes →</Link>
                </div>

                {recentQuotes.length === 0 ? (
                    <div className="text-center py-4 text-muted small">
                        No quote requests recorded yet. Submissions from the public quote form will appear here.
                    </div>
                ) : (
                    <div className="table-responsive">
                        <table className="table table-hover mb-0 small">
                            <thead className="thead-light">
                                <tr>
                                    <th>Client / Company</th>
                                    <th>Product / Category</th>
                                    <th>Quantity</th>
                                    <th>Status</th>
                                    <th>Date</th>
                                </tr>
                            </thead>
                            <tbody>
                                {recentQuotes.map((q) => (
                                    <tr key={q.id}>
                                        <td>
                                            <strong>{q.full_name}</strong>
                                            <div className="text-muted small">{q.company_name} • {q.email}</div>
                                        </td>
                                        <td>{q.product_name || q.category}</td>
                                        <td>{q.quantity}</td>
                                        <td><span className="badge badge-success">{q.status}</span></td>
                                        <td className="text-muted">{new Date(q.created_at).toLocaleDateString()}</td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>
                )}
            </div>
        </div>
    )
}
