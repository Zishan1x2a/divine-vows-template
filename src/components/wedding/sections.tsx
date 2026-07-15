import { useEffect, useMemo, useRef, useState } from "react";
import { motion } from "framer-motion";
import { useForm } from "react-hook-form";
import {
  Calendar, Clock, MapPin, Sparkles, Heart, Phone, MessageCircle,
  Gift, ChevronDown, X, Car, BedDouble, Navigation, Check,
} from "lucide-react";
import { wedding, ganeshMantra, IMG } from "@/data/wedding";
import {
  ArchFrame, FloatingPetals, GoldenParticles, MandalaBg,
  Ornament, Reveal, SectionTitle, GoldButton,
} from "./decor";

/* =========================================================
   WELCOME
   ========================================================= */
// A beautiful, stylized vector Ganesha line art that draws itself with a golden glow
// matching the calligraphic brush stroke shape in the reference image.
function GaneshaSVG({ className = "", start = false }: { className?: string; start?: boolean }) {
  return (
    <svg
      viewBox="0 0 200 200"
      className={`w-full h-full fill-none stroke-[2.8] stroke-linecap-round stroke-linejoin-round ${className}`}
      style={{
        filter: "drop-shadow(0 0 12px rgba(212, 175, 55, 0.8))",
      }}
    >
      <defs>
        {/* Gold gradient for realistic 3D metallic shine */}
        <linearGradient id="gold-metal-gradient" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#FFE4A0" />
          <stop offset="25%" stopColor="#D4AF37" />
          <stop offset="50%" stopColor="#B38728" />
          <stop offset="75%" stopColor="#F5E6A8" />
          <stop offset="100%" stopColor="#AA7C11" />
        </linearGradient>
      </defs>

      {/* Crown / Mukut - Top Stacked Leaf Arcs */}
      <motion.path
        d="M 82 35 C 90 22, 110 22, 118 35"
        stroke="url(#gold-metal-gradient)"
        initial={{ pathLength: 0 }}
        animate={start ? { pathLength: 1 } : { pathLength: 0 }}
        transition={{ duration: 1.2, delay: 0.2, ease: "easeInOut" }}
      />
      <motion.path
        d="M 90 28 C 96 18, 104 18, 110 28"
        stroke="url(#gold-metal-gradient)"
        initial={{ pathLength: 0 }}
        animate={start ? { pathLength: 1 } : { pathLength: 0 }}
        transition={{ duration: 1.0, delay: 0.5, ease: "easeInOut" }}
      />
      <motion.path
        d="M 98 18 Q 100 8 102 18"
        stroke="url(#gold-metal-gradient)"
        initial={{ pathLength: 0 }}
        animate={start ? { pathLength: 1 } : { pathLength: 0 }}
        transition={{ duration: 0.8, delay: 0.8, ease: "easeInOut" }}
      />
      
      {/* Head Tilak */}
      <motion.path
        d="M 100 32 L 100 48"
        stroke="url(#gold-metal-gradient)"
        initial={{ pathLength: 0 }}
        animate={start ? { pathLength: 1 } : { pathLength: 0 }}
        transition={{ duration: 1.0, delay: 1.1, ease: "easeInOut" }}
      />
      <motion.path
        d="M 95 40 Q 100 37 105 40"
        stroke="url(#gold-metal-gradient)"
        initial={{ pathLength: 0 }}
        animate={start ? { pathLength: 1 } : { pathLength: 0 }}
        transition={{ duration: 0.8, delay: 1.3, ease: "easeInOut" }}
      />
      <motion.path
        d="M 97 44 Q 100 42 103 44"
        stroke="url(#gold-metal-gradient)"
        initial={{ pathLength: 0 }}
        animate={start ? { pathLength: 1 } : { pathLength: 0 }}
        transition={{ duration: 0.8, delay: 1.5, ease: "easeInOut" }}
      />

      {/* Left Ear */}
      <motion.path
        d="M 80 48 C 50 48, 48 72, 65 85 C 72 90, 78 85, 82 78"
        stroke="url(#gold-metal-gradient)"
        initial={{ pathLength: 0 }}
        animate={start ? { pathLength: 1 } : { pathLength: 0 }}
        transition={{ duration: 1.8, delay: 1.8, ease: "easeInOut" }}
      />

      {/* Right Ear */}
      <motion.path
        d="M 120 48 C 150 48, 152 72, 135 85 C 128 90, 122 85, 118 78"
        stroke="url(#gold-metal-gradient)"
        initial={{ pathLength: 0 }}
        animate={start ? { pathLength: 1 } : { pathLength: 0 }}
        transition={{ duration: 1.8, delay: 1.8, ease: "easeInOut" }}
      />

      {/* Face & Trunk (Calligraphy Om Shape) */}
      <motion.path
        d="M 98 52 C 90 70, 85 92, 92 110 C 98 125, 112 135, 122 125 C 130 115, 125 102, 110 108 C 98 112, 95 125, 105 132 C 112 138, 122 135, 128 128"
        stroke="url(#gold-metal-gradient)"
        initial={{ pathLength: 0 }}
        animate={start ? { pathLength: 1 } : { pathLength: 0 }}
        transition={{ duration: 2.5, delay: 2.8, ease: "easeInOut" }}
      />

      {/* Left Hand / Arm */}
      <motion.path
        d="M 72 75 C 55 80, 50 102, 70 112 C 75 115, 80 110, 80 102"
        stroke="url(#gold-metal-gradient)"
        initial={{ pathLength: 0 }}
        animate={start ? { pathLength: 1 } : { pathLength: 0 }}
        transition={{ duration: 1.5, delay: 4.5, ease: "easeInOut" }}
      />

      {/* Right Hand / Arm */}
      <motion.path
        d="M 128 75 C 145 80, 150 102, 130 112 C 125 115, 120 110, 120 102"
        stroke="url(#gold-metal-gradient)"
        initial={{ pathLength: 0 }}
        animate={start ? { pathLength: 1 } : { pathLength: 0 }}
        transition={{ duration: 1.5, delay: 4.5, ease: "easeInOut" }}
      />

      {/* Seated Base Legs */}
      <motion.path
        d="M 75 110 C 58 118, 52 142, 90 152"
        stroke="url(#gold-metal-gradient)"
        initial={{ pathLength: 0 }}
        animate={start ? { pathLength: 1 } : { pathLength: 0 }}
        transition={{ duration: 1.8, delay: 5.2, ease: "easeInOut" }}
      />
      <motion.path
        d="M 125 110 C 142 118, 148 142, 110 152"
        stroke="url(#gold-metal-gradient)"
        initial={{ pathLength: 0 }}
        animate={start ? { pathLength: 1 } : { pathLength: 0 }}
        transition={{ duration: 1.8, delay: 5.2, ease: "easeInOut" }}
      />
      <motion.path
        d="M 90 152 C 95 156, 105 156, 110 152"
        stroke="url(#gold-metal-gradient)"
        initial={{ pathLength: 0 }}
        animate={start ? { pathLength: 1 } : { pathLength: 0 }}
        transition={{ duration: 1.0, delay: 6.2, ease: "easeInOut" }}
      />
    </svg>
  );
}

