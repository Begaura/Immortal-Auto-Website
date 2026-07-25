import { Link } from 'react-router-dom'
import { ChevronRight, Calendar } from 'lucide-react'
import AnimatedSection from '../components/AnimatedSection'
import Seo from '../components/Seo'
import { posts } from '../data/blog'

export default function Blog() {
  return (
    <>
      <Seo
        title="Truck & Diesel Repair Tips | Immortal Automotive Blog"
        description="Practical truck and diesel maintenance advice from Immortal Automotive Performance Inc. in Sherwood Park, AB — transmission warning signs, winter maintenance, and honest diagnostics."
        path="/blog"
      />

      <section className="relative pt-36 pb-20 bg-brand-dark overflow-hidden">
        <div className="absolute left-0 top-0 bottom-0 w-1.5 bg-brand-orange" />
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <AnimatedSection>
            <span className="section-label block mb-4">From the Shop</span>
            <h1 className="font-display text-6xl md:text-7xl text-white leading-none tracking-wide mb-6">
              Truck & Diesel <span className="text-gradient">Tips</span>
            </h1>
            <p className="text-white/60 text-lg max-w-xl mx-auto">
              Straight, practical advice — no filler, no upsell.
            </p>
          </AnimatedSection>
        </div>
      </section>

      <section className="py-20 bg-brand-dark-2">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 space-y-6">
          {posts.map(({ slug, title, excerpt, date }, i) => (
            <AnimatedSection key={slug} delay={i * 0.08}>
              <Link to={`/blog/${slug}`} className="card-dark p-7 flex flex-col gap-3 hover:border-brand-orange/30 transition-colors block">
                <div className="flex items-center gap-2 text-white/40 text-xs uppercase tracking-wider">
                  <Calendar size={13} />
                  {new Date(date).toLocaleDateString('en-CA', { year: 'numeric', month: 'long', day: 'numeric' })}
                </div>
                <h2 className="text-white font-bold text-xl">{title}</h2>
                <p className="text-white/55 text-sm leading-relaxed">{excerpt}</p>
                <span className="inline-flex items-center gap-1 text-brand-orange text-sm font-semibold">
                  Read more <ChevronRight size={14} />
                </span>
              </Link>
            </AnimatedSection>
          ))}
        </div>
      </section>
    </>
  )
}
