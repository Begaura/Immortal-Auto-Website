import { useParams, Link, Navigate } from 'react-router-dom'
import { ChevronLeft, ChevronRight, Calendar, Phone } from 'lucide-react'
import AnimatedSection from '../components/AnimatedSection'
import Seo from '../components/Seo'
import JsonLd from '../components/JsonLd'
import { posts } from '../data/blog'

function renderParagraph(text) {
  const parts = text.split(/(\*\*.*?\*\*)/g)
  return parts.map((part, i) =>
    part.startsWith('**') && part.endsWith('**')
      ? <strong key={i} className="text-white">{part.slice(2, -2)}</strong>
      : <span key={i}>{part}</span>
  )
}

export default function BlogPost() {
  const { slug } = useParams()
  const post = posts.find(p => p.slug === slug)

  if (!post) return <Navigate to="/blog" replace />

  const { title, date, excerpt, content } = post

  const articleSchema = {
    '@context': 'https://schema.org',
    '@type': 'Article',
    headline: title,
    datePublished: date,
    author: { '@type': 'Organization', name: 'Immortal Automotive Performance Inc.' },
    publisher: { '@type': 'Organization', name: 'Immortal Automotive Performance Inc.' },
  }

  return (
    <>
      <Seo title={`${title} | Immortal Automotive Blog`} description={excerpt} path={`/blog/${slug}`} />
      <JsonLd data={articleSchema} />

      <section className="relative pt-36 pb-16 bg-brand-dark overflow-hidden">
        <div className="absolute left-0 top-0 bottom-0 w-1.5 bg-brand-orange" />
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <Link to="/blog" className="inline-flex items-center gap-1 text-white/50 hover:text-brand-orange text-sm font-semibold uppercase tracking-wide mb-8 transition-colors">
            <ChevronLeft size={16} />
            All Articles
          </Link>
          <AnimatedSection>
            <div className="flex items-center gap-2 text-white/40 text-xs uppercase tracking-wider mb-4">
              <Calendar size={13} />
              {new Date(date).toLocaleDateString('en-CA', { year: 'numeric', month: 'long', day: 'numeric' })}
            </div>
            <h1 className="font-display text-5xl md:text-6xl text-white leading-tight tracking-wide">
              {title}
            </h1>
          </AnimatedSection>
        </div>
      </section>

      <section className="py-16 bg-brand-dark-2">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 space-y-5 text-white/65 text-base leading-relaxed">
          {content.map((para, i) => (
            <p key={i}>{renderParagraph(para)}</p>
          ))}
        </div>
      </section>

      <section className="py-16 bg-brand-dark border-t border-white/5">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <p className="text-white/60 mb-6">Have a truck issue that matches what you just read?</p>
          <div className="flex flex-wrap gap-4 justify-center">
            <Link to="/contact" className="btn-primary text-base px-8 py-4">
              Book a Diagnostic
              <ChevronRight size={18} />
            </Link>
            <a href="tel:7805047505" className="btn-outline text-base px-8 py-4">
              <Phone size={18} />
              780-504-7505
            </a>
          </div>
        </div>
      </section>
    </>
  )
}
