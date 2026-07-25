import { useParams, Link, Navigate } from 'react-router-dom'
import { Phone, ChevronRight, ChevronLeft, Tag } from 'lucide-react'
import AnimatedSection from '../components/AnimatedSection'
import Seo from '../components/Seo'
import { allBrands } from '../data/brands'

export default function BrandDetail() {
  const { slug } = useParams()
  const brand = allBrands.find(b => b.slug === slug)

  if (!brand) return <Navigate to="/brands" replace />

  const { name, logo, tagline, desc, badge } = brand

  return (
    <>
      <Seo
        title={`${name} — ${tagline} | Immortal Automotive`}
        description={`${desc} Installed by Immortal Automotive in Sherwood Park, AB.`}
        path={`/brands/${slug}`}
      />

      <section className="relative pt-36 pb-20 bg-brand-dark overflow-hidden">
        <div className="absolute left-0 top-0 bottom-0 w-1.5 bg-brand-orange" />
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <Link to="/brands" className="inline-flex items-center gap-1 text-white/50 hover:text-brand-orange text-sm font-semibold uppercase tracking-wide mb-8 transition-colors">
            <ChevronLeft size={16} />
            All Brands
          </Link>

          <AnimatedSection>
            {logo && (
              <div className="bg-white rounded-xl p-6 inline-flex items-center justify-center h-24 mb-8">
                <img src={logo} alt={`${name} logo`} className="h-12 w-auto max-w-[240px] object-contain" />
              </div>
            )}

            <div className="flex items-center gap-3 mb-4">
              <span className="inline-flex items-center gap-1 bg-brand-orange/10 border border-brand-orange/20 text-brand-orange text-xs font-semibold uppercase tracking-wider px-2.5 py-1 rounded">
                <Tag size={10} />
                {badge}
              </span>
            </div>

            <h1 className="font-display text-6xl md:text-7xl text-white leading-none tracking-wide mb-4">
              {name}
            </h1>
            <p className="text-brand-orange/80 font-semibold uppercase tracking-wide mb-6">
              {tagline}
            </p>
            <p className="text-white/60 text-lg leading-relaxed max-w-2xl mb-10">
              {desc}
            </p>

            <div className="flex flex-wrap gap-4">
              <Link to="/contact" className="btn-primary text-base px-8 py-4">
                Ask About {name}
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
    </>
  )
}
