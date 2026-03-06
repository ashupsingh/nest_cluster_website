import PageHero from '../components/PageHero'
import SectionHeader from '../components/SectionHeader'
import { Building2, FlaskConical, Wrench, Users } from 'lucide-react'

const facilities = [
    {
        icon: <Building2 size={28} />,
        title: 'NEST Office',
        description: 'Office No. 04, Research Park, IIT Guwahati campus. Central coordination hub for all cluster activities.',
    },
    {
        icon: <FlaskConical size={28} />,
        title: 'Research Laboratories',
        description: 'State-of-the-art labs for biodegradable plastics, bamboo composite processing, and AI/semiconductor research.',
    },
    {
        icon: <Wrench size={28} />,
        title: 'Tinkering & Incubation Labs',
        description: 'Maker spaces and incubation facilities for student innovators and grassroots entrepreneurs.',
    },
    {
        icon: <Users size={28} />,
        title: 'Conference & Training Spaces',
        description: 'Modern facilities for workshops, hackathons, short-term programs, and stakeholder meetings.',
    },
]

export default function Resources() {
    return (
        <>
            <PageHero
                title="Resources & Facilities"
                subtitle="Infrastructure and facilities powering innovation at the NEST Cluster."
                breadcrumbs={[{ label: 'Resources' }]}
            />

            <section className="py-20 bg-white">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <SectionHeader
                        label="Infrastructure"
                        title="Our Facilities"
                        description="Located at IIT Guwahati Research Park, NEST Cluster has modern facilities for research, innovation, and training."
                    />
                    <div className="grid sm:grid-cols-2 gap-6 max-w-4xl mx-auto">
                        {facilities.map((f, i) => (
                            <div
                                key={i}
                                className="bg-white rounded-2xl border border-gray-100 p-7 hover:-translate-y-1 hover:shadow-lg transition-all group"
                            >
                                <div className="w-14 h-14 rounded-xl bg-forest-50 text-forest-500 flex items-center justify-center mb-4 group-hover:gradient-forest group-hover:text-white transition-all">
                                    {f.icon}
                                </div>
                                <h3 className="font-[var(--font-heading)] font-bold text-[var(--color-dark)] text-lg mb-2">
                                    {f.title}
                                </h3>
                                <p className="text-gray-500 text-sm leading-relaxed">{f.description}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Floor Plan Section */}
            <section className="py-16 bg-gray-50">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
                    <SectionHeader
                        label="Layout"
                        title="Research Park Floor Plan"
                        description="NEST Cluster occupies dedicated space within the IIT Guwahati Research Park."
                    />
                    <div className="max-w-3xl mx-auto bg-white rounded-2xl border border-gray-200 p-10 flex items-center justify-center min-h-[300px]">
                        <div className="text-center">
                            <Building2 size={48} className="text-forest-300 mx-auto mb-4" />
                            <p className="text-gray-500 font-[var(--font-accent)]">
                                Floor plan details available upon request at{' '}
                                <a href="mailto:nest@iitg.ac.in" className="text-forest-500 font-semibold hover:underline">
                                    nest@iitg.ac.in
                                </a>
                            </p>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}
