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
            src="https://images.unsplash.com/photo-1601584115197-04ecc0da31d7?w=1600&q=80"
            alt="Mechanic working in shop"
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
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-black leading-tight text-white mb-6 max-w-3xl mx-auto">
              About <span className="text-gradient">Immortal Automotive Performance</span>
            </h1>
            <p className="text-white/60 text-lg leading-relaxed max-w-2xl mx-auto">
              We believe automotive repair should be built on trust, quality workmanship, and honest service. Your truck is an important investment, and we treat every vehicle that comes through our shop with the same care and attention we would give our own.
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
                  src="https://images.unsplash.com/photo-1625047509168-a7026f36de04?w=800&q=80"
                  alt="Vehicle on car lift in shop"
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
                  At Immortal Automotive Performance, we believe automotive repair should be built on trust, quality workmanship, and honest service. Your truck is an important investment, and we treat every vehicle that comes through our shop with the same care and attention we would give our own.
                </p>
                <p>
                  We take the time to properly diagnose issues and explain what is happening with your vehicle. Our goal is to provide clear information and real solutions, not unnecessary repairs.
                </p>
                <p>
                  Every repair is completed with attention to detail and the right tools for the job. We focus on doing the work correctly the first time, so you can drive with confidence.
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
      <div className="relative h-72 overflow-hidden">
        <GrayscaleImage
          src="https://images.unsplash.com/photo-1619642751034-765dfdf7c58e?w=1600&q=80"
          alt="Mechanic working on truck engine"
          overlayIntensity="strong"
        />
        <div className="absolute inset-0 bg-brand-dark/60" />
        {/* Orange label banner — like reference images */}
        <div className="absolute bottom-0 left-0 right-0 bg-brand-orange px-8 py-3">
          <span className="text-white font-black text-xl uppercase tracking-widest">Truck Specialists</span>
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
                Located in Sherwood Park, Alberta, serving Edmonton-area truck owners with professional, reliable diesel and vehicle repair. When you bring your truck to us, you're not just another customer — you're someone we want to see driving away satisfied.
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
            <h2 className="text-4xl md:text-5xl font-black text-white mb-4">
              Ready to Experience the{' '}
              <span className="text-gradient">Difference?</span>
            </h2>
            <p className="text-white/60 text-lg mb-8">
              Contact us today to schedule your service appointment or get a free estimate.
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
