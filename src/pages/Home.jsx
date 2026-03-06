import { Link } from 'react-router-dom'
import SectionHeader from '../components/SectionHeader'
import NEIndiaMap from '../components/NEIndiaMap'
import {
    ArrowRight, Leaf, Cpu, TreePine, Recycle,
    MapPin, Users, Building2, BookOpen, Award,
    ChevronRight
} from 'lucide-react'

const verticals = [
    {
        icon: <Leaf size={28} />,
        title: 'Grassroots Technology Innovation',
        desc: 'Leveraging indigenous knowledge and fostering community-driven innovation from the grassroots of Northeast India.',
        color: 'forest',
    },
    {
        icon: <Cpu size={28} />,
        title: 'AI & Semiconductor Technology',
        desc: 'Advancing artificial intelligence and semiconductor research to position Northeast India at the forefront of emerging technology.',
        color: 'gold',
    },
    {
        icon: <TreePine size={28} />,
        title: 'Bamboo-Based Products & Skill Building',
        desc: 'Developing sustainable bamboo technologies and building skills for value-added product innovation from the region\'s abundant resources.',
        color: 'terra',
    },
    {
        icon: <Recycle size={28} />,
        title: 'Biodegradable Plastics & Waste Management',
        desc: 'Researching eco-friendly biodegradable plastic alternatives and solid-waste management solutions for a greener Northeast.',
        color: 'indigo',
    },
]

const spokes = [
    { name: 'NERIST', location: 'Arunachal Pradesh' },
    { name: 'NEIST (CSIR)', location: 'Jorhat, Assam' },
    { name: 'NECBDC', location: 'Assam' },
    { name: 'NIT Agartala', location: 'Tripura' },
    { name: 'NIT Meghalaya', location: 'Meghalaya' },
    { name: 'NIT Manipur', location: 'Manipur' },
    { name: 'NIT Silchar', location: 'Assam' },
    { name: 'NIT Mizoram', location: 'Mizoram' },
    { name: 'NIT Nagaland', location: 'Nagaland' },
    { name: 'NIT Arunachal Pradesh', location: 'Arunachal Pradesh' },
    { name: 'NIT Sikkim', location: 'Sikkim' },
    { name: 'IIM Shillong', location: 'Meghalaya' },
    { name: 'IIIT Guwahati', location: 'Assam' },
    { name: 'Tezpur University', location: 'Assam' },
    { name: 'IIIT Senapati', location: 'Manipur' },
    { name: 'CIT Kokrajhar', location: 'Assam' },
]

const stats = [
    { number: '₹22.98 Cr', label: 'Investment' },
    { number: '16+', label: 'Spoke Institutions' },
    { number: '4', label: 'Strategic Verticals' },
    { number: '8', label: 'NE States Covered' },
]

const colorClasses = {
    forest: { bg: 'bg-forest-50', text: 'text-forest-500', border: 'border-t-forest-500' },
    gold: { bg: 'bg-gold-50', text: 'text-gold-600', border: 'border-t-gold-400' },
    terra: { bg: 'bg-terra-50', text: 'text-terra-400', border: 'border-t-terra-400' },
    indigo: { bg: 'bg-[#EDE7F6]', text: 'text-[var(--color-indigo-ne)]', border: 'border-t-[var(--color-indigo-ne)]' },
}

