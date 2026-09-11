'use client'

import { useState, useEffect, useRef } from 'react'

export default function WhatsAppWidget() {
    const [isOpen, setIsOpen] = useState(false)
    const [showTooltip, setShowTooltip] = useState(true)
    const widgetRef = useRef(null)

    // Numbers provided by user
    const number1 = {
        title: "Corporate Procurement",
        subtitle: "IT hardware fleets, custom sourcing & enterprise orders",
        displayNumber: "+92 316 8924869",
        waNumber: "923168924869",
        defaultMsg: "Hello SA Enterprises, I would like to inquire about corporate procurement and equipment sourcing.",
        badge: "Procurement Desk"
    }

    const number2 = {
        title: "Sales & General Inquiry",
        subtitle: "Quotes, product availability & immediate support",
        displayNumber: "+92 312 2943462",
        waNumber: "923122943462",
        defaultMsg: "Hello SA Enterprises, I have an inquiry regarding product availability and quotation.",
        badge: "Sales & Support"
    }

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

    const openWhatsApp = (numObj) => {
        const url = `https://wa.me/${numObj.waNumber}?text=${encodeURIComponent(numObj.defaultMsg)}`
        window.open(url, '_blank', 'noopener,noreferrer')
    }

    return (
        <div ref={widgetRef} className="sa-whatsapp-widget-container" aria-label="WhatsApp Support">
            {/* Pop-up Chat Card */}
            {isOpen && (
                <div className="sa-whatsapp-popup animate-fadeInUp">
                    {/* Header */}
                    <div className="sa-whatsapp-header">
                        <div className="sa-header-info">
                            <div className="sa-header-avatar">
                                {/* Cute Bot Avatar */}
                                <svg width="34" height="34" viewBox="0 0 36 36" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <rect x="6" y="10" width="24" height="20" rx="8" fill="#ffffff" />
                                    <rect x="10" y="15" width="5" height="5" rx="2.5" fill="#00D084" />
                                    <rect x="21" y="15" width="5" height="5" rx="2.5" fill="#00D084" />
                                    <path d="M14 24C15.5 25.5 20.5 25.5 22 24" stroke="#128C7E" strokeWidth="2" strokeLinecap="round" />
                                    <circle cx="18" cy="5" r="3" fill="#FFE600" />
                                    <line x1="18" y1="7" x2="18" y2="10" stroke="#ffffff" strokeWidth="2" />
                                    <rect x="3" y="17" width="3" height="6" rx="1.5" fill="#ffffff" />
                                    <rect x="30" y="17" width="3" height="6" rx="1.5" fill="#ffffff" />
                                </svg>
                                <span className="sa-online-dot"></span>
                            </div>
                            <div>
                                <h4 className="sa-header-title">SA Enterprises</h4>
                                <p className="sa-header-sub">Online • Direct Procurement Desk</p>
                            </div>
                        </div>
                        <button 
                            type="button" 
                            className="sa-whatsapp-close" 
                            onClick={() => setIsOpen(false)}
                            aria-label="Close WhatsApp chat"
                        >
                            ✕
                        </button>
                    </div>

                    {/* Chat Body */}
                    <div className="sa-whatsapp-body">
                        <div className="sa-whatsapp-msg-bubble">
                            <p className="sa-msg-greeting">
                                <strong>Hello! 👋</strong> Welcome to SA Enterprises.
                            </p>
                            <p className="sa-msg-text">
                                Please select a department to start chatting on WhatsApp:
                            </p>
                        </div>

                        {/* Number Options */}
                        <div className="sa-whatsapp-options">
                            {/* Option 1: Procurement */}
                            <button 
                                type="button" 
                                className="sa-wa-option-card"
                                onClick={() => openWhatsApp(number1)}
                            >
                                <div className="sa-card-left">
                                    <div className="sa-wa-icon-box">
                                        <i className="fab fa-whatsapp"></i>
                                    </div>
                                    <div className="sa-wa-card-text">
                                        <div className="sa-card-badge-row">
                                            <span className="sa-card-title">{number1.title}</span>
                                            <span className="sa-card-badge">{number1.badge}</span>
                                        </div>
                                        <span className="sa-card-num">{number1.displayNumber}</span>
                                        <span className="sa-card-desc">{number1.subtitle}</span>
                                    </div>
                                </div>
                                <div className="sa-card-arrow">
                                    <i className="fas fa-paper-plane"></i>
                                </div>
                            </button>

                            {/* Option 2: Sales */}
                            <button 
                                type="button" 
                                className="sa-wa-option-card"
                                onClick={() => openWhatsApp(number2)}
                            >
                                <div className="sa-card-left">
                                    <div className="sa-wa-icon-box sales">
                                        <i className="fab fa-whatsapp"></i>
                                    </div>
                                    <div className="sa-wa-card-text">
                                        <div className="sa-card-badge-row">
                                            <span className="sa-card-title">{number2.title}</span>
                                            <span className="sa-card-badge sales">{number2.badge}</span>
                                        </div>
                                        <span className="sa-card-num">{number2.displayNumber}</span>
                                        <span className="sa-card-desc">{number2.subtitle}</span>
                                    </div>
                                </div>
                                <div className="sa-card-arrow">
                                    <i className="fas fa-paper-plane"></i>
                                </div>
                            </button>
                        </div>
                    </div>

                    {/* Footer */}
                    <div className="sa-whatsapp-footer">
                        <span>⚡ Typically replies in under 5 minutes</span>
                    </div>
                </div>
            )}

            {/* Floating Trigger Button with Orbiting Robot / Avatar */}
            <div className="sa-trigger-wrapper">
                {/* Tooltip badge */}
                {!isOpen && showTooltip && (
                    <div className="sa-wa-tooltip" onClick={() => setIsOpen(true)}>
                        <span>Need help? Chat with us!</span>
                        <button 
                            type="button" 
                            className="sa-tooltip-close" 
                            onClick={(e) => { e.stopPropagation(); setShowTooltip(false) }}
                        >
                            ×
                        </button>
                    </div>
                )}

                {/* Main WhatsApp Button */}
                <button 
                    type="button" 
                    className={`sa-whatsapp-btn ${isOpen ? 'active' : ''}`}
                    onClick={() => setIsOpen(!isOpen)}
                    aria-label="Toggle WhatsApp chat"
                >
                    {/* Orbit Ring Container with revolving robot */}
                    <div className="sa-orbit-track">
                        <div className="sa-orbiting-robot" title="SA AI Assistant">
                            {/* Cute Bot SVG */}
                            <svg width="22" height="22" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <rect x="3" y="6" width="18" height="15" rx="5" fill="#1E293B" stroke="#00F0FF" strokeWidth="1.5" />
                                <circle cx="8" cy="12" r="2" fill="#00F0FF" />
                                <circle cx="16" cy="12" r="2" fill="#00F0FF" />
                                <path d="M9 16C10.5 17.5 13.5 17.5 15 16" stroke="#00F0FF" strokeWidth="1.2" strokeLinecap="round" />
                                <line x1="12" y1="2" x2="12" y2="6" stroke="#00F0FF" strokeWidth="1.5" />
                                <circle cx="12" cy="2" r="1.5" fill="#FF0055" />
                            </svg>
                        </div>
                    </div>

                    {/* Green Pulse Radar Waves */}
                    <span className="sa-wa-pulse"></span>
                    <span className="sa-wa-pulse delay"></span>

                    {/* WhatsApp Icon */}
                    <div className="sa-wa-main-icon">
                        {isOpen ? (
                            <span className="sa-close-icon">✕</span>
                        ) : (
                            <i className="fab fa-whatsapp"></i>
                        )}
                    </div>
                </button>
            </div>

            {/* Scoped CSS styling for widget */}
            <style jsx>{`
                .sa-whatsapp-widget-container {
                    position: fixed;
                    right: 28px;
                    bottom: 28px;
                    z-index: 99999;
                    font-family: var(--fira-sans, system-ui, -apple-system, sans-serif);
                }

                /* Trigger Container */
                .sa-trigger-wrapper {
                    position: relative;
                    display: flex;
                    align-items: center;
                    justify-content: flex-end;
                }

                /* Tooltip */
                .sa-wa-tooltip {
                    position: absolute;
                    right: 76px;
                    background: #1e2229;
                    color: #ffffff;
                    padding: 8px 14px;
                    border-radius: 20px;
                    font-size: 13px;
                    font-weight: 500;
                    white-space: nowrap;
                    box-shadow: 0 4px 18px rgba(0, 0, 0, 0.25);
                    cursor: pointer;
                    display: flex;
                    align-items: center;
                    gap: 8px;
                    animation: tooltipBounce 3s ease-in-out infinite;
                }
                .sa-wa-tooltip::after {
                    content: '';
                    position: absolute;
                    right: -6px;
                    top: 50%;
                    transform: translateY(-50%);
                    border-width: 6px 0 6px 6px;
                    border-style: solid;
                    border-color: transparent transparent transparent #1e2229;
                }
                .sa-tooltip-close {
                    background: transparent;
                    border: none;
                    color: #94a3b8;
                    font-size: 16px;
                    line-height: 1;
                    cursor: pointer;
                    padding: 0;
                }
                .sa-tooltip-close:hover {
                    color: #ffffff;
                }

                @keyframes tooltipBounce {
                    0%, 100% { transform: translateY(0); }
                    50% { transform: translateY(-4px); }
                }

                /* Main Floating Button */
                .sa-whatsapp-btn {
                    position: relative;
                    width: 62px;
                    height: 62px;
                    border-radius: 50%;
                    background: linear-gradient(135deg, #25D366 0%, #128C7E 100%);
                    border: 2px solid rgba(255, 255, 255, 0.85);
                    box-shadow: 0 8px 24px rgba(37, 211, 102, 0.45);
                    cursor: pointer;
                    display: flex;
                    align-items: center;
                    justify-content: center;
                    transition: all 0.3s cubic-bezier(0.34, 1.56, 0.64, 1);
                    outline: none;
                    padding: 0;
                }
                .sa-whatsapp-btn:hover {
                    transform: scale(1.08);
                    box-shadow: 0 12px 30px rgba(37, 211, 102, 0.6);
                }
                .sa-whatsapp-btn.active {
                    background: linear-gradient(135deg, #ef4444 0%, #b91c1c 100%);
                    box-shadow: 0 8px 24px rgba(239, 68, 68, 0.4);
                }

                .sa-wa-main-icon {
                    position: relative;
                    z-index: 3;
                    color: #ffffff;
                    font-size: 32px;
                    display: flex;
                    align-items: center;
                    justify-content: center;
                }
                .sa-close-icon {
                    font-size: 24px;
                    font-weight: bold;
                }

                /* Orbit Track & Robo animation */
                .sa-orbit-track {
                    position: absolute;
                    width: 90px;
                    height: 90px;
                    border-radius: 50%;
                    border: 1px dashed rgba(37, 211, 102, 0.45);
                    pointer-events: none;
                    top: -14px;
                    left: -14px;
                    animation: rotateOrbit 6s linear infinite;
                    display: flex;
                    align-items: center;
                    justify-content: center;
                    z-index: 4;
                }

                .sa-orbiting-robot {
                    position: absolute;
                    top: -12px;
                    left: calc(50% - 13px);
                    width: 26px;
                    height: 26px;
                    background: #0f172a;
                    border-radius: 50%;
                    display: flex;
                    align-items: center;
                    justify-content: center;
                    box-shadow: 0 0 10px rgba(0, 240, 255, 0.8);
                    border: 1.5px solid #00F0FF;
                    animation: counterRotate 6s linear infinite;
                }

                @keyframes rotateOrbit {
                    from { transform: rotate(0deg); }
                    to { transform: rotate(360deg); }
                }
                @keyframes counterRotate {
                    from { transform: rotate(0deg); }
                    to { transform: rotate(-360deg); }
                }

                /* Radar Pulse */
                .sa-wa-pulse {
                    position: absolute;
                    width: 100%;
                    height: 100%;
                    border-radius: 50%;
                    background: rgba(37, 211, 102, 0.4);
                    pointer-events: none;
                    z-index: 1;
                    animation: pulseWave 2.2s ease-out infinite;
                }
                .sa-wa-pulse.delay {
                    animation-delay: 1.1s;
                }

                @keyframes pulseWave {
                    0% { transform: scale(1); opacity: 0.8; }
                    100% { transform: scale(1.6); opacity: 0; }
                }

                /* Popup Card */
                .sa-whatsapp-popup {
                    position: absolute;
                    right: 0;
                    bottom: 80px;
                    width: 350px;
                    max-width: calc(100vw - 40px);
                    background: #ffffff;
                    border-radius: 18px;
                    box-shadow: 0 16px 45px rgba(0, 0, 0, 0.22);
                    overflow: hidden;
                    border: 1px solid rgba(0, 0, 0, 0.08);
                    display: flex;
                    flex-direction: column;
                    animation: popupSlideUp 0.3s cubic-bezier(0.16, 1, 0.3, 1);
                }

                @keyframes popupSlideUp {
                    from { opacity: 0; transform: translateY(18px) scale(0.96); }
                    to { opacity: 1; transform: translateY(0) scale(1); }
                }

                /* Header */
                .sa-whatsapp-header {
                    background: linear-gradient(135deg, #075E54 0%, #128C7E 100%);
                    color: #ffffff;
                    padding: 16px 18px;
                    display: flex;
                    align-items: center;
                    justify-content: space-between;
                }
                .sa-header-info {
                    display: flex;
                    align-items: center;
                    gap: 12px;
                }
                .sa-header-avatar {
                    position: relative;
                    width: 44px;
                    height: 44px;
                    background: rgba(255, 255, 255, 0.15);
                    border-radius: 50%;
                    display: flex;
                    align-items: center;
                    justify-content: center;
                    border: 1.5px solid rgba(255, 255, 255, 0.3);
                }
                .sa-online-dot {
                    position: absolute;
                    bottom: 1px;
                    right: 1px;
                    width: 10px;
                    height: 10px;
                    background: #25D366;
                    border: 2px solid #075E54;
                    border-radius: 50%;
                }
                .sa-header-title {
                    font-size: 16px;
                    font-weight: 700;
                    margin: 0;
                    color: #ffffff;
                    line-height: 1.2;
                }
                .sa-header-sub {
                    font-size: 12px;
                    margin: 2px 0 0;
                    color: rgba(255, 255, 255, 0.85);
                }
                .sa-whatsapp-close {
                    background: rgba(255, 255, 255, 0.15);
                    border: none;
                    color: #ffffff;
                    width: 28px;
                    height: 28px;
                    border-radius: 50%;
                    cursor: pointer;
                    display: flex;
                    align-items: center;
                    justify-content: center;
                    font-size: 14px;
                    transition: background 0.2s;
                }
                .sa-whatsapp-close:hover {
                    background: rgba(255, 255, 255, 0.3);
                }

                /* Body */
                .sa-whatsapp-body {
                    padding: 16px 16px 12px;
                    background: #f8fafc;
                }
                .sa-whatsapp-msg-bubble {
                    background: #ffffff;
                    padding: 12px 14px;
                    border-radius: 12px;
                    border-bottom-left-radius: 4px;
                    box-shadow: 0 2px 8px rgba(0, 0, 0, 0.05);
                    margin-bottom: 14px;
                    border-left: 3px solid #25D366;
                }
                .sa-msg-greeting {
                    font-size: 13px;
                    margin: 0 0 4px;
                    color: #0f172a;
                }
                .sa-msg-text {
                    font-size: 12.5px;
                    margin: 0;
                    color: #475569;
                    line-height: 1.4;
                }

                /* Options */
                .sa-whatsapp-options {
                    display: flex;
                    flex-direction: column;
                    gap: 10px;
                }
                .sa-wa-option-card {
                    width: 100%;
                    background: #ffffff;
                    border: 1px solid #e2e8f0;
                    border-radius: 14px;
                    padding: 12px 14px;
                    text-align: left;
                    display: flex;
                    align-items: center;
                    justify-content: space-between;
                    cursor: pointer;
                    transition: all 0.25s ease;
                    outline: none;
                }
                .sa-wa-option-card:hover {
                    border-color: #25D366;
                    transform: translateY(-2px);
                    box-shadow: 0 6px 16px rgba(37, 211, 102, 0.18);
                    background: #f0fdf4;
                }
                .sa-card-left {
                    display: flex;
                    align-items: flex-start;
                    gap: 12px;
                }
                .sa-wa-icon-box {
                    width: 38px;
                    height: 38px;
                    border-radius: 10px;
                    background: #e8f5e9;
                    color: #25D366;
                    display: flex;
                    align-items: center;
                    justify-content: center;
                    font-size: 22px;
                    flex-shrink: 0;
                }
                .sa-wa-icon-box.sales {
                    background: #e0f2fe;
                    color: #0284c7;
                }
                .sa-wa-card-text {
                    display: flex;
                    flex-direction: column;
                }
                .sa-card-badge-row {
                    display: flex;
                    align-items: center;
                    gap: 6px;
                    margin-bottom: 2px;
                }
                .sa-card-title {
                    font-size: 13.5px;
                    font-weight: 700;
                    color: #0f172a;
                }
                .sa-card-badge {
                    font-size: 10px;
                    font-weight: 600;
                    padding: 1px 6px;
                    border-radius: 8px;
                    background: #dcfce7;
                    color: #15803d;
                    text-transform: uppercase;
                }
                .sa-card-badge.sales {
                    background: #e0f2fe;
                    color: #0369a1;
                }
                .sa-card-num {
                    font-size: 13px;
                    font-weight: 600;
                    color: #128C7E;
                    margin-bottom: 2px;
                    letter-spacing: 0.3px;
                }
                .sa-card-desc {
                    font-size: 11px;
                    color: #64748b;
                    line-height: 1.3;
                }
                .sa-card-arrow {
                    color: #94a3b8;
                    font-size: 14px;
                    transition: all 0.2s;
                    margin-left: 6px;
                }
                .sa-wa-option-card:hover .sa-card-arrow {
                    color: #25D366;
                    transform: translateX(3px);
                }

                /* Footer */
                .sa-whatsapp-footer {
                    background: #f1f5f9;
                    border-top: 1px solid #e2e8f0;
                    padding: 9px 16px;
                    text-align: center;
                    font-size: 11.5px;
                    color: #64748b;
                    font-weight: 500;
                }

                @media (max-width: 480px) {
                    .sa-whatsapp-widget-container {
                        right: 18px;
                        bottom: 20px;
                    }
                    .sa-whatsapp-popup {
                        width: calc(100vw - 36px);
                        right: 0;
                        bottom: 75px;
                    }
                    .sa-wa-tooltip {
                        display: none;
                    }
                }
            `}</style>
        </div>
    )
}
