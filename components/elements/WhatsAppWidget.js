'use client'

import { useState, useEffect, useRef } from 'react'

export default function WhatsAppWidget() {
    const [isOpen, setIsOpen] = useState(false)
    const [activeTab, setActiveTab] = useState('procurement') // 'procurement' or 'sales'
    const [customMessage, setCustomMessage] = useState('')
    const [showBubble, setShowBubble] = useState(true)
    const [isHovered, setIsHovered] = useState(false)
    const widgetRef = useRef(null)

    // Department Contacts
    const departments = {
        procurement: {
            id: 'procurement',
            title: 'Corporate Procurement & Sourcing',
            person: 'Engr. Procurement Lead',
            phoneDisplay: '+92 316 8924869',
            phoneRaw: '923168924869',
            status: 'Online • Fast Response',
            tag: 'Bulk & Corporate',
            avatarBg: 'linear-gradient(135deg, #059669 0%, #10b981 100%)',
            roleIcon: 'fa-microchip',
            pills: [
                'Need Laptop Fleet Quote',
                'Server & Network Sourcing',
                'Custom Tech Procurement',
                'Office Equipment Inquiry'
            ],
            defaultMsg: 'Hello SA Enterprises, I would like to request a corporate quotation for hardware procurement.'
        },
        sales: {
            id: 'sales',
            title: 'Direct Sales & Quotations',
            person: 'Corporate Sales Desk',
            phoneDisplay: '0312 2943462',
            phoneRaw: '923122943462',
            status: 'Online • Instant Support',
            tag: 'Quotes & Orders',
            avatarBg: 'linear-gradient(135deg, #0284c7 0%, #38bdf8 100%)',
            roleIcon: 'fa-headset',
            pills: [
                'Urgent Price Inquiry',
                'Stock Availability Check',
                'Printer Toners & Supplies',
                'Delivery Timeline Query'
            ],
            defaultMsg: 'Hello SA Enterprises, I would like to check pricing and availability for an upcoming order.'
        }
    }

    const currentDept = departments[activeTab]

    // Close when clicking outside
    useEffect(() => {
        function handleClickOutside(e) {
            if (widgetRef.current && !widgetRef.current.contains(e.target)) {
                setIsOpen(false)
            }
        }
        if (isOpen) {
            document.addEventListener('mousedown', handleClickOutside)
        }
        return () => document.removeEventListener('mousedown', handleClickOutside)
    }, [isOpen])

    const handleSend = (textToSend) => {
        const message = textToSend || customMessage || currentDept.defaultMsg
        const url = `https://wa.me/${currentDept.phoneRaw}?text=${encodeURIComponent(message)}`
        window.open(url, '_blank', 'noopener,noreferrer')
        setCustomMessage('')
    }

    return (
        <div ref={widgetRef} className="sa-wa-creative-root" aria-label="SA Enterprises WhatsApp Support">
            {/* Interactive Luxury Chat Card */}
            {isOpen && (
                <div className="sa-wa-card animate-springUp">
                    {/* Header */}
                    <div className="sa-wa-card-header">
                        <div className="sa-wa-header-brand">
                            <div className="sa-wa-robot-badge">
                                {/* 3D SVG Mascot Icon */}
                                <svg width="38" height="38" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <defs>
                                        <radialGradient id="botGrad" cx="30%" cy="30%" r="70%">
                                            <stop offset="0%" stopColor="#ffffff" />
                                            <stop offset="60%" stopColor="#e2e8f0" />
                                            <stop offset="100%" stopColor="#94a3b8" />
                                        </radialGradient>
                                        <linearGradient id="visorGrad" x1="0" y1="0" x2="0" y2="1">
                                            <stop offset="0%" stopColor="#0f172a" />
                                            <stop offset="100%" stopColor="#1e293b" />
                                        </linearGradient>
                                    </defs>
                                    {/* Antenna */}
                                    <path d="M24 10V4" stroke="#00F0FF" strokeWidth="2.5" strokeLinecap="round" />
                                    <circle cx="24" cy="4" r="3" fill="#00F0FF">
                                        <animate attributeName="opacity" values="0.6;1;0.6" dur="2s" repeatCount="indefinite" />
                                    </circle>
                                    {/* Head Shape */}
                                    <rect x="7" y="10" width="34" height="28" rx="14" fill="url(#botGrad)" stroke="#cbd5e1" strokeWidth="1.5" />
                                    {/* Headphones */}
                                    <rect x="3" y="18" width="4" height="12" rx="2" fill="#059669" />
                                    <rect x="41" y="18" width="4" height="12" rx="2" fill="#059669" />
                                    {/* Visor */}
                                    <rect x="12" y="16" width="24" height="15" rx="7" fill="url(#visorGrad)" stroke="#38bdf8" strokeWidth="1" />
                                    {/* Glowing Eyes */}
                                    <ellipse cx="18" cy="23" rx="2.5" ry="3" fill="#00F0FF">
                                        <animate attributeName="ry" values="3;0.3;3" keyTimes="0;0.05;0.1" dur="4s" repeatCount="indefinite" />
                                    </ellipse>
                                    <ellipse cx="30" cy="23" rx="2.5" ry="3" fill="#00F0FF">
                                        <animate attributeName="ry" values="3;0.3;3" keyTimes="0;0.05;0.1" dur="4s" repeatCount="indefinite" />
                                    </ellipse>
                                    {/* Smile */}
                                    <path d="M21 27C22.5 28.5 25.5 28.5 27 27" stroke="#00F0FF" strokeWidth="1.5" strokeLinecap="round" />
                                </svg>
                                <span className="sa-pulse-live-dot" title="Active Online"></span>
                            </div>
                            <div className="sa-brand-titles">
                                <div className="sa-brand-row">
                                    <h4 className="sa-main-title">SA Enterprises</h4>
                                    <span className="sa-verified-check" title="Verified Business">
                                        <i className="fas fa-check-circle"></i>
                                    </span>
                                </div>
                                <p className="sa-sub-tagline">
                                    <span className="sa-dot-online"></span> Corporate Sourcing Concierge
                                </p>
                            </div>
                        </div>

                        <button 
                            type="button" 
                            className="sa-wa-btn-close"
                            onClick={() => setIsOpen(false)}
                            aria-label="Close WhatsApp window"
                        >
                            ✕
                        </button>
                    </div>

                    {/* Department Selector Tabs */}
                    <div className="sa-wa-tabs">
                        <button 
                            type="button" 
                            className={`sa-tab-btn ${activeTab === 'procurement' ? 'active' : ''}`}
                            onClick={() => setActiveTab('procurement')}
                        >
                            <i className="fas fa-server"></i>
                            <span>Procurement Desk</span>
                            <span className="sa-tab-indicator"></span>
                        </button>
                        <button 
                            type="button" 
                            className={`sa-tab-btn ${activeTab === 'sales' ? 'active' : ''}`}
                            onClick={() => setActiveTab('sales')}
                        >
                            <i className="fas fa-shopping-bag"></i>
                            <span>Sales &amp; Inquiry</span>
                            <span className="sa-tab-indicator"></span>
                        </button>
                    </div>

                    {/* Active Department Info Card */}
                    <div className="sa-dept-card animate-fadeIn">
                        <div className="sa-dept-header">
                            <div className="sa-dept-meta">
                                <span className="sa-dept-person">{currentDept.person}</span>
                                <div className="sa-dept-num-row">
                                    <strong className="sa-dept-phone">{currentDept.phoneDisplay}</strong>
                                    <span className="sa-dept-badge">{currentDept.tag}</span>
                                </div>
                                <span className="sa-dept-status">
                                    <i className="fas fa-bolt text-warning"></i> {currentDept.status}
                                </span>
                            </div>
                            <div 
                                className="sa-direct-callout-btn" 
                                onClick={() => handleSend()}
                                title="Open in WhatsApp"
                            >
                                <i className="fab fa-whatsapp"></i>
                                <span>Open</span>
                            </div>
                        </div>

                        {/* Quick Prompts Pills */}
                        <div className="sa-prompts-label">Quick topics to ask:</div>
                        <div className="sa-pills-wrap">
                            {currentDept.pills.map((pill, idx) => (
                                <button 
                                    key={idx} 
                                    type="button" 
                                    className="sa-prompt-pill"
                                    onClick={() => handleSend(`Hi SA Enterprises, ${pill}.`)}
                                >
                                    <span>{pill}</span>
                                    <i className="fas fa-arrow-right"></i>
                                </button>
                            ))}
                        </div>
                    </div>

                    {/* Custom Message Composer Input */}
                    <div className="sa-wa-composer">
                        <form 
                            onSubmit={(e) => {
                                e.preventDefault()
                                handleSend()
                            }}
                            className="sa-composer-form"
                        >
                            <input 
                                type="text" 
                                className="sa-composer-input" 
                                placeholder={`Message ${currentDept.person}...`}
                                value={customMessage}
                                onChange={(e) => setCustomMessage(e.target.value)}
                            />
                            <button 
                                type="submit" 
                                className="sa-composer-send-btn"
                                aria-label="Send via WhatsApp"
                            >
                                <i className="fab fa-whatsapp"></i>
                            </button>
                        </form>
                    </div>

                    {/* Trust Footer */}
                    <div className="sa-wa-footer">
                        <i className="fas fa-shield-alt"></i> End-to-end encrypted official B2B chat
                    </div>
                </div>
            )}

            {/* Orbiting Mascot + WhatsApp Floating Trigger */}
            <div 
                className="sa-trigger-assembly"
                onMouseEnter={() => setIsHovered(true)}
                onMouseLeave={() => setIsHovered(false)}
            >
                {/* Speech Bubble Mascot Callout */}
                {!isOpen && showBubble && (
                    <div className="sa-mascot-speech" onClick={() => setIsOpen(true)}>
                        <div className="sa-speech-bot-icon">
                            🤖
                        </div>
                        <div className="sa-speech-text-wrap">
                            <span className="sa-speech-heading">Chat on WhatsApp</span>
                            <span className="sa-speech-sub">Procurement &amp; Sales Live</span>
                        </div>
                        <button 
                            type="button" 
                            className="sa-speech-close"
                            onClick={(e) => {
                                e.stopPropagation()
                                setShowBubble(false)
                            }}
                            aria-label="Dismiss message"
                        >
                            ✕
                        </button>
                    </div>
                )}

                {/* The Floating Sphere Container */}
                <div className="sa-sphere-stage">
                    {/* Continuous 3D Planetary Orbit Ring */}
                    <div className={`sa-orbital-ring ${isHovered ? 'fast' : ''}`}>
                        {/* Orbiting Robot Mascot */}
                        <div className="sa-orbit-satellite" title="SA AI Sourcing Buddy">
                            <div className="sa-mini-mascot">
                                {/* SVG Mini Robot with Glowing Visor */}
                                <svg width="28" height="28" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <defs>
                                        <radialGradient id="satGrad" cx="35%" cy="35%" r="65%">
                                            <stop offset="0%" stopColor="#ffffff" />
                                            <stop offset="70%" stopColor="#94a3b8" />
                                            <stop offset="100%" stopColor="#475569" />
                                        </radialGradient>
                                    </defs>
                                    {/* Propeller / Spark Trail */}
                                    <circle cx="16" cy="28" r="2" fill="#00F0FF">
                                        <animate attributeName="opacity" values="0.3;1;0.3" dur="0.8s" repeatCount="indefinite" />
                                    </circle>
                                    {/* Body */}
                                    <rect x="6" y="8" width="20" height="18" rx="8" fill="url(#satGrad)" stroke="#38BDF8" strokeWidth="1" />
                                    {/* Ears */}
                                    <circle cx="5" cy="17" r="2" fill="#25D366" />
                                    <circle cx="27" cy="17" r="2" fill="#25D366" />
                                    {/* Antenna */}
                                    <line x1="16" y1="2" x2="16" y2="8" stroke="#00F0FF" strokeWidth="1.5" />
                                    <circle cx="16" cy="2" r="1.5" fill="#FF0077" />
                                    {/* Visor */}
                                    <rect x="9" y="12" width="14" height="9" rx="4" fill="#090d16" />
                                    {/* Neon Eyes */}
                                    <circle cx="13" cy="16.5" r="1.5" fill="#00F0FF" />
                                    <circle cx="19" cy="16.5" r="1.5" fill="#00F0FF" />
                                </svg>
                                <span className="sa-mascot-sparkle"></span>
                            </div>
                        </div>
                    </div>

                    {/* Glowing Atmospheric Radar Pulses */}
                    <div className="sa-glow-aura aura-1"></div>
                    <div className="sa-glow-aura aura-2"></div>

                    {/* Center WhatsApp Sphere Button */}
                    <button 
                        type="button" 
                        className={`sa-wa-core-btn ${isOpen ? 'active-open' : ''}`}
                        onClick={() => setIsOpen(!isOpen)}
                        aria-label="Open WhatsApp live chat options"
                    >
                        <div className="sa-icon-container">
                            {isOpen ? (
                                <span className="sa-close-x">✕</span>
                            ) : (
                                <i className="fab fa-whatsapp"></i>
                            )}
                        </div>

                        {/* Online Breathing Dot */}
                        <span className="sa-btn-status-badge"></span>
                    </button>
                </div>
            </div>

            {/* Custom High-Fidelity Scoped Styles */}
            <style jsx>{`
                .sa-wa-creative-root {
                    position: fixed;
                    right: 28px;
                    bottom: 28px;
                    z-index: 999999;
                    font-family: var(--fira-sans, system-ui, -apple-system, sans-serif);
                    user-select: none;
                }

                /* Trigger Assembly */
                .sa-trigger-assembly {
                    position: relative;
                    display: flex;
                    align-items: center;
                    justify-content: flex-end;
                }

                /* Mascot Speech Bubble */
                .sa-mascot-speech {
                    position: absolute;
                    right: 88px;
                    background: linear-gradient(135deg, #0f172a 0%, #1e293b 100%);
                    color: #ffffff;
                    padding: 10px 16px;
                    border-radius: 20px;
                    box-shadow: 0 10px 30px rgba(0, 0, 0, 0.35), 0 0 0 1px rgba(255, 255, 255, 0.12);
                    display: flex;
                    align-items: center;
                    gap: 10px;
                    cursor: pointer;
                    white-space: nowrap;
                    animation: floatGentle 3s ease-in-out infinite;
                    transition: transform 0.2s ease, box-shadow 0.2s ease;
                }
                .sa-mascot-speech:hover {
                    transform: translateY(-3px) scale(1.02);
                    box-shadow: 0 14px 35px rgba(0, 0, 0, 0.45), 0 0 0 1px rgba(0, 240, 255, 0.35);
                }
                .sa-mascot-speech::after {
                    content: '';
                    position: absolute;
                    right: -7px;
                    top: 50%;
                    transform: translateY(-50%);
                    border-width: 7px 0 7px 8px;
                    border-style: solid;
                    border-color: transparent transparent transparent #1e293b;
                }
                .sa-speech-bot-icon {
                    font-size: 20px;
                    filter: drop-shadow(0 2px 5px rgba(0, 240, 255, 0.5));
                }
                .sa-speech-text-wrap {
                    display: flex;
                    flex-direction: column;
                }
                .sa-speech-heading {
                    font-size: 13.5px;
                    font-weight: 700;
                    color: #ffffff;
                    letter-spacing: 0.2px;
                }
                .sa-speech-sub {
                    font-size: 11px;
                    color: #38bdf8;
                    font-weight: 500;
                }
                .sa-speech-close {
                    background: rgba(255, 255, 255, 0.12);
                    border: none;
                    color: #94a3b8;
                    width: 20px;
                    height: 20px;
                    border-radius: 50%;
                    font-size: 11px;
                    display: flex;
                    align-items: center;
                    justify-content: center;
                    cursor: pointer;
                    margin-left: 4px;
                    transition: all 0.2s;
                }
                .sa-speech-close:hover {
                    background: rgba(255, 255, 255, 0.25);
                    color: #ffffff;
                }

                @keyframes floatGentle {
                    0%, 100% { transform: translateY(0); }
                    50% { transform: translateY(-5px); }
                }

                /* Sphere Stage */
                .sa-sphere-stage {
                    position: relative;
                    width: 76px;
                    height: 76px;
                    display: flex;
                    align-items: center;
                    justify-content: center;
                }

                /* Planetary Orbit Ring */
                .sa-orbital-ring {
                    position: absolute;
                    width: 104px;
                    height: 104px;
                    border-radius: 50%;
                    border: 1.5px dashed rgba(37, 211, 102, 0.5);
                    pointer-events: none;
                    animation: spinOrbit 7s linear infinite;
                    z-index: 5;
                    box-shadow: 0 0 15px rgba(37, 211, 102, 0.15);
                }
                .sa-orbital-ring.fast {
                    animation-duration: 3.5s;
                    border-color: #00f0ff;
                }

                @keyframes spinOrbit {
                    from { transform: rotate(0deg); }
                    to { transform: rotate(360deg); }
                }

                /* Orbit Satellite Mascot */
                .sa-orbit-satellite {
                    position: absolute;
                    top: -14px;
                    left: calc(50% - 15px);
                    width: 30px;
                    height: 30px;
                    display: flex;
                    align-items: center;
                    justify-content: center;
                    animation: counterSpin 7s linear infinite;
                }
                .sa-orbital-ring.fast .sa-orbit-satellite {
                    animation-duration: 3.5s;
                }

                @keyframes counterSpin {
                    from { transform: rotate(0deg); }
                    to { transform: rotate(-360deg); }
                }

                .sa-mini-mascot {
                    position: relative;
                    background: #0f172a;
                    border-radius: 50%;
                    width: 30px;
                    height: 30px;
                    display: flex;
                    align-items: center;
                    justify-content: center;
                    box-shadow: 0 0 14px rgba(0, 240, 255, 0.8), 0 3px 8px rgba(0, 0, 0, 0.4);
                    border: 1.5px solid #00F0FF;
                }
                .sa-mascot-sparkle {
                    position: absolute;
                    bottom: -3px;
                    width: 6px;
                    height: 6px;
                    background: #25d366;
                    border-radius: 50%;
                    box-shadow: 0 0 6px #25d366;
                }

                /* Radar Aura */
                .sa-glow-aura {
                    position: absolute;
                    width: 64px;
                    height: 64px;
                    border-radius: 50%;
                    background: radial-gradient(circle, rgba(37, 211, 102, 0.4) 0%, transparent 70%);
                    pointer-events: none;
                    animation: auraPulse 2.8s ease-out infinite;
                }
                .sa-glow-aura.aura-2 {
                    animation-delay: 1.4s;
                }
                @keyframes auraPulse {
                    0% { transform: scale(0.9); opacity: 0.9; }
                    100% { transform: scale(2.1); opacity: 0; }
                }

                /* Core Button */
                .sa-wa-core-btn {
                    position: relative;
                    width: 64px;
                    height: 64px;
                    border-radius: 50%;
                    background: linear-gradient(135deg, #25D366 0%, #128C7E 100%);
                    border: 2.5px solid #ffffff;
                    box-shadow: 0 10px 30px rgba(37, 211, 102, 0.5), inset 0 2px 4px rgba(255, 255, 255, 0.6);
                    cursor: pointer;
                    display: flex;
                    align-items: center;
                    justify-content: center;
                    z-index: 4;
                    outline: none;
                    transition: all 0.35s cubic-bezier(0.34, 1.56, 0.64, 1);
                    padding: 0;
                }
                .sa-wa-core-btn:hover {
                    transform: scale(1.1);
                    box-shadow: 0 14px 38px rgba(37, 211, 102, 0.7), inset 0 2px 6px rgba(255, 255, 255, 0.8);
                }
                .sa-wa-core-btn.active-open {
                    background: linear-gradient(135deg, #ef4444 0%, #dc2626 100%);
                    box-shadow: 0 10px 30px rgba(239, 68, 68, 0.45);
                    transform: rotate(90deg);
                }

                .sa-icon-container {
                    color: #ffffff;
                    font-size: 33px;
                    display: flex;
                    align-items: center;
                    justify-content: center;
                }
                .sa-close-x {
                    font-size: 22px;
                    font-weight: 700;
                    transform: rotate(-90deg);
                }

                .sa-btn-status-badge {
                    position: absolute;
                    bottom: 2px;
                    right: 2px;
                    width: 13px;
                    height: 13px;
                    background: #00ff88;
                    border: 2.5px solid #ffffff;
                    border-radius: 50%;
                    box-shadow: 0 0 8px #00ff88;
                }

                /* Luxury Card Popup */
                .sa-wa-card {
                    position: absolute;
                    right: 0;
                    bottom: 95px;
                    width: 370px;
                    max-width: calc(100vw - 36px);
                    background: #ffffff;
                    border-radius: 24px;
                    box-shadow: 0 25px 60px rgba(0, 0, 0, 0.28), 0 0 0 1px rgba(0, 0, 0, 0.06);
                    overflow: hidden;
                    display: flex;
                    flex-direction: column;
                    z-index: 10;
                    animation: springUp 0.35s cubic-bezier(0.175, 0.885, 0.32, 1.275);
                }

                @keyframes springUp {
                    from { opacity: 0; transform: translateY(25px) scale(0.92); }
                    to { opacity: 1; transform: translateY(0) scale(1); }
                }

                /* Card Header */
                .sa-wa-card-header {
                    background: linear-gradient(135deg, #064E3B 0%, #065F46 50%, #047857 100%);
                    padding: 18px 20px;
                    display: flex;
                    align-items: center;
                    justify-content: space-between;
                    color: #ffffff;
                }
                .sa-wa-header-brand {
                    display: flex;
                    align-items: center;
                    gap: 14px;
                }
                .sa-wa-robot-badge {
                    position: relative;
                    width: 48px;
                    height: 48px;
                    background: rgba(255, 255, 255, 0.15);
                    border: 1.5px solid rgba(255, 255, 255, 0.3);
                    border-radius: 50%;
                    display: flex;
                    align-items: center;
                    justify-content: center;
                    box-shadow: 0 4px 15px rgba(0, 0, 0, 0.2);
                }
                .sa-pulse-live-dot {
                    position: absolute;
                    bottom: 2px;
                    right: 2px;
                    width: 11px;
                    height: 11px;
                    background: #22c55e;
                    border: 2px solid #064e3b;
                    border-radius: 50%;
                    box-shadow: 0 0 8px #22c55e;
                }
                .sa-brand-row {
                    display: flex;
                    align-items: center;
                    gap: 6px;
                }
                .sa-main-title {
                    font-size: 17px;
                    font-weight: 800;
                    margin: 0;
                    color: #ffffff;
                    letter-spacing: 0.3px;
                }
                .sa-verified-check {
                    color: #38bdf8;
                    font-size: 14px;
                }
                .sa-sub-tagline {
                    font-size: 12px;
                    color: rgba(255, 255, 255, 0.85);
                    margin: 2px 0 0;
                    display: flex;
                    align-items: center;
                    gap: 5px;
                }
                .sa-dot-online {
                    width: 6px;
                    height: 6px;
                    background: #22c55e;
                    border-radius: 50%;
                    display: inline-block;
                }
                .sa-wa-btn-close {
                    background: rgba(255, 255, 255, 0.12);
                    border: none;
                    color: #ffffff;
                    width: 30px;
                    height: 30px;
                    border-radius: 50%;
                    display: flex;
                    align-items: center;
                    justify-content: center;
                    cursor: pointer;
                    font-size: 13px;
                    transition: background 0.2s;
                }
                .sa-wa-btn-close:hover {
                    background: rgba(255, 255, 255, 0.25);
                }

                /* Tabs */
                .sa-wa-tabs {
                    display: flex;
                    background: #f1f5f9;
                    padding: 6px;
                    gap: 6px;
                    border-bottom: 1px solid #e2e8f0;
                }
                .sa-tab-btn {
                    flex: 1;
                    padding: 9px 12px;
                    border-radius: 12px;
                    border: none;
                    background: transparent;
                    color: #64748b;
                    font-size: 12.5px;
                    font-weight: 600;
                    display: flex;
                    align-items: center;
                    justify-content: center;
                    gap: 7px;
                    cursor: pointer;
                    transition: all 0.2s;
                    position: relative;
                }
                .sa-tab-btn.active {
                    background: #ffffff;
                    color: #0f172a;
                    box-shadow: 0 2px 8px rgba(0, 0, 0, 0.08);
                }
                .sa-tab-btn i {
                    font-size: 13px;
                    color: #10b981;
                }

                /* Active Dept Info Card */
                .sa-dept-card {
                    padding: 16px 18px 12px;
                    background: #fafafa;
                }
                .sa-dept-header {
                    background: #ffffff;
                    border-radius: 16px;
                    padding: 14px 16px;
                    box-shadow: 0 4px 14px rgba(0, 0, 0, 0.05);
                    border: 1px solid #e2e8f0;
                    display: flex;
                    align-items: center;
                    justify-content: space-between;
                    margin-bottom: 14px;
                }
                .sa-dept-meta {
                    display: flex;
                    flex-direction: column;
                }
                .sa-dept-person {
                    font-size: 11.5px;
                    font-weight: 600;
                    text-transform: uppercase;
                    letter-spacing: 0.5px;
                    color: #059669;
                    margin-bottom: 2px;
                }
                .sa-dept-num-row {
                    display: flex;
                    align-items: center;
                    gap: 8px;
                    margin-bottom: 2px;
                }
                .sa-dept-phone {
                    font-size: 15px;
                    font-weight: 800;
                    color: #0f172a;
                    letter-spacing: 0.3px;
                }
                .sa-dept-badge {
                    font-size: 10px;
                    background: #ecfdf5;
                    color: #059669;
                    padding: 2px 7px;
                    border-radius: 6px;
                    font-weight: 700;
                }
                .sa-dept-status {
                    font-size: 11px;
                    color: #64748b;
                }
                .sa-direct-callout-btn {
                    background: linear-gradient(135deg, #25D366 0%, #128C7E 100%);
                    color: #ffffff;
                    padding: 8px 14px;
                    border-radius: 20px;
                    font-size: 13px;
                    font-weight: 700;
                    display: flex;
                    align-items: center;
                    gap: 6px;
                    cursor: pointer;
                    box-shadow: 0 4px 12px rgba(37, 211, 102, 0.35);
                    transition: transform 0.2s, box-shadow 0.2s;
                }
                .sa-direct-callout-btn:hover {
                    transform: scale(1.05);
                    box-shadow: 0 6px 18px rgba(37, 211, 102, 0.5);
                }
                .sa-direct-callout-btn i {
                    font-size: 16px;
                }

                /* Quick Prompts */
                .sa-prompts-label {
                    font-size: 11px;
                    font-weight: 700;
                    text-transform: uppercase;
                    color: #94a3b8;
                    margin-bottom: 8px;
                    letter-spacing: 0.4px;
                }
                .sa-pills-wrap {
                    display: flex;
                    flex-direction: column;
                    gap: 6px;
                }
                .sa-prompt-pill {
                    width: 100%;
                    background: #ffffff;
                    border: 1px solid #e2e8f0;
                    border-radius: 10px;
                    padding: 8px 12px;
                    font-size: 12px;
                    font-weight: 600;
                    color: #334155;
                    display: flex;
                    align-items: center;
                    justify-content: space-between;
                    cursor: pointer;
                    transition: all 0.2s;
                    text-align: left;
                }
                .sa-prompt-pill:hover {
                    border-color: #25d366;
                    background: #f0fdf4;
                    color: #15803d;
                    transform: translateX(3px);
                }
                .sa-prompt-pill i {
                    font-size: 10px;
                    color: #94a3b8;
                    transition: transform 0.2s;
                }
                .sa-prompt-pill:hover i {
                    color: #25d366;
                    transform: translateX(3px);
                }

                /* Custom Composer */
                .sa-wa-composer {
                    padding: 10px 16px 12px;
                    background: #ffffff;
                    border-top: 1px solid #f1f5f9;
                }
                .sa-composer-form {
                    display: flex;
                    align-items: center;
                    gap: 8px;
                    background: #f8fafc;
                    border: 1.5px solid #e2e8f0;
                    border-radius: 25px;
                    padding: 4px 6px 4px 14px;
                    transition: border-color 0.2s;
                }
                .sa-composer-form:focus-within {
                    border-color: #25d366;
                    background: #ffffff;
                }
                .sa-composer-input {
                    flex: 1;
                    border: none;
                    background: transparent;
                    font-size: 12.5px;
                    color: #0f172a;
                    outline: none;
                    padding: 6px 0;
                }
                .sa-composer-input::placeholder {
                    color: #94a3b8;
                }
                .sa-composer-send-btn {
                    width: 36px;
                    height: 36px;
                    border-radius: 50%;
                    background: #25D366;
                    color: #ffffff;
                    border: none;
                    cursor: pointer;
                    display: flex;
                    align-items: center;
                    justify-content: center;
                    font-size: 18px;
                    transition: all 0.2s;
                    flex-shrink: 0;
                }
                .sa-composer-send-btn:hover {
                    transform: scale(1.08);
                    background: #128C7E;
                }

                /* Trust Footer */
                .sa-wa-footer {
                    background: #f8fafc;
                    border-top: 1px solid #f1f5f9;
                    padding: 8px 16px;
                    text-align: center;
                    font-size: 11px;
                    color: #94a3b8;
                    display: flex;
                    align-items: center;
                    justify-content: center;
                    gap: 5px;
                }
                .sa-wa-footer i {
                    color: #10b981;
                }

                @media (max-width: 480px) {
                    .sa-wa-creative-root {
                        right: 16px;
                        bottom: 18px;
                    }
                    .sa-wa-card {
                        width: calc(100vw - 32px);
                        right: 0;
                        bottom: 85px;
                    }
                    .sa-mascot-speech {
                        display: none;
                    }
                }
            `}</style>
        </div>
    )
}
