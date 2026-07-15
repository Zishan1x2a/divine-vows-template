import { useEffect, useMemo, useRef, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useForm } from "react-hook-form";
import {
  Calendar, Clock, MapPin, Sparkles, Heart, Phone, MessageCircle,
  Gift, ChevronDown, X, Car, BedDouble, Navigation, Check,
  ChevronLeft, ChevronRight, ArrowUpRight,
} from "lucide-react";
import { wedding, ganeshMantra, IMG } from "@/data/wedding";
import confetti from "canvas-confetti";
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
  const [videoPlaying, setVideoPlaying] = useState(false);

  useEffect(() => {
    if (animateGanesha && videoRef.current) {
      videoRef.current.defaultMuted = true;
      videoRef.current.muted = true;
      videoRef.current.currentTime = 0;
      videoRef.current.playbackRate = 1.6; // Speed up the video to 1.6x speed
      videoRef.current.play()
        .then(() => setVideoPlaying(true))
        .catch((err) => {
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
                  videoRef.current.play()
                    .then(() => setVideoPlaying(true))
                    .catch(e => console.log("Ganesha manual play failed:", e));
                }
              }}
              style={{
                border: "1.5px solid rgba(212, 175, 55, 0.45)",
                boxShadow: "0 0 25px rgba(212, 175, 55, 0.35)",
                background: "#000",
                mixBlendMode: "screen",
              }}
            >
              {/* Static Ganesha Fallback Image: visible only when video is not playing */}
              {!videoPlaying && (
                <img
                  src={IMG.ganesha}
                  alt="Ganesha Fallback"
                  className="absolute inset-0 w-full h-full object-cover opacity-80"
                  style={{
                    filter: "contrast(1.15) brightness(0.9)",
                  }}
                />
              )}

              <video
                ref={videoRef}
                src="/byy.mp4"
                autoPlay
                muted
                playsInline
                loop
                onPlay={() => setVideoPlaying(true)}
                className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-500 ${
                  videoPlaying ? "opacity-100" : "opacity-0"
                }`}
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
            {/* Buttons removed as requested */}
          </div>
        </Reveal>
      </div>
    </section>
  );
}

// ── Corner ornament ──────────────────────────────────────
const CornerOrnament = ({ className }: { className: string }) => (
  <svg
    className={`absolute w-9 h-9 pointer-events-none z-20 stroke-[#D4AF37] stroke-[1.2] fill-none opacity-60 sm:w-14 sm:h-14 ${className}`}
    viewBox="0 0 64 64"
    aria-hidden
  >
    <path d="M 0 64 L 0 0 L 64 0" />
    <path d="M 8 56 L 8 8 L 56 8" strokeDasharray="3,2" opacity="0.65" />
    <path d="M 12 12 C 20 8, 8 20, 24 24" />
    <path d="M 16 16 L 28 28" />
    <circle cx="20" cy="20" r="2.5" fill="#D4AF37" />
    <polygon points="12,12 16,12 14,15" fill="#D4AF37" />
  </svg>
);

// ── Hanging temple bell ──────────────────────────────────
const HangingBell = () => (
  <svg
    width="24"
    height="28"
    viewBox="0 0 24 28"
    fill="none"
    stroke="#D4AF37"
    strokeWidth="1.3"
    className="sm:w-[32px] sm:h-[36px]"
  >
    <path d="M12 0 L12 10" strokeDasharray="1 1.5" />
    <path d="M12 8 C7 10, 6 18, 6 22 L18 22 C18 18, 17 10, 12 8 Z" fill="rgba(212,175,55,0.15)" />
    <path d="M4 22 L20 22" strokeWidth="2" />
    <circle cx="12" cy="25" r="2" fill="#D4AF37" />
  </svg>
);

// ── Twinkling stars ──────────────────────────────────────
const twinklingStars = [
  { top: "8%",  left: "10%",  delay: 0,   size: 8  },
  { top: "14%", right: "15%", delay: 1.5, size: 6  },
  { top: "38%", left: "4%",   delay: 0.8, size: 10 },
  { top: "55%", right: "6%",  delay: 2.2, size: 12 },
  { top: "70%", left: "18%",  delay: 1.2, size: 7  },
  { top: "80%", right: "20%", delay: 0.5, size: 9  },
];

// ── Mughal/Rajput arch clip path ──────────────────────────
const ARCH_PATH = "M 8,300 L 8,110 Q 8,8 100,8 Q 192,8 192,110 L 192,300 Z";

/* =========================================================
   STORY (curved timeline)
   ========================================================= */
export function Story() {
  const [storyIdx, setStoryIdx] = useState(0);

  const nextStory = () => {
    setStoryIdx((prev) => (prev + 1) % wedding.story.length);
  };
  const prevStory = () => {
    setStoryIdx((prev) => (prev - 1 + wedding.story.length) % wedding.story.length);
  };

  useEffect(() => {
    const timer = setInterval(() => {
      nextStory();
    }, 8000);
    return () => clearInterval(timer);
  }, []);

  return (
    <section
      id="story"
      className="relative isolate overflow-hidden px-4 py-24 sm:py-32 text-white"
    >
      {/* ── 0. Faint Mandala watermark in background ── */}
      <div className="absolute inset-0 -z-20 opacity-[0.05] flex items-center justify-center pointer-events-none select-none">
        <MandalaBg className="w-[85vw] h-[85vh] text-[#D4AF37]" />
      </div>

      <FloatingPetals count={12} />
      <GoldenParticles count={15} />

      {/* ── 1. Double gold frame border ── */}
      <motion.div
        initial={{ opacity: 0, scale: 1.05 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 1.8, ease: "easeOut" }}
        className="absolute inset-2 sm:inset-4 pointer-events-none border border-[#D4AF37]/35 rounded-xl sm:rounded-2xl z-10"
      />
      <motion.div
        initial={{ opacity: 0, scale: 1.03 }}
        animate={{ opacity: 0.55, scale: 1 }}
        transition={{ duration: 2, ease: "easeOut", delay: 0.3 }}
        className="absolute inset-[10px] sm:inset-[22px] pointer-events-none border border-[#D4AF37]/18 rounded-lg sm:rounded-xl z-10"
      />

      {/* ── 2. Ornate corner ornaments ── */}
      <CornerOrnament className="top-[10px]  left-[10px]  sm:top-[22px] sm:left-[22px]" />
      <CornerOrnament className="top-[10px]  right-[10px] sm:top-[22px] sm:right-[22px] rotate-90" />
      <CornerOrnament className="bottom-[10px] left-[10px]  sm:bottom-[22px] sm:left-[22px]  -rotate-90" />
      <CornerOrnament className="bottom-[10px] right-[10px] sm:bottom-[22px] sm:right-[22px] rotate-180" />

      {/* ── 3. Swaying Bells ── */}
      <motion.div
        initial={{ y: -80, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 1.5, ease: [0.22, 1, 0.36, 1], delay: 0.5 }}
        className="absolute left-3.5 sm:left-10 top-[10px] sm:top-[22px] origin-top flex flex-col items-center pointer-events-none z-20"
      >
        <div className="w-px h-10 sm:h-20 bg-gradient-to-b from-[#D4AF37] to-[#D4AF37]/30" />
        <motion.div animate={{ rotate: [-3, 3, -3] }} transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }} className="origin-top -mt-1">
          <HangingBell />
        </motion.div>
      </motion.div>

      <motion.div
        initial={{ y: -80, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 1.5, ease: [0.22, 1, 0.36, 1], delay: 0.7 }}
        className="absolute right-3.5 sm:right-10 top-[10px] sm:top-[22px] origin-top flex flex-col items-center pointer-events-none z-20"
      >
        <div className="w-px h-10 sm:h-20 bg-gradient-to-b from-[#D4AF37] to-[#D4AF37]/30" />
        <motion.div animate={{ rotate: [3, -3, 3] }} transition={{ duration: 6.5, repeat: Infinity, ease: "easeInOut" }} className="origin-top -mt-1">
          <HangingBell />
        </motion.div>
      </motion.div>

      {/* ── 4. Twinkling stars ── */}
      {twinklingStars.map((star, i) => (
        <motion.div
          key={i}
          className="absolute pointer-events-none"
          style={{ top: star.top, ...(star.left ? { left: star.left } : { right: star.right }) }}
          animate={{ opacity: [0.1, 0.75, 0.1], scale: [0.7, 1.2, 0.7] }}
          transition={{ duration: 3.5 + (i % 3), repeat: Infinity, delay: star.delay, ease: "easeInOut" }}
        >
          <svg width={star.size} height={star.size} viewBox="0 0 24 24" fill="#F5E6A8" opacity="0.6">
            <polygon points="12,0 15,9 24,12 15,15 12,24 9,15 0,12 9,9" />
          </svg>
        </motion.div>
      ))}

      {/* ── 5. Main Card Content ── */}
      <div className="relative mx-auto max-w-5xl z-10">
        {/* Section Title */}
        <SectionTitle eyebrow="Our Journey" title="Our Story" subtitle="Five moments woven into forever." light />

        {/* Story Card */}
        <Reveal delay={0.25}>
          <div
            className="flex flex-col md:flex-row items-center gap-8 md:gap-12 rounded-3xl overflow-hidden border border-[#D4AF37]/25 backdrop-blur-[18px] shadow-[0_30px_80px_-20px_rgba(0,0,0,0.85),inset_0_1px_0_rgba(212,175,55,0.15)]"
            style={{
              background: "linear-gradient(145deg, rgba(38, 5, 9, 0.8) 0%, rgba(20, 10, 4, 0.9) 100%)",
            }}
          >
            {/* Photo Slideshow Column */}
            <div className="w-full md:w-[42%] shrink-0 relative group/carousel p-6 md:p-0">
              {/* Gold light halo behind photo */}
              <div
                className="absolute inset-0 blur-3xl opacity-20 pointer-events-none"
                style={{ background: "radial-gradient(ellipse at 50% 40%, #D4AF37 0%, transparent 70%)" }}
              />

              <div className="relative w-full max-w-[260px] mx-auto md:max-w-none block">
                <svg
                  viewBox="0 0 200 300"
                  className="w-full block"
                  style={{ filter: "drop-shadow(0 12px 40px rgba(212,175,55,0.3))" }}
                >
                  <defs>
                    <clipPath id="story-arch-clip"><path d={ARCH_PATH} /></clipPath>
                    <linearGradient id="storyArchGold" x1="0" y1="0" x2="1" y2="1">
                      <stop offset="0%"   stopColor="#F5E6A8" />
                      <stop offset="35%"  stopColor="#D4AF37" />
                      <stop offset="65%"  stopColor="#F5E6A8" />
                      <stop offset="100%" stopColor="#B8862A" />
                    </linearGradient>
                    <radialGradient id="storyVig" cx="50%" cy="60%" r="70%">
                      <stop offset="0%"   stopColor="transparent" />
                      <stop offset="100%" stopColor="#0d0502" stopOpacity="0.6" />
                    </radialGradient>
                  </defs>

                  {/* Photo inside arch (Animated) */}
                  <g clipPath="url(#story-arch-clip)">
                    <AnimatePresence mode="wait">
                      <motion.image
                        key={storyIdx}
                        href={wedding.story[storyIdx].img}
                        x="0" y="0" width="200" height="300"
                        preserveAspectRatio="xMidYMid slice"
                        initial={{ opacity: 0, scale: 1.15 }}
                        animate={{ opacity: 1, scale: 1 }}
                        exit={{ opacity: 0, scale: 0.95 }}
                        transition={{ duration: 0.6, ease: "easeInOut" }}
                      />
                    </AnimatePresence>
                  </g>

                  {/* Vignette & gold borders */}
                  <path d={ARCH_PATH} fill="url(#storyVig)" pointerEvents="none" />
                  <path d={ARCH_PATH} fill="none" stroke="url(#storyArchGold)" strokeWidth="5" pointerEvents="none" />
                  <path
                    d="M 14,300 L 14,112 Q 14,16 100,16 Q 186,16 186,112 L 186,300 Z"
                    fill="none" stroke="rgba(245,230,168,0.3)" strokeWidth="1.5" pointerEvents="none"
                  />
                  {/* Keystone circles */}
                  <circle cx="100" cy="10" r="7" fill="#D4AF37" opacity="0.9" pointerEvents="none" />
                  <circle cx="100" cy="10" r="4" fill="#F5E6A8" opacity="0.9" pointerEvents="none" />
                  {/* Base corners */}
                  <circle cx="8"   cy="300" r="6" fill="#D4AF37" opacity="0.7" pointerEvents="none" />
                  <circle cx="192" cy="300" r="6" fill="#D4AF37" opacity="0.7" pointerEvents="none" />
                </svg>

                {/* Left chevron button */}
                <button
                  onClick={prevStory}
                  className="absolute left-10 md:left-4 top-[45%] -translate-y-1/2 flex items-center justify-center w-8 h-8 rounded-full border border-[#D4AF37]/45 bg-[#0d0502]/85 backdrop-blur-md text-[#F5E6A8] hover:bg-[#D4AF37] hover:text-[#0d0502] transition-all duration-300 shadow-[0_4px_12px_rgba(0,0,0,0.5)] opacity-75 group-hover/carousel:opacity-100 focus:outline-none"
                  aria-label="Previous story"
                >
                  <ChevronLeft className="w-5 h-5" />
                </button>

                {/* Right chevron button */}
                <button
                  onClick={nextStory}
                  className="absolute right-10 md:right-4 top-[45%] -translate-y-1/2 flex items-center justify-center w-8 h-8 rounded-full border border-[#D4AF37]/45 bg-[#0d0502]/85 backdrop-blur-md text-[#F5E6A8] hover:bg-[#D4AF37] hover:text-[#0d0502] transition-all duration-300 shadow-[0_4px_12px_rgba(0,0,0,0.5)] opacity-75 group-hover/carousel:opacity-100 focus:outline-none"
                  aria-label="Next story"
                >
                  <ChevronRight className="w-5 h-5" />
                </button>
              </div>

              {/* Dots Indicators & Labels */}
              <div className="flex flex-col items-center mt-5 pb-2 md:pb-8">
                {/* Dots */}
                <div className="flex items-center gap-2 mb-2">
                  {wedding.story.map((_, i) => (
                    <button
                      key={i}
                      onClick={() => setStoryIdx(i)}
                      className={`h-2 rounded-full transition-all duration-300 focus:outline-none ${
                        storyIdx === i
                          ? "w-6 bg-[#D4AF37]"
                          : "w-2 bg-[#F5E6A8]/30 hover:bg-[#F5E6A8]/60"
                      }`}
                      aria-label={`Go to story ${i + 1}`}
                    />
                  ))}
                </div>

                {/* Date indicator */}
                <div className="h-4 flex items-center justify-center">
                  <AnimatePresence mode="wait">
                    <motion.p
                      key={storyIdx}
                      initial={{ opacity: 0, y: 5 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: -5 }}
                      transition={{ duration: 0.3 }}
                      className="font-body text-[10px] uppercase tracking-[0.45em] text-[#F5E6A8]/60 text-center"
                    >
                      {wedding.story[storyIdx].date}
                    </motion.p>
                  </AnimatePresence>
                </div>
              </div>
            </div>

            {/* Text description column */}
            <div className="flex-1 px-8 pb-10 md:px-0 md:pr-12 md:py-12 relative flex flex-col justify-center">
              {/* Subtle gold line pattern overlay */}
              <div
                className="pointer-events-none absolute inset-0 opacity-[0.02]"
                style={{ backgroundImage: "repeating-linear-gradient(45deg, #D4AF37 0 2px, transparent 2px 14px)" }}
              />

              {/* Chapter Badge */}
              <div className="mb-5">
                <span className="inline-flex items-center gap-1.5 rounded-full px-3 py-1 text-[9px] font-semibold uppercase tracking-[0.45em] bg-gradient-to-r from-[#5a1215] to-[#D4AF37] shadow-sm text-[#F5E6A8]">
                  <span>✦</span>
                  Chapter {storyIdx + 1}
                </span>
              </div>

              {/* Title & Date */}
              <AnimatePresence mode="wait">
                <motion.div
                  key={storyIdx}
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -20 }}
                  transition={{ duration: 0.4 }}
                >
                  <h3 className="font-heading text-4xl sm:text-5xl font-light text-[#F5E6A8]">
                    {wedding.story[storyIdx].title}
                  </h3>

                  {/* Separator */}
                  <div className="mt-4 flex items-center gap-2">
                    <span className="h-px flex-1 max-w-[60px] opacity-40 bg-gradient-to-r from-[#D4AF37] to-transparent" />
                    <span className="text-xs opacity-35 text-[#D4AF37]">✦</span>
                  </div>

                  {/* Description blurb */}
                  <p className="font-body mt-5 text-sm sm:text-base leading-relaxed text-[#F5E6A8]/80 max-w-lg italic">
                    {wedding.story[storyIdx].desc}
                  </p>
                </motion.div>
              </AnimatePresence>

              {/* Sacred Sanskrit Shloka */}
              <div className="mt-8 flex flex-col gap-2 border-t border-[#D4AF37]/20 pt-6">
                <span className="h-px w-24 bg-gradient-to-r from-[#D4AF37]/50 to-transparent" />
                <p className="font-heading text-base sm:text-lg text-[#D4AF37] opacity-90 leading-relaxed font-semibold">
                  यदेतद्धृदयं तव तदस्तु हृदयं मम । यदिदं हृदयं मम तदस्तु हृदयं तव ॥
                </p>
                <p className="font-body text-[10px] tracking-wider uppercase text-white/50">
                  "May your heart be my heart, and may my heart be your heart." — Rigveda
                </p>
              </div>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}

