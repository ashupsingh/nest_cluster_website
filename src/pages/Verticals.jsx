import PageHero from '../components/PageHero'
import SectionHeader from '../components/SectionHeader'
import { Leaf, Cpu, TreePine, Recycle, CheckCircle } from 'lucide-react'

const verticals = [
    {
        icon: <Leaf size={32} />,
        title: 'Grassroots Technology Innovation',
        color: 'forest',
        bg: 'bg-forest-50',
        text: 'text-forest-500',
        border: 'border-l-forest-500',
        description: 'Promoting inventive solutions originating from local communities in Northeast India. This vertical focuses on identifying, nurturing, and scaling innovations that address region-specific challenges.',
        goals: [
            'Identify and support grassroots innovators across NE India',
            'Create platforms for community-driven problem solving',
            'Bridge the gap between traditional knowledge and modern technology',
            'Support micro-enterprise development for rural entrepreneurs',
            'Train rural women in manufacturing (e.g., biodegradable toys)',
        ],
    },
    {
        icon: <Cpu size={32} />,
        title: 'Artificial Intelligence & Semiconductor Technology',
        color: 'gold',
        bg: 'bg-gold-50',
        text: 'text-gold-600',
        border: 'border-l-gold-400',
        description: 'Fostering advancements in AI and semiconductor research to position Northeast India at the forefront of emerging technology. Building capacity and infrastructure for cutting-edge tech development.',
        goals: [
            'Establish AI research labs in partner institutions',
            'Develop semiconductor design and testing capabilities',
            'Create AI-driven solutions for regional challenges',
            'Train next-generation engineers in frontier technologies',
            'Foster industry-academia collaboration in tech R&D',
        ],
    },
    {
        icon: <TreePine size={32} />,
        title: 'Bamboo-Based Products & Skill Building',
        color: 'terra',
        bg: 'bg-terra-50',
        text: 'text-terra-400',
        border: 'border-l-terra-400',
        description: 'Developing sustainable bamboo technologies leveraging Northeast India\'s abundant natural resources. Creating value-added products and building skills for the bamboo economy.',
        goals: [
            'Develop advanced bamboo processing techniques',
            'Create high-value bamboo composite materials',
            'Build skill development programs for bamboo artisans',
            'Support bamboo-based startup ecosystem',
            'Research bamboo applications in construction and textiles',
        ],
    },
    {
        icon: <Recycle size={32} />,
        title: 'Biodegradable Plastics & Solid-Waste Management',
        color: 'indigo',
        bg: 'bg-[#EDE7F6]',
        text: 'text-[var(--color-indigo-ne)]',
        border: 'border-l-[var(--color-indigo-ne)]',
        description: 'Researching eco-friendly biodegradable plastic alternatives and developing comprehensive solid-waste management solutions for a cleaner, greener Northeast India.',
        goals: [
            'Develop biopolymer alternatives to conventional plastics',
            'Create scalable biodegradable packaging solutions',
            'Establish waste management pilot projects in NE states',
            'Research composting and recycling technologies',
            'Build awareness programs for sustainable waste practices',
        ],
    },
]

export default function Verticals() {
    return (
        <>
            <PageHero
                title="Strategic Verticals"
                subtitle="Four key focus areas driving innovation and sustainable development across Northeast India."
                breadcrumbs={[{ label: 'Verticals' }]}
            />

            <section className="py-20 bg-white">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <SectionHeader
                        label="Focus Areas"
                        title="Our Four Pillars of Innovation"
                        description="Each vertical addresses a critical area where Northeast India holds unique potential for breakthrough innovation."
                    />

                    <div className="space-y-12">
                        {verticals.map((v, i) => (
                            <div
                                key={i}
                                className={`bg-white rounded-2xl border border-gray-100 border-l-4 ${v.border} p-8 lg:p-10 hover:shadow-lg transition-all`}
                            >
                                <div className="flex flex-col lg:flex-row gap-8">
                                    <div className="flex-1">
                                        <div className="flex items-center gap-4 mb-4">
                                            <div className={`w-14 h-14 rounded-xl ${v.bg} ${v.text} flex items-center justify-center flex-shrink-0`}>
                                                {v.icon}
                                            </div>
                                            <h3 className="font-[var(--font-heading)] font-bold text-[var(--color-dark)] text-xl lg:text-2xl">
                                                {v.title}
                                            </h3>
                                        </div>
                                        <p className="text-gray-600 leading-relaxed mb-6">{v.description}</p>
                                    </div>
                                    <div className="lg:w-[380px] flex-shrink-0">
                                        <h4 className="font-[var(--font-accent)] font-semibold text-sm text-gray-800 mb-3 uppercase tracking-wider">
                                            Key Objectives
                                        </h4>
                                        <ul className="space-y-2.5">
                                            {v.goals.map((goal, j) => (
                                                <li key={j} className="flex items-start gap-2.5 text-sm text-gray-600">
                                                    <CheckCircle size={16} className={`${v.text} mt-0.5 flex-shrink-0`} />
                                                    {goal}
                                                </li>
                                            ))}
                                        </ul>
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
