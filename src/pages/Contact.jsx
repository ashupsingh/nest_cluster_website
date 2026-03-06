import PageHero from '../components/PageHero'
import SectionHeader from '../components/SectionHeader'
import { Mail, Phone, MapPin, Clock, Send } from 'lucide-react'
import { useState } from 'react'

export default function Contact() {
    const [formData, setFormData] = useState({ name: '', email: '', subject: '', message: '' })

    const handleChange = (e) => {
        setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }))
    }

    const handleSubmit = (e) => {
        e.preventDefault()
        const mailto = `mailto:nest@iitg.ac.in?subject=${encodeURIComponent(formData.subject)}&body=${encodeURIComponent(
            `Name: ${formData.name}\nEmail: ${formData.email}\n\n${formData.message}`
        )}`
        window.location.href = mailto
    }

    return (
        <>
            <PageHero
                title="Contact Us"
                subtitle="Reach out to the NEST Cluster team for inquiries, partnerships, or collaboration opportunities."
                breadcrumbs={[{ label: 'Contact' }]}
            />

            <section className="py-20 bg-white">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="grid lg:grid-cols-5 gap-12">
                        {/* Contact Info */}
                        <div className="lg:col-span-2">
                            <SectionHeader label="Get in Touch" title="Contact Information" />
                            <div className="space-y-6">
                                <div className="flex items-start gap-4">
                                    <div className="w-12 h-12 rounded-xl bg-forest-50 text-forest-500 flex items-center justify-center flex-shrink-0">
                                        <MapPin size={22} />
                                    </div>
                                    <div>
                                        <h4 className="font-[var(--font-accent)] font-semibold text-[var(--color-dark)] text-sm mb-1">Address</h4>
                                        <p className="text-gray-500 text-sm leading-relaxed">
                                            Office No. 04, Research Park,<br />
                                            IIT Guwahati, Assam 781039,<br />
                                            India
                                        </p>
                                    </div>
                                </div>

                                <div className="flex items-start gap-4">
                                    <div className="w-12 h-12 rounded-xl bg-gold-50 text-gold-600 flex items-center justify-center flex-shrink-0">
                                        <Mail size={22} />
                                    </div>
                                    <div>
                                        <h4 className="font-[var(--font-accent)] font-semibold text-[var(--color-dark)] text-sm mb-1">Email</h4>
                                        <a href="mailto:nest@iitg.ac.in" className="text-forest-500 text-sm font-semibold hover:underline">
                                            nest@iitg.ac.in
                                        </a>
                                    </div>
                                </div>

                                <div className="flex items-start gap-4">
                                    <div className="w-12 h-12 rounded-xl bg-terra-50 text-terra-400 flex items-center justify-center flex-shrink-0">
                                        <Phone size={22} />
                                    </div>
                                    <div>
                                        <h4 className="font-[var(--font-accent)] font-semibold text-[var(--color-dark)] text-sm mb-1">Phone</h4>
                                        <a href="tel:+913612914069" className="text-gray-600 text-sm hover:text-forest-500 transition-colors">
                                            +91-361-2914069
                                        </a>
                                    </div>
                                </div>

                                <div className="flex items-start gap-4">
                                    <div className="w-12 h-12 rounded-xl bg-[#EDE7F6] text-[var(--color-indigo-ne)] flex items-center justify-center flex-shrink-0">
                                        <Clock size={22} />
                                    </div>
                                    <div>
                                        <h4 className="font-[var(--font-accent)] font-semibold text-[var(--color-dark)] text-sm mb-1">Office Hours</h4>
                                        <p className="text-gray-500 text-sm">Mon – Fri: 9:00 AM – 5:30 PM IST</p>
                                    </div>
                                </div>
                            </div>

                            {/* Program Director */}
                            <div className="mt-8 bg-gray-50 rounded-2xl p-6 border border-gray-100">
                                <h4 className="font-[var(--font-accent)] font-semibold text-[var(--color-dark)] text-sm mb-2">Project Director</h4>
                                <p className="text-gray-600 text-sm font-semibold">Prof. Vimal Katiyar</p>
                                <p className="text-gray-500 text-xs">Department of Chemical Engineering, IIT Guwahati</p>
                                <a href="mailto:nest@iitg.ac.in" className="text-forest-500 text-xs font-semibold hover:underline">
                                    nest@iitg.ac.in
                                </a>
                                <span className="text-gray-400 text-xs block mt-1">+91-361-2583350</span>
                            </div>
                        </div>

                        {/* Contact Form */}
                        <div className="lg:col-span-3">
                            <div className="bg-white rounded-2xl border border-gray-100 shadow-md p-8">
                                <h3 className="font-[var(--font-heading)] font-bold text-[var(--color-dark)] text-xl mb-6">
                                    Send Us a Message
                                </h3>
                                <form onSubmit={handleSubmit} className="space-y-5">
                                    <div className="grid sm:grid-cols-2 gap-5">
                                        <div>
                                            <label className="block text-xs font-[var(--font-accent)] font-semibold text-gray-700 mb-1.5">
                                                Full Name
                                            </label>
                                            <input
                                                type="text"
                                                name="name"
                                                value={formData.name}
                                                onChange={handleChange}
                                                required
                                                className="w-full px-4 py-3 rounded-xl border border-gray-200 text-sm focus:outline-none focus:ring-2 focus:ring-forest-300 focus:border-forest-300 transition-all"
                                                placeholder="Your name"
                                            />
                                        </div>
                                        <div>
                                            <label className="block text-xs font-[var(--font-accent)] font-semibold text-gray-700 mb-1.5">
                                                Email Address
                                            </label>
                                            <input
                                                type="email"
                                                name="email"
                                                value={formData.email}
                                                onChange={handleChange}
                                                required
                                                className="w-full px-4 py-3 rounded-xl border border-gray-200 text-sm focus:outline-none focus:ring-2 focus:ring-forest-300 focus:border-forest-300 transition-all"
                                                placeholder="your@email.com"
                                            />
                                        </div>
                                    </div>
                                    <div>
                                        <label className="block text-xs font-[var(--font-accent)] font-semibold text-gray-700 mb-1.5">
                                            Subject
                                        </label>
                                        <input
                                            type="text"
                                            name="subject"
                                            value={formData.subject}
                                            onChange={handleChange}
                                            required
                                            className="w-full px-4 py-3 rounded-xl border border-gray-200 text-sm focus:outline-none focus:ring-2 focus:ring-forest-300 focus:border-forest-300 transition-all"
                                            placeholder="How can we help?"
                                        />
                                    </div>
                                    <div>
                                        <label className="block text-xs font-[var(--font-accent)] font-semibold text-gray-700 mb-1.5">
                                            Message
                                        </label>
                                        <textarea
                                            name="message"
                                            value={formData.message}
                                            onChange={handleChange}
                                            required
                                            rows={5}
                                            className="w-full px-4 py-3 rounded-xl border border-gray-200 text-sm focus:outline-none focus:ring-2 focus:ring-forest-300 focus:border-forest-300 transition-all resize-none"
                                            placeholder="Tell us about your inquiry..."
                                        />
                                    </div>
                                    <button
                                        type="submit"
                                        className="inline-flex items-center gap-2 px-7 py-3.5 rounded-full gradient-forest text-white font-[var(--font-accent)] font-semibold shadow-md hover:-translate-y-0.5 transition-all hover:shadow-lg"
                                    >
                                        Send Message <Send size={16} />
                                    </button>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Map placeholder */}
            <section className="pb-20 bg-white">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="rounded-2xl overflow-hidden border border-gray-200 h-[350px]">
                        <iframe
                            title="NEST Cluster Location"
                            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3581.123456789!2d91.69!3d26.19!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2sIIT+Guwahati!5e0!3m2!1sen!2sin!4v1700000000000"
                            width="100%"
                            height="100%"
                            style={{ border: 0 }}
                            allowFullScreen=""
                            loading="lazy"
                            referrerPolicy="no-referrer-when-downgrade"
                        />
                    </div>
                </div>
            </section>
        </>
    )
}
