import { useParams, Link, Navigate } from 'react-router-dom'
import { ChevronLeft, ChevronRight, Phone } from 'lucide-react'
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

  if (!post) return <Navigate to="/know-your-truck" replace />

  const { title, excerpt, content } = post

  const articleSchema = {
    '@context': 'https://schema.org',
    '@type': 'Article',
    headline: title,
    author: { '@type': 'Organization', name: 'Immortal Automotive Performance Inc.' },
    publisher: { '@type': 'Organization', name: 'Immortal Automotive Performance Inc.' },
  }

  return (
    <>
      <Seo title={`${title} | Know Your Truck | Immortal Automotive`} description={excerpt} path={`/know-your-truck/${slug}`} />
      <JsonLd data={articleSchema} />

      <section className="relative pt-36 pb-16 bg-brand-dark overflow-hidden">
        <div className="absolute left-0 top-0 bottom-0 w-1.5 bg-brand-orange" />
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <Link to="/know-your-truck" className="inline-flex items-center gap-1 text-white/50 hover:text-brand-orange text-sm font-semibold uppercase tracking-wide mb-8 transition-colors">
            <ChevronLeft size={16} />
            All Articles
          </Link>
          <AnimatedSection>
            <h1 className="font-display text-5xl md:text-6xl text-white leading-tight tracking-wide">
              {title}
            </h1>
          </AnimatedSection>
        </div>
      </section>

      <section className="py-16 bg-brand-dark-2">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 space-y-5 text-white/65 text-base leading-relaxed">
          {content.map((block, i) => {
            if (block.h2) return <h2 key={i} className="text-white font-bold text-2xl pt-6">{block.h2}</h2>
            if (block.h3) return <h3 key={i} className="text-white font-semibold text-lg pt-2">{block.h3}</h3>
            if (block.list) return (
              <ul key={i} className="list-disc pl-5 space-y-3 marker:text-brand-orange">
                {block.list.map((item, j) => <li key={j}>{renderParagraph(item)}</li>)}
              </ul>
            )
            return <p key={i}>{renderParagraph(block)}</p>
          })}
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
