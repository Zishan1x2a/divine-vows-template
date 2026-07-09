import { useEffect, useMemo, useState } from "react";

function useMounted() {
  const [m, setM] = useState(false);
  useEffect(() => setM(true), []);
  return m;
}

// Floating rose/marigold petals
export function FloatingPetals({ count = 14, className = "" }: { count?: number; className?: string }) {
  const mounted = useMounted();
  const petals = useMemo(
    () => Array.from({ length: count }, (_, i) => ({
      left: Math.random() * 100,
      delay: Math.random() * 12,
      duration: 14 + Math.random() * 12,
      size: 10 + Math.random() * 16,
      drift: (Math.random() - 0.5) * 200,
      hue: Math.random() > 0.5 ? "#B93A3A" : "#D9873A",
      i,
    })),
    [count],
  );
  return (
    <div aria-hidden className={`pointer-events-none absolute inset-0 overflow-hidden ${className}`}>
      {mounted && petals.map((p) => (
        <svg
          key={p.i}
          viewBox="0 0 24 24"
          width={p.size}
          height={p.size}
          style={{
            position: "absolute",
            left: `${p.left}%`,
            top: "-10vh",
            animation: `petal-fall ${p.duration}s linear ${p.delay}s infinite`,
            ["--x-drift" as string]: `${p.drift}px`,
            filter: "drop-shadow(0 2px 4px rgba(0,0,0,.2))",
          }}
        >
          <path
            d="M12 2 C 7 6, 6 12, 12 22 C 18 12, 17 6, 12 2 Z"
            fill={p.hue}
            opacity="0.85"
          />
        </svg>
      ))}
    </div>
  );
}

export function GoldenParticles({ count = 30, className = "" }: { count?: number; className?: string }) {
  const dots = useMemo(
    () => Array.from({ length: count }, (_, i) => ({
      left: Math.random() * 100,
      top: Math.random() * 100,
      size: 2 + Math.random() * 4,
      delay: Math.random() * 6,
      duration: 4 + Math.random() * 6,
      i,
    })),
    [count],
  );
  return (
    <div aria-hidden className={`pointer-events-none absolute inset-0 overflow-hidden ${className}`}>
      {dots.map((d) => (
        <span
          key={d.i}
          style={{
            position: "absolute",
            left: `${d.left}%`,
            top: `${d.top}%`,
            width: d.size,
            height: d.size,
            borderRadius: 999,
            background: "radial-gradient(circle, #F5E6A8 0%, #D4AF37 55%, transparent 75%)",
            animation: `particle-float ${d.duration}s ease-in-out ${d.delay}s infinite`,
          }}
        />
      ))}
    </div>
  );
}

// Ornate SVG temple arch frame
export function ArchFrame({ children, className = "" }: { children: React.ReactNode; className?: string }) {
  return (
    <div className={`relative ${className}`}>
      <svg
        aria-hidden
        viewBox="0 0 400 500"
        className="absolute inset-0 h-full w-full"
        preserveAspectRatio="none"
      >
        <defs>
          <linearGradient id="archGold" x1="0" y1="0" x2="0" y2="1">
            <stop offset="0%" stopColor="#F5E6A8" />
            <stop offset="50%" stopColor="#D4AF37" />
            <stop offset="100%" stopColor="#B8862A" />
          </linearGradient>
        </defs>
        <path
          d="M20 480 L20 200 Q 20 20 200 20 Q 380 20 380 200 L380 480"
          fill="none"
          stroke="url(#archGold)"
          strokeWidth="3"
        />
        <path
          d="M32 478 L32 205 Q 32 32 200 32 Q 368 32 368 205 L368 478"
          fill="none"
          stroke="url(#archGold)"
          strokeWidth="1"
          opacity=".6"
        />
        {/* corner flourishes */}
        <MandalaCorner x={20} y={480} />
        <MandalaCorner x={380} y={480} flip />
      </svg>
      <div className="relative">{children}</div>
    </div>
  );
}

function MandalaCorner({ x, y, flip }: { x: number; y: number; flip?: boolean }) {
  return (
    <g transform={`translate(${x} ${y}) scale(${flip ? -1 : 1} 1)`}>
      <circle r="12" fill="#D4AF37" opacity=".8" />
      <circle r="6" fill="#6E1F2A" />
      <circle r="2" fill="#F5E6A8" />
    </g>
  );
}

// Section title with gold flourishes
export function Ornament({ className = "" }: { className?: string }) {
  return (
    <div aria-hidden className={`mx-auto flex items-center justify-center gap-3 ${className}`}>
      <span className="h-px w-16 bg-gradient-to-r from-transparent to-[#D4AF37]" />
      <svg width="28" height="28" viewBox="0 0 32 32">
        <defs>
          <linearGradient id="ornGold" x1="0" y1="0" x2="1" y2="1">
            <stop offset="0%" stopColor="#F5E6A8" /><stop offset="100%" stopColor="#B8862A" />
          </linearGradient>
        </defs>
        <path d="M16 2 L18 14 L30 16 L18 18 L16 30 L14 18 L2 16 L14 14 Z" fill="url(#ornGold)" />
        <circle cx="16" cy="16" r="2.5" fill="#6E1F2A" />
      </svg>
      <span className="h-px w-16 bg-gradient-to-l from-transparent to-[#D4AF37]" />
    </div>
  );
}

