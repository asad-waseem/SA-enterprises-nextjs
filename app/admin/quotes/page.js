'use client'
import { useState, useEffect } from "react"
import { supabase, isSupabaseConfigured } from "@/lib/supabase"

export default function AdminQuotesPage() {
    const [quotes, setQuotes] = useState([])
    const [statusFilter, setStatusFilter] = useState("all")
    const [selectedQuote, setSelectedQuote] = useState(null)

    useEffect(() => {
        async function fetchQuotes() {
            if (isSupabaseConfigured && supabase) {
                try {
                    const { data } = await supabase
                        .from('quote_requests')
                        .select('*')
                        .order('created_at', { ascending: false })

                    if (data) {
                        setQuotes(data)
                    }
                } catch (err) {
                    console.warn("Fetch quote requests error:", err)
                }
            }
        }
        fetchQuotes()
    }, [])

    const handleUpdateStatus = async (id, newStatus) => {
        if (isSupabaseConfigured && supabase) {
            try {
                await supabase.from('quote_requests').update({ status: newStatus }).eq('id', id)
            } catch (err) {
                console.error("Update quote status error:", err)
            }
        }
        setQuotes(prev => prev.map(q => q.id === id ? { ...q, status: newStatus } : q))
        if (selectedQuote && selectedQuote.id === id) {
            setSelectedQuote(prev => ({ ...prev, status: newStatus }))
        }
    }

    const filtered = quotes.filter(q => statusFilter === "all" || q.status === statusFilter)

    return (
        <div>
            <div className="d-flex flex-column flex-sm-row justify-content-between align-items-start align-items-sm-center gap-3 mb-4">
                <div>
                    <h2 className="mb-1">Quote Requests &amp; RFQs</h2>
                    <p className="text-muted small">Review incoming procurement requests and update lead statuses.</p>
                </div>
                <div className="d-flex align-items-center">
                    <label className="mr-2 mb-0 font-weight-bold small">Filter:</label>
                    <select 
                        className="form-control form-control-sm"
                        value={statusFilter}
                        onChange={(e) => setStatusFilter(e.target.value)}
                        style={{ width: "140px" }}
                    >
                        <option value="all">All ({quotes.length})</option>
                        <option value="New">New</option>
                        <option value="Contacted">Contacted</option>
                        <option value="Quoted">Quoted</option>
                        <option value="Won">Won</option>
                        <option value="Closed">Closed</option>
                    </select>
                </div>
            </div>

            <div className="card shadow-sm border-0">
                <div className="table-responsive">
                    <table className="table table-hover mb-0 small">
                        <thead className="thead-light">
                            <tr>
                                <th>Date</th>
                                <th>Client / Organization</th>
                                <th>Item / Category</th>
                                <th>Qty</th>
                                <th>Timeline</th>
                                <th>Status</th>
                                <th className="text-right">Actions</th>
                            </tr>
                        </thead>
                        <tbody>
                            {filtered.length === 0 ? (
                                <tr>
                                    <td colSpan="7" className="text-center py-4 text-muted">
                                        No quote requests found.
                                    </td>
                                </tr>
                            ) : (
                                filtered.map((quote) => (
                                    <tr key={quote.id}>
                                        <td className="text-muted text-nowrap">
                                            {new Date(quote.created_at).toLocaleDateString()}
                                        </td>
                                        <td>
                                            <strong>{quote.full_name}</strong>
                                            <div>{quote.company_name}</div>
                                            <div className="text-muted">
                                                <a href={`mailto:${quote.email}`}>{quote.email}</a> • <a href={`tel:${quote.phone}`}>{quote.phone}</a>
                                            </div>
                                        </td>
                                        <td>
                                            <strong>{quote.product_name || quote.category}</strong>
                                            {quote.preferred_brand && (
                                                <div className="text-muted">
                                                    Brand: {quote.preferred_brand} {quote.model ? `(${quote.model})` : ''}
                                                </div>
                                            )}
                                        </td>
                                        <td className="font-weight-bold">{quote.quantity}</td>
                                        <td>{quote.required_timeline || "Standard"}</td>
                                        <td>
                                            <select 
                                                className="form-control form-control-sm font-weight-bold"
                                                value={quote.status || 'New'}
                                                onChange={(e) => handleUpdateStatus(quote.id, e.target.value)}
                                                style={{ width: "120px" }}
                                            >
                                                <option value="New">New</option>
                                                <option value="Contacted">Contacted</option>
                                                <option value="Quoted">Quoted</option>
                                                <option value="Won">Won</option>
                                                <option value="Closed">Closed</option>
                                            </select>
                                        </td>
                                        <td className="text-right">
                                            <button 
                                                onClick={() => setSelectedQuote(quote)}
                                                className="btn btn-sm btn-outline-primary"
                                            >
                                                View Notes 🔍
                                            </button>
                                        </td>
                                    </tr>
                                ))
                            )}
                        </tbody>
                    </table>
                </div>
            </div>

            {/* Quote Modal */}
            {selectedQuote && (
                <div style={{ position: "fixed", top: 0, left: 0, right: 0, bottom: 0, backgroundColor: "rgba(0,0,0,0.5)", display: "flex", alignItems: "center", justifyContent: "center", zIndex: 9999, padding: "20px" }}>
                    <div className="card shadow-lg p-4" style={{ maxWidth: "600px", width: "100%", maxHeight: "90vh", overflowY: "auto" }}>
                        <div className="d-flex justify-content-between align-items-center mb-3 pb-2 border-bottom">
                            <h4 className="mb-0">Quote Request Details</h4>
                            <button onClick={() => setSelectedQuote(null)} className="close" style={{ outline: "none" }}>✕</button>
                        </div>

                        <div className="mb-3">
                            <label className="text-uppercase text-muted font-weight-bold small">Requester</label>
                            <div className="font-weight-bold">{selectedQuote.full_name}</div>
                            <div>{selectedQuote.company_name}</div>
                            <div>Email: <a href={`mailto:${selectedQuote.email}`}>{selectedQuote.email}</a></div>
                            <div>Phone: <a href={`tel:${selectedQuote.phone}`}>{selectedQuote.phone}</a></div>
                        </div>

                        <div className="mb-3">
                            <label className="text-uppercase text-muted font-weight-bold small">Sourcing Requirement</label>
                            <div className="font-weight-bold">{selectedQuote.product_name || selectedQuote.category}</div>
                            <div>Quantity: <strong>{selectedQuote.quantity} unit(s)</strong></div>
                            <div>Preferred Brand: {selectedQuote.preferred_brand || "Open / Any"}</div>
                            <div>Timeline: {selectedQuote.required_timeline || "Standard"}</div>
                        </div>

                        <div className="mb-4">
                            <label className="text-uppercase text-muted font-weight-bold small">Specifications &amp; Notes</label>
                            <div className="p-3 bg-light rounded small" style={{ whiteSpace: "pre-wrap" }}>
                                {selectedQuote.requirement_details || "No additional notes provided."}
                            </div>
                        </div>

                        <div className="d-flex justify-content-end">
                            <button onClick={() => setSelectedQuote(null)} className="btn btn-secondary px-4">
                                Close
                            </button>
                        </div>
                    </div>
                </div>
            )}
        </div>
    )
}
