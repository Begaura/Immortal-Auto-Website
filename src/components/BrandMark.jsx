export default function BrandMark({ size = 48, className = '' }) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 80 80"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      aria-label="Immortal Automotive mark"
    >
      {/* Outer hex — orange fill */}
      <polygon
        points="40,2 74,21 74,59 40,78 6,59 6,21"
        fill="#F97316"
      />
      {/* Inner dark hex — creates depth ring */}
      <polygon
        points="40,13 65,27.5 65,52.5 40,67 15,52.5 15,27.5"
        fill="#0A0A0A"
      />
      {/* I-mark — top bar */}
      <rect x="25" y="24" width="30" height="5.5" rx="1.5" fill="#F97316" />
      {/* I-mark — vertical stem */}
      <rect x="35.5" y="24" width="9" height="32" rx="1.5" fill="#F97316" />
      {/* I-mark — bottom bar */}
      <rect x="25" y="50.5" width="30" height="5.5" rx="1.5" fill="#F97316" />
    </svg>
  )
}
