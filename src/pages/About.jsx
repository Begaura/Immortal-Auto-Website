import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import { ShieldCheck, Eye, Hammer, Clock, Heart, Users, ChevronRight, Phone, Truck, Wrench, Package } from 'lucide-react'
import AnimatedSection from '../components/AnimatedSection'
import SectionHeading from '../components/SectionHeading'
import GrayscaleImage from '../components/GrayscaleImage'

const values = [
  {
    icon: Eye,
    title: 'Honest Diagnostics',
    desc: 'We take the time to properly diagnose issues and explain what is happening with your vehicle. Our goal is to provide clear information and real solutions, not unnecessary repairs.',
  },
  {
    icon: Hammer,
    title: 'Quality Workmanship',
    desc: 'Every repair is completed with attention to detail and the right tools for the job. We focus on doing the work correctly the first time, so you can drive with confidence.',
  },
  {
    icon: ShieldCheck,
    title: 'Built to Last',
    desc: 'Our repairs are designed for reliability and long-term performance. Whether it\'s engine work, transmission repair, or diagnostics, we stand behind the work we do.',
  },
  {
    icon: Clock,
    title: 'Respect for Your Time',
    desc: 'We understand how important your time is to your daily life or business. We aim to complete repairs efficiently while maintaining the quality our customers expect.',
  },
  {
    icon: Heart,
    title: 'Customer First Approach',
    desc: 'Our service goes beyond fixing vehicles; it means treating customers with respect, communicating clearly, and building long-term relationships.',
  },
  {
    icon: Users,
    title: 'Community Trust',
    desc: 'Serving Edmonton and Sherwood Park, we\'ve built our reputation one truck at a time through honest work and word of mouth from satisfied customers.',
  },
]

