import { Link } from 'react-router-dom'
import { ChevronRight } from 'lucide-react'

export default function PageHero({ title, subtitle, breadcrumbs = [] }) {
    return (
        <section className="relative pt-[140px] pb-16 overflow-hidden">
            {/* NE culture background image */}
            <div
                className="absolute inset-0 bg-cover bg-center bg-no-repeat"
                style={{ backgroundImage: "url('/images/hero-ne-culture.png')" }}
            />
            {/* Dark overlay — warmer blend */}
            <div className="absolute inset-0 bg-gradient-to-r from-[#0F1B2D]/88 via-[#2A1F14]/72 to-[#1E3A5F]/78" />
            {/* Diamond pattern */}
            <div className="absolute inset-0 diamond-bg" />

            {/* Decorative circles */}
            <div className="absolute top-20 right-10 w-64 h-64 rounded-full bg-forest-500/10 blur-3xl" />
            <div className="absolute bottom-0 left-0 w-48 h-48 rounded-full bg-gold-400/10 blur-3xl" />

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                {/* Breadcrumb */}
                {breadcrumbs.length > 0 && (
                    <nav className="flex items-center gap-1.5 text-xs font-[var(--font-accent)] text-white/50 mb-4">
                        <Link to="/" className="text-gold-400 hover:text-gold-300 transition-colors">
                            Home
                        </Link>
                        {breadcrumbs.map((crumb, i) => (
                            <span key={i} className="flex items-center gap-1.5">
                                <ChevronRight size={12} />
                                {crumb.path ? (
                                    <Link to={crumb.path} className="text-gold-400 hover:text-gold-300 transition-colors">
                                        {crumb.label}
                                    </Link>
                                ) : (
                                    <span className="text-white/70">{crumb.label}</span>
                                )}
                            </span>
                        ))}
                    </nav>
                )}

                <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-3 font-[var(--font-heading)]">
                    {title}
                </h1>
                {subtitle && (
                    <p className="text-white/70 text-base sm:text-lg max-w-2xl leading-relaxed">
                        {subtitle}
                    </p>
                )}
            </div>
        </section>
    )
}
