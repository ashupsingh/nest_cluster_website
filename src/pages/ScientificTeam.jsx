import PageHero from '../components/PageHero'
import SectionHeader from '../components/SectionHeader'

const scientists = [
    { name: 'Prof. Vimal Katiyar', hub: 'Biodegradable Plastics', dept: 'Chemical Engineering, IITG', initials: 'VK' },
    { name: 'Prof. (to be updated)', hub: 'Grassroots Innovation', dept: 'IIT Guwahati', initials: 'GI' },
    { name: 'Prof. (to be updated)', hub: 'AI & Semiconductor', dept: 'IIT Guwahati', initials: 'AS' },
    { name: 'Prof. (to be updated)', hub: 'Bamboo Technology', dept: 'IIT Guwahati', initials: 'BT' },
    { name: 'Co-PI 1', hub: 'Grassroots Innovation', dept: 'Spoke Institution', initials: 'C1' },
    { name: 'Co-PI 2', hub: 'AI & Semiconductor', dept: 'Spoke Institution', initials: 'C2' },
    { name: 'Co-PI 3', hub: 'Bamboo Technology', dept: 'Spoke Institution', initials: 'C3' },
    { name: 'Co-PI 4', hub: 'Biodegradable Plastics', dept: 'Spoke Institution', initials: 'C4' },
    { name: 'Co-PI 5', hub: 'Cross-Vertical Research', dept: 'NIT Partner', initials: 'C5' },
    { name: 'Co-PI 6', hub: 'Cross-Vertical Research', dept: 'NIT Partner', initials: 'C6' },
]

const hubColors = {
    'Biodegradable Plastics': 'bg-[#EDE7F6] text-[var(--color-indigo-ne)]',
    'Grassroots Innovation': 'bg-forest-50 text-forest-500',
    'AI & Semiconductor': 'bg-gold-50 text-gold-600',
    'Bamboo Technology': 'bg-terra-50 text-terra-400',
    'Cross-Vertical Research': 'bg-gray-100 text-gray-600',
}

export default function ScientificTeam() {
    return (
        <>
            <PageHero
                title="Scientific Team"
                subtitle="Principal Investigators and Co-PIs leading innovation hubs across all four verticals."
                breadcrumbs={[{ label: 'People' }, { label: 'Scientific Team' }]}
            />

            <section className="py-20 bg-white">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <SectionHeader
                        label="Research Leaders"
                        title="PIs & Co-PIs"
                        description="Over 10 principal investigators and co-investigators driving cutting-edge research across NEST's strategic verticals."
                    />
                    <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
                        {scientists.map((person, i) => (
                            <div
                                key={i}
                                className="bg-white rounded-2xl border border-gray-100 p-6 text-center hover:-translate-y-1 hover:shadow-lg transition-all"
                            >
                                <div className="w-20 h-20 rounded-full mx-auto mb-4 gradient-forest flex items-center justify-center border-3 border-gold-400 shadow-md">
                                    <span className="text-white font-[var(--font-heading)] font-bold text-xl">
                                        {person.initials}
                                    </span>
                                </div>
                                <h4 className="font-[var(--font-heading)] font-bold text-[var(--color-dark)] text-sm mb-1">
                                    {person.name}
                                </h4>
                                <span
                                    className={`inline-block px-3 py-1 rounded-full text-xs font-[var(--font-accent)] font-semibold mb-2 ${hubColors[person.hub] || 'bg-gray-100 text-gray-600'
                                        }`}
                                >
                                    {person.hub}
                                </span>
                                <p className="text-gray-500 text-xs">{person.dept}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>
        </>
    )
}
