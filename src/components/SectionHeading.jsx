import AnimatedSection from './AnimatedSection'

export default function SectionHeading({ label, title, subtitle, light = false, center = false }) {
  return (
    <AnimatedSection className={`mb-10 md:mb-14 ${center ? 'text-center' : ''}`}>
      {label && (
        <span className="section-label block mb-3">{label}</span>
      )}
      <h2 className={`text-3xl md:text-4xl lg:text-5xl font-black leading-tight ${light ? 'text-white' : 'text-white'}`}>
        {title}
      </h2>
      {subtitle && (
        <p className={`mt-4 text-base md:text-lg leading-relaxed max-w-2xl ${center ? 'mx-auto' : ''} ${light ? 'text-white/60' : 'text-white/60'}`}>
          {subtitle}
        </p>
      )}
    </AnimatedSection>
  )
}
