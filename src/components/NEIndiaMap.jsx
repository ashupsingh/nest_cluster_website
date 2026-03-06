export default function NEIndiaMap() {
    return (
        <div className="relative max-w-xl mx-auto">
            <div className="rounded-2xl overflow-hidden shadow-xl border border-white/10 bg-white/5 backdrop-blur-sm p-4">
                <img
                    src="/images/ne-map.jpg"
                    alt="Map of Northeast India showing all 8 states"
                    className="w-full h-auto rounded-xl object-contain"
                />
            </div>
            <p className="text-center text-sm text-gray-400 font-[var(--font-accent)] mt-4 tracking-wide">
                The Eight States of Northeast India
            </p>
        </div>
    )
}
