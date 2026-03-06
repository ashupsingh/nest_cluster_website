import { useState, useEffect } from 'react'

export default function Loader({ onFinish }) {
    const [fadeOut, setFadeOut] = useState(false)

    useEffect(() => {
        const timer = setTimeout(() => setFadeOut(true), 1800)
        const finish = setTimeout(() => onFinish(), 2400)
        return () => {
            clearTimeout(timer)
            clearTimeout(finish)
        }
    }, [onFinish])

    return (
        <div
            className={`fixed inset-0 z-[9999] flex flex-col items-center justify-center transition-opacity duration-600 ${fadeOut ? 'opacity-0 pointer-events-none' : 'opacity-100'
                }`}
            style={{ background: 'linear-gradient(160deg, #0F1B2D 0%, #162544 50%, #1E3A5F 100%)' }}
        >
            {/* Spinning Japi */}
            <div className="relative">
                <img
                    src="/loader.png"
                    alt="Loading..."
                    className="w-28 h-28 object-contain animate-spin-slow drop-shadow-2xl"
                />
                {/* Glow ring */}
                <div className="absolute inset-0 rounded-full border-2 border-gold-400/30 animate-ping" />
            </div>

            {/* Brand text */}
            <div className="mt-6 text-center animate-fade-in-up">
                <h2 className="font-[var(--font-heading)] text-2xl font-bold text-white tracking-wide">
                    NEST Cluster
                </h2>
                <p className="text-gold-400 text-xs font-[var(--font-accent)] tracking-[0.25em] uppercase mt-1">
                    Northeast India
                </p>
            </div>

            {/* Loading bar */}
            <div className="mt-8 w-40 h-1 rounded-full bg-white/10 overflow-hidden">
                <div
                    className="h-full rounded-full bg-gradient-to-r from-gold-400 to-gold-300"
                    style={{ animation: 'loadBar 1.8s ease-out forwards' }}
                />
            </div>

            <style>{`
        @keyframes spin-slow {
          from { transform: rotate(0deg); }
          to { transform: rotate(360deg); }
        }
        .animate-spin-slow {
          animation: spin-slow 2.5s linear infinite;
        }
        @keyframes loadBar {
          from { width: 0%; }
          to { width: 100%; }
        }
      `}</style>
        </div>
    )
}
