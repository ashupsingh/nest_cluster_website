import PageHero from '../components/PageHero'
import SectionHeader from '../components/SectionHeader'
import { MapPin, ExternalLink } from 'lucide-react'

const hubInstitution = {
    name: 'Indian Institute of Technology Guwahati',
    short: 'IIT Guwahati',
    location: 'Guwahati, Assam',
    role: 'Central Hub — Implementing Body',
    description: 'IIT Guwahati serves as the central hub of the NEST Cluster, coordinating all research, innovation, and skill development activities across the spoke network.',
}

const spokeInstitutions = [
    { name: 'North Eastern Regional Institute of Science & Technology', short: 'NERIST', location: 'Itanagar, Arunachal Pradesh', state: 'Arunachal Pradesh' },
    { name: 'CSIR - North East Institute of Science & Technology', short: 'NEIST (CSIR)', location: 'Jorhat, Assam', state: 'Assam' },
    { name: 'North East Cane & Bamboo Development Council', short: 'NECBDC', location: 'Byrnihat, Assam', state: 'Assam' },
    { name: 'National Institute of Technology Agartala', short: 'NIT Agartala', location: 'Agartala, Tripura', state: 'Tripura' },
    { name: 'National Institute of Technology Meghalaya', short: 'NIT Meghalaya', location: 'Shillong, Meghalaya', state: 'Meghalaya' },
    { name: 'National Institute of Technology Manipur', short: 'NIT Manipur', location: 'Imphal, Manipur', state: 'Manipur' },
    { name: 'National Institute of Technology Silchar', short: 'NIT Silchar', location: 'Silchar, Assam', state: 'Assam' },
    { name: 'National Institute of Technology Mizoram', short: 'NIT Mizoram', location: 'Aizawl, Mizoram', state: 'Mizoram' },
    { name: 'National Institute of Technology Nagaland', short: 'NIT Nagaland', location: 'Dimapur, Nagaland', state: 'Nagaland' },
    { name: 'National Institute of Technology Arunachal Pradesh', short: 'NIT AP', location: 'Yupia, Arunachal Pradesh', state: 'Arunachal Pradesh' },
    { name: 'National Institute of Technology Sikkim', short: 'NIT Sikkim', location: 'Ravangla, Sikkim', state: 'Sikkim' },
    { name: 'Indian Institute of Management Shillong', short: 'IIM Shillong', location: 'Shillong, Meghalaya', state: 'Meghalaya' },
    { name: 'Indian Institute of Information Technology Guwahati', short: 'IIIT Guwahati', location: 'Guwahati, Assam', state: 'Assam' },
    { name: 'Tezpur University', short: 'Tezpur University', location: 'Tezpur, Assam', state: 'Assam' },
    { name: 'Indian Institute of Information Technology Senapati', short: 'IIIT Senapati', location: 'Senapati, Manipur', state: 'Manipur' },
    { name: 'Central Institute of Technology Kokrajhar', short: 'CIT Kokrajhar', location: 'Kokrajhar, Assam', state: 'Assam' },
]

const stateColors = {
    'Assam': 'bg-forest-50 text-forest-600',
    'Arunachal Pradesh': 'bg-gold-50 text-gold-600',
    'Tripura': 'bg-terra-50 text-terra-500',
    'Meghalaya': 'bg-[#E3F2FD] text-blue-600',
    'Manipur': 'bg-[#FFF3E0] text-orange-600',
    'Mizoram': 'bg-[#F3E5F5] text-purple-600',
    'Nagaland': 'bg-[#E8F5E9] text-green-700',
    'Sikkim': 'bg-[#FBE9E7] text-red-600',
}

export default function Spokes() {
    return (
        <>
            <PageHero
                title="Hub & Spoke Network"
                subtitle="IIT Guwahati as the hub, connecting 16+ premier institutions across all 8 states of Northeast India."
                breadcrumbs={[{ label: 'Spokes' }]}
            />

            {/* Hub Section */}
            <section className="py-16 bg-white">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <SectionHeader label="The Hub" title="Central Hub Institution" />
                    <div className="max-w-3xl mx-auto gradient-forest rounded-2xl p-8 lg:p-10 text-white text-center relative overflow-hidden diamond-bg">
                        <div className="absolute top-0 right-0 w-40 h-40 rounded-full bg-gold-400/10 blur-3xl" />
                        <div className="relative z-10">
                            <div className="w-20 h-20 rounded-2xl bg-white/10 backdrop-blur-sm border border-white/20 flex items-center justify-center mx-auto mb-5 overflow-hidden">
                                <img src="/images/iitg-logo.png" alt="IIT Guwahati" className="w-16 h-16 object-contain" />
                            </div>
                            <h3 className="font-[var(--font-heading)] text-2xl font-bold mb-2 text-white">{hubInstitution.name}</h3>
                            <p className="text-gold-300 font-[var(--font-accent)] font-semibold text-sm mb-3">{hubInstitution.role}</p>
                            <p className="text-white/70 text-sm flex items-center justify-center gap-1.5 mb-4">
                                <MapPin size={14} /> {hubInstitution.location}
                            </p>
                            <p className="text-white/60 text-sm max-w-xl mx-auto">{hubInstitution.description}</p>
                        </div>
                    </div>
                </div>
            </section>

            {/* Spokes Grid */}
            <section className="py-16 bg-gray-50">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <SectionHeader
                        label="The Spokes"
                        title="Partner Institutions"
                        description="Connecting premier institutions across all eight northeastern states."
                    />
                    <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5">
                        {spokeInstitutions.map((inst, i) => (
                            <div
                                key={i}
                                className="bg-white rounded-xl border border-gray-100 p-5 hover:-translate-y-1 hover:shadow-lg transition-all group"
                            >
                                <div className="flex items-start gap-3">
                                    <div className="w-10 h-10 rounded-lg gradient-forest flex items-center justify-center text-white font-[var(--font-heading)] font-bold text-sm flex-shrink-0">
                                        {i + 1}
                                    </div>
                                    <div className="min-w-0">
                                        <h4 className="font-[var(--font-accent)] font-semibold text-[var(--color-dark)] text-sm leading-tight mb-1">
                                            {inst.short}
                                        </h4>
                                        <p className="text-gray-500 text-xs truncate mb-2" title={inst.name}>
                                            {inst.name}
                                        </p>
                                        <div className="flex items-center gap-2 flex-wrap">
                                            <span className="text-gray-400 text-xs flex items-center gap-1">
                                                <MapPin size={10} /> {inst.location}
                                            </span>
                                        </div>
                                        <span className={`inline-block mt-2 px-2.5 py-0.5 rounded-full text-[10px] font-[var(--font-accent)] font-semibold ${stateColors[inst.state] || 'bg-gray-100 text-gray-600'}`}>
                                            {inst.state}
                                        </span>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>
        </>
    )
}
