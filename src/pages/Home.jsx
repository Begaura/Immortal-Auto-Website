import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import {
  ChevronRight, Phone, CheckCircle2, Wrench, Droplets,
  Disc3, Zap, GitMerge, Settings2, ShieldCheck, Wind,
  Gauge, Thermometer, Activity
} from 'lucide-react'
import AnimatedSection from '../components/AnimatedSection'
import SectionHeading from '../components/SectionHeading'
import GrayscaleImage from '../components/GrayscaleImage'

const services = [
  { icon: Wrench, label: 'General Repair' },
  { icon: Droplets, label: 'Oil Changes' },
  { icon: Disc3, label: 'Brake Repair' },
  { icon: Zap, label: 'Engine Repair' },
  { icon: GitMerge, label: 'Transmission Repair' },
  { icon: Activity, label: 'Suspension' },
  { icon: Settings2, label: 'Axle Repair' },
  { icon: Wind, label: 'HVAC System Repair' },
  { icon: ShieldCheck, label: 'Diagnosis & Electrical' },
  { icon: Thermometer, label: 'Coolant System Repair' },
  { icon: Gauge, label: 'Performance Tuning' },
  { icon: Settings2, label: 'Fleet Maintenance' },
]

const whyUs = [
  'Diesel & performance specialists',
  'Straight answers before we touch your truck',
  'Daily drivers & full builds — we do both',
  'Fast turnaround, no runaround',
]

const stats = [
  { value: '100%', label: 'Satisfaction Guarantee' },
  { value: '300+', label: 'Trucks Serviced' },
  { value: '4.9★', label: 'Google Rating' },
  { value: '24hr', label: 'Avg. Turnaround' },
]