// A beautiful, rotating golden mandala frame to give a divine look around Ganesha
function WelcomeGaneshaFrame({ className = "" }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 200 200"
      className={`w-full h-full stroke-[#D4AF37] fill-none stroke-[0.8] ${className}`}
      style={{
        filter: "drop-shadow(0 0 8px rgba(212, 175, 55, 0.4))",
      }}
    >
      <circle cx="100" cy="100" r="95" strokeDasharray="2,3" className="opacity-40" />
      <circle cx="100" cy="100" r="88" className="opacity-60" />
      <circle cx="100" cy="100" r="82" strokeDasharray="4,4" />
      <circle cx="100" cy="100" r="75" className="opacity-80" />
      
      {/* Decorative rays/petals */}
      {Array.from({ length: 16 }).map((_, i) => {
        const angle = (i * 360) / 16;
        return (
          <g key={i} transform={`rotate(${angle} 100 100)`}>
            <path
              d="M 100 12 L 104 22 L 100 26 L 96 22 Z"
              className="opacity-70"
            />
            <line x1="100" y1="26" x2="100" y2="75" className="opacity-30" />
          </g>
        );
      })}
    </svg>
  );
}

// Ornate glowing golden border matching the Ganesha line art animation style
function WelcomeBorder() {
  return (
    <div 
      className="absolute inset-3 sm:inset-6 pointer-events-none z-20"
      style={{
        boxShadow: "inset 0 0 20px rgba(212, 175, 55, 0.1), 0 0 15px rgba(212, 175, 55, 0.1)",
      }}
    >
      {/* SVG Animated Border Rays */}
      <svg className="absolute inset-0 w-full h-full" preserveAspectRatio="none">
        <defs>
          <linearGradient id="rayGold" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#F5E6A8" stopOpacity="0" />
            <stop offset="50%" stopColor="#D4AF37" stopOpacity="1" />
            <stop offset="100%" stopColor="#F5E6A8" stopOpacity="0" />
          </linearGradient>
        </defs>
        {/* Static outer border line */}
        <rect
          x="0.5"
          y="0.5"
          width="100%"
          height="100%"
          className="fill-none stroke-[#D4AF37]/35 stroke-[1]"
          rx="2"
        />
        {/* Animated glowing border ray running clockwise */}
        <rect
          x="0.5"
          y="0.5"
          width="100%"
          height="100%"
          stroke="url(#rayGold)"
          strokeWidth="2"
          fill="none"
          className="animate-border-ray"
          style={{
            filter: "drop-shadow(0 0 4px #D4AF37)",
          }}
          rx="2"
        />
      </svg>

      {/* Inner thin border */}
      <div className="absolute inset-[4.5px] border-[0.5px] border-[#D4AF37]/20 rounded-sm" />
      
      {/* Traditional Corner Ornaments */}
      {/* Top-Left */}
      <div className="absolute top-2 left-2 w-6 h-6 text-[#D4AF37]/75">
        <svg viewBox="0 0 100 100" className="w-full h-full fill-current rotate-0">
          <path d="M0,0 L40,0 C40,25 25,40 0,40 L0,0 Z M12,12 C12,18 18,12 12,12 Z" />
          <circle cx="12" cy="12" r="4" className="fill-[#F5E6A8]" />
        </svg>
      </div>
      <div className="absolute top-0 left-0 w-8 h-8 border-t-[2.5px] border-l-[2.5px] border-[#D4AF37] rounded-tl-[3px]" />

      {/* Top-Right */}
      <div className="absolute top-2 right-2 w-6 h-6 text-[#D4AF37]/75">
        <svg viewBox="0 0 100 100" className="w-full h-full fill-current rotate-90">
          <path d="M0,0 L40,0 C40,25 25,40 0,40 L0,0 Z M12,12 C12,18 18,12 12,12 Z" />
          <circle cx="12" cy="12" r="4" className="fill-[#F5E6A8]" />
        </svg>
      </div>
      <div className="absolute top-0 right-0 w-8 h-8 border-t-[2.5px] border-r-[2.5px] border-[#D4AF37] rounded-tr-[3px]" />

      {/* Bottom-Left */}
      <div className="absolute bottom-2 left-2 w-6 h-6 text-[#D4AF37]/75">
        <svg viewBox="0 0 100 100" className="w-full h-full fill-current -rotate-90">
          <path d="M0,0 L40,0 C40,25 25,40 0,40 L0,0 Z M12,12 C12,18 18,12 12,12 Z" />
          <circle cx="12" cy="12" r="4" className="fill-[#F5E6A8]" />
        </svg>
      </div>
      <div className="absolute bottom-0 left-0 w-8 h-8 border-b-[2.5px] border-l-[2.5px] border-[#D4AF37] rounded-bl-[3px]" />

      {/* Bottom-Right */}
      <div className="absolute bottom-2 right-2 w-6 h-6 text-[#D4AF37]/75">
        <svg viewBox="0 0 100 100" className="w-full h-full fill-current rotate-180">
          <path d="M0,0 L40,0 C40,25 25,40 0,40 L0,0 Z M12,12 C12,18 18,12 12,12 Z" />
          <circle cx="12" cy="12" r="4" className="fill-[#F5E6A8]" />
        </svg>
      </div>
      <div className="absolute bottom-0 right-0 w-8 h-8 border-b-[2.5px] border-r-[2.5px] border-[#D4AF37] rounded-br-[3px]" />

      {/* Mid-line glowing gold dots */}
      <div className="absolute top-1/2 left-0 -translate-y-1/2 -translate-x-1.5 w-3 h-3 bg-[#D4AF37] rounded-full border border-[#150a06] shadow-[0_0_8px_#D4AF37]" />
      <div className="absolute top-1/2 right-0 -translate-y-1/2 translate-x-1.5 w-3 h-3 bg-[#D4AF37] rounded-full border border-[#150a06] shadow-[0_0_8px_#D4AF37]" />
      <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1.5 w-3 h-3 bg-[#D4AF37] rounded-full border border-[#150a06] shadow-[0_0_8px_#D4AF37]" />
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 translate-y-1.5 w-3 h-3 bg-[#D4AF37] rounded-full border border-[#150a06] shadow-[0_0_8px_#D4AF37]" />
    </div>
  );
}

export function Welcome({ onOpen, animateGanesha = false, isFading = false }: { onOpen?: () => void; animateGanesha?: boolean; isFading?: boolean }) {
  const videoRef = useRef<HTMLVideoElement | null>(null);

  useEffect(() => {
    if (animateGanesha && videoRef.current) {
      videoRef.current.defaultMuted = true;
      videoRef.current.muted = true;
      videoRef.current.currentTime = 0;
      videoRef.current.playbackRate = 1.6; // Speed up the video to 1.6x speed
      videoRef.current.play().catch((err) => {
        console.log("Welcome video play failed:", err);
      });
    }
  }, [animateGanesha]);

  return (
    <section 
      id="welcome" 
      className={`fixed inset-0 w-full h-[100dvh] py-10 sm:py-16 flex flex-col items-center justify-center overflow-hidden bg-[#150a06] text-ivory px-6 text-center select-none z-40 transition-opacity duration-700 ease-in-out ${
        isFading ? "opacity-0 pointer-events-none" : "opacity-100"
      }`}
    >
      {/* Elegant custom golden border matching Ganesha animation style */}
      <WelcomeBorder />
      
      {/* Temple background image with subtle overlays */}
      <div className="absolute inset-0 w-full h-full pointer-events-none overflow-hidden select-none">
        <img
          src={IMG.templeSilhouette}
          alt="Temple Background"
          className="w-full h-full object-cover opacity-15 mix-blend-luminosity scale-105"
        />
        {/* Vignette gradient to blend edges and keep text readable */}
        <div className="absolute inset-0 bg-gradient-to-b from-[#150a06] via-transparent to-[#150a06] opacity-90" />
        <div className="absolute inset-0 bg-[#150a06]/50" />
      </div>
      <MandalaBg className="left-1/2 top-1/2 h-[800px] w-[800px] -translate-x-1/2 -translate-y-1/2 opacity-[0.03]" />
      <FloatingPetals count={8} />
      <GoldenParticles count={15} />
      <div className="relative z-10 max-w-2xl mx-auto flex flex-col items-center justify-center">

        <Reveal delay={0.25}>
          <div className="relative w-48 h-48 sm:w-60 sm:h-60 mb-2 sm:mb-4 flex items-center justify-center">
            {/* Slowly rotating golden mandala frame */}
            <div className="absolute inset-0 w-full h-full animate-[spin_40s_linear_infinite] opacity-75 pointer-events-none">
              <WelcomeGaneshaFrame />
            </div>
            
            {/* Ganesha video container circle */}
            <div 
              className="w-32 h-32 sm:w-44 sm:h-44 relative flex items-center justify-center rounded-full overflow-hidden shadow-xl cursor-pointer"
              onClick={() => {
                if (videoRef.current) {
                  videoRef.current.defaultMuted = true;
                  videoRef.current.muted = true;
                  videoRef.current.play().catch(e => console.log("Ganesha manual play failed:", e));
                }
              }}
              style={{
                border: "1.5px solid rgba(212, 175, 55, 0.45)",
                boxShadow: "0 0 25px rgba(212, 175, 55, 0.35)",
                background: "#000",
                mixBlendMode: "screen",
              }}
            >
              <video
                ref={videoRef}
                src="/byy.mp4"
                autoPlay
                muted
                playsInline
                loop
                className="absolute inset-0 w-full h-full object-cover"
              />
            </div>
          </div>
        </Reveal>
        <Reveal delay={0.45}>
          <p className="font-heading text-sm sm:text-base italic text-[#F5E6A8] leading-relaxed max-w-lg mx-auto">
            {ganeshMantra.sanskrit.join(" ")}
          </p>
        </Reveal>
        <Reveal delay={0.55}>
          <Ornament className="mt-3 mb-1 sm:mt-5 sm:mb-3" />
          <p className="text-[10px] sm:text-xs uppercase tracking-[0.3em] text-[#E8DCCB]/70">
            With the blessings of Lord Ganesha
          </p>
        </Reveal>
        <Reveal delay={0.65}>
          <h2 className="mt-2.5 sm:mt-4 font-couple gold-text text-3xl sm:text-[40px] leading-tight animate-gold-glow">
            Dear {wedding.guest.name}
          </h2>
        </Reveal>
        <Reveal delay={0.75}>
          <p className="mt-1 sm:mt-2 font-heading text-xl sm:text-2xl text-white font-medium">
            You are cordially invited
          </p>
          <p className="text-xs text-white/70 mt-1">to celebrate the wedding of</p>
        </Reveal>
        <Reveal delay={0.85}>
          <h2 className="mt-2 sm:mt-3 font-couple gold-text text-4xl sm:text-5xl leading-tight animate-gold-glow">
            {wedding.couple.brideShort} <span className="text-[#D4AF37] text-2xl sm:text-3xl">&</span> {wedding.couple.groomShort}
          </h2>
        </Reveal>
        <Reveal delay={0.95}>
          <div className="mt-3.5 sm:mt-5 px-6 py-2 border-y border-[#D4AF37]/20">
            <p className="font-heading text-sm sm:text-base text-[#F5E6A8] tracking-widest uppercase">
              {wedding.dateLabel}
            </p>
          </div>
        </Reveal>
        <Reveal delay={1.05}>
          <div className="flex items-center justify-center gap-4 mt-4 sm:mt-7">
            {/* Left decorative flourish line */}
            <span className="hidden sm:inline-block h-[1px] w-8 bg-gradient-to-r from-transparent to-[#D4AF37]" />
            <span className="text-[#D4AF37] text-xs hidden sm:inline">✧</span>
            
            {/* Luxury Glassmorphic Glowing Button */}
            <button
              onClick={onOpen}
              className="relative px-12 py-4 overflow-hidden rounded-full font-heading text-xs font-bold tracking-[0.25em] uppercase text-white transition-all duration-500 active:scale-[0.98] cursor-pointer group animate-button-glow-pulse"
              style={{
                background: "#0d0502", // Dark base matching the image reference
              }}
            >
              {/* Asymmetrical 3D Glass Edge Border */}
              <div 
                className="absolute inset-0 rounded-full pointer-events-none"
                style={{
                  borderTop: "1.5px solid rgba(255, 255, 255, 0.45)",
                  borderRight: "2px solid rgba(255, 255, 255, 0.75)",
                  borderBottom: "0.8px solid rgba(212, 175, 55, 0.15)",
                  borderLeft: "0.8px solid rgba(212, 175, 55, 0.15)",
                }}
              />
              
              {/* Glowing Liquid Orb on the right (breathing/moving) */}
              <div 
                className="absolute -right-4 -top-8 w-28 h-28 opacity-70 rounded-full blur-xl pointer-events-none"
                style={{
                  background: "radial-gradient(circle, rgba(255, 255, 255, 0.25) 0%, rgba(212, 175, 55, 0.15) 50%, transparent 70%)",
                  animation: "liquid-flow 4s ease-in-out infinite alternate",
                }}
              />

              {/* Glowing aura under text */}
              <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_rgba(212,175,55,0.15)_0%,_transparent_60%)]" />

              {/* Sparkling Stardust Particles */}
              <div className="absolute top-2 left-6 w-1 h-1 bg-white rounded-full opacity-40 animate-[pulse_2s_infinite]" />
              <div className="absolute bottom-2.5 left-1/3 w-0.5 h-0.5 bg-white rounded-full opacity-60 animate-[pulse_1.5s_infinite]" />
              <div className="absolute top-3 right-1/3 w-1 h-1 bg-white rounded-full opacity-30 animate-[pulse_3s_infinite]" />
              <div className="absolute bottom-2 right-8 w-0.5 h-0.5 bg-white rounded-full opacity-50 animate-[pulse_2.5s_infinite]" />
              
              {/* Soft inner shadow overlay */}
              <div className="absolute inset-0 bg-gradient-to-b from-white/5 to-transparent pointer-events-none" />

              {/* Glowing Text */}
              <span 
                className="relative z-10 flex items-center justify-center gap-2 text-white"
                style={{
                  textShadow: "0 0 8px rgba(255, 255, 255, 0.7), 0 0 16px rgba(212, 175, 55, 0.4)",
                }}
              >
                Open Invitation <span className="text-[10px] animate-[pulse_1.5s_infinite]">✧</span>
              </span>
            </button>
            
            <span className="text-[#D4AF37] text-xs hidden sm:inline">✧</span>
            {/* Right decorative flourish line */}
            <span className="hidden sm:inline-block h-[1px] w-8 bg-gradient-to-l from-transparent to-[#D4AF37]" />
          </div>
        </Reveal>
      </div>
    </section>
  );
}

