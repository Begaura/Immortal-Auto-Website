// Local photos have an 800px-wide "-sm" copy in /public; Unsplash resizes via URL.
// The browser picks the smaller one on phones, saving most of the download.
function responsiveSources(src, width = 1600) {
  if (src.startsWith('/') && src.endsWith('.webp')) {
    return { src, srcSet: `${src.replace(/\.webp$/, '-sm.webp')} 800w, ${src} ${width}w` }
  }
  if (src.includes('images.unsplash.com')) {
    const base = src.split('?')[0] + '?auto=format&fit=crop&q=60'
    return { src: `${base}&w=1600`, srcSet: `${base}&w=800 800w, ${base}&w=1600 1600w` }
  }
  return { src }
}

export default function GrayscaleImage({
  src,
  alt,
  className = '',
  overlayIntensity = 'medium',
  loading = 'lazy',
  fetchPriority = 'auto',
  width,
  height,
  sizes = '(max-width: 767px) 800px, 100vw',
}) {
  const sources = responsiveSources(src, width)

  const overlays = {
    light:  'from-brand-orange/10 via-transparent to-transparent',
    medium: 'from-brand-orange/20 via-brand-orange/5 to-transparent',
    strong: 'from-brand-orange/30 via-brand-orange/10 to-transparent',
  }

  return (
    <div className="relative overflow-hidden w-full h-full">
      <img
        src={sources.src}
        srcSet={sources.srcSet}
        sizes={sources.srcSet ? sizes : undefined}
        alt={alt}
        width={width}
        height={height}
        loading={loading}
        fetchPriority={fetchPriority}
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
