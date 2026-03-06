import { useState, useEffect } from 'react'
import { Link, NavLink, useLocation } from 'react-router-dom'
import { Menu, X, ChevronDown } from 'lucide-react'

const navLinks = [
    { label: 'Home', path: '/' },
    {
        label: 'About Us',
        children: [
            { label: 'Cluster Formation', path: '/about' },
            { label: 'Gallery', path: '/gallery' },
        ],
    },
    {
        label: 'People',
        children: [
            { label: 'Leadership', path: '/leadership' },
            { label: 'Scientific Team', path: '/scientific-team' },
            { label: 'Executive Team', path: '/executive-team' },
        ],
    },
    { label: 'Verticals', path: '/verticals' },
    { label: 'Resources', path: '/resources' },
    { label: 'Courses', path: '/courses' },
    { label: 'Spokes', path: '/spokes' },
    { label: 'Logo', path: '/logo' },
    { label: 'Contact', path: '/contact' },
]

export default function Navbar() {
    const [scrolled, setScrolled] = useState(false)
    const [mobileOpen, setMobileOpen] = useState(false)
    const [openDropdown, setOpenDropdown] = useState(null)
    const location = useLocation()

    useEffect(() => {
        const handleScroll = () => setScrolled(window.scrollY > 30)
        window.addEventListener('scroll', handleScroll)
        return () => window.removeEventListener('scroll', handleScroll)
    }, [])

    useEffect(() => {
        setMobileOpen(false)
        setOpenDropdown(null)
    }, [location])

    // Close mobile menu on scroll
    useEffect(() => {
        const handleScroll = () => { if (mobileOpen) setMobileOpen(false) }
        window.addEventListener('scroll', handleScroll)
        return () => window.removeEventListener('scroll', handleScroll)
    }, [mobileOpen])

    const isHome = location.pathname === '/'

    return (
        <nav
            className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${scrolled
                ? 'bg-white/95 backdrop-blur-md shadow-lg'
                : 'bg-transparent'
                }`}
        >
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex items-center justify-between h-[80px]">
                    {/* Logo */}
                    <Link to="/" className="flex items-center gap-3 group">
                        <img
                            src="/nest-logo.jpg"
                            alt="NEST Cluster Logo"
                            className="w-12 h-12 rounded-full object-cover shadow-md group-hover:scale-105 transition-transform"
                        />
                        <div>
                            <span
                                className={`font-[var(--font-heading)] font-bold text-lg leading-tight block transition-colors ${scrolled ? 'text-forest-600' : 'text-white'
                                    }`}
                            >
                                NEST Cluster
                            </span>
                            <span
                                className={`text-[10px] font-[var(--font-accent)] tracking-widest uppercase leading-none transition-colors ${scrolled ? 'text-gold-500' : 'text-gold-300'
                                    }`}
                            >
                                IIT Guwahati
                            </span>
                        </div>
                    </Link>

                    {/* Desktop Links */}
                    <div className="hidden lg:flex items-center gap-1">
                        {navLinks.map((item) =>
                            item.children ? (
                                <div
                                    key={item.label}
                                    className="relative"
                                    onMouseEnter={() => setOpenDropdown(item.label)}
                                    onMouseLeave={() => setOpenDropdown(null)}
                                >
                                    <button
                                        className={`flex items-center gap-1 px-3 py-2 rounded-lg text-sm font-medium font-[var(--font-accent)] transition-all ${scrolled
                                            ? 'text-gray-700 hover:text-forest-500 hover:bg-forest-50'
                                            : 'text-white/90 hover:text-white hover:bg-white/10'
                                            }`}
                                    >
                                        {item.label}
                                        <ChevronDown
                                            size={14}
                                            className={`transition-transform ${openDropdown === item.label ? 'rotate-180' : ''}`}
                                        />
                                    </button>
                                    {/* Dropdown — uses pt-0 with invisible bridge to prevent gap */}
                                    <div
                                        className={`absolute top-full left-0 pt-0 ${openDropdown === item.label ? 'block' : 'hidden'
                                            }`}
                                    >
                                        {/* Invisible bridge to prevent gap between button and dropdown */}
                                        <div className="h-1" />
                                        <div className="min-w-[200px] bg-white rounded-xl shadow-xl border border-gray-100 py-2 animate-slide-down">
                                            {item.children.map((child) => (
                                                <NavLink
                                                    key={child.path}
                                                    to={child.path}
                                                    className={({ isActive }) =>
                                                        `block px-4 py-2.5 text-sm font-[var(--font-accent)] transition-colors ${isActive
                                                            ? 'text-forest-500 bg-forest-50 font-semibold'
                                                            : 'text-gray-600 hover:text-forest-500 hover:bg-forest-50/50'
                                                        }`
                                                    }
                                                >
                                                    {child.label}
                                                </NavLink>
                                            ))}
                                        </div>
                                    </div>
                                </div>
                            ) : (
                                <NavLink
                                    key={item.path}
                                    to={item.path}
                                    className={({ isActive }) =>
                                        `px-3 py-2 rounded-lg text-sm font-medium font-[var(--font-accent)] transition-all ${isActive
                                            ? scrolled
                                                ? 'text-forest-500 bg-forest-50'
                                                : 'text-white bg-white/15'
                                            : scrolled
                                                ? 'text-gray-700 hover:text-forest-500 hover:bg-forest-50'
                                                : 'text-white/90 hover:text-white hover:bg-white/10'
                                        }`
                                    }
                                >
                                    {item.label}
                                </NavLink>
                            )
                        )}
                    </div>

                    {/* Mobile Toggle */}
                    <button
                        onClick={() => setMobileOpen(!mobileOpen)}
                        className={`lg:hidden p-2 rounded-lg transition-colors ${scrolled ? 'text-gray-700 hover:bg-gray-100' : 'text-white hover:bg-white/10'
                            }`}
                    >
                        {mobileOpen ? <X size={24} /> : <Menu size={24} />}
                    </button>
                </div>
            </div>

            {/* Mobile Menu */}
            {mobileOpen && (
                <div className="lg:hidden bg-white border-t border-gray-100 shadow-2xl animate-slide-down">
                    <div className="px-4 py-4 space-y-1 max-h-[80vh] overflow-y-auto">
                        {navLinks.map((item) =>
                            item.children ? (
                                <div key={item.label}>
                                    <button
                                        onClick={() => setOpenDropdown(openDropdown === item.label ? null : item.label)}
                                        className="flex items-center justify-between w-full px-3 py-2.5 rounded-lg text-sm font-medium text-gray-700 hover:bg-forest-50"
                                    >
                                        {item.label}
                                        <ChevronDown
                                            size={14}
                                            className={`transition-transform ${openDropdown === item.label ? 'rotate-180' : ''}`}
                                        />
                                    </button>
                                    {openDropdown === item.label && (
                                        <div className="ml-4 mt-1 space-y-1 border-l-2 border-forest-200 pl-3">
                                            {item.children.map((child) => (
                                                <NavLink
                                                    key={child.path}
                                                    to={child.path}
                                                    className={({ isActive }) =>
                                                        `block px-3 py-2 rounded-lg text-sm ${isActive
                                                            ? 'text-forest-500 bg-forest-50 font-semibold'
                                                            : 'text-gray-600 hover:text-forest-500 hover:bg-forest-50/50'
                                                        }`
                                                    }
                                                >
                                                    {child.label}
                                                </NavLink>
                                            ))}
                                        </div>
                                    )}
                                </div>
                            ) : (
                                <NavLink
                                    key={item.path}
                                    to={item.path}
                                    className={({ isActive }) =>
                                        `block px-3 py-2.5 rounded-lg text-sm font-medium ${isActive
                                            ? 'text-forest-500 bg-forest-50 font-semibold'
                                            : 'text-gray-700 hover:text-forest-500 hover:bg-forest-50'
                                        }`
                                    }
                                >
                                    {item.label}
                                </NavLink>
                            )
                        )}
                    </div>
                </div>
            )}
        </nav>
    )
}
