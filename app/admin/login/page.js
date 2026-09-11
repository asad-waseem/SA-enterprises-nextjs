'use client'
import { useState } from "react"
import { useRouter } from "next/navigation"
import Link from "next/link"
import { supabase, isSupabaseConfigured } from "@/lib/supabase"

export default function AdminLoginPage() {
    const router = useRouter()
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const [loading, setLoading] = useState(false)
    const [error, setError] = useState("")

    const handleLogin = async (e) => {
        e.preventDefault()
        setLoading(true)
        setError("")

        if (!isSupabaseConfigured || !supabase) {
            router.push('/admin')
            return
        }

        try {
            const { error: authError } = await supabase.auth.signInWithPassword({
                email,
                password,
            })

            if (authError) throw authError
            router.push('/admin')
        } catch (err) {
            setError(err.message || "Failed to sign in. Please verify your credentials.")
        } finally {
            setLoading(false)
        }
    }

    return (
        <div className="d-flex align-items-center justify-content-center bg-dark" style={{ minHeight: "100vh", padding: "20px" }}>
            <div className="card shadow-lg p-4" style={{ maxWidth: "420px", width: "100%" }}>
                <div className="text-center mb-4">
                    <h3 className="mb-1">SA Enterprises</h3>
                    <span className="badge badge-warning">Procurement Admin</span>
                </div>

                {error && <div className="alert alert-danger py-2 small">{error}</div>}

                <form onSubmit={handleLogin}>
                    <div className="form-group mb-3">
                        <label className="font-weight-bold small">Admin Email</label>
                        <input 
                            type="email" 
                            required 
                            className="form-control"
                            placeholder="admin@saenterprises.com"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                        />
                    </div>
                    <div className="form-group mb-4">
                        <label className="font-weight-bold small">Password</label>
                        <input 
                            type="password" 
                            required 
                            className="form-control"
                            placeholder="••••••••"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                        />
                    </div>
                    <button type="submit" disabled={loading} className="theme-btn btn-style-one w-100 py-2">
                        <span className="btn-title">{loading ? "Authenticating..." : "Sign In to Admin Panel"}</span>
                    </button>
                </form>

                <div className="text-center mt-4">
                    <Link href="/" className="text-muted small">← Return to Public Website</Link>
                </div>
            </div>
        </div>
    )
}
