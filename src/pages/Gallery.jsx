import PageHero from '../components/PageHero'
import SectionHeader from '../components/SectionHeader'
import { Camera, Calendar, MapPin } from 'lucide-react'

const galleryItems = [
    {
        title: 'Inauguration Ceremony',
        desc: 'NEST Cluster inauguration by Shri Jyotiraditya M. Scindia, November 3, 2025',
        image: '/images/assam.png',
    },
    {
        title: 'Living Root Bridges',
        desc: 'Meghalaya\'s iconic root bridges — nature and engineering in harmony',
        image: '/images/meghalaya.png',
    },
    {
        title: 'Naga Heritage',
        desc: 'The rich warrior heritage and tribal craftsmanship of Nagaland',
        image: '/images/nagaland.png',
    },
    {
        title: 'Manipuri Dance',
        desc: 'The grace of Manipuri classical dance and Loktak Lake\'s floating islands',
        image: '/images/manipur.png',
    },
    {
        title: 'Cheraw Dance',
        desc: 'Mizoram\'s traditional bamboo dance — a symbol of cultural vibrancy',
        image: '/images/mizoram.png',
    },
    {
        title: 'Neermahal Palace',
        desc: 'Tripura\'s water palace — a jewel of royal heritage on Rudrasagar Lake',
        image: '/images/tripura.png',
    },
    {
        title: 'Assamese Culture',
        desc: 'The Gamosha, Japi, and Assam tea — icons of Assamese identity',
        image: '/images/assam.png',
    },
    {
        title: 'Bamboo Innovation',
        desc: 'Bamboo processing and value-added product development workshops',
        image: '/images/meghalaya.png',
    },
    {
        title: 'Community Workshops',
        desc: 'Training programs for rural women in biodegradable toy manufacturing',
        image: '/images/manipur.png',
    },
]

export default function Gallery() {
    return (
        <>
            <PageHero
                title="Gallery"
                subtitle="Moments captured from NEST Cluster events, workshops, and activities across Northeast India."
                breadcrumbs={[{ label: 'About Us', path: '/about' }, { label: 'Gallery' }]}
            />

            <section className="py-20 bg-white">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <SectionHeader
                        label="Highlights"
                        title="Event Gallery"
                        description="A visual journey through the NEST Cluster's activities, events, and the culture of Northeast India's Seven Sisters."
                    />
                    <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
                        {galleryItems.map((item, i) => (
                            <div
                                key={i}
                                className="group relative bg-white rounded-2xl overflow-hidden border border-gray-100 hover:-translate-y-1 hover:shadow-xl transition-all cursor-pointer"
                            >
                                <div className="aspect-[4/3] overflow-hidden">
                                    <img
                                        src={item.image}
                                        alt={item.title}
                                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                                    />
                                </div>
                                <div className="p-5">
                                    <h3 className="font-[var(--font-heading)] font-bold text-[var(--color-dark)] text-base mb-1">
                                        {item.title}
                                    </h3>
                                    <p className="text-gray-500 text-sm">{item.desc}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>
        </>
    )
}
