export default function SectionHeader({ label, title, description, light = false }) {
    return (
        <div className="text-center mb-12 lg:mb-16">
            {label && (
                <span
                    className={`inline-block font-[var(--font-accent)] text-xs font-semibold tracking-[2px] uppercase mb-2 ${light ? 'text-gold-300' : 'text-gold-500'
                        }`}
                >
                    {label}
                    <span className="block w-10 h-[3px] gradient-gold rounded-full mx-auto mt-2" />
                </span>
            )}
            <h2
                className={`text-2xl sm:text-3xl lg:text-4xl font-bold mb-3 font-[var(--font-heading)] ${light ? 'text-white' : 'text-[var(--color-dark)]'
                    }`}
            >
                {title}
            </h2>
            {description && (
                <p
                    className={`max-w-2xl mx-auto text-base sm:text-lg leading-relaxed ${light ? 'text-white/70' : 'text-gray-600'
                        }`}
                >
                    {description}
                </p>
            )}
        </div>
    )
}
