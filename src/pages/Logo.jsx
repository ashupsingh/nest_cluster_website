import PageHero from '../components/PageHero'
import SectionHeader from '../components/SectionHeader'
import { Sun, Cog, Leaf } from 'lucide-react'

export default function Logo() {
    return (
        <>
            <PageHero
                title="NEST Logo"
                subtitle="Understanding the symbolism behind the NEST Cluster identity."
                breadcrumbs={[{ label: 'Logo' }]}
            />

            <section className="py-20 bg-white">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <SectionHeader
                        label="Brand Identity"
                        title="Logo Symbolism"
                        description="Every element of the NEST logo tells the story of Northeast India's potential for science and innovation."
                    />

                    {/* Logo Display */}
                    <div className="max-w-3xl mx-auto">
                        <div className="bg-gray-50 rounded-3xl p-12 flex items-center justify-center mb-12 border border-gray-100">
                            <img
                                src="/nest-logo.jpg"
                                alt="NEST Cluster Logo"
                                className="w-56 h-56 object-contain drop-shadow-xl"
                            />
                        </div>

                        {/* Symbolism Cards */}
                        <div className="grid sm:grid-cols-3 gap-6">
                            {[
                                {
                                    icon: <Sun size={32} className="text-gold-500" />,
                                    title: 'Sun & Peaks',
                                    desc: 'Represents the stunning geography of Northeast India — the rolling hills, valleys, and the sunrise over the Brahmaputra.',
                                    color: 'bg-gold-50 border-gold-200',
                                },
                                {
                                    icon: <Cog size={32} className="text-forest-500" />,
                                    title: 'Gear & IC Chip',
                                    desc: 'Symbolizes industry, technology, and the semiconductor research that drives modern innovation at NEST.',
                                    color: 'bg-forest-50 border-forest-200',
                                },
                                {
                                    icon: <Leaf size={32} className="text-green-600" />,
                                    title: 'Green Leaves',
                                    desc: 'Represents sustainability, bamboo resources, biodegradable solutions, and the lush green landscapes of the region.',
                                    color: 'bg-[#E8F5E9] border-green-200',
                                },
                            ].map((item, i) => (
                                <div
                                    key={i}
                                    className={`rounded-2xl p-6 border text-center hover:-translate-y-1 hover:shadow-lg transition-all ${item.color}`}
                                >
                                    <div className="flex justify-center mb-3">{item.icon}</div>
                                    <h3 className="font-[var(--font-heading)] font-bold text-[var(--color-dark)] text-lg mb-2">
                                        {item.title}
                                    </h3>
                                    <p className="text-gray-600 text-sm leading-relaxed">{item.desc}</p>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}
