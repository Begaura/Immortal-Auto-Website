import { useState, useEffect } from 'react'
import { Link, useLocation } from 'react-router-dom'
import { motion, AnimatePresence } from 'framer-motion'
import { Menu, X, Phone } from 'lucide-react'

const links = [
  { to: '/', label: 'Home' },
  { to: '/services', label: 'Services' },
  { to: '/brands', label: 'Brands' },
  { to: '/about', label: 'About' },
  { to: '/contact', label: 'Contact' },
]

export default function Navbar() {
  const [open, setOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const { pathname } = useLocation()

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20)
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  useEffect(() => { setOpen(false) }, [pathname])

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled ? 'bg-brand-dark/95 backdrop-blur-md shadow-lg shadow-black/40' : 'bg-transparent'
      }`}
    >
      {/* Top bar */}
      <div className="bg-brand-orange hidden md:block">
        <div className="max-w-7xl mx-auto px-4 py-1.5 flex justify-between items-center text-xs font-medium text-white">
          <span>Truck & Diesel Repair — Sherwood Park, AB</span>
          <a href="tel:7805047505" className="flex items-center gap-1.5 hover:text-white/80 transition-colors">
            <Phone size={12} />
            780-504-7505
          </a>
        </div>
      </div>

      <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 md:h-20">
          {/* Logo */}
          <Link to="/">
            <img
              src="/logo.png"
              alt="Immortal Automotive Performance Inc."
              className="h-14 md:h-16 w-auto"
            />
          </Link>

          {/* Desktop nav */}
          <div className="hidden md:flex items-center gap-1">
            {links.map(({ to, label }) => (
              <Link
                key={to}
                to={to}
                className={`px-4 py-2 rounded text-sm font-semibold uppercase tracking-wide transition-colors ${
                  pathname === to
                    ? 'text-brand-orange'
                    : 'text-white/80 hover:text-white'
                }`}
              >
                {label}
              </Link>
            ))}
            <a
              href="tel:7805047505"
              className="ml-4 btn-primary text-xs py-2.5 px-5"
            >
              <Phone size={14} />
              Call Now
            </a>
          </div>

          {/* Mobile hamburger */}
          <button
            onClick={() => setOpen(!open)}
            className="md:hidden p-2 text-white"
            aria-label="Toggle menu"
          >
            {open ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </nav>

      {/* Mobile menu */}
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.2 }}
            className="md:hidden bg-brand-dark-2 border-t border-white/10 overflow-hidden"
          >
            <div className="px-4 py-4 flex flex-col gap-1">
              {links.map(({ to, label }) => (
                <Link
                  key={to}
                  to={to}
                  className={`px-4 py-3 rounded font-semibold uppercase tracking-wide text-sm transition-colors ${
                    pathname === to
                      ? 'text-brand-orange bg-brand-orange/10'
                      : 'text-white/80 hover:text-white hover:bg-white/5'
                  }`}
                >
                  {label}
                </Link>
              ))}
              <a
                href="tel:7805047505"
                className="mt-2 btn-primary justify-center"
              >
                <Phone size={14} />
                Call 780-504-7505
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  )
}