/* =========================================================
   EVENTS
   ========================================================= */
// Hindi name helper removed

function getSignificance(name: string): string {
  switch (name) {
    case "Ganesh Puja":
      return "Invoking the divine blessings of Lord Vignaharta to remove all obstacles and mark an auspicious beginning.";
    case "Haldi":
      return "A festive turmeric bathing ceremony representing prosperity, purification, and skin-glowing beauty.";
    case "Mehendi":
      return "The beautiful art of sketching henna narratives on palms, celebrating color, song, and sisterhood.";
    case "Sangeet":
      return "A musical extravaganza where families join in laughter, choreography, and celebration.";
    case "Baraat":
      return "The groom's celebratory royal arrival amidst trumpets, dancing, and grand traditional fanfare.";
    case "Wedding Ceremony":
      return "The sacred fire circumambulations and seven lifetime vows, binding two souls into one destiny.";
    case "Reception":
      return "A grand banquet under the night sky, welcoming the newlyweds with toasts, music, and love.";
    default:
      return "A traditional custom filled with joy and ancestral blessings, uniting families in celebrations.";
  }
}

function getCeremonyTheme(name: string) {
  switch (name) {
    case "Ganesh Puja":
      return {
        gradient: "linear-gradient(135deg, rgba(89, 13, 21, 0.95) 0%, rgba(20, 10, 4, 0.92) 50%, rgba(38, 5, 9, 0.96) 100%)",
        accentColor: "#D4AF37",
        shadowColor: "rgba(212,175,55,0.3)",
      };
    case "Haldi":
      return {
        gradient: "linear-gradient(135deg, rgba(166, 124, 0, 0.95) 0%, rgba(20, 10, 4, 0.92) 50%, rgba(61, 46, 11, 0.96) 100%)",
        accentColor: "#F4C430",
        shadowColor: "rgba(244,196,48,0.35)",
      };
    case "Mehendi":
      return {
        gradient: "linear-gradient(135deg, rgba(15, 74, 45, 0.95) 0%, rgba(20, 10, 4, 0.92) 50%, rgba(4, 28, 16, 0.96) 100%)",
        accentColor: "#4ED39A",
        shadowColor: "rgba(78,211,154,0.25)",
      };
    case "Sangeet":
      return {
        gradient: "linear-gradient(135deg, rgba(22, 38, 92, 0.95) 0%, rgba(20, 10, 4, 0.92) 50%, rgba(6, 12, 38, 0.96) 100%)",
        accentColor: "#7A9CC6",
        shadowColor: "rgba(122,156,198,0.25)",
      };
    case "Baraat":
      return {
        gradient: "linear-gradient(135deg, rgba(184, 89, 15, 0.95) 0%, rgba(20, 10, 4, 0.92) 50%, rgba(61, 26, 4, 0.96) 100%)",
        accentColor: "#E6C280",
        shadowColor: "rgba(230,194,128,0.3)",
      };
    case "Wedding Ceremony":
      return {
        gradient: "linear-gradient(135deg, rgba(110, 31, 42, 0.95) 0%, rgba(20, 10, 4, 0.92) 50%, rgba(38, 5, 9, 0.96) 100%)",
        accentColor: "#D4AF37",
        shadowColor: "rgba(212,175,55,0.35)",
      };
    case "Reception":
      return {
        gradient: "linear-gradient(135deg, rgba(20, 20, 30, 0.95) 0%, rgba(20, 10, 4, 0.92) 50%, rgba(10, 10, 15, 0.96) 100%)",
        accentColor: "#C7A870",
        shadowColor: "rgba(199,168,112,0.3)",
      };
    default:
      return {
        gradient: "linear-gradient(135deg, rgba(38, 5, 9, 0.92) 0%, rgba(20, 10, 4, 0.92) 50%, rgba(10, 10, 15, 0.96) 100%)",
        accentColor: "#D4AF37",
        shadowColor: "rgba(212,175,55,0.22)",
      };
  }
}

