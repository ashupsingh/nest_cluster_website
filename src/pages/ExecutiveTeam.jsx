import PageHero from '../components/PageHero'
import SectionHeader from '../components/SectionHeader'

const executives = [
    { name: 'Dr. Kiran Kumar Gali', role: 'Chief Executive Officer', dept: 'NEST Cluster Operations', initials: 'KG' },
    { name: 'Dr. Sakshi Nangia', role: 'Scientific Communications', dept: 'Research Outreach & Public Relations', initials: 'SN' },
    { name: 'Abhishek Singh', role: 'Operations & Marketing', dept: 'Strategy & Stakeholder Engagement', initials: 'AS' },
    { name: 'Dr. Sweety Kalita', role: 'Innovation Lead', dept: 'Technology Transfer & Incubation', initials: 'SK' },
    { name: 'Dr. Biswajit Debnath', role: 'Technical Operations', dept: 'Infrastructure & Lab Management', initials: 'BD' },
]

export default function ExecutiveTeam() {
    return (
        <>
            <PageHero
                title="Executive Team"
                subtitle="The operational leaders ensuring NEST Cluster runs smoothly and achieves its mission."
                breadcrumbs={[{ label: 'People' }, { label: 'Executive Team' }]}
            />

            <section className="py-20 bg-white">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <SectionHeader
                        label="Operations"
                        title="Executive Team"
                        description="Dedicated professionals managing day-to-day operations, communications, innovation, and technical infrastructure."
                    />
                    <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8 max-w-5xl mx-auto">
                        {executives.map((person, i) => (
                            <div
                                key={i}
                                className="bg-white rounded-2xl shadow-md border border-gray-100 p-8 text-center hover:-translate-y-1 hover:shadow-xl transition-all"
                            >
                                <div className="w-24 h-24 rounded-full mx-auto mb-5 gradient-forest flex items-center justify-center border-4 border-gold-400 shadow-lg">
                                    <span className="text-white font-[var(--font-heading)] font-bold text-2xl">
                                        {person.initials}
                                    </span>
                                </div>
                                <h3 className="font-[var(--font-heading)] font-bold text-[var(--color-dark)] text-lg mb-1">
                                    {person.name}
                                </h3>
                                <p className="text-forest-500 font-[var(--font-accent)] font-semibold text-sm mb-2">
                                    {person.role}
                                </p>
                                <p className="text-gray-500 text-xs">{person.dept}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>
        </>
    )
}
