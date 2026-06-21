import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import { ChevronRight, Phone, Tag } from 'lucide-react'
import AnimatedSection from '../components/AnimatedSection'
import SectionHeading from '../components/SectionHeading'

const performanceBrands = [
  {
    name: 'AC Delco',
    tagline: 'OEM Parts & Fluids',
    desc: 'The same parts your truck came with from the factory. We stock AC Delco filters, batteries, belts, brakes, and more — because why mess with what works.',
    badge: 'OEM Parts',
  },
  {
    name: 'Speed Engineering',
    tagline: 'Headers & Exhaust',
    desc: 'Want more power out of your GM truck? Speed Engineering headers and exhaust systems are a solid first step — and we know how to install them right.',
    badge: 'Exhaust',
  },
  {
    name: 'Raybestos',
    tagline: 'Brakes That Actually Stop',
    desc: 'We trust Raybestos on our own vehicles — that should tell you something. Great pads and rotors at a price that makes sense.',
    badge: 'Brakes',
  },
  {
    name: 'Circle D Specialties',
    tagline: 'Torque Converters & Trans Parts',
    desc: 'If you tow heavy or want your automatic to actually perform, Circle D torque converters are the real deal. These aren\'t shelf parts.',
    badge: 'Transmission',
  },
  {
    name: 'BTR',
    tagline: 'Brian Tooley Racing — Cams & More',
    desc: 'BTR makes some of the best LS/LT camshafts and valvetrain parts in the game. If you\'re building something serious, this is where we start.',
    badge: 'Engine',
  },
  {
    name: 'Texas Speed & Performance',
    tagline: 'LS/LT Engine Builds',
    desc: 'From cam kits to full heads and cam packages, Texas Speed is our go-to when a customer wants real power from their GM truck.',
    badge: 'Engine',
  },
  {
    name: 'FlowPro',
    tagline: 'Diesel Fuel System Parts',
    desc: 'Lift pumps, injectors, fuel lines — FlowPro makes solid diesel fuel system components that hold up. Great bang for the buck.',
    badge: 'Diesel',
  },
  {
    name: 'BD Diesel Performance',
    logo: '/bd-diesel.png',
    tagline: 'Diesel Performance Parts',
    desc: 'BD Diesel makes some of the most trusted performance parts for diesel trucks — exhaust brakes, transmission kits, turbos, and more. Built tough for trucks that work hard.',
    badge: 'Diesel',
  },
  {
    name: 'Borla',
    logo: '/borla.png',
    tagline: 'Performance Exhaust Systems',
    desc: 'Borla exhaust systems are built from aircraft-quality stainless steel and sound incredible. If you want your truck to sound as good as it runs, this is the brand.',
    badge: 'Exhaust',
  },
  {
    name: 'Corsa Performance',
    logo: '/corsa.webp',
    tagline: 'Performance Exhausts',
    desc: 'Corsa builds cat-back and axle-back exhaust systems that add real power and a serious tone. Precision-engineered, no drone — just performance.',
    badge: 'Exhaust',
  },
]

const accessoryBrands = [
  {
    name: 'BAK Industries',
    tagline: 'BAKFlip Tonneau Covers',
    desc: 'If you want a folding tonneau that actually locks and holds up to real use, BAKFlip is the one. We install these all the time for a reason.',
    badge: 'Bed Covers',
  },
  {
    name: 'Truxedo',
    tagline: 'Roll-Up Tonneau Covers',
    desc: 'Clean, low-profile, and easy to use. Truxedo roll-up covers are a great option if you want to keep things simple without skimping on quality.',
    badge: 'Bed Covers',
  },
  {
    name: 'Husky Liners',
    tagline: 'Floor Liners & Mud Flaps',
    desc: 'If your truck sees dirt, mud, or snow (this is Alberta — it sees all three), Husky Liners are worth every penny. Easy to clean, built to last.',
    badge: 'Accessories',
  },
  {
    name: 'WeatherTech',
    tagline: 'Mats, Liners & More',
    desc: 'Made to fit your exact truck. WeatherTech floor mats and cargo liners keep the interior looking good no matter what you track in.',
    badge: 'Accessories',
  },
]

function BrandCard({ brand, index }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.4, delay: index * 0.07 }}
      className="card-dark overflow-hidden flex flex-col group hover:border-brand-orange/40 transition-all duration-300"
    >
      {brand.logo && (
        <div className="bg-white p-5 flex items-center justify-center h-28 border-b border-white/10">
          <img src={brand.logo} alt={`${brand.name} logo`} className="max-h-16 max-w-[80%] object-contain" />
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
        <div className="mt-auto pt-2 border-t border-white/5">
          <div className="w-8 h-0.5 bg-brand-orange/40 group-hover:w-16 transition-all duration-300" />
        </div>
      </div>
    </motion.div>
  )
}

export default function Brands() {
  return (
    <div className="bg-brand-dark">

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
