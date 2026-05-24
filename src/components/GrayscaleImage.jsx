export default function GrayscaleImage({ src, alt, className = '', overlayIntensity = 'medium' }) {
  const overlays = {
    light:  'from-brand-orange/10 via-transparent to-transparent',
    medium: 'from-brand-orange/20 via-brand-orange/5 to-transparent',
    strong: 'from-brand-orange/30 via-brand-orange/10 to-transparent',
  }

  return (
    <div className="relative overflow-hidden w-full h-full">
      <img
        src={src}
        alt={alt}
        className={`w-full h-full object-cover grayscale contrast-125 brightness-75 ${className}`}
      />
      {/* Orange gradient accent — mimics the selective-color look */}
      <div
        className={`absolute inset-0 bg-gradient-to-tr ${overlays[overlayIntensity]} mix-blend-overlay pointer-events-none`}
      />
      {/* Bottom-left vignette pulls toward dark */}
      <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent pointer-events-none" />
    </div>
  )
}