function CeremonyCard({ e }: { e: typeof wedding.events[0] }) {
  const theme = getCeremonyTheme(e.name);

  return (
    <motion.div
      whileHover={{
        y: -10,
        boxShadow: `0 35px 80px -15px ${theme.shadowColor}, 0 0 0 1px ${theme.accentColor}75`,
        transition: { duration: 0.5, ease: [0.22, 1, 0.36, 1] }
      }}
      className="group cursor-default relative w-[300px] h-[300px] rounded-full aspect-square sm:w-[370px] sm:h-[370px] flex flex-col items-center justify-center text-center px-6 py-8 sm:p-8 transition-all duration-500 overflow-hidden"
      style={{
        background: theme.gradient,
        border: "1px solid rgba(212,175,55,0.15)",
        boxShadow: "0 25px 60px -25px rgba(0,0,0,0.8), inset 0 1px 0 rgba(255,255,255,0.06)"
      }}
    >
      {/* Outer gold-spinning border */}
      <div 
        className="absolute inset-0 rounded-full p-[2px] animate-[spin_12s_linear_infinite] pointer-events-none select-none z-0"
        style={{
          background: `conic-gradient(from 0deg, transparent 15%, ${theme.accentColor} 35%, #FFFBEA 50%, ${theme.accentColor} 65%, transparent 85%)`,
          WebkitMask: "linear-gradient(#000 0 0) content-box, linear-gradient(#000 0 0)",
          WebkitMaskComposite: "xor",
          maskComposite: "exclude"
        }}
      />

      {/* Inner dotted border rotating in reverse */}
      <svg 
        className="absolute inset-2.5 w-[calc(100%-20px)] h-[calc(100%-20px)] animate-[spin_22s_linear_infinite_reverse] opacity-40 pointer-events-none z-0"
        viewBox="0 0 100 100"
      >
        <circle cx="50" cy="50" r="46.5" stroke={theme.accentColor} strokeWidth="0.8" strokeDasharray="3 4" fill="none" />
      </svg>

      {/* Subtle central watermark mandala inside circle */}
      <MandalaBg className="absolute inset-0 w-full h-full opacity-[0.03] scale-75 pointer-events-none" />

      {/* Content Container */}
      <div className="relative flex flex-col items-center justify-center w-full z-10 select-none gap-1.5 h-full">
        {/* Event Title */}
        <h3 className="font-heading text-2xl sm:text-[32px] font-semibold text-[#F5E6A8] drop-shadow-[0_2px_8px_rgba(212,175,55,0.3)] tracking-wide leading-none select-none transition-all duration-300 group-hover:text-white">
          {e.name}
        </h3>

        <span aria-hidden className="block h-px w-12 bg-gradient-to-r from-transparent via-[#D4AF37]/50 to-transparent mx-auto my-0.5" />

        {/* Traditional Significance mini blurb */}
        <p className="font-body text-[9.5px] sm:text-[11px] italic text-white/70 leading-relaxed max-w-[210px] sm:max-w-[240px] select-none text-center">
          {getSignificance(e.name)}
        </p>

        {/* Date and Time - Royal Highlighted Style */}
        <div className="px-3 py-1 sm:py-1.5 rounded bg-white/[0.04] border-t border-b border-[#D4AF37]/30 shadow-[0_0_12px_rgba(212,175,55,0.08)] backdrop-blur-[2px] transition-all duration-300 group-hover:bg-white/[0.07] group-hover:border-[#D4AF37]/50 w-full max-w-[200px] sm:max-w-[220px] text-center my-1">
          <p className="font-body text-[9px] sm:text-[11.5px] text-[#FAF8F3] tracking-wide font-semibold flex items-center justify-center gap-1.5 uppercase">
            <span className="w-1.5 h-1.5 rounded-full bg-[#D4AF37] animate-pulse shrink-0" />
            <span className="truncate">{e.date}</span>
          </p>
          <p className="font-body text-[8px] sm:text-[9px] text-[#FAF8F3]/80 mt-0.5 tracking-[0.12em] font-bold uppercase">
            {e.time}
          </p>
        </div>

        {/* Venue detail */}
        <div className="max-w-[190px] sm:max-w-[210px] text-center">
          <p className="font-heading text-[10px] sm:text-[12px] italic text-[#FAF8F3]/90 leading-tight">
            {e.venue}
          </p>
        </div>

        {/* Dress code */}
        <div className="text-center mt-0.5">
          <span className="font-body text-[7px] uppercase tracking-[0.25em] text-[#D4AF37]/85 font-semibold">Dress Code</span>
          <p className="font-body text-[9px] sm:text-[10.5px] italic text-[#FAF8F3]/90 leading-none mt-0.5">
            {e.dress}
          </p>
        </div>

        {/* Action Link (Get Directions) */}
        <div className="mt-1">
          <a
            href={wedding.venue.directions}
            target="_blank"
            rel="noreferrer"
            className="group/link inline-flex items-center gap-1 font-body text-[8px] sm:text-[9px] uppercase tracking-[0.25em] text-[#D4AF37] border-b border-[#D4AF37]/40 pb-0.5 hover:text-white hover:border-white transition-colors"
          >
            Get Direction
            <ArrowUpRight className="h-2.5 w-2.5 transition-transform duration-300 group-hover/link:translate-x-0.5 group-hover/link:-translate-y-0.5" />
          </a>
        </div>
      </div>
    </motion.div>
  );
}

