import { useState } from 'react'
import { motion } from 'framer-motion'
import { Phone, MapPin, Clock, Globe, CheckCircle2, Send } from 'lucide-react'
import AnimatedSection from '../components/AnimatedSection'
import SectionHeading from '../components/SectionHeading'
import GrayscaleImage from '../components/GrayscaleImage'

const serviceOptions = [
  'Oil Change',
  'Brake Repair',
  'Engine Diagnostics / Repair',
  'Transmission Service / Repair',
  'Suspension & Steering',
  'Electrical & Diagnostics',
  'HVAC System Repair',
  'Performance Tuning',
  'General Repair',
  'Other',
]

export default function Contact() {
  const [form, setForm] = useState({
    name: '',
    email: '',
    phone: '',
    service: '',
    date: '',
    message: '',
  })
  const [submitted, setSubmitted] = useState(false)

  const handleChange = e => setForm(f => ({ ...f, [e.target.name]: e.target.value }))

  const handleSubmit = e => {
    e.preventDefault()
    // Replace with actual form submission (Formspree, EmailJS, etc.)
    setSubmitted(true)
  }

  return (
    <>
      {/* ── Hero ── */}
      <section className="relative pt-36 pb-20 overflow-hidden">
        <div className="absolute inset-0">
          {/* Mechanic with diagnostic tool */}
          <GrayscaleImage
            src="https://images.unsplash.com/photo-1615906655593-ad0386982a0f?w=1600&q=80"
            alt="Mechanic with diagnostic tool"
            overlayIntensity="strong"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-brand-dark/90 to-brand-dark" />
        </div>
        <div className="absolute left-0 top-0 bottom-0 w-1.5 bg-brand-orange" />

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
          >
            <span className="section-label block mb-4">Get in Touch</span>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-black leading-tight text-white mb-4">
              <span className="text-gradient">Contact Us</span>
            </h1>
            <p className="text-white/60 text-lg max-w-xl mx-auto">
              Need help with your truck? Whether you're dealing with engine issues, transmission problems, or need diagnostics, the team at Immortal Automotive Performance is here to help.
            </p>
          </motion.div>
        </div>
      </section>

      {/* ── Contact Main ── */}
      <section className="py-20 md:py-28 bg-brand-dark">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-16">

            {/* Contact Info */}
            <AnimatedSection direction="right">
              <div className="space-y-8">
                <div>
                  <h2 className="text-3xl font-black text-white mb-2">Reach Out Today</h2>
                  <p className="text-white/60">
                    Reach out today to schedule a service or ask any questions about your vehicle.
                  </p>
                </div>

                <div className="space-y-4">
                  {[
                    {
                      icon: Phone,
                      label: 'Phone',
                      value: '780-504-7505',
                      href: 'tel:7805047505',
                      sub: 'Call or text anytime',
                    },
                    {
                      icon: Globe,
                      label: 'Website',
                      value: 'www.immortalauto.com',
                      href: 'https://www.immortalauto.com',
                      sub: 'Visit our website',
                    },
                    {
                      icon: MapPin,
                      label: 'Location',
                      value: '114 Sioux Rd, Sherwood Park, AB',
                      href: 'https://maps.google.com/?q=114+Sioux+Rd+Sherwood+Park+AB',
                      sub: 'Get directions',
                    },
                  ].map(({ icon: Icon, label, value, href, sub }) => (
                    <a
                      key={label}
                      href={href}
                      target={href.startsWith('http') ? '_blank' : undefined}
                      rel={href.startsWith('http') ? 'noopener noreferrer' : undefined}
                      className="flex items-start gap-4 p-4 card-dark rounded-xl hover:border-brand-orange/40 transition-colors group"
                    >
                      <div className="w-10 h-10 rounded-lg bg-brand-orange/10 border border-brand-orange/20 flex items-center justify-center flex-shrink-0 group-hover:bg-brand-orange/20 transition-colors">
                        <Icon size={18} className="text-brand-orange" />
                      </div>
                      <div>
                        <div className="text-white/40 text-xs uppercase tracking-wider mb-0.5">{label}</div>
                        <div className="text-white font-semibold text-sm group-hover:text-brand-orange transition-colors">{value}</div>
                        <div className="text-white/40 text-xs">{sub}</div>
                      </div>
                    </a>
                  ))}
                </div>

                {/* Hours */}
                <div className="card-dark p-5 rounded-xl">
                  <div className="flex items-center gap-2 mb-4">
                    <Clock size={16} className="text-brand-orange" />
                    <span className="text-white font-bold text-sm uppercase tracking-wider">Business Hours</span>
                  </div>
                  <div className="space-y-2">
                    {[
                      { day: 'Monday – Friday', hours: '8:00 AM – 5:00 PM', open: true },
                      { day: 'Saturday', hours: 'By Appointment', open: true },
                      { day: 'Sunday', hours: 'Closed', open: false },
                    ].map(({ day, hours, open }) => (
                      <div key={day} className="flex justify-between items-center text-sm py-1.5 border-b border-white/5 last:border-0">
                        <span className="text-white/60">{day}</span>
                        <span className={open ? 'text-white font-medium' : 'text-white/30'}>{hours}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Map placeholder with B&W + orange style */}
                <div className="relative rounded-xl overflow-hidden h-48 border border-white/10">
                  <GrayscaleImage
                    src="https://images.unsplash.com/photo-1524661135-423995f22d0b?w=800&q=60"
                    alt="Map location area"
                    overlayIntensity="medium"
                  />
                  <div className="absolute inset-0 bg-brand-dark/50" />
                  <div className="absolute inset-0 flex items-center justify-center">
                    <a
                      href="https://maps.google.com/?q=114+Sioux+Rd+Sherwood+Park+AB"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="btn-primary text-sm"
                    >
                      <MapPin size={14} />
                      Open in Google Maps
                    </a>
                  </div>
                  {/* Orange bottom bar */}
                  <div className="absolute bottom-0 left-0 right-0 h-1 bg-brand-orange" />
                </div>
              </div>
            </AnimatedSection>

            {/* Contact Form */}
            <AnimatedSection delay={0.15}>
              {submitted ? (
                <motion.div
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="card-dark p-8 rounded-xl flex flex-col items-center justify-center text-center min-h-96"
                >
                  <div className="w-16 h-16 rounded-full bg-brand-orange/10 border border-brand-orange/30 flex items-center justify-center mb-6">
                    <CheckCircle2 size={32} className="text-brand-orange" />
                  </div>
                  <h3 className="text-2xl font-black text-white mb-3">Message Sent!</h3>
                  <p className="text-white/60 leading-relaxed max-w-xs">
                    Thanks for reaching out. We'll get back to you within one business day to confirm your appointment.
                  </p>
                  <button
                    onClick={() => setSubmitted(false)}
                    className="mt-8 btn-outline text-sm"
                  >
                    Send Another Message
                  </button>
                </motion.div>
              ) : (
                <form onSubmit={handleSubmit} className="card-dark p-6 md:p-8 rounded-xl space-y-5">
                  <h3 className="text-xl font-black text-white mb-2">Request a Booking</h3>
                  <p className="text-white/50 text-sm">Fill out the form below and we'll be in touch within one business day.</p>

                  <div className="grid sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-white/50 text-xs uppercase tracking-wider mb-1.5">Full Name *</label>
                      <input
                        type="text"
                        name="name"
                        required
                        value={form.name}
                        onChange={handleChange}
                        placeholder="Your name"
                        className="w-full bg-brand-dark border border-white/10 focus:border-brand-orange text-white placeholder-white/20 rounded-lg px-4 py-3 text-sm outline-none transition-colors"
                      />
                    </div>
                    <div>
                      <label className="block text-white/50 text-xs uppercase tracking-wider mb-1.5">Phone</label>
                      <input
                        type="tel"
                        name="phone"
                        value={form.phone}
                        onChange={handleChange}
                        placeholder="780-000-0000"
                        className="w-full bg-brand-dark border border-white/10 focus:border-brand-orange text-white placeholder-white/20 rounded-lg px-4 py-3 text-sm outline-none transition-colors"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-white/50 text-xs uppercase tracking-wider mb-1.5">Email Address *</label>
                    <input
                      type="email"
                      name="email"
                      required
                      value={form.email}
                      onChange={handleChange}
                      placeholder="your@email.com"
                      className="w-full bg-brand-dark border border-white/10 focus:border-brand-orange text-white placeholder-white/20 rounded-lg px-4 py-3 text-sm outline-none transition-colors"
                    />
                  </div>

                  <div>
                    <label className="block text-white/50 text-xs uppercase tracking-wider mb-1.5">Service Type</label>
                    <select
                      name="service"
                      value={form.service}
                      onChange={handleChange}
                      className="w-full bg-brand-dark border border-white/10 focus:border-brand-orange text-white rounded-lg px-4 py-3 text-sm outline-none transition-colors appearance-none"
                    >
                      <option value="">Select a service…</option>
                      {serviceOptions.map(s => (
                        <option key={s} value={s} className="bg-brand-dark-3">{s}</option>
                      ))}
                    </select>
                  </div>

                  <div>
                    <label className="block text-white/50 text-xs uppercase tracking-wider mb-1.5">Preferred Date</label>
                    <input
                      type="date"
                      name="date"
                      value={form.date}
                      onChange={handleChange}
                      className="w-full bg-brand-dark border border-white/10 focus:border-brand-orange text-white rounded-lg px-4 py-3 text-sm outline-none transition-colors"
                    />
                  </div>

                  <div>
                    <label className="block text-white/50 text-xs uppercase tracking-wider mb-1.5">Leave a Message</label>
                    <textarea
                      name="message"
                      value={form.message}
                      onChange={handleChange}
                      rows={4}
                      placeholder="Describe the issue or service you need…"
                      className="w-full bg-brand-dark border border-white/10 focus:border-brand-orange text-white placeholder-white/20 rounded-lg px-4 py-3 text-sm outline-none transition-colors resize-none"
                    />
                  </div>

                  <motion.button
                    type="submit"
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    className="w-full btn-primary justify-center py-4 text-base"
                  >
                    <Send size={16} />
                    Submit Request
                  </motion.button>

                  <p className="text-white/25 text-xs text-center">
                    Your information is confidential and will never be shared with third parties.
                  </p>
                </form>
              )}
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* ── Our Promise — full width B&W image with orange overlay ── */}
      <section className="relative py-20 overflow-hidden">
        <div className="absolute inset-0">
          <GrayscaleImage
            src="https://images.unsplash.com/photo-1508974239320-0a029497e820?w=1600&q=80"
            alt="Mechanic shop"
            overlayIntensity="medium"
          />
          <div className="absolute inset-0 bg-brand-dark/80" />
        </div>
        {/* Orange accent bars */}
        <div className="absolute top-0 left-0 right-0 h-1 bg-brand-orange" />
        <div className="absolute bottom-0 left-0 right-0 h-1 bg-brand-orange" />

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading
            label="Our Promise"
            title="Honest. Strong. Reliable."
            center
          />

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl mx-auto">
            {[
              { title: 'Honest Diagnostics', desc: 'We explain exactly what\'s wrong and what it will cost before any work begins.' },
              { title: 'Quality Workmanship', desc: 'Every job is done with attention to detail using the right tools and parts.' },
              { title: 'Built to Last', desc: 'Our repairs are built for longevity — we stand behind everything we do.' },
              { title: 'Respect for Your Time', desc: 'We work efficiently so your truck is back in service as fast as possible.' },
              { title: 'Customer First', desc: 'We communicate clearly and treat every customer with respect.' },
              { title: 'Fair Pricing', desc: 'Transparent rates with no surprises. You approve every cost upfront.' },
            ].map(({ title, desc }, i) => (
              <AnimatedSection key={title} delay={i * 0.08}>
                <div className="flex gap-3 p-4">
                  <CheckCircle2 size={18} className="text-brand-orange flex-shrink-0 mt-0.5" />
                  <div>
                    <div className="font-bold text-white text-sm mb-1">{title}</div>
                    <div className="text-white/50 text-sm">{desc}</div>
                  </div>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>
    </>
  )
}