export function SectionTitle({
  eyebrow,
  title,
  subtitle,
  center = true,
  light = false,
}: {
  eyebrow?: string;
  title: string;
  subtitle?: string;
  center?: boolean;
  light?: boolean;
}) {
  return (
    <div className={`${center ? "text-center" : ""} mb-10`}>
      {eyebrow && (
        <p className={`mb-3 text-xs uppercase tracking-[0.4em] ${light ? "text-gold-soft" : "text-[color-mix(in_oklab,var(--maroon)_70%,transparent)]"}`}>
          {eyebrow}
        </p>
      )}
      <h2 className={`gold-text text-4xl sm:text-5xl md:text-6xl font-semibold`}>{title}</h2>
      <Ornament className="mt-4" />
      {subtitle && (
        <p className={`mx-auto mt-4 max-w-2xl text-sm sm:text-base ${light ? "text-ivory/80" : "text-muted-foreground"}`}>
          {subtitle}
        </p>
      )}
    </div>
  );
}

// Mandala background watermark (SVG)
export function MandalaBg({ className = "" }: { className?: string }) {
  return (
    <svg
      aria-hidden
      viewBox="0 0 400 400"
      className={`pointer-events-none absolute opacity-[0.06] ${className}`}
    >
      <g fill="none" stroke="#6E1F2A" strokeWidth="1">
        <circle cx="200" cy="200" r="180" />
        <circle cx="200" cy="200" r="140" />
        <circle cx="200" cy="200" r="100" />
        <circle cx="200" cy="200" r="60" />
        {Array.from({ length: 16 }).map((_, i) => {
          const a = (i * Math.PI) / 8;
          return (
            <line
              key={i}
              x1={200 + Math.cos(a) * 40}
              y1={200 + Math.sin(a) * 40}
              x2={200 + Math.cos(a) * 180}
              y2={200 + Math.sin(a) * 180}
            />
          );
        })}
        {Array.from({ length: 12 }).map((_, i) => {
          const a = (i * Math.PI) / 6;
          return (
            <ellipse
              key={i}
              cx={200 + Math.cos(a) * 120}
              cy={200 + Math.sin(a) * 120}
              rx="24" ry="10"
              transform={`rotate(${(i * 30)} ${200 + Math.cos(a) * 120} ${200 + Math.sin(a) * 120})`}
            />
          );
        })}
      </g>
    </svg>
  );
}

// Simple animate-in on scroll (IntersectionObserver)
export function useReveal<T extends HTMLElement>() {
  const [ref, setRef] = useState<T | null>(null);
  const [shown, setShown] = useState(false);
  useEffect(() => {
    if (!ref || shown) return;
    const io = new IntersectionObserver(
      ([e]) => {
        if (e.isIntersecting) {
          setShown(true);
          io.disconnect();
        }
      },
      { threshold: 0.15 },
    );
    io.observe(ref);
    return () => io.disconnect();
  }, [ref, shown]);
  return { setRef, shown };
}

export function Reveal({ children, delay = 0, className = "" }: { children: React.ReactNode; delay?: number; className?: string }) {
  const { setRef, shown } = useReveal<HTMLDivElement>();
  return (
    <div
      ref={setRef}
      className={className}
      style={{
        opacity: shown ? 1 : 0,
        transform: shown ? "translateY(0) scale(1)" : "translateY(24px) scale(.98)",
        filter: shown ? "blur(0)" : "blur(6px)",
        transition: `opacity .9s ease-out ${delay}s, transform .9s ease-out ${delay}s, filter .9s ease-out ${delay}s`,
      }}
    >
      {children}
    </div>
  );
}

// Gold CTA button
export function GoldButton({
  children, onClick, type = "button", className = "", as = "button", href,
}: {
  children: React.ReactNode;
  onClick?: () => void;
  type?: "button" | "submit";
  className?: string;
  as?: "button" | "a";
  href?: string;
}) {
  const cls =
    "group relative inline-flex items-center justify-center gap-2 rounded-full px-8 py-3.5 font-body text-sm uppercase tracking-[0.25em] text-[#3a1a10] transition-all duration-500 gold-gradient shadow-gold hover:scale-[1.03] hover:shadow-[0_15px_50px_-10px_#D4AF37] focus:outline-none focus:ring-2 focus:ring-[#D4AF37]/60 focus:ring-offset-2 focus:ring-offset-transparent " +
    className;
  const inner = (
    <>
      <span className="pointer-events-none absolute inset-0 overflow-hidden rounded-full">
        <span className="absolute inset-y-0 -left-1/2 w-1/2 shimmer-overlay" />
      </span>
      <span className="relative z-10">{children}</span>
    </>
  );
  if (as === "a") {
    return <a href={href} className={cls}>{inner}</a>;
  }
  return <button type={type} onClick={onClick} className={cls}>{inner}</button>;
}
