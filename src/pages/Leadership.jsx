import PageHero from '../components/PageHero'
import SectionHeader from '../components/SectionHeader'

const leaders = [
    {
        name: 'Prof. Devendra Jalihal',
        role: 'Chairman, NEST Cluster',
        dept: 'Director, IIT Guwahati',
        initials: 'DJ',
    },
    {
        name: 'Prof. Vimal Katiyar',
        role: 'Project Director, NEST Cluster',
        dept: 'Department of Chemical Engineering, IIT Guwahati',
        initials: 'VK',
    },
]

export default function Leadership() {
    return (
        <>
            <PageHero
                title="Leadership"
                subtitle="Meet the visionary leaders driving the NEST Cluster's mission across Northeast India."
                breadcrumbs={[{ label: 'People' }, { label: 'Leadership' }]}
            />

            <section className="py-20 bg-white">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <SectionHeader
                        label="Guiding Vision"
                        title="Our Leadership"
                        description="Distinguished academicians and researchers leading the charge for Northeast India's innovation ecosystem."
                    />
                    <div className="grid sm:grid-cols-2 gap-8 max-w-3xl mx-auto">
                        {leaders.map((person, i) => (
                            <div
                                key={i}
                                className="bg-white rounded-2xl shadow-md border border-gray-100 p-8 text-center hover:-translate-y-1 hover:shadow-xl transition-all"
                            >
                                <div className="w-28 h-28 rounded-full mx-auto mb-5 gradient-forest flex items-center justify-center border-4 border-gold-400 shadow-lg">
                                    <span className="text-white font-[var(--font-heading)] font-bold text-3xl">
                                        {person.initials}
                                    </span>
                                </div>
                                <h3 className="font-[var(--font-heading)] font-bold text-[var(--color-dark)] text-xl mb-1">
                                    {person.name}
                                </h3>
                                <p className="text-forest-500 font-[var(--font-accent)] font-semibold text-sm mb-2">
                                    {person.role}
                                </p>
                                <p className="text-gray-500 text-sm">{person.dept}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>
        </>
    )
}
