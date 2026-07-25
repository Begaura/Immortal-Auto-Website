import { useParams, Link, Navigate } from 'react-router-dom'
import { CheckCircle2, ChevronRight, ChevronLeft, Phone } from 'lucide-react'
import AnimatedSection from '../components/AnimatedSection'
import SectionHeading from '../components/SectionHeading'
import Seo from '../components/Seo'
import { specialtyServices } from '../data/services'

export default function ServiceDetail() {
  const { slug } = useParams()
  const service = specialtyServices.find(s => s.slug === slug)

  if (!service) return <Navigate to="/services" replace />

  const { icon: Icon, title, shortDesc, longDesc, items } = service

  return (
    <>
      <Seo
        title={`${title} in Sherwood Park, AB | Immortal Automotive`}
        description={`${shortDesc} Serving Sherwood Park & Edmonton, AB.`}
        path={`/services/${slug}`}
      />

      <section className="relative pt-36 pb-20 bg-brand-dark overflow-hidden">
        <div className="absolute left-0 top-0 bottom-0 w-1.5 bg-brand-orange" />
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <Link to="/services" className="inline-flex items-center gap-1 text-white/50 hover:text-brand-orange text-sm font-semibold uppercase tracking-wide mb-8 transition-colors">
            <ChevronLeft size={16} />
            All Services
          </Link>

          <AnimatedSection>
            <div className="w-14 h-14 rounded-lg bg-brand-orange/10 border border-brand-orange/20 flex items-center justify-center mb-6">
              <Icon size={26} className="text-brand-orange" />
            </div>
            <h1 className="font-display text-6xl md:text-7xl text-white leading-none tracking-wide mb-6">
              {title}
            </h1>
            <p className="text-white/60 text-lg leading-relaxed max-w-2xl mb-10">
              {longDesc}
            </p>

            <div className="grid sm:grid-cols-2 gap-3 max-w-2xl mb-10">
              {items.map(item => (
                <div key={item} className="flex items-center gap-2 p-3 rounded-lg bg-brand-dark-3 border border-white/5 text-white/70 text-sm">
                  <CheckCircle2 size={16} className="text-brand-orange flex-shrink-0" />
                  {item}
                </div>
              ))}
            </div>

            <div className="flex flex-wrap gap-4">
              <Link to="/contact" className="btn-primary text-base px-8 py-4">
                Book This Service
                <ChevronRight size={18} />
              </Link>
              <a href="tel:7805047505" className="btn-outline text-base px-8 py-4">
                <Phone size={18} />
                780-504-7505
              </a>
            </div>
          </AnimatedSection>
        </div>
      </section>

      <section className="py-20 bg-brand-dark-2 border-t border-white/5">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading
            label="More Services"
            title="Other Services We Offer"
          />
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {specialtyServices.filter(s => s.slug !== slug).map(({ slug: s, icon: OtherIcon, title: otherTitle }) => (
              <Link
                key={s}
                to={`/services/${s}`}
                className="card-dark p-5 flex items-center gap-3 hover:border-brand-orange/30 transition-colors"
              >
                <OtherIcon size={20} className="text-brand-orange flex-shrink-0" />
                <span className="text-white/80 text-sm font-semibold">{otherTitle}</span>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </>
  )
}