export function Events() {
  return (
    <section id="events" className="relative overflow-hidden py-24 sm:py-32">
      {/* ── 0. Watermark Mandala watermark in background ── */}
      <div className="absolute inset-0 -z-20 opacity-[0.04] flex items-center justify-center pointer-events-none select-none">
        <MandalaBg className="w-[85vw] h-[85vh] text-[#D4AF37]" />
      </div>

      <FloatingPetals count={12} />
      <GoldenParticles count={15} />

      {/* ── 1. Double gold frame border ── */}
      <motion.div
        initial={{ opacity: 0, scale: 1.05 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 1.8, ease: "easeOut" }}
        className="absolute inset-2 sm:inset-4 pointer-events-none border border-[#D4AF37]/35 rounded-xl sm:rounded-2xl z-10"
      />
      <motion.div
        initial={{ opacity: 0, scale: 1.03 }}
        animate={{ opacity: 0.55, scale: 1 }}
        transition={{ duration: 2, ease: "easeOut", delay: 0.3 }}
        className="absolute inset-[10px] sm:inset-[22px] pointer-events-none border border-[#D4AF37]/18 rounded-lg sm:rounded-xl z-10"
      />

      {/* ── 2. Ornate corner ornaments ── */}
      <CornerOrnament className="top-[10px]  left-[10px]  sm:top-[22px] sm:left-[22px]" />
      <CornerOrnament className="top-[10px]  right-[10px] sm:top-[22px] sm:right-[22px] rotate-90" />
      <CornerOrnament className="bottom-[10px] left-[10px]  sm:bottom-[22px] sm:left-[22px]  -rotate-90" />
      <CornerOrnament className="bottom-[10px] right-[10px] sm:bottom-[22px] sm:right-[22px] rotate-180" />

      {/* ── 3. Swaying Bells ── */}
      <motion.div
        initial={{ y: -80, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 1.5, ease: [0.22, 1, 0.36, 1], delay: 0.5 }}
        className="absolute left-3.5 sm:left-10 top-[10px] sm:top-[22px] origin-top flex flex-col items-center pointer-events-none z-20"
      >
        <div className="w-px h-10 sm:h-20 bg-gradient-to-b from-[#D4AF37] to-[#D4AF37]/30" />
        <motion.div animate={{ rotate: [-3, 3, -3] }} transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }} className="origin-top -mt-1">
          <HangingBell />
        </motion.div>
      </motion.div>

      <motion.div
        initial={{ y: -80, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 1.5, ease: [0.22, 1, 0.36, 1], delay: 0.7 }}
        className="absolute right-3.5 sm:right-10 top-[10px] sm:top-[22px] origin-top flex flex-col items-center pointer-events-none z-20"
      >
        <div className="w-px h-10 sm:h-20 bg-gradient-to-b from-[#D4AF37] to-[#D4AF37]/30" />
        <motion.div animate={{ rotate: [3, -3, 3] }} transition={{ duration: 6.5, repeat: Infinity, ease: "easeInOut" }} className="origin-top -mt-1">
          <HangingBell />
        </motion.div>
      </motion.div>

      <div className="relative mx-auto max-w-6xl z-10 px-6">
        <SectionTitle eyebrow="Ceremonies" title="Wedding Events" subtitle="Each ritual, a chapter of our celebration." light />

        {/* ── Unified Serpentine Timeline (Mobile + Desktop) ── */}
        <div className="relative mt-20">

          {/* Gold serpentine guide path — desktop only */}
          <svg
            aria-hidden
            className="pointer-events-none absolute inset-x-0 top-0 hidden md:block h-full w-full opacity-40"
            preserveAspectRatio="none"
            viewBox="0 0 1000 1800"
          >
            <defs>
              <linearGradient id="ceremoniesPath" x1="0" x2="0" y1="0" y2="1">
                <stop offset="0%"   stopColor="#D4AF37" stopOpacity="0" />
                <stop offset="10%"  stopColor="#D4AF37" stopOpacity="0.45" />
                <stop offset="90%"  stopColor="#D4AF37" stopOpacity="0.45" />
                <stop offset="100%" stopColor="#D4AF37" stopOpacity="0" />
              </linearGradient>
              <filter id="glowPathCeremonies">
                <feGaussianBlur stdDeviation="3" result="coloredBlur" />
                <feMerge>
                  <feMergeNode in="coloredBlur" />
                  <feMergeNode in="SourceGraphic" />
                </feMerge>
              </filter>
            </defs>
            <path
              d="M 500 0 C 150 300, 850 500, 500 800 C 150 1100, 850 1350, 500 1600 C 400 1700, 500 1760, 500 1800"
              fill="none" stroke="#D4AF37" strokeWidth="0.6" strokeOpacity="0.2"
              filter="url(#glowPathCeremonies)"
            />
            <path
              d="M 500 0 C 150 300, 850 500, 500 800 C 150 1100, 850 1350, 500 1600 C 400 1700, 500 1760, 500 1800"
              fill="none" stroke="url(#ceremoniesPath)" strokeWidth="1.2" strokeDasharray="5 9"
            />
          </svg>

          {/* Gold serpentine wave — mobile only */}
          <svg
            aria-hidden
            className="pointer-events-none absolute inset-x-0 top-0 block md:hidden h-full w-full opacity-50"
            preserveAspectRatio="none"
            viewBox="0 0 100 600"
          >
            <defs>
              <linearGradient id="mobileWavePath" x1="0" x2="0" y1="0" y2="1">
                <stop offset="0%"   stopColor="#D4AF37" stopOpacity="0"   />
                <stop offset="10%"  stopColor="#D4AF37" stopOpacity="0.5" />
                <stop offset="50%"  stopColor="#F5E6A8" stopOpacity="0.6" />
                <stop offset="90%"  stopColor="#D4AF37" stopOpacity="0.5" />
                <stop offset="100%" stopColor="#D4AF37" stopOpacity="0"   />
              </linearGradient>
            </defs>
            <path
              d="M 50 0
                 C 10 60,  90 120, 50 180
                 C 10 240, 90 300, 50 360
                 C 10 420, 90 480, 50 540
                 C 30 570, 50 585, 50 600"
              fill="none"
              stroke="url(#mobileWavePath)"
              strokeWidth="1.0"
              strokeDasharray="4 7"
            />
          </svg>

          <ol className="space-y-12 sm:space-y-16 md:space-y-24 relative z-10">
            {wedding.events.map((e, i) => {
              const isLeft = i % 2 === 0;
              const accentColor = getCeremonyTheme(e.name).accentColor;

              return (
                <li key={e.name} className="relative grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-20">

                  {/* ── Node — always centred on the grid divider (desktop only) ── */}
                  <motion.div
                    initial={{ scale: 0, opacity: 0 }}
                    whileInView={{ scale: 1, opacity: 1 }}
                    viewport={{ once: true, amount: 0.5 }}
                    transition={{ duration: 0.55, ease: [0.22, 1, 0.36, 1], delay: 0.1 }}
                    aria-hidden
                    className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 z-10 hidden md:flex"
                  >
                    <motion.div
                      animate={{ scale: [1, 1.5, 1], opacity: [0.3, 0, 0.3] }}
                      transition={{ duration: 2.8, repeat: Infinity, ease: "easeInOut", delay: i * 0.3 }}
                      className="absolute inset-0 rounded-full"
                      style={{ boxShadow: `0 0 0 8px ${accentColor}50` }}
                    />
                    <div
                      className="relative flex h-8 w-8 items-center justify-center rounded-full shadow-lg"
                      style={{
                        background: `radial-gradient(circle at 35% 35%, #26150b, ${accentColor})`,
                        boxShadow: `0 0 20px ${accentColor}70, 0 0 0 3px rgba(38, 5, 9, 0.8)`,
                      }}
                    >
                      <span className="text-sm flex items-center justify-center">
                        {e.icon}
                      </span>
                    </div>
                  </motion.div>

                  {/* Card Container */}
                  <motion.div
                    initial={{ opacity: 0, x: isLeft ? -32 : 32, y: 12 }}
                    whileInView={{ opacity: 1, x: 0, y: 0 }}
                    viewport={{ once: true, amount: 0.2 }}
                    transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1], delay: 0.15 }}
                    className={`
                      w-full flex justify-center col-span-1
                      ${isLeft ? "md:justify-end md:pr-16" : "md:justify-start md:pl-16 md:col-start-2"}
                    `}
                  >
                    <div 
                      className={`
                        scale-[0.92] sm:scale-[1.0] md:scale-[0.88] lg:scale-[0.98] xl:scale-100
                        transition-transform duration-500 ease-out hover:-translate-y-2
                        ${isLeft ? "origin-center md:origin-top-right" : "origin-center md:origin-top-left"}
                      `}
                    >
                      <CeremonyCard e={e} />
                    </div>
                  </motion.div>

                </li>
              );
            })}
          </ol>
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
  meal: "veg" | "non-veg" | "jain" | "vegan";
  message?: string;
};

