import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import {
  Wrench, Droplets, Disc3, Zap, GitMerge, Settings2,
  ShieldCheck, Wind, Gauge, Thermometer, Activity, CheckCircle2, ChevronRight, Phone
} from 'lucide-react'
import AnimatedSection from '../components/AnimatedSection'
import SectionHeading from '../components/SectionHeading'
import GrayscaleImage from '../components/GrayscaleImage'

const pricing = [
  { service: 'Oil Change', starting: '$90', includes: 'Filter, full top-off, safety check' },
  { service: 'Brake Pad Replacement', starting: '$150 per axle', includes: 'Parts + labor' },
  { service: 'Tire Rotation', starting: '$55', includes: '4-wheel rotation and inspection' },
  { service: 'AC Recharge', starting: '$189', includes: 'Diagnostic + full refill' },
  { service: 'Check Engine Light Scan', starting: '$140', includes: 'Full diagnostic scan & report' },
  { service: 'Transmission Service', starting: '$220', includes: 'Fluid flush, filter, inspection' },
]

const specialtyServices = [
  {
    icon: Zap,
    title: 'Engine Diagnostics & Rebuild',
    desc: "When your check engine light comes on or your diesel starts acting up, we get to the actual root cause — not just clear the code and send you home hoping for the best.",
    items: ['Check Engine Light diagnosis', 'Diesel injector service', 'Turbo inspection & repair', 'Full engine rebuild'],
  },
  {
    icon: GitMerge,
    title: 'Transmission Repair & Rebuild',
    desc: "Slipping gears, shuddering, weird noises at speed — transmission problems don't fix themselves. We rebuild them right, using quality parts that'll outlast the factory unit.",
    items: ['Automatic & manual transmission', 'Torque converter service', 'Clutch replacement', 'Full rebuild service'],
  },
  {
    icon: Activity,
    title: 'Suspension & Steering',
    desc: "A truck is only as capable as what's underneath it. Whether you're hauling, towing, or building something lifted, we'll set it up right so it handles the way it should.",
    items: ['Leaf spring replacement', 'Shock & strut service', 'Alignment inspection', 'Steering component repair'],
  },
  {
    icon: ShieldCheck,
    title: 'Electrical & Diagnostics',
    desc: "Electrical gremlins are the worst — and the hardest to find if you don't have the right tools and experience. We do. We track it down fast and fix it properly.",
    items: ['Full electrical diagnosis', 'Wiring harness repair', 'Battery & alternator service', 'ABS & traction control'],
  },
  {
    icon: Wind,
    title: 'HVAC System Repair',
    desc: "Alberta winters are brutal and summers aren't much better. Your heat and AC have to work. If your climate control is acting up, bring it in and we'll sort it out.",
    items: ['AC recharge & repair', 'Heater core service', 'Blower motor replacement', 'Climate control diagnosis'],
  },
  {
    icon: Gauge,
    title: 'Performance Upgrades',
    desc: "Want more out of your truck than it came with from the factory? We do performance builds and upgrades — from bolt-ons to full engine work. Tell us what you're after.",
    items: ['ECU tuning & remapping', 'Exhaust system upgrade', 'Intake & intercooler', 'Fuel system optimization'],
  },
]

