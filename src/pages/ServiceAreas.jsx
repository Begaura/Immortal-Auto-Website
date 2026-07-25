import { Link } from 'react-router-dom'
import { MapPin, Phone, ChevronRight } from 'lucide-react'
import AnimatedSection from '../components/AnimatedSection'
import SectionHeading from '../components/SectionHeading'
import Seo from '../components/Seo'

const areas = [
  {
    name: 'Sherwood Park, AB',
    desc: "Our shop is located right here at 114 Sioux Rd — if you're in Sherwood Park, we're your closest full-service truck and diesel repair option.",
  },
  {
    name: 'Edmonton, AB',
    desc: "We're a short drive from Edmonton and regularly service trucks and diesel vehicles for customers commuting in from the city.",
  },
]

export default function ServiceAreas() {
  return (
    <>
      <Seo
        title="Service Areas | Truck & Diesel Repair Near Sherwood Park & Edmonton, AB"
        description="Immortal Automotive Performance Inc. is based in Sherwood Park, AB and proudly serves truck and diesel repair customers throughout Sherwood Park and Edmonton."
        path="/service-areas"
      />

      <section className="relative pt-36 pb-20 bg-brand-dark overflow-hidden">
        <div className="absolute left-0 top-0 bottom-0 w-1.5 bg-brand-orange" />
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <AnimatedSection>
            <span className="section-label block mb-4">Where We Work</span>
            <h1 className="font-display text-6xl md:text-7xl text-white leading-none tracking-wide mb-6">
              Service <span className="text-gradient">Areas</span>
            </h1>
            <p className="text-white/60 text-lg max-w-xl mx-auto">
              Based in Sherwood Park, AB — serving truck and diesel owners across Sherwood Park and Edmonton.
            </p>
          </AnimatedSection>
        </div>
      </section>

      <section className="py-20 bg-brand-dark-2">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-6">
            {areas.map(({ name, desc }) => (
              <AnimatedSection key={name}>
                <div className="card-dark p-8 h-full flex flex-col gap-4">
                  <div className="w-12 h-12 rounded-lg bg-brand-orange/10 border border-brand-orange/20 flex items-center justify-center">
                    <MapPin size={22} className="text-brand-orange" />
                  </div>
                  <h2 className="text-white font-bold text-xl">{name}</h2>
                  <p className="text-white/55 text-sm leading-relaxed">{desc}</p>
                </div>
              </AnimatedSection>
            ))}
          </div>

          <AnimatedSection delay={0.15}>
            <div className="mt-8 card-dark p-8 text-center">
              <p className="text-white/60 mb-6">
                Not sure if you're in our service area? Give us a call — if we can't get to you, we'll tell you straight.
              </p>
              <div className="flex flex-wrap gap-4 justify-center">
                <Link to="/contact" className="btn-primary text-base px-8 py-4">
                  Contact Us
                  <ChevronRight size={18} />
                </Link>
                <a href="tel:7805047505" className="btn-outline text-base px-8 py-4">
                  <Phone size={18} />
                  780-504-7505
                </a>
              </div>
            </div>
          </AnimatedSection>
        </div>
      </section>
    </>
  )
}
