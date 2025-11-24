import Image from "next/image";

type Visual = {
  id: string;
  title: string;
  subtitle: string;
  description: string;
  aspect: "vertical" | "horizontal";
  variant: "treadmill" | "infographic" | "escalator" | "factory";
  image?: {
    src: string;
    alt: string;
  };
};

const visuals: Visual[] = [
  {
    id: "treadmill",
    title: "Redlined Stride",
    subtitle: "Close-Up | 9:16",
    description:
      "Feet pounding an industrial treadmill, belt scarred with redlining cartography—a visceral metaphor for systemic economic resistance rendered with dramatic studio light.",
    aspect: "vertical",
    variant: "treadmill",
    image: {
      src: "https://images.unsplash.com/photo-1594789797589-a8404eab73d6?auto=format&fit=crop&w=1080&q=80",
      alt: "Close-up view of running shoes on a treadmill inside an industrial gym."
    }
  },
  {
    id: "infographic",
    title: "Wealth vs Income Trajectories",
    subtitle: "Infographic | 9:16",
    description:
      "A stark black field anchors a gold exponential wealth curve towering over a static blue income line, capturing widening disparities with minimalist data visualization.",
    aspect: "vertical",
    variant: "infographic"
  },
  {
    id: "escalator",
    title: "Broken Climb",
    subtitle: "Urban Portrait | 9:16",
    description:
      "A young urban dreamer stares up at a corroded escalator limned in cold blue light—the cinematic pause before confronting fractured mobility pathways.",
    aspect: "vertical",
    variant: "escalator",
    image: {
      src: "https://images.unsplash.com/photo-1763604606192-db125b88a3c3?auto=format&fit=crop&w=1080&q=80",
      alt: "Young person in winter clothing standing beneath a rusted escalator in a decaying urban structure."
    }
  },
  {
    id: "factory",
    title: "Line of Pride",
    subtitle: "Heritage Portrait | 16:9",
    description:
      "A Detroit line worker bathes in molten sparks and golden-hour haze, honoring blue-collar resilience with Kodachrome warmth and cinematic depth.",
    aspect: "horizontal",
    variant: "factory",
    image: {
      src: "https://images.unsplash.com/photo-1576673195903-bb573ef5a755?auto=format&fit=crop&w=1600&q=80",
      alt: "Auto factory worker welding on an assembly line with sparks flying inside a sunlit industrial hall."
    }
  }
];

function InfographicFrame() {
  return (
    <div className="frame vertical">
      <div className="infographic">
        <svg viewBox="0 0 900 1600" role="img" aria-labelledby="infographic-title">
          <title id="infographic-title">
            Gold exponential curve labeled wealth contrasted with flat blue income line.
          </title>
          <defs>
            <linearGradient id="grid" x1="0" y1="0" x2="0" y2="1">
              <stop offset="0%" stopColor="rgba(255,255,255,0.12)" />
              <stop offset="100%" stopColor="rgba(255,255,255,0.04)" />
            </linearGradient>
            <pattern id="gridlines" width="900" height="1600" patternUnits="userSpaceOnUse">
              <path d="M150 0 L150 1600" stroke="rgba(255,255,255,0.06)" strokeWidth="2" />
              <path d="M300 0 L300 1600" stroke="rgba(255,255,255,0.06)" strokeWidth="2" />
              <path d="M450 0 L450 1600" stroke="rgba(255,255,255,0.06)" strokeWidth="2" />
              <path d="M600 0 L600 1600" stroke="rgba(255,255,255,0.06)" strokeWidth="2" />
              <path d="M750 0 L750 1600" stroke="rgba(255,255,255,0.06)" strokeWidth="2" />
              <path d="M0 200 L900 200" stroke="rgba(255,255,255,0.06)" strokeWidth="2" />
              <path d="M0 400 L900 400" stroke="rgba(255,255,255,0.06)" strokeWidth="2" />
              <path d="M0 600 L900 600" stroke="rgba(255,255,255,0.06)" strokeWidth="2" />
              <path d="M0 800 L900 800" stroke="rgba(255,255,255,0.06)" strokeWidth="2" />
              <path d="M0 1000 L900 1000" stroke="rgba(255,255,255,0.06)" strokeWidth="2" />
              <path d="M0 1200 L900 1200" stroke="rgba(255,255,255,0.06)" strokeWidth="2" />
              <path d="M0 1400 L900 1400" stroke="rgba(255,255,255,0.06)" strokeWidth="2" />
            </pattern>
            <radialGradient id="wealth-glow" cx="0.8" cy="0.2" r="1">
              <stop offset="0%" stopColor="rgba(253, 220, 120, 0.55)" />
              <stop offset="40%" stopColor="rgba(253, 192, 46, 0.4)" />
              <stop offset="100%" stopColor="rgba(253, 192, 46, 0)" />
            </radialGradient>
          </defs>
          <rect width="900" height="1600" fill="url(#grid)" opacity="0.3" />
          <rect width="900" height="1600" fill="url(#gridlines)" opacity="0.35" />
          <path
            d="M120 1300 C270 1280 420 1240 520 1070 C650 840 720 480 760 220"
            fill="none"
            stroke="var(--accent-gold)"
            strokeWidth="40"
            strokeLinecap="round"
          />
          <path
            d="M120 1280 L780 1280"
            stroke="rgba(80,142,255,0.95)"
            strokeWidth="46"
            strokeLinecap="round"
          />
          <path
            d="M120 1280 L780 1280"
            stroke="rgba(35,66,133,0.95)"
            strokeWidth="18"
            strokeLinecap="round"
            opacity="0.5"
          />
          <circle cx="760" cy="220" r="180" fill="url(#wealth-glow)" opacity="0.65" />
          <text
            x="760"
            y="210"
            textAnchor="end"
            fontSize="64"
            fill="var(--accent-gold)"
          >
            WEALTH
          </text>
          <text
            x="760"
            y="1220"
            textAnchor="end"
            fontSize="54"
            fill="rgba(80,142,255,0.95)"
          >
            INCOME
          </text>
        </svg>
      </div>
    </div>
  );
}

function VisualFrame({ visual }: { visual: Visual }) {
  if (visual.variant === "infographic") {
    return <InfographicFrame />;
  }

  const frameClass = [
    "frame",
    visual.aspect === "vertical" ? "vertical" : "horizontal",
    visual.variant === "treadmill"
      ? "treadmill-frame"
      : visual.variant === "escalator"
      ? "escalator-frame"
      : "factory-frame"
  ]
    .filter(Boolean)
    .join(" ");

  return (
    <div className={frameClass}>
      <Image
        src={visual.image!.src}
        alt={visual.image!.alt}
        fill
        sizes="(max-width: 768px) 100vw, 50vw"
        priority={visual.id === "treadmill"}
      />
      <div className="overlay-gradient" />
    </div>
  );
}

export default function Page() {
  return (
    <main>
      <header>
        <h1>Economic Mobility Series</h1>
        <p>
          Four narrative visuals examining the friction, stasis, hope, and heritage woven
          into the pursuit of prosperity.
        </p>
      </header>
      <section className="grid">
        {visuals.map((visual) => (
          <article key={visual.id} className="card">
            <small>{visual.subtitle}</small>
            <h2>{visual.title}</h2>
            <VisualFrame visual={visual} />
            <p>{visual.description}</p>
          </article>
        ))}
      </section>
    </main>
  );
}
