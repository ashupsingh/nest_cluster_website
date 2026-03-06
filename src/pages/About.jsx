import PageHero from '../components/PageHero'
import SectionHeader from '../components/SectionHeader'
import { Target, Globe, Lightbulb, Handshake } from 'lucide-react'

export default function About() {
    return (
        <>
            <PageHero
                title="Cluster Formation"
                subtitle="How NEST was formed to transform Northeast India's science and technology landscape."
                breadcrumbs={[{ label: 'About Us' }, { label: 'Cluster Formation' }]}
            />

            <section className="py-20 bg-white">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="max-w-4xl mx-auto">
                        <SectionHeader
                            label="Genesis"
                            title="The Birth of NEST Cluster"
                        />
                        <div className="prose prose-lg max-w-none space-y-6 text-gray-600 leading-relaxed">
                            <p>
                                The <strong className="text-forest-500">North Eastern Science and Technology (NEST) Cluster</strong> was inaugurated
                                on <strong>November 3, 2025</strong> by <strong>Shri Jyotiraditya M. Scindia</strong>, Union Minister of
                                Communications and Minister of Development of North Eastern Region, Government of India.
                            </p>
                            <p>
                                Established as a <strong>Section-8 not-for-profit company</strong> with an investment of
                                <strong className="text-gold-500"> ₹22.98 Crore</strong>, NEST is funded under the schemes of the
                                North Eastern Council (NEC) and the Ministry of Development of North Eastern Region (DoNER).
                                IIT Guwahati serves as the implementing body and central hub.
                            </p>
                            <p>
                                The cluster operates on a <strong>hub-and-spoke model</strong>, connecting 16+ premier institutions
                                across all eight northeastern states — Assam, Arunachal Pradesh, Manipur, Meghalaya, Mizoram,
                                Nagaland, Sikkim, and Tripura — to translate local knowledge into global solutions.
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            {/* Vision & Mission */}
            <section className="py-20 bg-gray-50">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <SectionHeader
                        label="Purpose"
                        title="Vision & Mission"
                        description="Building a robust Science, Technology, and Innovation ecosystem for Northeast India."
                    />
                    <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
                        {[
                            {
                                icon: <Target size={28} />,
                                title: 'Research Excellence',
                                desc: 'Accelerating cutting-edge research across grassroots innovation, AI, bamboo technology, and biodegradable plastics.',
                            },
                            {
                                icon: <Globe size={28} />,
                                title: 'Regional Development',
                                desc: 'Strengthening the STI ecosystem across all eight northeastern states through collaborative partnerships.',
                            },
                            {
                                icon: <Lightbulb size={28} />,
                                title: 'Innovation & Incubation',
                                desc: 'Supporting technology transfer, commercialization, and micro-enterprise development for regional entrepreneurs.',
                            },
                            {
                                icon: <Handshake size={28} />,
                                title: 'Youth Engagement',
                                desc: 'Complementing programs like NE-SPARKS and Ashtalakshmi Darshan to nurture the next generation of innovators.',
                            },
                        ].map((item, i) => (
                            <div
                                key={i}
                                className="bg-white rounded-2xl p-7 border border-gray-100 hover:-translate-y-1 hover:shadow-lg transition-all group"
                            >
                                <div className="w-14 h-14 rounded-xl bg-forest-50 text-forest-500 flex items-center justify-center mb-4 group-hover:gradient-forest group-hover:text-white transition-all">
                                    {item.icon}
                                </div>
                                <h3 className="font-[var(--font-heading)] font-bold text-[var(--color-dark)] text-lg mb-2">
                                    {item.title}
                                </h3>
                                <p className="text-gray-500 text-sm leading-relaxed">{item.desc}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Key Highlights */}
            <section className="py-20 gradient-twilight diamond-bg">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <SectionHeader
                        label="Impact"
                        title="Key Highlights"
                        light
                    />
                    <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-4xl mx-auto">
                        {[
                            'Trained rural women from Kamrup district in manufacturing biodegradable toys',
                            'Supporting micro-enterprise establishment through inclusive innovation',
                            'Incubation and tinkering laboratories for student innovators',
                            'Technology transfer and commercialization support',
                            'Scientific exposure visits including ISRO for NE students',
                            'Hub connecting all 8 northeastern states through partner institutions',
                        ].map((item, i) => (
                            <div
                                key={i}
                                className="flex items-start gap-3 bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl p-5"
                            >
                                <span className="w-7 h-7 rounded-full gradient-gold flex items-center justify-center text-[var(--color-dark)] font-bold text-xs flex-shrink-0 mt-0.5">
                                    {i + 1}
                                </span>
                                <p className="text-white/80 text-sm leading-relaxed">{item}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>
        </>
    )
}
