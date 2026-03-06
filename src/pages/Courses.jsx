import PageHero from '../components/PageHero'
import SectionHeader from '../components/SectionHeader'
import { Clock, Calendar, Award, Users, BookOpen, Lightbulb } from 'lucide-react'

const stps = [
    { title: 'Innovation & Entrepreneurship Bootcamp', duration: '1-2 weeks', desc: 'Intensive program covering ideation, prototyping, and business model development for NE entrepreneurs.' },
    { title: 'Hackathon Series', duration: '2-3 days', desc: 'Regional hackathons targeting local challenges in agriculture, healthcare, and environment.' },
    { title: 'Bamboo Technology Workshop', duration: '1 week', desc: 'Hands-on training in advanced bamboo processing and value-added product development.' },
    { title: 'AI/ML for NE Applications', duration: '2 weeks', desc: 'Applied AI and machine learning training focused on solutions for northeastern India.' },
]

const ltps = [
    { title: 'Research Internship Program', duration: '3-6 months', desc: 'Structured internships at the hub and spoke institutions for undergraduate and postgraduate students.' },
    { title: 'Certification in Biodegradable Materials', duration: '6 months', desc: 'Professional certification covering biopolymer science, processing, and commercialization.' },
    { title: 'Grassroots Innovation Fellowship', duration: '1 year', desc: 'Fellowship program for community innovators to develop and scale their solutions.' },
]

export default function Courses() {
    return (
        <>
            <PageHero
                title="Courses & Programs"
                subtitle="Skill development programs, workshops, and certifications offered by NEST Cluster."
                breadcrumbs={[{ label: 'Courses' }]}
            />

            {/* Short-Term Programs */}
            <section className="py-20 bg-white">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <SectionHeader
                        label="Short Term"
                        title="Short-Term Programs (STPs)"
                        description="Intensive workshops, bootcamps, and hackathons for rapid skill building and innovation."
                    />
                    <div className="grid sm:grid-cols-2 gap-6 max-w-5xl mx-auto">
                        {stps.map((course, i) => (
                            <div
                                key={i}
                                className="bg-white rounded-2xl border border-gray-100 p-7 hover:-translate-y-1 hover:shadow-lg transition-all group"
                            >
                                <div className="flex items-center gap-3 mb-4">
                                    <div className="w-12 h-12 rounded-xl bg-gold-50 text-gold-600 flex items-center justify-center group-hover:gradient-gold transition-all">
                                        <Lightbulb size={22} />
                                    </div>
                                    <div>
                                        <h3 className="font-[var(--font-heading)] font-bold text-[var(--color-dark)] text-base leading-tight">
                                            {course.title}
                                        </h3>
                                        <span className="text-gold-500 text-xs font-[var(--font-accent)] font-semibold flex items-center gap-1">
                                            <Clock size={11} /> {course.duration}
                                        </span>
                                    </div>
                                </div>
                                <p className="text-gray-500 text-sm leading-relaxed">{course.desc}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Long-Term Programs */}
            <section className="py-20 bg-gray-50">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <SectionHeader
                        label="Long Term"
                        title="Long-Term Programs (LTPs)"
                        description="In-depth certifications, internships, and fellowships for sustained learning and career development."
                    />
                    <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl mx-auto">
                        {ltps.map((course, i) => (
                            <div
                                key={i}
                                className="bg-white rounded-2xl border border-gray-100 p-7 hover:-translate-y-1 hover:shadow-lg transition-all group"
                            >
                                <div className="w-12 h-12 rounded-xl bg-forest-50 text-forest-500 flex items-center justify-center mb-4 group-hover:gradient-forest group-hover:text-white transition-all">
                                    <BookOpen size={22} />
                                </div>
                                <h3 className="font-[var(--font-heading)] font-bold text-[var(--color-dark)] text-base mb-1 leading-tight">
                                    {course.title}
                                </h3>
                                <span className="text-forest-500 text-xs font-[var(--font-accent)] font-semibold flex items-center gap-1 mb-3">
                                    <Calendar size={11} /> {course.duration}
                                </span>
                                <p className="text-gray-500 text-sm leading-relaxed">{course.desc}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* CTA */}
            <section className="py-16 bg-white">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
                    <div className="gradient-twilight rounded-2xl p-10 diamond-bg">
                        <h3 className="font-[var(--font-heading)] text-2xl font-bold text-white mb-3">Interested in a Program?</h3>
                        <p className="text-white/60 text-sm mb-6 max-w-lg mx-auto">
                            Reach out to us for enrollment details, upcoming schedules, and partnership opportunities.
                        </p>
                        <a
                            href="mailto:nest@iitg.ac.in"
                            className="inline-flex items-center gap-2 px-6 py-3 rounded-full gradient-gold text-[var(--color-dark)] font-[var(--font-accent)] font-semibold shadow-lg hover:-translate-y-0.5 transition-all"
                        >
                            Contact for Enrollment
                        </a>
                    </div>
                </div>
            </section>
        </>
    )
}