export default function Home() {
    return (
        <>
            {/* ====== HERO ====== */}
            <section className="relative min-h-screen flex items-center overflow-hidden">
                {/* Background culture image */}
                <div
                    className="absolute inset-0 bg-cover bg-center bg-no-repeat"
                    style={{ backgroundImage: "url('/images/hero-ne-culture.png')" }}
                />
                {/* Gradient overlay — warmer blend letting culture image show through */}
                <div className="absolute inset-0 bg-gradient-to-br from-[#0F1B2D]/85 via-[#2A1F14]/65 to-[#D4A843]/30" />
                {/* Diamond pattern on top */}
                <div className="absolute inset-0 diamond-bg" />

                {/* Decorative blobs */}
                <div className="absolute top-1/4 right-0 w-96 h-96 rounded-full bg-gold-400/10 blur-[100px]" />
                <div className="absolute bottom-0 left-1/4 w-80 h-80 rounded-full bg-forest-400/15 blur-[80px]" />
                <div className="absolute top-1/3 left-10 w-20 h-20 rounded-full bg-gold-400/20 animate-float" />
                <div className="absolute bottom-1/3 right-20 w-14 h-14 rounded-full bg-white/10 animate-float [animation-delay:1s]" />

                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 py-32 lg:py-0">
                    <div className="grid lg:grid-cols-2 gap-12 items-center">
                        <div className="animate-fade-in-up">
                            <span className="inline-block px-4 py-1.5 rounded-full bg-white/10 backdrop-blur-md text-gold-300 text-xs font-[var(--font-accent)] font-semibold tracking-wider uppercase mb-6 border border-white/10">
                                Seven Sisters • Northeast India
                            </span>

                            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white leading-[1.1] mb-6 font-[var(--font-heading)]">
                                North Eastern{' '}
                                <span className="text-gradient-gold">Science & Technology</span>{' '}
                                Cluster
                            </h1>

                            <p className="text-white/75 text-lg sm:text-xl leading-relaxed mb-8 max-w-xl">
                                A Section-8 not-for-profit initiative driving research, innovation, and skill
                                development across Northeast India through a hub-and-spoke model anchored at IIT Guwahati.
                            </p>

                            <div className="flex flex-wrap gap-4">
                                <Link
                                    to="/about"
                                    className="inline-flex items-center gap-2 px-7 py-3.5 rounded-full gradient-gold text-[var(--color-dark)] font-[var(--font-accent)] font-semibold shadow-lg hover:-translate-y-0.5 transition-all hover:shadow-xl"
                                >
                                    Explore Our Mission <ArrowRight size={18} />
                                </Link>
                                <Link
                                    to="/contact"
                                    className="inline-flex items-center gap-2 px-7 py-3.5 rounded-full border-2 border-white/30 text-white font-[var(--font-accent)] font-semibold hover:bg-white/10 transition-all hover:-translate-y-0.5"
                                >
                                    Get in Touch
                                </Link>
                            </div>
                        </div>

                        {/* Hero Right — Visual Card */}
                        <div className="hidden lg:flex justify-center animate-fade-in-up [animation-delay:0.3s]">
                            <div className="relative w-[380px] h-[380px] flex items-center justify-center">
                                {/* Large spinning Japi */}
                                <img
                                    src="/loader.png"
                                    alt="Assamese Japi"
                                    className="w-52 h-52 object-contain drop-shadow-2xl"
                                    style={{ animation: 'spin 8s linear infinite' }}
                                />

                                {/* Floating stat badges */}
                                <div className="absolute top-4 right-4 bg-white/10 backdrop-blur-md border border-white/20 rounded-2xl px-5 py-3 text-center shadow-lg">
                                    <span className="block font-[var(--font-heading)] text-2xl font-extrabold text-gradient-gold">8</span>
                                    <span className="text-white/60 text-[10px] font-[var(--font-accent)] uppercase tracking-wider">NE States</span>
                                </div>
                                <div className="absolute bottom-12 left-0 bg-white/10 backdrop-blur-md border border-white/20 rounded-2xl px-5 py-3 text-center shadow-lg animate-float [animation-delay:0.5s]">
                                    <span className="block font-[var(--font-heading)] text-2xl font-extrabold text-gradient-gold">16+</span>
                                    <span className="text-white/60 text-[10px] font-[var(--font-accent)] uppercase tracking-wider">Institutions</span>
                                </div>
                                <div className="absolute top-16 -left-2 bg-white/10 backdrop-blur-md border border-white/20 rounded-2xl px-5 py-3 text-center shadow-lg animate-float [animation-delay:1s]">
                                    <span className="block font-[var(--font-heading)] text-2xl font-extrabold text-gradient-gold">4</span>
                                    <span className="text-white/60 text-[10px] font-[var(--font-accent)] uppercase tracking-wider">Verticals</span>
                                </div>
                                <div className="absolute bottom-4 right-8 bg-white/10 backdrop-blur-md border border-white/20 rounded-2xl px-5 py-3 text-center shadow-lg">
                                    <span className="block font-[var(--font-heading)] text-lg font-extrabold text-gradient-gold">₹22.98 Cr</span>
                                    <span className="text-white/60 text-[10px] font-[var(--font-accent)] uppercase tracking-wider">Investment</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Bottom wave */}
                <div className="absolute bottom-0 left-0 right-0">
                    <svg viewBox="0 0 1440 120" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path
                            d="M0 120L60 110C120 100 240 80 360 70C480 60 600 60 720 65C840 70 960 80 1080 85C1200 90 1320 90 1380 90L1440 90V120H0Z"
                            fill="white"
                        />
                    </svg>
                </div>
            </section>

            {/* ====== STATS BAR ====== */}
            <section className="gradient-twilight py-10 -mt-1">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
                        {stats.map((s, i) => (
                            <div key={i} className="text-center">
                                <div className="font-[var(--font-heading)] text-3xl sm:text-4xl font-extrabold text-gradient-gold">
                                    {s.number}
                                </div>
                                <div className="text-white/60 text-sm font-[var(--font-accent)] mt-1">{s.label}</div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* ====== ESTABLISHED BY ====== */}
            <section className="py-10 bg-white border-b border-gray-100">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <p className="text-center text-xs font-[var(--font-accent)] text-gray-400 uppercase tracking-[0.2em] mb-6">Established by</p>
                    <div className="flex flex-wrap items-center justify-center gap-10 md:gap-16">
                        <img src="/images/ministry-doner.png" alt="Ministry of DoNER" className="h-14 md:h-16 object-contain opacity-80 hover:opacity-100 transition-opacity" />
                        <div className="text-center">
                            <p className="text-gray-400 text-xs italic font-[var(--font-accent)] mb-1">Through</p>
                            <img src="/images/nec-logo.png" alt="North Eastern Council" className="h-10 md:h-12 object-contain opacity-80 hover:opacity-100 transition-opacity" />
                        </div>
                        <img src="/images/IITG_logo.png" alt="IIT Guwahati" className="h-16 md:h-20 object-contain opacity-80 hover:opacity-100 transition-opacity" />
                    </div>
                </div>
            </section>

            {/* ====== ABOUT SECTION ====== */}
            <section className="py-20 lg:py-28 bg-white">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="grid lg:grid-cols-2 gap-14 items-center">
                        <div>
                            <SectionHeader
                                label="Our Vision"
                                title="Transforming Northeast India Through Innovation"
                                description={null}
                            />
                            <div className="text-left space-y-4">
                                <p className="text-gray-600 leading-relaxed">
                                    The NEST Cluster is a Section-8 not-for-profit company established to accelerate research,
                                    innovation, and skill development in the North Eastern Region of India. Inaugurated by
                                    Shri Jyotiraditya M. Scindia, Union Minister of Communications and Development of
                                    North Eastern Region.
                                </p>
                                <p className="text-gray-600 leading-relaxed">
                                    With an investment of ₹22.98 Crore, NEST operates on a hub-and-spoke model with
                                    IIT Guwahati as the central hub, connecting premier institutions across all eight
                                    northeastern states to translate local knowledge into global solutions.
                                </p>
                                <Link
                                    to="/about"
                                    className="inline-flex items-center gap-2 text-forest-500 font-[var(--font-accent)] font-semibold hover:text-forest-600 transition-colors mt-2"
                                >
                                    Learn more about our formation <ChevronRight size={16} />
                                </Link>
                            </div>
                        </div>
                        <div>
                            <NEIndiaMap />
                            <p className="text-center text-gray-400 text-xs font-[var(--font-accent)] mt-4 tracking-wide">
                                Hover over a state to explore
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            {/* ====== VERTICALS ====== */}
            <section className="py-20 lg:py-28 bg-gray-50">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <SectionHeader
                        label="Focus Areas"
                        title="Four Strategic Verticals"
                        description="Targeting key sectors that leverage the unique resources and potential of Northeast India."
                    />
                    <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
                        {verticals.map((v, i) => {
                            const cc = colorClasses[v.color]
                            return (
                                <div
                                    key={i}
                                    className={`bg-white rounded-2xl p-7 border border-gray-100 border-t-4 ${cc.border} hover:-translate-y-1.5 hover:shadow-xl transition-all group`}
                                >
                                    <div
                                        className={`w-14 h-14 rounded-xl ${cc.bg} ${cc.text} flex items-center justify-center mb-5`}
                                    >
                                        {v.icon}
                                    </div>
                                    <h3 className="font-[var(--font-heading)] font-bold text-[var(--color-dark)] text-lg mb-2 leading-tight">
                                        {v.title}
                                    </h3>
                                    <p className="text-gray-500 text-sm leading-relaxed">{v.desc}</p>
                                </div>
                            )
                        })}
                    </div>
                    <div className="text-center mt-10">
                        <Link
                            to="/verticals"
                            className="inline-flex items-center gap-2 px-6 py-3 rounded-full gradient-forest text-white font-[var(--font-accent)] font-semibold shadow-md hover:-translate-y-0.5 transition-all hover:shadow-lg"
                        >
                            Explore All Verticals <ArrowRight size={16} />
                        </Link>
                    </div>
                </div>
            </section>

            {/* ====== SPOKES OVERVIEW ====== */}
            <section className="py-20 lg:py-28 gradient-twilight diamond-bg">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <SectionHeader
                        label="Our Network"
                        title="Hub & Spoke Partners"
                        description="IIT Guwahati as the central hub, connecting leading institutions across all eight states of Northeast India."
                        light
                    />
                    <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
                        {spokes.slice(0, 8).map((s, i) => (
                            <div
                                key={i}
                                className="flex items-center gap-3 bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl p-4 hover:bg-white/10 transition-all"
                            >
                                <div className="w-10 h-10 rounded-lg bg-gold-400/20 flex items-center justify-center text-gold-300 font-[var(--font-heading)] font-bold text-sm flex-shrink-0">
                                    {i + 1}
                                </div>
                                <div>
                                    <h4 className="text-white font-[var(--font-accent)] font-semibold text-sm">{s.name}</h4>
                                    <p className="text-white/50 text-xs flex items-center gap-1">
                                        <MapPin size={10} /> {s.location}
                                    </p>
                                </div>
                            </div>
                        ))}
                    </div>
                    <div className="text-center mt-10">
                        <Link
                            to="/spokes"
                            className="inline-flex items-center gap-2 px-6 py-3 rounded-full gradient-gold text-[var(--color-dark)] font-[var(--font-accent)] font-semibold shadow-lg hover:-translate-y-0.5 transition-all"
                        >
                            View All {spokes.length} Spoke Institutions <ArrowRight size={16} />
                        </Link>
                    </div>
                </div>
            </section>

            {/* ====== CTA ====== */}
            <section className="py-20 lg:py-24 bg-white">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="gradient-forest rounded-3xl p-10 lg:p-16 text-center relative overflow-hidden diamond-bg">
                        <div className="absolute top-0 right-0 w-60 h-60 rounded-full bg-gold-400/10 blur-[80px]" />
                        <div className="relative z-10">
                            <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4 font-[var(--font-heading)]">
                                Join the Innovation Ecosystem
                            </h2>
                            <p className="text-white/70 text-lg max-w-xl mx-auto mb-8">
                                Be part of Northeast India's premier science and technology cluster.
                                Connect with researchers, innovators, and institutions shaping the future.
                            </p>
                            <div className="flex flex-wrap gap-4 justify-center">
                                <Link
                                    to="/courses"
                                    className="inline-flex items-center gap-2 px-7 py-3.5 rounded-full gradient-gold text-[var(--color-dark)] font-[var(--font-accent)] font-semibold shadow-lg hover:-translate-y-0.5 transition-all"
                                >
                                    Explore Courses <BookOpen size={16} />
                                </Link>
                                <Link
                                    to="/contact"
                                    className="inline-flex items-center gap-2 px-7 py-3.5 rounded-full border-2 border-white/30 text-white font-[var(--font-accent)] font-semibold hover:bg-white/10 transition-all"
                                >
                                    Contact Us
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}