const STORAGE_KEY = "wedding-rsvp-v2";

const fireGoldConfetti = () => {
  const end = Date.now() + 3000;
  const colors = ["#d4af37", "#f3e5ab", "#aa7c11", "#ffdf00"];

  (function frame() {
    confetti({
      particleCount: 6,
      startVelocity: 20,
      spread: 360,
      ticks: 200,
      origin: { x: Math.random(), y: -0.1 },
      colors: colors,
      shapes: ['circle'],
      gravity: 0.8,
      scalar: Math.random() * 0.4 + 0.4,
      zIndex: 10000
    });

    if (Date.now() < end) {
      requestAnimationFrame(frame);
    }
  }());
};

export function Rsvp() {
  const [step, setStep] = useState<"closed" | "thanks" | "form">("closed");
  const [rsvp, setRsvp] = useState<RsvpForm | null>(null);
  const [form, setForm] = useState<RsvpForm>({
    name: "",
    phone: "",
    attending: "yes",
    guests: 1,
    meal: "veg",
    message: "",
  });

  useEffect(() => {
    try {
      const raw = localStorage.getItem(STORAGE_KEY);
      if (raw) {
        const parsed = JSON.parse(raw) as RsvpForm;
        setRsvp(parsed);
        setForm(parsed);
      }
    } catch {}
  }, []);

  useEffect(() => {
    if (step !== "closed") {
      document.body.style.overflow = "hidden";
      return () => {
        document.body.style.overflow = "";
      };
    }
  }, [step]);

  // Auto-advance from thanks → form
  useEffect(() => {
    if (step === "thanks") {
      const t = setTimeout(() => setStep("form"), 1600);
      return () => clearTimeout(t);
    }
  }, [step]);

  const submit = (e: React.FormEvent) => {
    e.preventDefault();
    const data = { 
      ...form, 
      guests: Math.max(1, Math.min(10, Number(form.guests) || 1)) 
    };
    localStorage.setItem(STORAGE_KEY, JSON.stringify(data));
    setRsvp(data);
    setStep("closed");
    
    if (data.attending === "yes") {
      fireGoldConfetti();
    }
  };

  const openFlow = () => {
    if (!rsvp) {
      fireGoldConfetti();
      setStep("thanks");
    } else {
      setForm(rsvp);
      setStep("form");
    }
  };

  const close = () => setStep("closed");

  return (
    <section id="rsvp" className="relative overflow-hidden py-24 sm:py-32">
      {/* ── 0. Watermark Mandala watermark in background ── */}
      <div className="absolute inset-0 -z-20 opacity-[0.04] flex items-center justify-center pointer-events-none select-none">
        <MandalaBg className="w-[85vw] h-[85vh] text-[#D4AF37]" />
      </div>

      <FloatingPetals count={10} />
      <GoldenParticles count={12} />

      {/* ── 1. Double gold frame border ── */}
      <motion.div
        initial={{ opacity: 0, scale: 1.05 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 1.8, ease: "easeOut" }}
        className="absolute inset-2 sm:inset-4 pointer-events-none border border-[#D4AF37]/35 rounded-xl sm:rounded-2xl z-10"
      />
      <motion.div
        initial={{ opacity: 0, scale: 1.03 }}
        animate={{ opacity: 0.55, scale: 1 }}
        transition={{ duration: 2, ease: "easeOut", delay: 0.3 }}
        className="absolute inset-[10px] sm:inset-[22px] pointer-events-none border border-[#D4AF37]/18 rounded-lg sm:rounded-xl z-10"
      />

      {/* ── 2. Ornate corner ornaments ── */}
      <CornerOrnament className="top-[10px]  left-[10px]  sm:top-[22px] sm:left-[22px]" />
      <CornerOrnament className="top-[10px]  right-[10px] sm:top-[22px] sm:right-[22px] rotate-90" />
      <CornerOrnament className="bottom-[10px] left-[10px]  sm:bottom-[22px] sm:left-[22px]  -rotate-90" />
      <CornerOrnament className="bottom-[10px] right-[10px] sm:bottom-[22px] sm:right-[22px] rotate-180" />

      {/* ── 3. Swaying Bells ── */}
      <motion.div
        initial={{ y: -80, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 1.5, ease: [0.22, 1, 0.36, 1], delay: 0.5 }}
        className="absolute left-3.5 sm:left-10 top-[10px] sm:top-[22px] origin-top flex flex-col items-center pointer-events-none z-20"
      >
        <div className="w-px h-10 sm:h-20 bg-gradient-to-b from-[#D4AF37] to-[#D4AF37]/30" />
        <motion.div animate={{ rotate: [-3, 3, -3] }} transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }} className="origin-top -mt-1">
          <HangingBell />
        </motion.div>
      </motion.div>

      <motion.div
        initial={{ y: -80, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 1.5, ease: [0.22, 1, 0.36, 1], delay: 0.7 }}
        className="absolute right-3.5 sm:right-10 top-[10px] sm:top-[22px] origin-top flex flex-col items-center pointer-events-none z-20"
      >
        <div className="w-px h-10 sm:h-20 bg-gradient-to-b from-[#D4AF37] to-[#D4AF37]/30" />
        <motion.div animate={{ rotate: [3, -3, 3] }} transition={{ duration: 6.5, repeat: Infinity, ease: "easeInOut" }} className="origin-top -mt-1">
          <HangingBell />
        </motion.div>
      </motion.div>

      <div className="relative mx-auto max-w-3xl z-10 px-6 text-center flex flex-col items-center">
        <SectionTitle eyebrow="Kindly Respond" title="RSVP" subtitle="Please let us know your plans by 15 days before the wedding." light />

        <div className="accept-cta-wrap mx-auto mt-6">
          <span className="accept-glow" aria-hidden="true" />
          <button type="button" onClick={openFlow} className="btn-accept-luxe">
            <span className="accept-sheen" aria-hidden="true" />
            <Heart className="w-4 h-4 md:w-5 md:h-5 fill-current" strokeWidth={1.5} />
            <span className="accept-label">
              {rsvp ? "View / Edit RSVP" : "Accept Invitation"}
            </span>
            <span className="accept-deco" aria-hidden="true">❋</span>
          </button>
        </div>
        <p className="mt-6 font-heading italic text-[#F5E6A8]/70 text-sm sm:text-base leading-relaxed max-w-md">
          {rsvp
            ? `Your RSVP is saved · ${rsvp.attending === "yes" ? "Attending" : "Unable to attend"}`
            : "With your blessings, this celebration becomes complete."}
        </p>

        {/* Confetti Thanks Splash Overlay */}
        <AnimatePresence>
          {step === "thanks" && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 z-[100] flex items-center justify-center px-6 backdrop-blur-md"
              style={{
                background: "radial-gradient(ellipse at center, rgba(38, 5, 9, 0.98), rgba(13, 5, 2, 0.96))",
              }}
              role="dialog"
              aria-modal="true"
              onClick={close}
            >
              <div className="text-center max-w-md">
                <div
                  className="w-20 h-20 mx-auto rounded-full flex items-center justify-center mb-6 shadow-[0_12px_40px_-8px_rgba(212,175,55,0.55)]"
                  style={{ background: "linear-gradient(135deg, #D4AF37 0%, #B8862A 100%)" }}
                >
                  <Heart className="w-10 h-10 text-[#26150b] fill-current" />
                </div>
                <p className="font-body text-[0.7rem] uppercase tracking-[0.4em] text-[#D4AF37] mb-2">
                  From Our Hearts
                </p>
                <h3 className="font-heading text-5xl sm:text-6xl text-[#F5E6A8] mb-3">
                  Thank You
                </h3>
                <span aria-hidden className="block h-px w-24 bg-gradient-to-r from-transparent via-[#D4AF37] to-transparent mx-auto my-4" />
                <p className="font-body italic text-[#F5E6A8]/80 text-base sm:text-lg">
                  Your blessings mean the world to us.
                </p>
              </div>
            </motion.div>
          )}
        </AnimatePresence>

        {/* Modal RSVP Form */}
        <AnimatePresence>
          {step === "form" && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 z-[100] flex items-center justify-center px-4 py-4 backdrop-blur-md"
              style={{
                background: "radial-gradient(ellipse at center, rgba(38, 5, 9, 0.98), rgba(13, 5, 2, 0.96))",
              }}
              role="dialog"
              aria-modal="true"
              onClick={(e) => {
                if (e.target === e.currentTarget) close();
              }}
            >
              {/* Double Border Frame inside modal */}
              <div className="absolute inset-3 sm:inset-6 pointer-events-none border border-[#D4AF37]/20 rounded-2xl z-0" />
              <CornerOrnament className="top-[14px] left-[14px] sm:top-[28px] sm:left-[28px]" />
              <CornerOrnament className="top-[14px] right-[14px] sm:top-[28px] sm:right-[28px] rotate-90" />
              <CornerOrnament className="bottom-[14px] left-[14px] sm:bottom-[28px] sm:left-[28px] -rotate-90" />
              <CornerOrnament className="bottom-[14px] right-[14px] sm:bottom-[28px] sm:right-[28px] rotate-180" />

              <button
                type="button"
                onClick={close}
                className="absolute top-6 right-6 w-9 h-9 rounded-full flex items-center justify-center bg-[#26150b]/80 text-[#D4AF37] border border-[#D4AF37]/35 shadow-md hover:bg-[#0d0502] transition-colors z-20"
                aria-label="Close"
              >
                <X className="w-5 h-5" />
              </button>

              <motion.div 
                initial={{ y: 30, scale: 0.95 }}
                animate={{ y: 0, scale: 1 }}
                exit={{ y: 30, scale: 0.95 }}
                transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
                className="w-full max-w-md mx-auto max-h-[92vh] flex flex-col z-10 relative overflow-y-auto px-4"
              >
                <div className="text-center mb-4 shrink-0">
                  <div
                    className="w-12 h-12 mx-auto rounded-full flex items-center justify-center mb-2 shadow-[0_8px_24px_-6px_rgba(212,175,55,0.45)]"
                    style={{ background: "linear-gradient(135deg, #D4AF37 0%, #B8862A 100%)" }}
                  >
                    {rsvp ? (
                      <Check className="w-6 h-6 text-[#26150b]" strokeWidth={3} />
                    ) : (
                      <Heart className="w-6 h-6 text-[#26150b] fill-current" />
                    )}
                  </div>
                  <h3 className="font-heading text-3xl text-[#F5E6A8] leading-tight font-semibold">
                    Kindly RSVP
                  </h3>
                  <span aria-hidden className="block h-px w-16 bg-gradient-to-r from-transparent via-[#D4AF37] to-transparent mx-auto my-2" />
                </div>

                <form onSubmit={submit} className="space-y-4 text-left">
                  <div>
                    <label className="luxe-label">Full Name</label>
                    <input
                      type="text"
                      required
                      value={form.name}
                      onChange={(e) => setForm({ ...form, name: e.target.value })}
                      className="luxe-input"
                      placeholder="Your full name"
                    />
                  </div>

                  <div>
                    <label className="luxe-label">Phone Number</label>
                    <input
                      type="tel"
                      required
                      value={form.phone}
                      onChange={(e) => setForm({ ...form, phone: e.target.value })}
                      className="luxe-input"
                      placeholder="Your contact number"
                    />
                  </div>

                  <div>
                    <label className="luxe-label">Will you be joining us?</label>
                    <div className="grid grid-cols-2 gap-3">
                      {(["yes", "no"] as const).map((opt) => (
                        <button
                          key={opt}
                          type="button"
                          onClick={() => setForm({ ...form, attending: opt })}
                          className={`luxe-pill ${form.attending === opt ? "is-active" : ""}`}
                        >
                          {opt === "yes" ? "Joyfully Yes" : "Regretfully No"}
                        </button>
                      ))}
                    </div>
                  </div>

                  {form.attending === "yes" && (
                    <div>
                      <label className="luxe-label">Number of Guests</label>
                      <input
                        type="number"
                        min={1}
                        max={10}
                        value={form.guests}
                        onChange={(e) => setForm({ ...form, guests: Number(e.target.value) })}
                        className="luxe-input"
                      />
                    </div>
                  )}

                  <div>
                    <label className="luxe-label">Meal Preference</label>
                    <div className="grid grid-cols-2 sm:grid-cols-4 gap-2">
                      {(["veg", "non-veg", "jain", "vegan"] as const).map((opt) => (
                        <button
                          key={opt}
                          type="button"
                          onClick={() => setForm({ ...form, meal: opt })}
                          className={`luxe-pill !text-[9px] sm:!text-[10px] ${form.meal === opt ? "is-active" : ""}`}
                        >
                          {opt === "veg" ? "Veg" : opt === "non-veg" ? "Non-Veg" : opt === "jain" ? "Jain" : "Vegan"}
                        </button>
                      ))}
                    </div>
                  </div>

                  <div>
                    <label className="luxe-label">Message (Optional)</label>
                    <textarea
                      rows={2}
                      maxLength={300}
                      value={form.message || ""}
                      onChange={(e) => setForm({ ...form, message: e.target.value })}
                      className="luxe-input resize-none"
                      placeholder="Send a blessing or notes..."
                    />
                  </div>

                  <div className="flex gap-3 pt-2">
                    <button type="submit" className="btn-accept-luxe flex-1 !py-3 !text-[10px] w-full">
                      <Check className="w-4 h-4" strokeWidth={2.5} />
                      <span className="accept-label">{rsvp ? "Update RSVP" : "Submit RSVP"}</span>
                    </button>
                    {rsvp && (
                      <button
                        type="button"
                        onClick={() => setForm(rsvp)}
                        className="luxe-secondary-btn flex-[0.5] !py-3"
                      >
                        Reset
                      </button>
                    )}
                  </div>
                </form>
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </section>
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
