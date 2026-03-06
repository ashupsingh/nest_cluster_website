import { Link } from 'react-router-dom'
import { Mail, Phone, MapPin, ExternalLink } from 'lucide-react'

export default function Footer() {
    return (
        <footer className="gradient-twilight text-white ne-pattern">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-16 pb-8">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 mb-12">
                    {/* Brand */}
                    <div className="lg:col-span-1">
                        <div className="flex items-center gap-3 mb-4">
                            <img
                                src="/nest-logo.jpg"
                                alt="NEST Cluster Logo"
                                className="w-11 h-11 rounded-full object-cover shadow-md"
                            />
                            <div>
                                <span className="font-[var(--font-heading)] font-bold text-lg text-white block leading-tight">
                                    NEST Cluster
                                </span>
                                <span className="text-[10px] font-[var(--font-accent)] tracking-widest uppercase text-gold-400">
                                    IIT Guwahati
                                </span>
                            </div>
                        </div>
                        <p className="text-white/60 text-sm leading-relaxed">
                            North Eastern Science & Technology Cluster — Driving research, innovation
                            and skill development across the Seven Sisters of Northeast India.
                        </p>
                    </div>

                    {/* Quick Links */}
                    <div>
                        <h4 className="font-[var(--font-accent)] font-semibold text-gold-400 text-sm uppercase tracking-wider mb-4">
                            Quick Links
                        </h4>
                        <ul className="space-y-2.5">
                            {[
                                { label: 'About Us', path: '/about' },
                                { label: 'Verticals', path: '/verticals' },
                                { label: 'Spokes', path: '/spokes' },
                                { label: 'Courses', path: '/courses' },
                                { label: 'Gallery', path: '/gallery' },
                            ].map((link) => (
                                <li key={link.path}>
                                    <Link
                                        to={link.path}
                                        className="text-white/60 hover:text-gold-300 text-sm transition-colors flex items-center gap-1.5"
                                    >
                                        <span className="w-1 h-1 rounded-full bg-gold-500" />
                                        {link.label}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* People */}
                    <div>
                        <h4 className="font-[var(--font-accent)] font-semibold text-gold-400 text-sm uppercase tracking-wider mb-4">
                            People
                        </h4>
                        <ul className="space-y-2.5">
                            {[
                                { label: 'Leadership', path: '/leadership' },
                                { label: 'Scientific Team', path: '/scientific-team' },
                                { label: 'Executive Team', path: '/executive-team' },
                                { label: 'Resources', path: '/resources' },
                                { label: 'Contact Us', path: '/contact' },
                            ].map((link) => (
                                <li key={link.path}>
                                    <Link
                                        to={link.path}
                                        className="text-white/60 hover:text-gold-300 text-sm transition-colors flex items-center gap-1.5"
                                    >
                                        <span className="w-1 h-1 rounded-full bg-gold-500" />
                                        {link.label}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Contact */}
                    <div>
                        <h4 className="font-[var(--font-accent)] font-semibold text-gold-400 text-sm uppercase tracking-wider mb-4">
                            Contact
                        </h4>
                        <div className="space-y-3 text-sm text-white/60">
                            <div className="flex items-start gap-2.5">
                                <MapPin size={16} className="text-gold-400 mt-0.5 flex-shrink-0" />
                                <span>Office No. 04, Research Park,<br />IIT Guwahati, Assam 781039</span>
                            </div>
                            <a href="mailto:nest@iitg.ac.in" className="flex items-center gap-2.5 hover:text-gold-300 transition-colors">
                                <Mail size={16} className="text-gold-400 flex-shrink-0" />
                                nest@iitg.ac.in
                            </a>
                            <a href="tel:+913612914069" className="flex items-center gap-2.5 hover:text-gold-300 transition-colors">
                                <Phone size={16} className="text-gold-400 flex-shrink-0" />
                                +91-361-2914069
                            </a>
                            <a
                                href="https://iitg.ac.in"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="flex items-center gap-2.5 hover:text-gold-300 transition-colors"
                            >
                                <ExternalLink size={16} className="text-gold-400 flex-shrink-0" />
                                iitg.ac.in
                            </a>
                        </div>
                    </div>
                </div>

                {/* Divider */}
                <div className="border-t border-white/10 pt-6 flex flex-col md:flex-row items-center justify-between gap-4">
                    <p className="text-white/40 text-xs font-[var(--font-accent)]">
                        © {new Date().getFullYear()} NEST Cluster, IIT Guwahati. All rights reserved.
                    </p>
                    <p className="text-white/40 text-xs font-[var(--font-accent)]">
                        Funded by NEC & Ministry of DoNER, Govt. of India
                    </p>
                </div>
            </div>
        </footer>
    )
}
