import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import { ChevronRight, Phone, Tag } from 'lucide-react'
import AnimatedSection from '../components/AnimatedSection'
import SectionHeading from '../components/SectionHeading'
import Seo from '../components/Seo'
import { performanceBrands, accessoryBrands } from '../data/brands'

function BrandCard({ brand, index }) {
  return (
    <Link to={`/brands/${brand.slug}`} className="block h-full">
      <motion.div
        initial={{ opacity: 0, y: 24 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.4, delay: index * 0.07 }}
        className="card-dark overflow-hidden flex flex-col h-full group hover:border-brand-orange/40 transition-all duration-300"
      >
        {brand.logo && (
          <div className="bg-white p-5 flex items-center justify-center h-28 border-b border-white/10">
            <img src={brand.logo} alt={`${brand.name} logo`} className="h-14 w-auto max-w-[85%] object-contain" loading="lazy" />
          </div>
        )}
        <div className="p-7 flex flex-col gap-4 flex-1">
          <div className="flex items-start justify-between gap-3">
            <h3 className="text-white font-bold text-xl leading-tight group-hover:text-brand-orange transition-colors duration-300">
              {brand.name}
            </h3>
            <span className="flex-shrink-0 inline-flex items-center gap-1 bg-brand-orange/10 border border-brand-orange/20 text-brand-orange text-xs font-semibold uppercase tracking-wider px-2.5 py-1 rounded">
              <Tag size={10} />
              {brand.badge}
            </span>
          </div>
          <p className="text-brand-orange/80 text-sm font-semibold uppercase tracking-wide">
            {brand.tagline}
          </p>
          <p className="text-white/55 text-sm leading-relaxed">
            {brand.desc}
          </p>
          <div className="mt-auto pt-2 border-t border-white/5 flex items-center justify-between">
            <div className="w-8 h-0.5 bg-brand-orange/40 group-hover:w-16 transition-all duration-300" />
            <span className="text-brand-orange text-xs font-semibold inline-flex items-center gap-1">
              Learn more <ChevronRight size={12} />
            </span>
          </div>
        </div>
      </motion.div>
    </Link>
  )
}

export default function Brands() {
  return (
    <div className="bg-brand-dark">
      <Seo
        title="Brands We Trust | Performance Parts & Truck Accessories | Immortal Automotive"
        description="See the performance and diesel parts brands Immortal Automotive installs and stands behind — including BTR, Texas Speed, Borla, BD Diesel, Corsa, and more."
        path="/brands"
      />

      {/* Hero */}
      <section className="relative min-h-[52vh] flex items-center pt-24 pb-16 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-brand-dark via-brand-dark-2 to-brand-dark" />
        <div className="absolute top-0 left-0 right-0 h-1 bg-brand-orange" />
        <div className="absolute inset-0 opacity-[0.03]"
          style={{
            backgroundImage: 'repeating-linear-gradient(0deg, transparent, transparent 40px, rgba(255,255,255,0.5) 40px, rgba(255,255,255,0.5) 41px), repeating-linear-gradient(90deg, transparent, transparent 40px, rgba(255,255,255,0.5) 40px, rgba(255,255,255,0.5) 41px)'
          }}
        />
        <div className="relative w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="max-w-4xl"
          >
            <div className="flex items-center gap-3 mb-5">
              <div className="w-8 h-0.5 bg-brand-orange" />
              <span className="section-label">What We Run</span>
            </div>
            <h1 className="font-display text-7xl sm:text-8xl lg:text-9xl text-white leading-none mb-6">
              <span className="block tracking-wide">Brands We</span>
              <span className="block text-gradient tracking-tight">Know & Trust</span>
            </h1>
            <p className="text-white/60 text-lg leading-relaxed max-w-2xl">
              We're picky about what goes on your truck. These are the brands we actually use — performance parts, diesel components, and truck accessories we stand behind.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Performance Brands */}
      <section className="py-24 bg-brand-dark-2">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <AnimatedSection>
            <SectionHeading
              label="Performance & Parts"
              title="Performance Parts We Use"
              subtitle="From everyday repairs to full builds, these are the parts we reach for. No filler brands, no shortcuts."
            />
          </AnimatedSection>

          <div className="mt-14 grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">
            {performanceBrands.map((brand, i) => (
              <BrandCard key={brand.name} brand={brand} index={i} />
            ))}
          </div>
        </div>
      </section>

      {/* Divider banner */}
      <div className="relative h-28 bg-brand-orange overflow-hidden">
        <div className="absolute inset-0 opacity-10"
          style={{
            backgroundImage: 'repeating-linear-gradient(45deg, transparent, transparent 10px, rgba(0,0,0,0.5) 10px, rgba(0,0,0,0.5) 11px)'
          }}
        />
        <div className="relative h-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-center">
          <p className="text-white font-black uppercase tracking-widest text-xl sm:text-3xl text-center">
            Truck Accessories — We Install These Too
          </p>
        </div>
      </div>

      {/* Accessories Brands */}
      <section className="py-24 bg-brand-dark">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <AnimatedSection>
            <SectionHeading
              label="Truck Accessories"
              title="Accessories Worth Having"
              subtitle="Protect your truck and keep it looking sharp. These brands make gear that holds up — and we can get it on your truck while it's already in the shop."
            />
          </AnimatedSection>

          <div className="mt-14 grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">
            {accessoryBrands.map((brand, i) => (
              <BrandCard key={brand.name} brand={brand} index={i} />
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-brand-dark-2 border-t border-white/10">
        <AnimatedSection>
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="relative bg-brand-dark-3 rounded-2xl overflow-hidden border border-white/10 p-10 lg:p-14">
              <div className="absolute top-0 left-0 right-0 h-1 bg-brand-orange" />
              <div className="max-w-2xl">
                <span className="section-label">Just Ask</span>
                <h2 className="text-3xl sm:text-4xl font-black text-white uppercase mt-3 mb-4 leading-tight">
                  Don't See What You Need?
                </h2>
                <p className="text-white/55 mb-8 leading-relaxed">
                  This isn't everything we can get — not even close. If you've got a specific brand or part in mind, just give us a call. Chances are we can track it down.
                </p>
                <div className="flex flex-wrap gap-4">
                  <a href="tel:7805047505" className="btn-primary">
                    <Phone size={16} />
                    Call 780-504-7505
                  </a>
                  <Link to="/contact" className="btn-outline">
                    Send a Message
                    <ChevronRight size={16} />
                  </Link>
                </div>
              </div>
              <div className="absolute bottom-0 right-0 w-64 h-64 bg-brand-orange/5 rounded-full -translate-y-1/2 translate-x-1/2 pointer-events-none" />
            </div>
          </div>
        </AnimatedSection>
      </section>

    </div>
  )
}
