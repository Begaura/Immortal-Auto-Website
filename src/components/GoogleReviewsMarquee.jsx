import { Star } from 'lucide-react'

const reviews = [
  {
    name: 'Tej Goraya',
    text: "I've trusted Immortal Automotive Performance with everything from basic oil changes to major engine work — the work is done right, pricing is fair, and there's no upselling.",
  },
  {
    name: 'Harveer Gill',
    text: 'These guys do great work, and have lots of experience and knowledge. Only trust them to work on my vehicles.',
  },
  {
    name: 'Karen Sonnenberg',
    text: 'Amar is an honest mechanic and runs a great crew. He charged me half of what another mechanic wanted.',
  },
  {
    name: 'Erin Livingston',
    text: 'From basic maintenance to engines and timing chains — very knowledgeable and honest. I highly recommend Immortal Automotive!',
  },
  {
    name: 'Ben Kempa',
    text: "Had lots of questions and the mechanic wasn't dismissive at all — answered everything and didn't oversell anything. Truck runs amazing now.",
  },
]

function GoogleLogo({ className }) {
  return (
    <svg viewBox="0 0 48 48" className={className} aria-hidden="true">
      <path fill="#FFC107" d="M43.611,20.083H42V20H24v8h11.303c-1.649,4.657-6.08,8-11.303,8c-6.627,0-12-5.373-12-12 c0-6.627,5.373-12,12-12c3.059,0,5.842,1.154,7.961,3.039l5.657-5.657C34.046,6.053,29.268,4,24,4C12.955,4,4,12.955,4,24 c0,11.045,8.955,20,20,20c11.045,0,20-8.955,20-20C44,22.659,43.862,21.35,43.611,20.083z" />
      <path fill="#FF3D00" d="M6.306,14.691l6.571,4.819C14.655,15.108,18.961,12,24,12c3.059,0,5.842,1.154,7.961,3.039 l5.657-5.657C34.046,6.053,29.268,4,24,4C16.318,4,9.656,8.337,6.306,14.691z" />
      <path fill="#4CAF50" d="M24,44c5.166,0,9.86-1.977,13.409-5.192l-6.19-5.238C29.211,35.091,26.715,36,24,36 c-5.202,0-9.619-3.317-11.283-7.946l-6.522,5.025C9.505,39.556,16.227,44,24,44z" />
      <path fill="#1976D2" d="M43.611,20.083H42V20H24v8h11.303c-0.792,2.237-2.231,4.166-4.087,5.571c0.001-0.001,0.002-0.001,0.003-0.002 l6.19,5.238C36.971,39.205,44,34,44,24C44,22.659,43.862,21.35,43.611,20.083z" />
    </svg>
  )
}

function ReviewCard({ name, text }) {
  return (
    <div className="flex items-center px-10 py-8 flex-shrink-0 w-[28rem] border-r border-white/10">
      <div className="w-full">
        <div className="flex gap-1 mb-3">
          {Array.from({ length: 5 }).map((_, i) => (
            <Star key={i} size={20} className="fill-brand-orange text-brand-orange" />
          ))}
        </div>
        <p className="text-white/80 text-lg leading-snug line-clamp-3 mb-3">
          "{text}"
        </p>
        <span className="text-white/50 text-sm font-semibold uppercase tracking-wide">— {name}</span>
      </div>
    </div>
  )
}

const GOOGLE_PROFILE_URL = 'https://www.google.com/maps/search/?api=1&query=Immortal+Automotive+Performance+Inc+114+Sioux+Rd+Sherwood+Park+AB'

export default function GoogleReviewsMarquee() {
  const loop = [...reviews, ...reviews]

  return (
    <div className="relative w-full bg-black border-y border-white/10 overflow-hidden">
      <div className="flex items-stretch">
        <a
          href={GOOGLE_PROFILE_URL}
          target="_blank"
          rel="noopener noreferrer"
          className="hidden sm:flex items-center gap-3 pl-6 lg:pl-10 pr-8 py-8 flex-shrink-0 bg-black z-10 border-r border-white/10 hover:bg-white/5 transition-colors"
        >
          <GoogleLogo className="w-10 h-10 flex-shrink-0" />
          <div className="leading-tight">
            <div className="text-white font-bold text-base whitespace-nowrap">Google Reviews</div>
            <div className="flex items-center gap-1 text-brand-orange text-lg font-bold">
              5.0
              <Star size={16} className="fill-brand-orange text-brand-orange" />
            </div>
            <div className="text-white/30 text-[11px] uppercase tracking-wide mt-1 whitespace-nowrap">
              See all reviews →
            </div>
          </div>
        </a>

        <div className="overflow-hidden flex-1">
          <div className="flex w-max animate-marquee">
            {loop.map((review, i) => (
              <ReviewCard key={i} {...review} />
            ))}
          </div>
        </div>
      </div>
      <p className="text-center text-white/25 text-[11px] py-2 border-t border-white/5">
        A selection of reviews from our Google Business Profile —{' '}
        <a href={GOOGLE_PROFILE_URL} target="_blank" rel="noopener noreferrer" className="underline hover:text-white/50">
          read all of our reviews on Google
        </a>
      </p>
    </div>
  )
}
