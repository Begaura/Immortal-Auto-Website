import { Zap, GitMerge, Activity, ShieldCheck, Wind, Gauge } from 'lucide-react'

export const specialtyServices = [
  {
    slug: 'engine-diagnostics-rebuild',
    icon: Zap,
    title: 'Engine Diagnostics & Rebuild',
    shortDesc: "When your check engine light comes on or your diesel starts acting up, we get to the actual root cause — not just clear the code and send you home hoping for the best.",
    longDesc: "A check engine light or a rough-running diesel can mean a dozen different things — and swapping parts until something works isn't a diagnosis, it's a guessing game at your expense. We start every engine job with a full diagnostic: scanning codes, checking fuel pressure and injector performance, reviewing compression, and confirming what's actually wrong before we quote anything. If the fix is a sensor or an injector, that's what you'll pay for. If it's deeper — a full rebuild — we'll walk you through exactly what that involves and why, so you're deciding with real information, not a worst-case sales pitch.",
    items: ['Check Engine Light diagnosis', 'Diesel injector service', 'Turbo inspection & repair', 'Full engine rebuild'],
  },
  {
    slug: 'transmission-repair-rebuild',
    icon: GitMerge,
    title: 'Transmission Repair & Rebuild',
    shortDesc: "Slipping gears, shuddering, weird noises at speed — transmission problems don't fix themselves. We rebuild them right, using quality parts that'll outlast the factory unit.",
    longDesc: "Transmission problems get worse the longer they're ignored — what starts as a shudder on shift can turn into a full failure on the highway. We diagnose automatic and manual transmissions properly before recommending a repair, whether that's a fluid and filter service, a torque converter replacement, a clutch job, or a full rebuild. If your truck tows or hauls regularly, we'll also talk to you about upgraded internals that hold up better than the factory setup under real load.",
    items: ['Automatic & manual transmission', 'Torque converter service', 'Clutch replacement', 'Full rebuild service'],
  },
  {
    slug: 'suspension-steering',
    icon: Activity,
    title: 'Suspension & Steering',
    shortDesc: "A truck is only as capable as what's underneath it. Whether you're hauling, towing, or building something lifted, we'll set it up right so it handles the way it should.",
    longDesc: "Worn suspension and steering components don't just hurt ride quality — they affect how your truck handles under load, in bad weather, and at highway speed. We inspect and repair leaf springs, shocks, struts, and steering components, and we'll tell you honestly whether a part needs replacing or has life left in it. If you're setting a truck up for towing, off-road use, or a lift, we'll help you spec it so it holds up to how you actually use the truck.",
    items: ['Leaf spring replacement', 'Shock & strut service', 'Alignment inspection', 'Steering component repair'],
  },
  {
    slug: 'electrical-diagnostics',
    icon: ShieldCheck,
    title: 'Electrical & Diagnostics',
    shortDesc: "Electrical gremlins are the worst — and the hardest to find if you don't have the right tools and experience. We do. We track it down fast and fix it properly.",
    longDesc: "Electrical issues are notorious for getting misdiagnosed — a battery gets replaced, an alternator gets swapped, and the actual problem (a wiring fault, a bad ground, a failing module) is still there. We use proper diagnostic equipment to trace the issue to its source instead of parts-cannon guessing, covering everything from charging system faults to ABS and traction control warning lights to intermittent wiring problems that only show up on the highway or in the cold.",
    items: ['Full electrical diagnosis', 'Wiring harness repair', 'Battery & alternator service', 'ABS & traction control'],
  },
  {
    slug: 'hvac-repair',
    icon: Wind,
    title: 'HVAC System Repair',
    shortDesc: "Alberta winters are brutal and summers aren't much better. Your heat and AC have to work. If your climate control is acting up, bring it in and we'll sort it out.",
    longDesc: "In Alberta, a truck's heating and AC aren't comfort features — they're safety equipment. We diagnose and repair AC systems (recharges, leak detection, compressor issues), heater cores, blower motors, and general climate control faults so you're not stuck choosing between a foggy windshield in -30°C or a truck that's an oven in July.",
    items: ['AC recharge & repair', 'Heater core service', 'Blower motor replacement', 'Climate control diagnosis'],
  },
  {
    slug: 'performance-upgrades',
    icon: Gauge,
    title: 'Performance Upgrades',
    shortDesc: "Want more out of your truck than it came with from the factory? We do performance builds and upgrades — from bolt-ons to full engine work. Tell us what you're after.",
    longDesc: "Whether you want a mild bolt-on refresh or a full build, we work with brands like BTR, Texas Speed, Borla, and BD Diesel to get real, reliable gains — not just noise. That includes ECU tuning and remapping, exhaust upgrades, intake and intercooler work, and fuel system optimization for diesel platforms. We'll talk through what actually makes sense for how you drive and tow before recommending parts.",
    items: ['ECU tuning & remapping', 'Exhaust system upgrade', 'Intake & intercooler', 'Fuel system optimization'],
  },
]

export const pricing = [
  { service: 'Oil Change', starting: '$90', includes: 'Filter, full top-off, safety check' },
  { service: 'Brake Pad Replacement', starting: '$150 per axle', includes: 'Parts + labor' },
  { service: 'Tire Rotation', starting: '$55', includes: '4-wheel rotation and inspection' },
  { service: 'AC Recharge', starting: '$189', includes: 'Diagnostic + full refill' },
  { service: 'Check Engine Light Scan', starting: '$140', includes: 'Full diagnostic scan & report' },
  { service: 'Transmission Service', starting: '$220', includes: 'Fluid flush, filter, inspection' },
]
