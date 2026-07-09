import { useEffect, useState } from "react";
import { wedding } from "@/data/wedding";
import { FloatingPetals, GoldenParticles, GoldButton } from "./decor";

export function Opening({ onEnter }: { onEnter: () => void }) {
  const [phase, setPhase] = useState(0); // 0 dark → 1 glow → 2 arch → 3 namaste → 4 button
  const [leaving, setLeaving] = useState(false);

  useEffect(() => {
    const t: ReturnType<typeof setTimeout>[] = [];
    t.push(setTimeout(() => setPhase(1), 400));
    t.push(setTimeout(() => setPhase(2), 1800));
    t.push(setTimeout(() => setPhase(3), 3200));
    t.push(setTimeout(() => setPhase(4), 4500));
    return () => t.forEach(clearTimeout);
  }, []);

  function handleEnter() {
    setLeaving(true);
    setTimeout(onEnter, 900);
  }

  return (
    <div
      className="fixed inset-0 z-[100] overflow-hidden"
      style={{
        background: "radial-gradient(ellipse at center, #2a1a08 0%, #0a0603 65%, #000 100%)",
        opacity: leaving ? 0 : 1,
        transition: "opacity .9s ease-out",
        pointerEvents: leaving ? "none" : "auto",
      }}
    >
      {/* Golden glow orb */}
      <div
        className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2"
        style={{
          width: phase >= 1 ? "80vmin" : "0px",
          height: phase >= 1 ? "80vmin" : "0px",
          borderRadius: "50%",
          background:
            "radial-gradient(circle, rgba(245,230,168,.55) 0%, rgba(212,175,55,.25) 30%, transparent 65%)",
          transition: "all 2.2s cubic-bezier(.16,1,.3,1)",
          filter: "blur(20px)",
        }}
      />
      {/* Light rays */}
      {phase >= 1 && (
        <div
          aria-hidden
          className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2"
          style={{
            width: "120vmax",
            height: "120vmax",
            background:
              "conic-gradient(from 0deg, transparent 0deg, rgba(245,230,168,.08) 8deg, transparent 16deg, transparent 40deg, rgba(245,230,168,.05) 48deg, transparent 56deg)",
            animation: "ring-spin 60s linear infinite",
            opacity: phase >= 2 ? 0.9 : 0.3,
            transition: "opacity 2s ease",
          }}
        />
      )}
      {phase >= 2 && <GoldenParticles count={40} />}
      {phase >= 2 && <FloatingPetals count={10} />}

      <div className="relative z-10 flex h-full flex-col items-center justify-center px-6 text-center">
        {/* Arch silhouette */}
        <svg
          viewBox="0 0 240 220"
          className="mb-6 w-40 sm:w-48"
          style={{
            opacity: phase >= 2 ? 1 : 0,
            transform: phase >= 2 ? "translateY(0)" : "translateY(20px)",
            transition: "all 1.4s ease-out",
          }}
        >
          <defs>
            <linearGradient id="opGold" x1="0" y1="0" x2="0" y2="1">
              <stop offset="0%" stopColor="#F5E6A8" /><stop offset="100%" stopColor="#B8862A" />
            </linearGradient>
          </defs>
          <path d="M20 210 L20 100 Q 20 20 120 20 Q 220 20 220 100 L220 210" stroke="url(#opGold)" strokeWidth="2" fill="none" />
          {/* Hanging bells */}
          <circle cx="60" cy="60" r="4" fill="#D4AF37" />
          <circle cx="180" cy="60" r="4" fill="#D4AF37" />
          <line x1="60" y1="20" x2="60" y2="56" stroke="#D4AF37" strokeWidth="1" />
          <line x1="180" y1="20" x2="180" y2="56" stroke="#D4AF37" strokeWidth="1" />
          {/* Diyas */}
          <ellipse cx="30" cy="212" rx="10" ry="3" fill="#D4AF37" />
          <ellipse cx="210" cy="212" rx="10" ry="3" fill="#D4AF37" />
          <circle cx="30" cy="205" r="2" fill="#FF9E3A" />
          <circle cx="210" cy="205" r="2" fill="#FF9E3A" />
        </svg>

        <div
          style={{
            opacity: phase >= 3 ? 1 : 0,
            transform: phase >= 3 ? "translateY(0)" : "translateY(12px)",
            transition: "all 1.2s ease-out",
          }}
        >
          <div className="mb-3 text-4xl">🙏</div>
          <p className="font-heading text-4xl sm:text-5xl text-[#F5E6A8] italic tracking-wide">
            Namaste
          </p>
          <p className="mt-2 text-xs sm:text-sm uppercase tracking-[0.35em] text-[#E8DCCB]/70">
            Welcome to our wedding celebration
          </p>
        </div>

        <div
          className="mt-6"
          style={{
            opacity: phase >= 4 ? 1 : 0,
            transform: phase >= 4 ? "translateY(0)" : "translateY(12px)",
            transition: "all 1s ease-out .2s",
          }}
        >
          <p className="font-couple gold-text text-2xl sm:text-4xl leading-tight">
            {wedding.couple.brideShort} <span className="text-[#D4AF37]">&</span> {wedding.couple.groomShort}
          </p>
        </div>

        <div
          className="mt-10"
          style={{
            opacity: phase >= 4 ? 1 : 0,
            transform: phase >= 4 ? "translateY(0)" : "translateY(20px)",
            transition: "all 1s ease-out .5s",
          }}
        >
          <GoldButton onClick={handleEnter}>Open Invitation ✧</GoldButton>
        </div>
      </div>
    </div>
  );
}