export default function About() {
  return (
    <>
      {/* ── Hero ── */}
      <section className="relative pt-36 pb-20 overflow-hidden">
        <div className="absolute inset-0">
          {/* Mechanic working on engine — matches reference image 3 style */}
          <GrayscaleImage
            src="/burnout-truck.png"
            alt="Black truck doing burnout"
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
            <span className="section-label block mb-4">Our Story</span>
            <h1 className="font-display text-7xl md:text-8xl lg:text-9xl leading-none text-white mb-6 max-w-3xl mx-auto tracking-wide">
              About <span className="text-gradient">Immortal Automotive</span>
            </h1>
            <p className="text-white/60 text-lg leading-relaxed max-w-2xl mx-auto">
              We started Immortal Automotive because we were sick of shops that upsell, oversell, and underdeliver. If something's wrong with your truck, we'll tell you exactly what it is, what it costs, and why — before we touch anything. No surprises.
            </p>
          </motion.div>
        </div>
      </section>

      {/* ── Our Promise ── */}
      <section className="py-20 md:py-28 bg-brand-dark">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-12 lg:gap-20 items-center">
            {/* Image with orange banner — matches reference style exactly */}
            <AnimatedSection direction="right">
              <div className="relative h-[420px] rounded-xl overflow-hidden">
                <GrayscaleImage
                  src="/about-hero.png"
                  alt="Mechanic working on vehicle"
                  overlayIntensity="medium"
                />
                {/* Orange label banner overlay — like in the reference images */}
                <div className="absolute bottom-0 left-0 right-0 bg-brand-orange px-6 py-3 flex items-center gap-3">
                  <ShieldCheck size={20} className="text-white" />
                  <div>
                    <div className="text-white font-black text-base uppercase tracking-widest leading-none">OUR PROMISE</div>
                    <div className="text-white/80 text-xs tracking-widest uppercase mt-0.5">Honest. Strong. Reliable.</div>
                  </div>
                </div>
                {/* Left accent bar */}
                <div className="absolute top-0 left-0 w-1.5 h-full bg-brand-orange" />
              </div>
            </AnimatedSection>

            {/* Content */}
            <div>
              <SectionHeading
                label="Our Promise"
                title="Honest. Strong. Reliable."
              />
              <div className="space-y-4 text-white/60 leading-relaxed">
                <p>
                  We started Immortal Automotive because we were tired of shops that treat customers like a transaction — upsell the service, hide the fees, hand you a bill that looks nothing like the estimate.
                </p>
                <p>
                  Here it's simple: we diagnose it, we tell you what's wrong, we tell you what it costs, and you decide. No pressure. No unnecessary repairs. No surprises on the bill.
                </p>
                <p>
                  Every job gets done right the first time — or we make it right. That's not a tagline, that's how we've built our reputation in Sherwood Park one truck at a time.
                </p>
              </div>
              <div className="mt-8">
                <Link to="/contact" className="btn-primary">
                  Get in Touch
                  <ChevronRight size={16} />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── Core Values ── */}
      <section className="py-20 md:py-28 bg-brand-dark-2">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading
            label="What We Stand For"
            title="Our Core Values"
            subtitle="These principles guide every repair, every interaction, and every decision we make."
            center
          />

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {values.map(({ icon: Icon, title, desc }, i) => (
              <AnimatedSection key={title} delay={i * 0.1}>
                <motion.div
                  whileHover={{ y: -4 }}
                  className="card-dark p-6 h-full flex flex-col hover:border-brand-orange/30 transition-colors"
                >
                  <div className="w-12 h-12 rounded-lg bg-brand-orange/10 border border-brand-orange/20 flex items-center justify-center mb-4">
                    <Icon size={22} className="text-brand-orange" />
                  </div>
                  <h3 className="font-bold text-white text-lg mb-3">{title}</h3>
                  <p className="text-white/50 text-sm leading-relaxed flex-1">{desc}</p>
                </motion.div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* ── Full-width image divider ── */}
      <div className="relative h-80 overflow-hidden">
        <GrayscaleImage
          src="https://images.unsplash.com/photo-1619642751034-765dfdf7c58e?w=1600&q=80"
          alt="Mechanic working on truck engine"
          overlayIntensity="strong"
        />
        <div className="absolute inset-0 bg-black/70" />
        <div className="absolute inset-0 hazard-stripe" />
        <div className="absolute top-0 left-0 right-0 h-1.5 bg-brand-orange" />
        <div className="absolute bottom-0 left-0 right-0 bg-brand-orange px-8 py-4">
          <span className="font-display text-3xl text-white uppercase tracking-widest">Truck Specialists — Sherwood Park, AB</span>
        </div>
      </div>

      {/* ── Who We Are ── */}
      <section className="py-20 md:py-28 bg-brand-dark">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <SectionHeading
                label="Who We Are"
                title="A Shop You Can Actually Trust"
              />
              <p className="text-white/60 leading-relaxed mb-6">
                Sherwood Park isn't a big city. Your neighbours know where you take your truck. We built this shop knowing that — our reputation rides on every vehicle we touch. We're not chasing volume. We're building something that lasts.
              </p>
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-8">
                {[
                  { icon: Truck, title: 'Trucks & Pickups', desc: 'All makes and models of pickup and work trucks.' },
                  { icon: Wrench, title: 'Diesel Pickups', desc: 'Diesel engine diagnostics, repairs, and performance work.' },
                  { icon: Package, title: 'Commercial Vehicles', desc: 'Fleet and commercial vehicle maintenance and repair.' },
                ].map(({ icon: Icon, title, desc }) => (
                  <div key={title} className="card-dark p-5 flex flex-col gap-3">
                    <div className="w-10 h-10 rounded-lg bg-brand-orange/10 flex items-center justify-center">
                      <Icon size={20} className="text-brand-orange" />
                    </div>
                    <div>
                      <div className="text-white font-bold text-sm mb-1">{title}</div>
                      <div className="text-white/50 text-xs leading-relaxed">{desc}</div>
                    </div>
                  </div>
                ))}
              </div>
              <div className="grid grid-cols-2 gap-4 mb-8">
                {[
                  { value: 'All', label: 'Makes & Models' },
                  { value: 'AB', label: 'Licensed & Insured' },
                ].map(({ value, label }) => (
                  <div key={label} className="card-dark p-4 text-center">
                    <div className="text-2xl font-black text-brand-orange">{value}</div>
                    <div className="text-white/50 text-xs mt-1">{label}</div>
                  </div>
                ))}
              </div>
              <div className="flex flex-wrap gap-4">
                <Link to="/services" className="btn-primary">
                  Our Services
                </Link>
                <a href="tel:7805047505" className="btn-outline">
                  <Phone size={16} />
                  Call Us
                </a>
              </div>
            </div>

            <AnimatedSection delay={0.2}>
              <div className="relative h-96 rounded-xl overflow-hidden">
                <GrayscaleImage
                  src="https://images.unsplash.com/photo-1504328345606-18bbc8c9d7d1?w=800&q=80"
                  alt="Mechanic tools on shop bench"
                  overlayIntensity="medium"
                />
                {/* Orange accent bar */}
                <div className="absolute bottom-0 left-0 right-0 h-1.5 bg-brand-orange" />
                <div className="absolute top-0 right-0 w-1.5 h-full bg-brand-orange" />
              </div>
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* ── CTA ── */}
      <section className="relative py-20 overflow-hidden">
        <div className="absolute inset-0">
          <GrayscaleImage
            src="https://images.unsplash.com/photo-1552519507-da3b142c6e3d?w=1600&q=80"
            alt="Pickup truck"
            overlayIntensity="strong"
          />
          <div className="absolute inset-0 bg-brand-dark/85" />
        </div>

        <div className="relative z-10 max-w-3xl mx-auto px-4 text-center">
          <AnimatedSection>
            <h2 className="font-display text-6xl md:text-8xl text-white leading-none tracking-wide mb-4">
              Ready to Work With a Shop{' '}
              <span className="text-gradient">That Actually Gets It?</span>
            </h2>
            <p className="text-white/60 text-lg mb-8">
              Book online or give us a call. No obligation — just straight answers about your truck.
            </p>
            <div className="flex flex-wrap gap-4 justify-center">
              <Link to="/contact" className="btn-primary text-base px-8 py-4">
                Contact Us
              </Link>
              <a href="tel:7805047505" className="btn-outline text-base px-8 py-4">
                <Phone size={18} />
                780-504-7505
              </a>
            </div>
          </AnimatedSection>
        </div>
      </section>
    </>
  )
}