/* =========================================================
   HERO
   ========================================================= */
export function Hero() {
  return (
    <section id="hero" className="relative overflow-hidden py-24 sm:py-32">
      {/* Background is handled by the global body sunset parallax backdrop */}
      <FloatingPetals count={16} />
      <GoldenParticles count={20} />

      <div className="relative mx-auto grid max-w-6xl grid-cols-1 items-center gap-12 px-6 md:grid-cols-2">
        <Reveal>
          <ArchFrame className="mx-auto aspect-[4/5] w-full max-w-md">
            <div className="relative m-3 h-[calc(100%-1.5rem)] overflow-hidden rounded-t-[999px]">
              <img
                src={IMG.couple}
                alt="Priya & Aarav portrait"
                className="h-full w-full object-cover animate-soft-zoom"
                width={1024}
                height={1280}
                loading="eager"
              />
              <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-maroon-deep/40 via-transparent to-transparent" />
            </div>
          </ArchFrame>
        </Reveal>

        <Reveal delay={0.2}>
          <div className="text-center md:text-left">
            <p className="text-xs uppercase tracking-[0.4em] text-maroon/70">The Wedding of</p>
            <h1 className="mt-4 font-couple gold-text text-5xl sm:text-6xl md:text-7xl leading-[1.05]">
              {wedding.couple.bride.split(" ")[0]}
              <span className="block text-2xl sm:text-3xl text-[#D4AF37] my-2 font-heading italic normal-case">&</span>
              {wedding.couple.groom.split(" ")[0]}
            </h1>
            <p className="mt-6 font-heading italic text-lg text-maroon-deep">
              "{wedding.couple.tagline}"
            </p>
            <div className="mt-8 space-y-2 text-sm text-maroon-deep">
              <p className="flex items-center justify-center gap-2 md:justify-start">
                <Calendar size={16} className="text-[#B8862A]" /> {wedding.dateLabel}
              </p>
              <p className="flex items-center justify-center gap-2 md:justify-start">
                <MapPin size={16} className="text-[#B8862A]" /> {wedding.venue.name}
              </p>
            </div>
            <div className="mt-8 flex flex-wrap justify-center gap-3 md:justify-start">
              <GoldButton as="a" href="#story">Explore Celebration</GoldButton>
              <a
                href="#events"
                className="inline-flex items-center gap-2 rounded-full gold-border px-8 py-3.5 text-sm uppercase tracking-[0.25em] text-maroon-deep transition-all hover:bg-gold/10"
              >
                Wedding Events
              </a>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}

/* =========================================================
   STORY (curved timeline)
   ========================================================= */
export function Story() {
  return (
    <section id="story" className="relative overflow-hidden py-24 bg-black/10">
      <MandalaBg className="right-0 top-10 h-[600px] w-[600px] opacity-40" />
      <div className="mx-auto max-w-6xl px-6">
        <SectionTitle eyebrow="Our Journey" title="Our Story" subtitle="Five moments woven into forever." />
        <div className="relative">
          {/* curved gold line */}
          <svg
            aria-hidden
            viewBox="0 0 1000 1200"
            preserveAspectRatio="none"
            className="pointer-events-none absolute inset-0 hidden h-full w-full md:block"
          >
            <path
              d="M500 40 C 200 200, 800 400, 200 600 S 800 900, 500 1160"
              fill="none"
              stroke="#D4AF37"
              strokeWidth="2"
              strokeDasharray="6 8"
              opacity="0.5"
            />
          </svg>
          <div className="relative space-y-14">
            {wedding.story.map((s, i) => (
              <Reveal key={s.title} delay={i * 0.05}>
                <div className={`grid grid-cols-1 items-center gap-6 md:grid-cols-2 ${i % 2 ? "md:[&>*:first-child]:order-2" : ""}`}>
                  <div className="glass-card rounded-2xl p-3 shadow-xl">
                    <div className="aspect-[4/3] overflow-hidden rounded-xl">
                      <img src={s.img} alt={s.title} className="h-full w-full object-cover transition-transform duration-700 hover:scale-105" loading="lazy" />
                    </div>
                  </div>
                  <div className={`glass-card relative rounded-2xl p-8 shadow-lg`}>
                    <div className="absolute -top-4 left-8 grid h-10 w-10 place-items-center rounded-full gold-gradient text-maroon-deep font-couple text-sm shadow-gold">
                      {i + 1}
                    </div>
                    <p className="text-xs uppercase tracking-[0.35em] text-[#B8862A]">{s.date}</p>
                    <h3 className="mt-2 font-heading text-3xl text-maroon-deep">{s.title}</h3>
                    <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{s.desc}</p>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

/* =========================================================
   EVENTS
   ========================================================= */
export function Events() {
  return (
    <section id="events" className="relative overflow-hidden py-24 bg-black/5">
      <MandalaBg className="left-0 top-10 h-[600px] w-[600px] opacity-30" />
      <FloatingPetals count={12} />
      <div className="mx-auto max-w-6xl px-6">
        <SectionTitle eyebrow="Ceremonies" title="Wedding Events" subtitle="Each ritual, a chapter of our celebration." />
        
        <div className="relative">
          {/* curved gold line for events */}
          <svg
            aria-hidden
            viewBox="0 0 1000 2400"
            preserveAspectRatio="none"
            className="pointer-events-none absolute inset-0 hidden h-full w-full md:block"
          >
            <path
              d="M500 30 C 200 350, 800 700, 200 1050 S 800 1750, 200 2100 S 800 2450, 500 2580"
              fill="none"
              stroke="#D4AF37"
              strokeWidth="2"
              strokeDasharray="6 8"
              opacity="0.5"
            />
          </svg>

          <div className="relative space-y-16">
            {wedding.events.map((e, i) => {
              const isEven = i % 2 === 0;
              return (
                <Reveal key={e.name} delay={i * 0.05}>
                  <div className={`grid grid-cols-1 items-center gap-8 md:grid-cols-2 ${isEven ? "" : "md:[&>*:first-child]:order-2"}`}>
                    {/* Column 1: Dress Code Swatch Card */}
                    <div className="glass-card rounded-2xl p-4 shadow-xl border border-gold/15 transition-all duration-500 hover:shadow-2xl">
                      <div className="relative aspect-[4/3] w-full overflow-hidden rounded-xl bg-ivory/40 flex flex-col justify-between p-6">
                        <MandalaBg className="absolute -right-20 -bottom-20 h-64 w-64 opacity-20" />
                        
                        {/* Decorative top row */}
                        <div className="flex items-center justify-between border-b border-gold/20 pb-3">
                          <span className="text-[10px] uppercase tracking-[0.25em] text-[#B8862A]">Ceremony Dress Palette</span>
                          <span className="text-xl">{e.icon}</span>
                        </div>
                        
                        {/* Interactive swatches */}
                        <div className="flex gap-4 h-24 items-end justify-center w-full my-auto z-10">
                          {e.colors?.map((c) => (
                            <div
                              key={c}
                              className="group/color relative h-full flex-1 rounded-xl shadow-md transition-all duration-500 hover:flex-[1.8] hover:scale-105 flex flex-col items-center justify-end pb-3 cursor-pointer border border-gold/10"
                              style={{ backgroundColor: c }}
                            >
                              <span className="opacity-0 group-hover/color:opacity-100 transition-opacity duration-300 text-[10px] font-mono font-bold tracking-wider px-2 py-0.5 rounded bg-nightbg/90 text-ivory shadow-lg select-none">
                                {c}
                              </span>
                            </div>
                          ))}
                        </div>

                        {/* Palette Details */}
                        <div className="text-center mt-3 z-10">
                          <h4 className="font-heading text-xl text-maroon-deep">{e.palette}</h4>
                          <p className="text-xs text-muted-foreground mt-1 leading-normal italic px-2">{e.dressDesc}</p>
                        </div>
                      </div>
                    </div>

                    {/* Column 2: Ceremony Details Card */}
                    <div className="glass-card relative rounded-2xl p-8 shadow-lg border border-gold/15 hover:shadow-2xl transition-all duration-500">
                      {/* Floating Icon Badge */}
                      <div className="absolute -top-6 left-8 grid h-12 w-12 place-items-center rounded-full gold-gradient text-2xl shadow-gold border border-gold/30 transition-transform duration-500 hover:rotate-12 hover:scale-110">
                        {e.icon}
                      </div>

                      <div className="mt-2">
                        <p className="text-xs uppercase tracking-[0.35em] text-[#B8862A]">{e.date}</p>
                        <h3 className="mt-3 font-heading text-3xl text-maroon-deep">{e.name}</h3>
                        
                        <div className="mt-5 space-y-3 text-sm border-t border-gold/25 pt-5">
                          <p className="flex items-center gap-3 text-muted-foreground">
                            <Clock size={16} className="text-[#B8862A] shrink-0" />
                            <span>
                              <strong className="text-maroon-deep/80 font-medium">Time:</strong> {e.time}
                            </span>
                          </p>
                          <p className="flex items-center gap-3 text-muted-foreground">
                            <MapPin size={16} className="text-[#B8862A] shrink-0" />
                            <span>
                              <strong className="text-maroon-deep/80 font-medium">Venue:</strong> {e.venue}
                            </span>
                          </p>
                          <p className="flex items-center gap-3 text-muted-foreground">
                            <Sparkles size={16} className="text-[#B8862A] shrink-0" />
                            <span>
                              <strong className="text-maroon-deep/80 font-medium">Dress:</strong> {e.dress}
                            </span>
                          </p>
                        </div>

                        <p className="mt-5 text-sm leading-relaxed text-muted-foreground border-t border-gold/10 pt-4 italic">
                          {e.desc}
                        </p>
                      </div>
                    </div>
                  </div>
                </Reveal>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}

/* =========================================================
   GALLERY
   ========================================================= */
export function Gallery() {
  const [lightbox, setLightbox] = useState<number | null>(null);
  return (
    <section id="gallery" className="relative overflow-hidden py-24 bg-black/15">
      <MandalaBg className="left-1/2 top-20 h-[900px] w-[900px] -translate-x-1/2 opacity-30" />
      <FloatingPetals count={8} />
      <div className="mx-auto max-w-6xl px-6">
        <SectionTitle eyebrow="Memories" title="Our Gallery" subtitle="Moments we've collected on the way to now." />
        <div className="columns-2 gap-4 sm:columns-3 [column-fill:balance] md:columns-4">
          {IMG.gallery.map((src, i) => (
            <button
              key={i}
              onClick={() => setLightbox(i)}
              className="group relative mb-4 block w-full overflow-hidden rounded-xl gold-border shadow-md focus:outline-none focus:ring-2 focus:ring-[#D4AF37]"
            >
              <img
                src={src}
                alt={`Wedding memory ${i + 1}`}
                loading="lazy"
                className="w-full transition-transform duration-700 group-hover:scale-110"
              />
              <span className="pointer-events-none absolute inset-0 bg-gradient-to-t from-maroon-deep/60 via-transparent to-transparent opacity-0 transition-opacity group-hover:opacity-100" />
            </button>
          ))}
        </div>
      </div>

      {lightbox !== null && (
        <div
          className="fixed inset-0 z-[80] flex items-center justify-center bg-nightbg/95 p-4 backdrop-blur-xl"
          onClick={() => setLightbox(null)}
        >
          <button
            aria-label="Close"
            className="absolute right-6 top-6 grid h-10 w-10 place-items-center rounded-full gold-border text-ivory"
            onClick={() => setLightbox(null)}
          >
            <X size={18} />
          </button>
          <img
            src={IMG.gallery[lightbox]}
            alt=""
            className="max-h-[85vh] max-w-full rounded-xl gold-border"
          />
        </div>
      )}
    </section>
  );
}

/* =========================================================
   FAMILY
   ========================================================= */
function FamilyRow({ title, members }: { title: string; members: { name: string; relation: string }[] }) {
  const ref = useRef<HTMLDivElement>(null);
  return (
    <div>
      <h3 className="mb-4 font-heading text-2xl text-maroon-deep text-center">{title}</h3>
      <div
        ref={ref}
        className="flex snap-x snap-mandatory gap-4 overflow-x-auto scroll-smooth px-2 pb-4 [scrollbar-width:none] [&::-webkit-scrollbar]:hidden"
      >
        {members.map((m) => (
          <div
            key={m.name}
            className="snap-center shrink-0 w-40 sm:w-48 glass-card rounded-2xl p-4 text-center"
          >
            <div
              className="mx-auto mb-3 grid h-24 w-24 place-items-center rounded-full gold-gradient text-maroon-deep font-couple text-2xl shadow-gold"
              aria-hidden
            >
              {m.name.split(" ").map((s) => s[0]).slice(0, 2).join("")}
            </div>
            <p className="font-heading text-base text-maroon-deep">{m.name}</p>
            <p className="mt-1 text-[10px] uppercase tracking-[0.2em] text-[#B8862A]">{m.relation}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export function Family() {
  return (
    <section id="family" className="relative overflow-hidden py-24">
      <div className="mx-auto max-w-6xl px-6">
        <SectionTitle eyebrow="With Blessings From" title="Our Families" subtitle="Two families, becoming one." />
        <div className="grid gap-12 md:grid-cols-2">
          <FamilyRow title="Groom's Family" members={wedding.family.groom} />
          <FamilyRow title="Bride's Family" members={wedding.family.bride} />
        </div>
      </div>
    </section>
  );
}

/* =========================================================
   WISHING WALL
   ========================================================= */
export function WishingWall() {
  const [wishes, setWishes] = useState(wedding.initialWishes);
  const [open, setOpen] = useState(false);
  const [form, setForm] = useState({ name: "", msg: "" });

  function submit(e: React.FormEvent) {
    e.preventDefault();
    if (!form.name.trim() || !form.msg.trim()) return;
    setWishes((w) => [{ name: form.name, msg: form.msg }, ...w]);
    setForm({ name: "", msg: "" });
    setOpen(false);
  }

  return (
    <section id="wishes" className="relative overflow-hidden py-24 bg-black/10">
      <GoldenParticles count={20} />
      <div className="mx-auto max-w-6xl px-6">
        <SectionTitle eyebrow="From Loved Ones" title="Wishing Wall" subtitle="Blessings from those we hold dear." />
        <div className="mb-8 text-center">
          <GoldButton onClick={() => setOpen(true)}>
            <Heart size={14} /> Add Your Blessing
          </GoldButton>
        </div>
        <div className="columns-1 gap-6 sm:columns-2 lg:columns-3 [column-fill:balance]">
          {wishes.map((w, i) => (
            <Reveal key={i} delay={Math.min(i * 0.05, 0.4)}>
              <div className="mb-6 break-inside-avoid glass-card rounded-2xl p-6 shadow-lg">
                <p className="font-heading text-base italic text-maroon-deep">"{w.msg}"</p>
                <div className="mt-4 flex items-center gap-3">
                  <div className="grid h-9 w-9 place-items-center rounded-full gold-gradient font-couple text-xs text-maroon-deep">
                    {w.name.split(" ").map((s) => s[0]).slice(0, 2).join("")}
                  </div>
                  <p className="text-xs uppercase tracking-[0.3em] text-[#B8862A]">— {w.name}</p>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>

      {open && (
        <div
          className="fixed inset-0 z-[80] flex items-center justify-center bg-nightbg/80 p-4 backdrop-blur-md"
          onClick={() => setOpen(false)}
        >
          <form
            onClick={(e) => e.stopPropagation()}
            onSubmit={submit}
            className="w-full max-w-md glass-card rounded-2xl p-8 shadow-2xl"
          >
            <h3 className="font-heading text-2xl gold-text">Leave a Blessing</h3>
            <label className="mt-6 block text-xs uppercase tracking-[0.3em] text-maroon-deep">Your Name</label>
            <input
              value={form.name}
              onChange={(e) => setForm({ ...form, name: e.target.value })}
              maxLength={60}
              required
              className="mt-2 w-full rounded-lg gold-border bg-ivory/60 px-4 py-2 text-sm outline-none focus:ring-2 focus:ring-[#D4AF37]"
            />
            <label className="mt-4 block text-xs uppercase tracking-[0.3em] text-maroon-deep">Your Wish</label>
            <textarea
              value={form.msg}
              onChange={(e) => setForm({ ...form, msg: e.target.value })}
              maxLength={280}
              required
              rows={4}
              className="mt-2 w-full rounded-lg gold-border bg-ivory/60 px-4 py-2 text-sm outline-none focus:ring-2 focus:ring-[#D4AF37]"
            />
            <div className="mt-6 flex justify-end gap-3">
              <button
                type="button"
                onClick={() => setOpen(false)}
                className="rounded-full px-6 py-2 text-xs uppercase tracking-[0.3em] text-maroon-deep hover:bg-beige/60"
              >
                Cancel
              </button>
              <GoldButton type="submit">Send Blessing</GoldButton>
            </div>
          </form>
        </div>
      )}
    </section>
  );
}

/* =========================================================
   RSVP
   ========================================================= */
type RsvpForm = {
  name: string;
  phone: string;
  attending: "yes" | "no";
  guests: number;
  meal: string;
  message?: string;
};

export function Rsvp() {
  const { register, handleSubmit, formState: { errors, isSubmitting } } = useForm<RsvpForm>({
    defaultValues: { attending: "yes", guests: 1, meal: "veg" },
  });
  const [sent, setSent] = useState(false);

  async function onSubmit(data: RsvpForm) {
    console.log("RSVP:", data);
    await new Promise((r) => setTimeout(r, 600));
    setSent(true);
  }

  return (
    <section id="rsvp" className="relative overflow-hidden py-24">
      <MandalaBg className="left-10 top-10 h-[500px] w-[500px]" />
      <div className="mx-auto max-w-3xl px-6">
        <SectionTitle eyebrow="Kindly Respond" title="RSVP" subtitle="Please let us know by 15 days before the wedding." />
        <div className="glass-card rounded-3xl p-8 sm:p-12 shadow-xl">
          {sent ? (
            <div className="py-12 text-center">
              <div className="mx-auto grid h-20 w-20 place-items-center rounded-full gold-gradient text-maroon-deep shadow-gold animate-glow-pulse">
                <Check size={40} strokeWidth={3} />
              </div>
              <FloatingPetals count={20} className="opacity-70" />
              <h3 className="mt-6 font-heading text-3xl gold-text">Thank you!</h3>
              <p className="mt-2 text-sm text-muted-foreground">Your blessing is our joy. We can't wait to celebrate with you.</p>
            </div>
          ) : (
            <form onSubmit={handleSubmit(onSubmit)} className="grid gap-5 sm:grid-cols-2">
              <Field label="Full Name" error={errors.name?.message}>
                <input {...register("name", { required: "Name required", maxLength: 80 })} className={inp} />
              </Field>
              <Field label="Phone" error={errors.phone?.message}>
                <input {...register("phone", { required: "Phone required", maxLength: 20 })} className={inp} />
              </Field>
              <Field label="Will you attend?" full>
                <div className="flex gap-3">
                  {["yes", "no"].map((v) => (
                    <label key={v} className="flex-1 cursor-pointer">
                      <input type="radio" value={v} {...register("attending")} className="peer sr-only" />
                      <div className="rounded-lg gold-border px-4 py-3 text-center text-sm capitalize transition-all peer-checked:gold-gradient peer-checked:text-maroon-deep peer-checked:shadow-gold">
                        {v === "yes" ? "Yes, joyfully!" : "Regrets"}
                      </div>
                    </label>
                  ))}
                </div>
              </Field>
              <Field label="Number of Guests">
                <input type="number" min={1} max={10} {...register("guests", { valueAsNumber: true })} className={inp} />
              </Field>
              <Field label="Meal Preference">
                <select {...register("meal")} className={inp}>
                  <option value="veg">Vegetarian</option>
                  <option value="non-veg">Non-Vegetarian</option>
                  <option value="jain">Jain</option>
                  <option value="vegan">Vegan</option>
                </select>
              </Field>
              <Field label="Message (optional)" full>
                <textarea rows={3} maxLength={300} {...register("message")} className={inp} />
              </Field>
              <div className="sm:col-span-2 flex justify-center">
                <GoldButton type="submit">
                  {isSubmitting ? "Sending..." : "Send RSVP ✧"}
                </GoldButton>
              </div>
            </form>
          )}
        </div>
      </div>
    </section>
  );
}

const inp =
  "w-full rounded-lg gold-border bg-ivory/60 px-4 py-2.5 text-sm outline-none transition focus:ring-2 focus:ring-[#D4AF37]";

function Field({
  label, children, error, full,
}: { label: string; children: React.ReactNode; error?: string; full?: boolean }) {
  return (
    <div className={full ? "sm:col-span-2" : ""}>
      <label className="mb-2 block text-[10px] uppercase tracking-[0.3em] text-maroon-deep">{label}</label>
      {children}
      {error && <p className="mt-1 text-xs text-destructive">{error}</p>}
    </div>
  );
}

/* =========================================================
   COUNTDOWN
   ========================================================= */
function useCountdown(target: Date) {
  const [now, setNow] = useState<number | null>(null);
  useEffect(() => {
    setNow(Date.now());
    const id = setInterval(() => setNow(Date.now()), 1000);
    return () => clearInterval(id);
  }, []);
  if (now === null) {
    return { done: false, days: 0, hours: 0, minutes: 0, seconds: 0, ready: false };
  }
  const diff = Math.max(0, target.getTime() - now);
  const s = Math.floor(diff / 1000);
  return {
    done: diff === 0,
    ready: true,
    days: Math.floor(s / 86400),
    hours: Math.floor((s % 86400) / 3600),
    minutes: Math.floor((s % 3600) / 60),
    seconds: s % 60,
  };
}

export function Countdown() {
  const c = useCountdown(wedding.date);
  const units = [
    { label: "Days", value: c.days },
    { label: "Hours", value: c.hours },
    { label: "Minutes", value: c.minutes },
    { label: "Seconds", value: c.seconds },
  ];
  return (
    <section
      id="countdown"
      className="relative overflow-hidden py-24 text-ivory bg-black/10"
    >
      <GoldenParticles count={40} />
      <FloatingPetals count={10} />
      <div className="relative mx-auto max-w-5xl px-6">
        <SectionTitle eyebrow="The Wait Begins" title="Countdown" light subtitle="Every second closer to forever." />
        {c.done ? (
          <p className="text-center font-couple text-3xl sm:text-5xl gold-text">The Celebration Has Begun!</p>
        ) : (
          <div className="grid grid-cols-2 gap-4 sm:grid-cols-4">
            {units.map((u) => (
              <div key={u.label} className="glass-dark rounded-2xl p-6 text-center">
                <div className="font-couple text-5xl sm:text-6xl gold-text tabular-nums">
                  {String(u.value).padStart(2, "0")}
                </div>
                <p className="mt-2 text-[10px] uppercase tracking-[0.4em] text-ivory/70">{u.label}</p>
              </div>
            ))}
          </div>
        )}
      </div>
    </section>
  );
}

/* =========================================================
   VENUE
   ========================================================= */
export function Venue() {
  return (
    <section id="venue" className="relative overflow-hidden py-24">
      <div className="mx-auto max-w-6xl px-6">
        <SectionTitle eyebrow="Where to Find Us" title="The Venue" />
        <div className="grid gap-8 lg:grid-cols-2">
          <Reveal>
            <div className="overflow-hidden rounded-2xl gold-border shadow-xl">
              <img src={IMG.venue} alt={wedding.venue.name} className="h-80 w-full object-cover" loading="lazy" />
            </div>
          </Reveal>
          <Reveal delay={0.15}>
            <div className="glass-card rounded-2xl p-8">
              <h3 className="font-heading text-3xl text-maroon-deep">{wedding.venue.name}</h3>
              <p className="mt-2 text-sm text-muted-foreground">{wedding.venue.address}</p>
              <div className="mt-6 space-y-3 text-sm">
                <p className="flex items-start gap-3 text-maroon-deep">
                  <Car size={16} className="mt-0.5 text-[#B8862A]" /> {wedding.venue.parking}
                </p>
                <p className="flex items-start gap-3 text-maroon-deep">
                  <BedDouble size={16} className="mt-0.5 text-[#B8862A]" /> {wedding.venue.stay}
                </p>
              </div>
              <div className="mt-6">
                <a
                  href={wedding.venue.directions}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center gap-2 rounded-full gold-gradient px-6 py-3 text-xs uppercase tracking-[0.3em] text-maroon-deep shadow-gold hover:scale-105 transition"
                >
                  <Navigation size={14} /> Get Directions
                </a>
              </div>
            </div>
          </Reveal>
        </div>
        <Reveal delay={0.2}>
          <div className="mt-8 overflow-hidden rounded-2xl gold-border shadow-lg">
            <iframe
              src={wedding.venue.mapEmbed}
              title="Venue map"
              className="h-80 w-full border-0"
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
          </div>
        </Reveal>
      </div>
    </section>
  );
}

/* =========================================================
   GIFT REGISTRY
   ========================================================= */
export function Registry() {
  return (
    <section id="registry" className="relative overflow-hidden py-24">
      <FloatingPetals count={6} />
      <div className="mx-auto max-w-3xl px-6 text-center">
        <SectionTitle eyebrow="With Gratitude" title="Bless the Couple" subtitle="Your presence is our greatest gift — but if you'd like to send blessings, here's how." />
        <Reveal>
          <div className="relative glass-card rounded-3xl p-10 shadow-xl">
            <div className="mx-auto mb-6 grid h-20 w-20 place-items-center rounded-full gold-gradient text-maroon-deep shadow-gold shimmer">
              <Gift size={32} />
              <span className="absolute inset-0 rounded-full shimmer-overlay" />
            </div>
            <p className="font-heading italic text-lg text-maroon-deep">
              "Your love and blessings are the finest gift we could receive."
            </p>
            <div className="mt-8 flex flex-wrap justify-center gap-3">
              <GoldButton>Gift Registry</GoldButton>
              <a href="#" className="inline-flex items-center gap-2 rounded-full gold-border px-8 py-3.5 text-xs uppercase tracking-[0.25em] text-maroon-deep hover:bg-gold/10">
                UPI
              </a>
              <a href="#wishes" className="inline-flex items-center gap-2 rounded-full gold-border px-8 py-3.5 text-xs uppercase tracking-[0.25em] text-maroon-deep hover:bg-gold/10">
                Bless the Couple
              </a>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}

/* =========================================================
   FAQ
   ========================================================= */
export function Faq() {
  const [open, setOpen] = useState<number | null>(0);
  return (
    <section id="faq" className="relative overflow-hidden py-24 bg-black/10">
      <div className="mx-auto max-w-3xl px-6">
        <SectionTitle eyebrow="Good to Know" title="Frequently Asked" />
        <div className="space-y-3">
          {wedding.faqs.map((f, i) => (
            <div key={f.q} className="glass-card rounded-xl">
              <button
                onClick={() => setOpen(open === i ? null : i)}
                className="flex w-full items-center justify-between gap-4 p-5 text-left"
                aria-expanded={open === i}
              >
                <span className="font-heading text-lg text-maroon-deep">{f.q}</span>
                <ChevronDown size={18} className={`shrink-0 text-[#B8862A] transition-transform ${open === i ? "rotate-180" : ""}`} />
              </button>
              <div
                className="grid overflow-hidden transition-[grid-template-rows] duration-500"
                style={{ gridTemplateRows: open === i ? "1fr" : "0fr" }}
              >
                <div className="min-h-0">
                  <p className="px-5 pb-5 text-sm text-muted-foreground">{f.a}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* =========================================================
   CONTACT
   ========================================================= */
export function Contact() {
  return (
    <section id="contact" className="relative overflow-hidden py-24">
      <div className="mx-auto max-w-5xl px-6">
        <SectionTitle eyebrow="Need Help?" title="Reach Out" subtitle="We'd love to hear from you." />
        <div className="grid gap-6 md:grid-cols-2">
          {(["bride", "groom"] as const).map((side) => (
            <div key={side} className="glass-card rounded-2xl p-8">
              <h3 className="font-heading text-2xl text-maroon-deep capitalize">
                {side}'s Side
              </h3>
              <div className="mt-6 space-y-4">
                {wedding.contacts[side].map((c) => (
                  <div key={c.name} className="flex flex-wrap items-center justify-between gap-3 rounded-xl gold-border p-4">
                    <div>
                      <p className="font-heading text-base text-maroon-deep">{c.name}</p>
                      <p className="text-[10px] uppercase tracking-[0.3em] text-[#B8862A]">{c.role}</p>
                    </div>
                    <div className="flex gap-2">
                      <a
                        href={`tel:${c.phone}`}
                        aria-label={`Call ${c.name}`}
                        className="grid h-10 w-10 place-items-center rounded-full gold-gradient text-maroon-deep hover:scale-105 transition"
                      >
                        <Phone size={14} />
                      </a>
                      <a
                        href={`https://wa.me/${c.phone.replace(/\D/g, "")}`}
                        target="_blank" rel="noreferrer"
                        aria-label={`WhatsApp ${c.name}`}
                        className="grid h-10 w-10 place-items-center rounded-full gold-border text-maroon-deep hover:bg-gold/10 transition"
                      >
                        <MessageCircle size={14} />
                      </a>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* =========================================================
   THANK YOU
   ========================================================= */
export function ThankYou() {
  return (
    <section className="relative overflow-hidden py-32 text-ivory">
      <FloatingPetals count={18} />
      <GoldenParticles count={30} />
      <div className="relative mx-auto max-w-3xl px-6 text-center">
        <Reveal>
          <h2 className="font-couple gold-text text-5xl sm:text-7xl">Thank You</h2>
          <Ornament className="mt-6" />
          <p className="mx-auto mt-8 max-w-xl font-heading italic text-lg sm:text-xl text-ivory/85 leading-relaxed">
            "Your presence is the greatest blessing we could ask for. We look forward to celebrating this beautiful journey with you."
          </p>
          <div className="mt-12">
            <p className="text-[10px] uppercase tracking-[0.5em] text-ivory/60">With Love</p>
            <p className="mt-3 font-couple gold-text text-3xl sm:text-4xl">
              {wedding.couple.brideShort} & {wedding.couple.groomShort}
            </p>
          </div>
        </Reveal>
      </div>
      <div aria-hidden className="pointer-events-none absolute inset-x-0 bottom-0 h-32 bg-gradient-to-b from-transparent to-black" />
    </section>
  );
}
