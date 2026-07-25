import { useState } from 'react'
import { Link } from 'react-router-dom'
import { ChevronDown, ChevronRight, Phone } from 'lucide-react'
import AnimatedSection from '../components/AnimatedSection'
import SectionHeading from '../components/SectionHeading'
import Seo from '../components/Seo'
import JsonLd from '../components/JsonLd'
import { faqs } from '../data/faq'

function FaqItem({ q, a }) {
  const [open, setOpen] = useState(false)
  return (
    <div className="card-dark rounded-xl overflow-hidden">
      <button
        onClick={() => setOpen(o => !o)}
        className="w-full flex items-center justify-between gap-4 p-5 text-left"
      >
        <span className="text-white font-bold text-base">{q}</span>
        <ChevronDown size={18} className={`text-brand-orange flex-shrink-0 transition-transform ${open ? 'rotate-180' : ''}`} />
      </button>
      {open && (
        <div className="px-5 pb-5 text-white/60 text-sm leading-relaxed">
          {a}
        </div>
      )}
    </div>
  )
}

export default function FAQ() {
  const faqSchema = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: faqs.map(({ q, a }) => ({
      '@type': 'Question',
      name: q,
      acceptedAnswer: { '@type': 'Answer', text: a },
    })),
  }

  return (
    <>
      <Seo
        title="Frequently Asked Questions | Immortal Automotive, Sherwood Park AB"
        description="Answers to common questions about pricing, appointments, turnaround time, and the services Immortal Automotive offers in Sherwood Park & Edmonton, AB."
        path="/faq"
      />
      <JsonLd data={faqSchema} />

      <section className="relative pt-36 pb-20 bg-brand-dark overflow-hidden">
        <div className="absolute left-0 top-0 bottom-0 w-1.5 bg-brand-orange" />
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <AnimatedSection>
            <span className="section-label block mb-4">Got Questions?</span>
            <h1 className="font-display text-6xl md:text-7xl text-white leading-none tracking-wide mb-6">
              Frequently Asked <span className="text-gradient">Questions</span>
            </h1>
            <p className="text-white/60 text-lg max-w-xl mx-auto">
              Straight answers before you even pick up the phone.
            </p>
          </AnimatedSection>
        </div>
      </section>

      <section className="py-20 bg-brand-dark-2">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 space-y-4">
          {faqs.map(({ q, a }) => (
            <FaqItem key={q} q={q} a={a} />
          ))}
        </div>
      </section>

      <section className="py-20 bg-brand-dark border-t border-white/5">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <SectionHeading
            label="Still Have Questions?"
            title="Give Us a Call"
            center
          />
          <div className="flex flex-wrap gap-4 justify-center">
            <Link to="/contact" className="btn-primary text-base px-8 py-4">
              Send a Message
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
