'use client'
import { useState, useEffect } from "react"
import Link from "next/link"
import { usePathname, useRouter } from "next/navigation"
import { supabase, isSupabaseConfigured } from "@/lib/supabase"

export default function AdminLayout({ children }) {
    const pathname = usePathname()
    const router = useRouter()
    const isLoginPage = pathname === '/admin/login'

    const [user, setUser] = useState(null)
    const [loading, setLoading] = useState(true)

    useEffect(() => {
        if (!isSupabaseConfigured || !supabase) {
            setLoading(false)
            return
        }

        async function checkAuth() {
            try {
                const { data: { session } } = await supabase.auth.getSession()
                if (!session && !isLoginPage) {
                    router.push('/admin/login')
                } else if (session && isLoginPage) {
                    router.push('/admin')
                }
                setUser(session?.user || null)
            } catch (err) {
                console.warn("Auth check error:", err)
            } finally {
                setLoading(false)
            }
        }

        checkAuth()

        const { data: { subscription } } = supabase.auth.onAuthStateChange((_event, session) => {
            setUser(session?.user || null)
            if (!session && !isLoginPage) {
                router.push('/admin/login')
            }
        })

        return () => subscription?.unsubscribe()
    }, [pathname, isLoginPage, router])

    const handleLogout = async () => {
        if (supabase) {
            await supabase.auth.signOut()
        }
        router.push('/admin/login')
    }

    if (isLoginPage) {
        return <>{children}</>
    }

    return (
        <div className="d-flex" style={{ minHeight: "100vh", backgroundColor: "#f8f9fa" }}>
            {/* Admin Sidebar */}
            <aside className="bg-dark text-white p-4" style={{ width: "260px", flexShrink: 0 }}>
                <div className="mb-4 pb-3 border-bottom border-secondary">
                    <h4 className="text-white mb-1">SA Enterprises</h4>
                    <span className="badge badge-warning">Procurement Admin</span>
                </div>

                <nav>
                    <ul className="nav flex-column">
                        <li className="nav-item mb-2">
                            <Link 
                                href="/admin"
                                className={`nav-link text-white ${pathname === '/admin' ? 'bg-secondary rounded' : ''}`}
                            >
                                📊 Dashboard
                            </Link>
                        </li>
                        <li className="nav-item mb-2">
                            <Link 
                                href="/admin/products"
                                className={`nav-link text-white ${pathname.startsWith('/admin/products') ? 'bg-secondary rounded' : ''}`}
                            >
                                📦 Products Catalogue
                            </Link>
                        </li>
                        <li className="nav-item mb-2">
                            <Link 
                                href="/admin/categories"
                                className={`nav-link text-white ${pathname === '/admin/categories' ? 'bg-secondary rounded' : ''}`}
                            >
                                🏷️ Categories
                            </Link>
                        </li>
                        <li className="nav-item mb-2">
                            <Link 
                                href="/admin/quotes"
                                className={`nav-link text-white ${pathname === '/admin/quotes' ? 'bg-secondary rounded' : ''}`}
                            >
                                📑 Quote Requests
                            </Link>
                        </li>
                    </ul>
                </nav>

                <div className="mt-5 pt-4 border-top border-secondary">
                    <Link href="/" target="_blank" className="text-muted d-block mb-3 small">
                        🌐 View Public Website ↗
                    </Link>
                    <button onClick={handleLogout} className="btn btn-sm btn-outline-danger w-100">
                        Sign Out
                    </button>
                </div>
            </aside>

            {/* Main Admin Content */}
            <main className="flex-grow-1 p-4" style={{ overflowY: "auto" }}>
                {!isSupabaseConfigured && (
                    <div className="alert alert-warning mb-4 shadow-sm" role="alert">
                        <strong>⚠️ Local Demo Mode:</strong> Supabase credentials are not yet configured in <code>.env.local</code>. Database reads are using local fallback data. Follow <Link href="/docs/SUPABASE_SETUP.md" target="_blank" className="alert-link">SUPABASE_SETUP.md</Link> when ready to activate live database storage.
                    </div>
                )}
                {children}
            </main>
        </div>
    )
}