export default function Home() {
  return (
    <>
      {/* ── Hero ── */}
      <section className="relative min-h-screen flex items-center overflow-hidden">
        <div className="absolute inset-0">
          {/* Heavy-duty truck in shop — grayscale + orange accent */}
          <GrayscaleImage
            src="/burnout-truck.png"
            alt="Black truck doing burnout"
            overlayIntensity="strong"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-brand-dark/70 via-brand-dark/60 to-brand-dark" />
          <div className="absolute inset-0 bg-gradient-to-r from-brand-dark/90 via-brand-dark/40 to-transparent" />
        </div>

        {/* Orange accent bar */}
        <div className="absolute left-0 top-0 bottom-0 w-1.5 bg-brand-orange" />

        <div className="relative z-10 w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-32 pb-20">
          <motion.div
            initial={{ opacity: 0, y: 60 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: [0.25, 0.46, 0.45, 0.94] }}
            className="max-w-4xl"
          >
            <motion.span
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.2, duration: 0.5 }}
              className="section-label inline-block mb-4"
            >
              Sherwood Park & Edmonton, AB
            </motion.span>

            <h1 className="font-display text-8xl sm:text-9xl lg:text-[10rem] leading-none text-white mb-6">
              <span className="block tracking-wide">Your Truck.</span>
              <span className="block text-gradient tracking-tight">Our Obsession.</span>
            </h1>

            <p className="text-lg md:text-xl text-white/70 mb-8 leading-relaxed max-w-xl">
              From daily drivers to full performance builds — Sherwood Park's most trusted diesel and truck specialists.
            </p>

            <div className="flex flex-wrap gap-4">
              <Link to="/contact" className="btn-primary text-base px-8 py-4">
                Book Your Service
                <ChevronRight size={18} />
              </Link>
              <a href="tel:7805047505" className="btn-outline text-base px-8 py-4">
                <Phone size={18} />
                780-504-7505
              </a>
            </div>

            <div className="mt-10 flex flex-wrap gap-x-6 gap-y-2">
              {whyUs.map(item => (
                <div key={item} className="flex items-center gap-2 text-white/60 text-sm">
                  <CheckCircle2 size={15} className="text-brand-orange flex-shrink-0" />
                  {item}
                </div>
              ))}
            </div>
          </motion.div>
        </div>

        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ repeat: Infinity, duration: 1.8 }}
          className="absolute bottom-8 left-1/2 -translate-x-1/2 w-6 h-10 border-2 border-white/20 rounded-full flex items-start justify-center pt-2"
        >
          <div className="w-1.5 h-1.5 bg-brand-orange rounded-full" />
        </motion.div>
      </section>

      {/* ── Impact Numbers ── */}
      <section className="bg-black border-y border-white/5">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 divide-x divide-white/5">
            {stats.map(({ value, label }, i) => (
              <AnimatedSection key={label} delay={i * 0.1}>
                <div className="py-10 px-6 text-center group">
                  <div className="font-display text-6xl md:text-8xl text-brand-orange leading-none group-hover:scale-105 transition-transform duration-300">{value}</div>
                  <div className="text-white/40 text-xs uppercase tracking-widest mt-3 font-semibold">{label}</div>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* ── Why Choose Us ── */}
      <section className="py-20 md:py-28 bg-brand-dark">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-12 lg:gap-20 items-center">
            {/* Image — mechanic working on engine block */}
            <AnimatedSection direction="right">
              <div className="relative h-96 rounded-xl overflow-hidden">
                <GrayscaleImage
                  src="https://images.unsplash.com/photo-1619642751034-765dfdf7c58e?w=800&q=80"
                  alt="Mechanic working on diesel engine"
                  overlayIntensity="medium"
                />
                {/* Orange corner accents */}
                <div className="absolute bottom-0 left-0 right-0 h-1 bg-brand-orange" />
                <div className="absolute top-0 left-0 w-1 h-full bg-brand-orange" />
              </div>
              {/* Floating accent boxes */}
              <div className="absolute -bottom-4 -right-4 w-24 h-24 bg-brand-orange/10 rounded-xl border border-brand-orange/30 -z-10" />
            </AnimatedSection>

            {/* Content */}
            <div>
              <SectionHeading
                label="Why Choose Us"
                title="Why Truck Owners Come Back to Us"
              />
              <div className="space-y-4 mb-8">
                {[
                  { title: 'Diesel & Truck Specialists', desc: "We've been elbow-deep in diesel engines, transmission cases, and suspension setups long enough to know the difference between a real fix and a parts swap. We do it right or we tell you why." },
                  { title: 'Straight Answers, Honest Pricing', desc: "We explain exactly what's wrong and what it costs before we touch a single bolt. No hidden fees. No fluffed-up repair orders. What we quote is what you pay." },
                  { title: 'Daily Drivers & Performance Builds', desc: "Whether it's your work truck or a weekend build you've put serious money into, it gets the same attention. We handle both because we love both." },
                  { title: 'Fast Turnaround, No Runaround', desc: "Your truck being down costs you something — time, money, or both. We work efficiently and communicate clearly so you're never left wondering what's happening." },
                ].map(({ title, desc }, i) => (
                  <AnimatedSection key={title} delay={i * 0.1}>
                    <div className="flex gap-4 p-4 rounded-lg bg-brand-dark-3 border border-white/5 hover:border-brand-orange/30 transition-colors group">
                      <CheckCircle2 size={20} className="text-brand-orange flex-shrink-0 mt-0.5" />
                      <div>
                        <div className="font-bold text-white text-sm mb-1">{title}</div>
                        <div className="text-white/50 text-sm leading-relaxed">{desc}</div>
                      </div>
                    </div>
                  </AnimatedSection>
                ))}
              </div>
              <Link to="/about" className="btn-primary">
                Learn About Us
                <ChevronRight size={16} />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* ── Services ── */}
      <section className="py-20 md:py-28 bg-brand-dark-2">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading
            label="Our Services"
            title="Our Services"
            subtitle="From oil changes to full engine rebuilds, we service all makes and models of trucks and diesel vehicles."
            center
          />

          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4">
            {services.map(({ icon: Icon, label }, i) => (
              <AnimatedSection key={label} delay={i * 0.05}>
                <motion.div
                  whileHover={{ y: -4, borderColor: 'rgba(249,115,22,0.5)' }}
                  className="card-dark p-5 flex flex-col items-center text-center gap-3 cursor-default transition-colors"
                >
                  <div className="w-12 h-12 rounded-lg bg-brand-orange/10 border border-brand-orange/20 flex items-center justify-center">
                    <Icon size={22} className="text-brand-orange" />
                  </div>
                  <span className="text-white/80 text-sm font-semibold">{label}</span>
                </motion.div>
              </AnimatedSection>
            ))}
          </div>

          <AnimatedSection className="mt-10 text-center">
            <Link to="/services" className="btn-primary text-base px-8 py-4">
              View All Services & Pricing
              <ChevronRight size={18} />
            </Link>
          </AnimatedSection>
        </div>
      </section>

      {/* ── Full-width image divider ── */}
      <div className="relative h-80 overflow-hidden">
        <GrayscaleImage
          src="/truck-hero.png"
          alt="Pickup truck"
          overlayIntensity="strong"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-black via-black/70 to-black/40" />
        <div className="absolute inset-0 hazard-stripe" />
        <div className="absolute bottom-0 left-0 right-0 h-1.5 bg-brand-orange" />
        <div className="absolute top-0 left-0 right-0 h-1.5 bg-brand-orange" />
        <div className="absolute inset-0 flex items-center px-8 md:px-12 lg:px-16">
          <AnimatedSection>
            <p className="font-display text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl text-white leading-none tracking-wide whitespace-nowrap">
              Real Mechanics. Real Fixes. <span className="text-brand-orange">No BS.</span>
            </p>
          </AnimatedSection>
        </div>
      </div>

      {/* ── CTA Banner ── */}
      <section className="relative py-24 overflow-hidden bg-black">
        <div className="absolute inset-0 hazard-stripe" />
        <div className="absolute left-0 top-0 bottom-0 w-2 bg-brand-orange" />
        <div className="absolute right-0 top-0 bottom-0 w-2 bg-brand-orange" />

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <AnimatedSection>
            <h2 className="font-display text-7xl md:text-9xl text-white leading-none tracking-wide mb-6">
              Your Truck's Not Going{' '}
              <span className="text-brand-orange">to Fix Itself.</span>
            </h2>
            <p className="text-white/50 text-lg mb-10 max-w-xl mx-auto">
              Give us a call or book online. We'll tell you what's wrong and what it costs — before we do anything.
            </p>
            <div className="flex flex-wrap gap-4 justify-center">
              <Link to="/contact" className="btn-primary text-base px-8 py-4">
                Book Your Service
              </Link>
              <a href="tel:7805047505" className="btn-outline text-base px-8 py-4">
                <Phone size={18} />
                Call 780-504-7505
              </a>
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* ── Testimonials ── */}
      <section className="py-20 md:py-28 bg-brand-dark">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading
            label="Customer Reviews"
            title="Don't Take Our Word For It"
            subtitle="Real customers. Real trucks. Real results."
            center
          />
          <div className="grid md:grid-cols-3 gap-6">
            {[
              {
                quote: "They diagnosed my truck in half the time another shop quoted. Honest, quick, and the price was fair. They've got my business for life.",
                name: 'Mike T.',
                role: 'Fleet Owner, Edmonton',
              },
              {
                quote: "Finally a shop that actually explains what's wrong instead of just handing you a bill. The transmission rebuild on my rig has been flawless.",
                name: 'Dave R.',
                role: 'Long-Haul Trucker',
              },
              {
                quote: "Brought in my diesel pickup for a mysterious power loss. They found it, fixed it, and had me back running the same day. Incredible service.",
                name: 'Sarah K.',
                role: 'Contractor, Sherwood Park',
              },
            ].map(({ quote, name, role }, i) => (
              <AnimatedSection key={name} delay={i * 0.15}>
                <div className="card-dark p-6 h-full flex flex-col">
                  <div className="text-brand-orange text-3xl font-black leading-none mb-4">"</div>
                  <p className="text-white/70 text-sm leading-relaxed flex-1 mb-6">{quote}</p>
                  <div className="border-t border-white/10 pt-4">
                    <div className="font-bold text-white text-sm">{name}</div>
                    <div className="text-white/40 text-xs mt-0.5">{role}</div>
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
