import { Link } from 'react-router-dom'
import { Phone, MapPin, Clock, Globe } from 'lucide-react'

const services = [
  'General Repair', 'Oil Changes', 'Brake Repair', 'Engine Repair',
  'Transmission Repair', 'Suspension', 'Diesel Diagnostics', 'HVAC Repair',
]

export default function Footer() {
  return (
    <footer className="bg-brand-dark-2 border-t border-white/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
          {/* Brand */}
          <div className="lg:col-span-1">
            <div className="mb-4">
              <img
                src="/logo.png"
                alt="Immortal Automotive Performance Inc."
                className="h-12 w-auto"
              />
            </div>
            <p className="text-white/50 text-sm leading-relaxed">
              Expert truck repair and diesel mechanics in Sherwood Park & Edmonton, AB. Built to last. Tuned to perform.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-white font-bold uppercase tracking-widest text-xs mb-4">Quick Links</h3>
            <ul className="space-y-2">
              {[
                { to: '/', label: 'Home' },
                { to: '/services', label: 'Services & Pricing' },
                { to: '/brands', label: 'Our Brands' },
                { to: '/about', label: 'About Us' },
                { to: '/contact', label: 'Contact Us' },
              ].map(({ to, label }) => (
                <li key={to}>
                  <Link to={to} className="text-white/60 hover:text-brand-orange text-sm transition-colors">
                    {label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-white font-bold uppercase tracking-widest text-xs mb-4">Services</h3>
            <ul className="space-y-2">
              {services.map(s => (
                <li key={s}>
                  <Link to="/services" className="text-white/60 hover:text-brand-orange text-sm transition-colors">
                    {s}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-white font-bold uppercase tracking-widest text-xs mb-4">Contact</h3>
            <ul className="space-y-3">
              <li>
                <a href="tel:7805047505" className="flex items-start gap-2.5 text-white/60 hover:text-brand-orange text-sm transition-colors">
                  <Phone size={14} className="mt-0.5 flex-shrink-0 text-brand-orange" />
                  780-504-7505
                </a>
              </li>
              <li>
                <a href="https://www.immortalauto.com" className="flex items-start gap-2.5 text-white/60 hover:text-brand-orange text-sm transition-colors">
                  <Globe size={14} className="mt-0.5 flex-shrink-0 text-brand-orange" />
                  www.immortalauto.com
                </a>
              </li>
              <li>
                <span className="flex items-start gap-2.5 text-white/60 text-sm">
                  <MapPin size={14} className="mt-0.5 flex-shrink-0 text-brand-orange" />
                  114 Sioux Rd, Sherwood Park, AB
                </span>
              </li>
              <li>
                <span className="flex items-start gap-2.5 text-white/60 text-sm">
                  <Clock size={14} className="mt-0.5 flex-shrink-0 text-brand-orange" />
                  <span>
                    Mon–Fri: 9:00 AM – 6:00 PM<br />
                    Sat: Closed<br />
                    Sun: Closed
                  </span>
                </span>
              </li>
            </ul>
          </div>
        </div>
      </div>

      <div className="border-t border-white/5 bg-brand-dark">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 flex flex-col sm:flex-row justify-between items-center gap-2 text-xs text-white/30">
          <span>© {new Date().getFullYear()} Immortal Automotive Performance Inc. All rights reserved.</span>
          <span>114 Sioux Rd, Sherwood Park, AB</span>
        </div>
      </div>
    </footer>
  )
}