export default function Services() {
  return (
    <>
      {/* ── Page Hero ── */}
      <section className="relative min-h-[70vh] flex items-center overflow-hidden">
        <div className="absolute inset-0">
          <GrayscaleImage
            src="/truck-hero.png"
            alt="White Chevy Silverado"
            overlayIntensity="strong"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-black via-black/70 to-transparent" />
          <div className="absolute inset-0 bg-gradient-to-t from-brand-dark via-transparent to-transparent" />
        </div>
        <div className="absolute left-0 top-0 bottom-0 w-1.5 bg-brand-orange" />

        <div className="relative z-10 w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-32 pb-20">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            className="max-w-3xl"
          >
            <span className="section-label block mb-4">Expert Repair</span>
            <h1 className="font-display text-7xl md:text-8xl lg:text-9xl leading-none text-white mb-6 tracking-wide">
              Truck Engine &{' '}
              <span className="text-gradient">Transmission Specialists</span>
            </h1>
            <p className="text-white/60 text-lg leading-relaxed mb-8 max-w-xl">
              We've seen it all — blown head gaskets, slipping transmissions, mystery codes that three other shops couldn't crack. If your truck's got a problem, we'll find it, tell you straight what it costs, and fix it right.
            </p>
            <div className="flex flex-wrap gap-4">
              <Link to="/contact" className="btn-primary">
                Schedule Service
                <ChevronRight size={16} />
              </Link>
              <a href="tel:7805047505" className="btn-outline">
                <Phone size={16} />
                Call Us
              </a>
            </div>
          </motion.div>
        </div>
      </section>

      {/* ── How It Works ── */}
      <section className="bg-black border-b border-white/5 overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 divide-y md:divide-y-0 md:divide-x divide-white/10">
            {[
              { step: '01', title: 'Book It', desc: "Call, text, or fill out the form. Tell us what's going on and we'll get you in." },
              { step: '02', title: 'We Diagnose', desc: 'We find the actual problem — not just the symptom. Full diagnostic before any work starts.' },
              { step: '03', title: 'You Approve, Then We Wrench', desc: "We tell you exactly what it'll cost. You say go. Only then do we touch your truck." },
            ].map(({ step, title, desc }) => (
              <div key={step} className="p-8 group relative overflow-hidden">
                <div className="font-display text-[8rem] leading-none text-white/5 absolute -top-4 -left-2 select-none group-hover:text-brand-orange/10 transition-colors duration-500">{step}</div>
                <div className="relative">
                  <div className="font-display text-6xl text-brand-orange leading-none mb-4">{step}</div>
                  <div className="text-white font-bold text-xl mb-2">{title}</div>
                  <div className="text-white/50 text-sm leading-relaxed">{desc}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Standard Pricing ── */}
      <section className="py-20 md:py-28 bg-brand-dark-2">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading
            label="Transparent Pricing"
            title="Pricing for Standard Services"
            subtitle="Prices may vary based on vehicle type and condition. Contact us for a custom quote."
          />

          <AnimatedSection>
            <div className="overflow-x-auto rounded-xl border border-white/10">
              <table className="w-full text-sm">
                <thead>
                  <tr className="bg-brand-orange text-white">
                    <th className="text-left px-6 py-4 font-bold uppercase tracking-wider">Service</th>
                    <th className="text-left px-6 py-4 font-bold uppercase tracking-wider">Starting At</th>
                    <th className="text-left px-6 py-4 font-bold uppercase tracking-wider hidden sm:table-cell">Includes</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-white/5">
                  {pricing.map(({ service, starting, includes }, i) => (
                    <motion.tr
                      key={service}
                      initial={{ opacity: 0, x: -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      transition={{ delay: i * 0.08, duration: 0.4 }}
                      viewport={{ once: true }}
                      className="bg-brand-dark-3 hover:bg-brand-dark-4 transition-colors group"
                    >
                      <td className="px-6 py-4 font-semibold text-white group-hover:text-brand-orange transition-colors">
                        {service}
                      </td>
                      <td className="px-6 py-4 text-brand-orange font-bold">{starting}</td>
                      <td className="px-6 py-4 text-white/50 hidden sm:table-cell">{includes}</td>
                    </motion.tr>
                  ))}
                </tbody>
              </table>
            </div>
            <p className="mt-3 text-white/30 text-xs">
              * All prices are starting prices and may vary. Tax not included. Contact us for a free estimate.
            </p>
          </AnimatedSection>
        </div>
      </section>

      {/* ── Image Divider — transmission work ── */}
      <div className="relative h-64 overflow-hidden">
        <GrayscaleImage
          src="https://images.unsplash.com/photo-1504328345606-18bbc8c9d7d1?w=1600&q=80"
          alt="Mechanic tools on shop bench"
          overlayIntensity="strong"
        />
        <div className="absolute inset-0 bg-brand-dark/70" />
        {/* Orange label banner — matching reference image style */}
        <div className="absolute bottom-0 left-0 right-0">
          <div className="bg-brand-orange px-8 py-3 inline-block">
            <span className="text-white font-black text-xl uppercase tracking-widest">Transmission Repair</span>
          </div>
        </div>
      </div>

      {/* ── Specialty Services ── */}
      <section className="py-20 md:py-28 bg-brand-dark">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading
            label="Specialty Repair"
            title="Specialty Repair Services"
            subtitle="Beyond standard maintenance, we tackle the complex repairs other shops won't touch."
          />

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {specialtyServices.map(({ icon: Icon, title, desc, items }, i) => (
              <AnimatedSection key={title} delay={i * 0.1}>
                <motion.div
                  whileHover={{ y: -4 }}
                  className="card-dark p-6 h-full flex flex-col hover:border-brand-orange/30 transition-colors"
                >
                  <div className="w-12 h-12 rounded-lg bg-brand-orange/10 border border-brand-orange/20 flex items-center justify-center mb-4">
                    <Icon size={22} className="text-brand-orange" />
                  </div>
                  <h3 className="font-bold text-white text-lg mb-2">{title}</h3>
                  <p className="text-white/50 text-sm leading-relaxed mb-4 flex-1">{desc}</p>
                  <ul className="space-y-1.5">
                    {items.map(item => (
                      <li key={item} className="flex items-center gap-2 text-white/60 text-sm">
                        <CheckCircle2 size={13} className="text-brand-orange flex-shrink-0" />
                        {item}
                      </li>
                    ))}
                  </ul>
                </motion.div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* ── Book Service CTA ── */}
      <section className="py-20 bg-brand-dark-2">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <AnimatedSection direction="right">
              <span className="section-label block mb-3">Schedule Service</span>
              <h2 className="text-4xl font-black text-white mb-4">
                Schedule <span className="text-gradient">Service</span>
              </h2>
              <p className="text-white/60 leading-relaxed mb-6">
                Tell us what's going on and we'll get you in. No obligation, no runaround — just straight answers and solid work.
              </p>
              <ul className="space-y-2 mb-8">
                {['Free diagnostic estimate', 'Same-day appointments often available', 'We tell you the cost before we touch it'].map(item => (
                  <li key={item} className="flex items-center gap-2 text-white/70 text-sm">
                    <CheckCircle2 size={15} className="text-brand-orange" />
                    {item}
                  </li>
                ))}
              </ul>
              <Link to="/contact" className="btn-primary text-base px-8 py-4">
                Request Booking
                <ChevronRight size={18} />
              </Link>
            </AnimatedSection>

            <AnimatedSection delay={0.2}>
              <div className="card-dark p-8">
                <h3 className="text-white font-bold text-xl mb-6">Quick Contact</h3>
                <div className="space-y-4">
                  {[
                    { label: 'Phone', value: '780-504-7505', href: 'tel:7805047505' },
                    { label: 'Email', value: 'immortalautomotiveperformance@outlook.com', href: 'mailto:immortalautomotiveperformance@outlook.com' },
                    { label: 'Address', value: '114 Sioux Rd, Sherwood Park, AB', href: null },
                    { label: 'Hours', value: 'Mon–Fri 9AM–6PM | Sat–Sun Closed', href: null },
                  ].map(({ label, value, href }) => (
                    <div key={label} className="flex flex-col gap-0.5">
                      <span className="text-white/30 text-xs uppercase tracking-wider">{label}</span>
                      {href ? (
                        <a href={href} className="text-white font-semibold hover:text-brand-orange transition-colors">
                          {value}
                        </a>
                      ) : (
                        <span className="text-white font-semibold">{value}</span>
                      )}
                    </div>
                  ))}
                </div>
              </div>
            </AnimatedSection>
          </div>
        </div>
      </section>
    </>
  )
}
