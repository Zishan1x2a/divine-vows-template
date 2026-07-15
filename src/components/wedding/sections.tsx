import { useEffect, useMemo, useRef, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useForm } from "react-hook-form";
import confetti from "canvas-confetti";
import {
  Calendar, Clock, MapPin, Sparkles, Heart, Phone, MessageCircle,
  Gift, ChevronDown, X, Car, BedDouble, Navigation, Check, Pencil,
  ChevronLeft, ChevronRight, ArrowUpRight, Play, Pause, Maximize2,
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
    <section id="hero" className="relative overflow-hidden min-h-[100dvh] flex flex-col justify-center py-20 sm:py-24">
      {/* Background is handled by the global body sunset parallax backdrop */}
      
      {/* ── Double gold frame border ── */}
      <motion.div initial={{ opacity: 0, scale: 1.05 }} animate={{ opacity: 1, scale: 1 }} transition={{ duration: 1.8, ease: "easeOut" }} className="absolute inset-2 sm:inset-4 pointer-events-none border border-[#D4AF37]/35 rounded-xl sm:rounded-2xl z-10" />
      <motion.div initial={{ opacity: 0, scale: 1.03 }} animate={{ opacity: 0.55, scale: 1 }} transition={{ duration: 2, ease: "easeOut", delay: 0.3 }} className="absolute inset-[10px] sm:inset-[22px] pointer-events-none border border-[#D4AF37]/18 rounded-lg sm:rounded-xl z-10" />
      {/* ── Corner ornaments ── */}
      <CornerOrnament className="top-[10px]  left-[10px]  sm:top-[22px] sm:left-[22px]" />
      <CornerOrnament className="top-[10px]  right-[10px] sm:top-[22px] sm:right-[22px] rotate-90" />
      <CornerOrnament className="bottom-[10px] left-[10px]  sm:bottom-[22px] sm:left-[22px]  -rotate-90" />
      <CornerOrnament className="bottom-[10px] right-[10px] sm:bottom-[22px] sm:right-[22px] rotate-180" />
      {/* ── Swaying Bells ── */}
      <motion.div initial={{ y: -80, opacity: 0 }} animate={{ y: 0, opacity: 1 }} transition={{ duration: 1.5, ease: [0.22, 1, 0.36, 1], delay: 0.5 }} className="absolute left-3.5 sm:left-10 top-[10px] sm:top-[22px] origin-top flex flex-col items-center pointer-events-none z-20">
        <div className="w-px h-10 sm:h-20 bg-gradient-to-b from-[#D4AF37] to-[#D4AF37]/30" />
        <motion.div animate={{ rotate: [-3, 3, -3] }} transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }} className="origin-top -mt-1"><HangingBell /></motion.div>
      </motion.div>
      <motion.div initial={{ y: -80, opacity: 0 }} animate={{ y: 0, opacity: 1 }} transition={{ duration: 1.5, ease: [0.22, 1, 0.36, 1], delay: 0.7 }} className="absolute right-3.5 sm:right-10 top-[10px] sm:top-[22px] origin-top flex flex-col items-center pointer-events-none z-20">
        <div className="w-px h-10 sm:h-20 bg-gradient-to-b from-[#D4AF37] to-[#D4AF37]/30" />
        <motion.div animate={{ rotate: [3, -3, 3] }} transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }} className="origin-top -mt-1"><HangingBell /></motion.div>
      </motion.div>
      <FloatingPetals count={16} />
      <GoldenParticles count={20} />

      <div className="relative mx-auto grid max-w-6xl grid-cols-1 items-center gap-12 px-6 md:grid-cols-2 w-full z-10">
        <Reveal>
          <div className="relative flex justify-center items-center">
            {/* Rotating background gold mandala halo */}
            <div className="absolute w-[112%] h-[112%] max-w-[500px] aspect-square rounded-full pointer-events-none opacity-20 z-0 animate-[spin_80s_linear_infinite]"
                 style={{
                   background: "radial-gradient(circle, rgba(212,175,55,0.15) 0%, transparent 70%)",
                   border: "1px dashed rgba(212,175,55,0.15)",
                 }}
            />
            <MandalaBg className="absolute w-[110%] h-[110%] max-w-[480px] opacity-[0.25] pointer-events-none z-0 animate-[spin_60s_linear_infinite]" />
            
            <ArchFrame className="mx-auto aspect-[4/5] w-full max-w-md relative z-10 shadow-[0_20px_50px_rgba(0,0,0,0.7)]">
              <div className="relative m-3 h-[calc(100%-1.5rem)] overflow-hidden rounded-t-[999px] border border-[#D4AF37]/35">
                <img
                  src={IMG.couple}
                  alt={`${wedding.couple.bride} & ${wedding.couple.groom}`}
                  className="h-full w-full object-cover animate-soft-zoom"
                  width={1024}
                  height={1280}
                  loading="eager"
                />
                <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
              </div>
            </ArchFrame>
          </div>
        </Reveal>

        <Reveal delay={0.2}>
          <div className="text-center md:text-left relative">
            <div className="mb-3 flex items-center justify-center md:justify-start gap-3">
              <span className="w-1.5 h-1.5 rounded-full bg-[#D4AF37]" />
              <p className="text-[10px] uppercase tracking-[0.35em] text-[#D4AF37] font-bold">The Holy Union</p>
              <span className="w-1.5 h-1.5 rounded-full bg-[#D4AF37]" />
            </div>

            <p className="font-serif italic text-sm text-[#FAF8F3]/70 tracking-widest mb-4">
              {ganeshMantra.sanskrit[0]}
            </p>

            <h1 className="font-couple gold-text text-5xl sm:text-7xl md:text-8xl leading-none tracking-wide drop-shadow-[0_4px_15px_rgba(212,175,55,0.25)]">
              {wedding.couple.bride.split(" ")[0]}
              <div className="flex items-center justify-center md:justify-start gap-4 my-2.5">
                <span className="h-[1px] w-12 bg-[#D4AF37]/35" />
                <span className="font-heading italic text-[#FAF8F3] text-xl sm:text-2xl lowercase font-normal">and</span>
                <span className="h-[1px] w-12 bg-[#D4AF37]/35" />
              </div>
              {wedding.couple.groom.split(" ")[0]}
            </h1>

            <p className="mt-6 font-heading italic text-base sm:text-lg text-white/80 leading-relaxed max-w-md">
              "{wedding.couple.tagline}"
            </p>

            {/* Premium Details Cards */}
            <div className="mt-8 grid grid-cols-2 gap-4 max-w-md mx-auto md:mx-0">
              <div className="p-4 rounded-2xl border border-[#D4AF37]/25 bg-gradient-to-b from-[#3D070C]/35 to-black/50 backdrop-blur-sm text-center md:text-left relative overflow-hidden group hover:border-[#D4AF37]/45 transition duration-300">
                <div className="absolute inset-0 bg-[#D4AF37]/5 opacity-0 group-hover:opacity-100 blur-md transition duration-300" />
                <Calendar size={18} className="text-[#D4AF37] mx-auto md:mx-0 mb-2" />
                <p className="text-[9px] uppercase tracking-widest text-white/50">Sacred Date</p>
                <p className="font-heading text-xs sm:text-sm text-white mt-1 font-semibold">{wedding.dateLabel}</p>
              </div>
              <div className="p-4 rounded-2xl border border-[#D4AF37]/25 bg-gradient-to-b from-[#3D070C]/35 to-black/50 backdrop-blur-sm text-center md:text-left relative overflow-hidden group hover:border-[#D4AF37]/45 transition duration-300">
                <div className="absolute inset-0 bg-[#D4AF37]/5 opacity-0 group-hover:opacity-100 blur-md transition duration-300" />
                <MapPin size={18} className="text-[#D4AF37] mx-auto md:mx-0 mb-2" />
                <p className="text-[9px] uppercase tracking-widest text-white/50">Royal Venue</p>
                <p className="font-heading text-xs sm:text-sm text-white mt-1 font-semibold line-clamp-2 leading-snug">{wedding.venue.name}</p>
              </div>
            </div>
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
      {/* ── Double gold frame border ── */}
      <motion.div initial={{ opacity: 0, scale: 1.05 }} animate={{ opacity: 1, scale: 1 }} transition={{ duration: 1.8, ease: "easeOut" }} className="absolute inset-2 sm:inset-4 pointer-events-none border border-[#D4AF37]/35 rounded-xl sm:rounded-2xl z-10" />
      <motion.div initial={{ opacity: 0, scale: 1.03 }} animate={{ opacity: 0.55, scale: 1 }} transition={{ duration: 2, ease: "easeOut", delay: 0.3 }} className="absolute inset-[10px] sm:inset-[22px] pointer-events-none border border-[#D4AF37]/18 rounded-lg sm:rounded-xl z-10" />
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
        <SectionTitle eyebrow="Our Journey" title="Our Story" subtitle="Five moments woven into forever." light subtitleClassName="!text-[#F5E6A8]/90 font-medium" />

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
      className="group cursor-default relative w-[300px] h-[300px] rounded-full aspect-square sm:w-[370px] sm:h-[370px] flex flex-col items-center justify-center text-center px-5 py-6 sm:p-8 transition-all duration-500 overflow-hidden"
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
      <div className="relative flex flex-col items-center justify-center w-full z-10 select-none gap-1 h-full">
        {/* Event Title */}
        <h3 className="font-heading text-lg sm:text-[25px] font-semibold text-[#F5E6A8] drop-shadow-[0_2px_8px_rgba(212,175,55,0.3)] tracking-wide leading-none select-none transition-all duration-300 group-hover:text-white">
          {e.name}
        </h3>

        <span aria-hidden className="block h-px w-10 bg-gradient-to-r from-transparent via-[#D4AF37]/50 to-transparent mx-auto my-0.5" />

        {/* Traditional Significance mini blurb */}
        <p className="font-body text-[8.5px] sm:text-[10px] italic text-white/70 leading-relaxed max-w-[170px] sm:max-w-[210px] select-none text-center">
          {getSignificance(e.name)}
        </p>

        {/* Date and Time - Royal Highlighted Style */}
        <div className="px-2 py-0.5 sm:py-1 rounded bg-white/[0.04] border-t border-b border-[#D4AF37]/30 shadow-[0_0_12px_rgba(212,175,55,0.08)] backdrop-blur-[2px] transition-all duration-300 group-hover:bg-white/[0.07] group-hover:border-[#D4AF37]/50 w-full max-w-[170px] sm:max-w-[210px] text-center my-0.5">
          <p className="font-body text-[8.5px] sm:text-[10.5px] text-[#FAF8F3] tracking-wide font-semibold flex items-center justify-center gap-1 uppercase">
            <span className="w-1 h-1 rounded-full bg-[#D4AF37] animate-pulse shrink-0" />
            <span className="truncate">{e.date}</span>
          </p>
          <p className="font-body text-[7.5px] sm:text-[8.5px] text-[#FAF8F3]/80 mt-0.5 tracking-[0.12em] font-bold uppercase">
            {e.time}
          </p>
        </div>

        {/* Venue detail */}
        <div className="max-w-[160px] sm:max-w-[200px] text-center">
          <p className="font-heading text-[9px] sm:text-[11.5px] italic text-[#FAF8F3]/90 leading-tight">
            {e.venue}
          </p>
        </div>

        {/* Dress code */}
        <div className="text-center">
          <span className="font-body text-[6.5px] uppercase tracking-[0.25em] text-[#D4AF37]/85 font-semibold">Dress Code</span>
          <p className="font-body text-[8px] sm:text-[9.5px] italic text-[#FAF8F3]/90 leading-none mt-0.5">
            {e.dress}
          </p>
        </div>

        {/* Action Link (Get Directions) */}
        <div className="mt-0.5">
          <a
            href={wedding.venue.directions}
            target="_blank"
            rel="noreferrer"
            className="group/link inline-flex items-center gap-0.5 font-body text-[7.5px] sm:text-[8.5px] uppercase tracking-[0.25em] text-[#D4AF37] border-b border-[#D4AF37]/40 pb-0.5 hover:text-white hover:border-white transition-colors"
          >
            Get Direction
            <ArrowUpRight className="h-2 w-2 transition-transform duration-300 group-hover/link:translate-x-0.5 group-hover/link:-translate-y-0.5" />
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
        <SectionTitle eyebrow="Ceremonies" title="Wedding Events" subtitle="Each ritual, a chapter of our celebration." light subtitleClassName="!text-[#F5E6A8]/90 font-medium" />

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
  const [activeCategory, setActiveCategory] = useState<string>("all");
  const [activeIndex, setActiveIndex] = useState<number>(0);
  const [isAutoplay, setIsAutoplay] = useState<boolean>(true);
  const [lightboxIndex, setLightboxIndex] = useState<number | null>(null);

  const CATEGORY_MAP: Record<string, string> = {
    all: "All Moments",
    couple: "Couple Portraits",
    events: "Ceremonies",
    decor: "Venue & Decor",
  };

  const galleryItems = [
    { url: IMG.gallery[0], category: "couple", caption: "Vows of Eternal Love" },
    { url: IMG.gallery[1], category: "events", caption: "Sacred Haldi Ceremony" },
    { url: IMG.gallery[2], category: "couple", caption: "Together in Every Step" },
    { url: IMG.gallery[3], category: "events", caption: "Intricate Henna Shimmer" },
    { url: IMG.gallery[4] || IMG.gallery[0], category: "decor", caption: "Royal Venue Splendor" },
    { url: IMG.gallery[5] || IMG.gallery[1], category: "events", caption: "Sacred Nuptial Fire" },
    { url: IMG.gallery[6] || IMG.gallery[2], category: "decor", caption: "Luxurious Floral Decor" },
    { url: IMG.gallery[7] || IMG.gallery[3], category: "couple", caption: "Infinite Journey Together" },
  ];

  // Filter gallery items based on selected category
  const filteredGallery = galleryItems.filter(
    (item) => activeCategory === "all" || item.category === activeCategory
  );

  // Reset index to 0 when active category changes to avoid out-of-bounds
  useEffect(() => {
    setActiveIndex(0);
  }, [activeCategory]);

  // Autoplay loop
  useEffect(() => {
    if (!isAutoplay || lightboxIndex !== null || filteredGallery.length <= 1) return;

    const interval = setInterval(() => {
      setActiveIndex((prev) => (prev + 1) % filteredGallery.length);
    }, 5000);

    return () => clearInterval(interval);
  }, [isAutoplay, filteredGallery.length, lightboxIndex]);

  // Keyboard navigation for Lightbox
  useEffect(() => {
    if (lightboxIndex === null) return;

    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        setLightboxIndex(null);
      } else if (e.key === "ArrowRight") {
        setLightboxIndex((prev) =>
          prev !== null ? (prev + 1) % filteredGallery.length : null
        );
      } else if (e.key === "ArrowLeft") {
        setLightboxIndex((prev) =>
          prev !== null ? (prev - 1 + filteredGallery.length) % filteredGallery.length : null
        );
      }
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [lightboxIndex, filteredGallery.length]);

  const handlePrev = (e?: React.MouseEvent) => {
    e?.stopPropagation();
    setActiveIndex((prev) => (prev - 1 + filteredGallery.length) % filteredGallery.length);
  };

  const handleNext = (e?: React.MouseEvent) => {
    e?.stopPropagation();
    setActiveIndex((prev) => (prev + 1) % filteredGallery.length);
  };

  return (
    <section id="gallery" className="relative overflow-hidden min-h-[100dvh] flex flex-col justify-center py-20 sm:py-24 bg-black/15">
      {/* ── Double gold frame border ── */}
      <motion.div initial={{ opacity: 0, scale: 1.05 }} animate={{ opacity: 1, scale: 1 }} transition={{ duration: 1.8, ease: "easeOut" }} className="absolute inset-2 sm:inset-4 pointer-events-none border border-[#D4AF37]/35 rounded-xl sm:rounded-2xl z-10" />
      <motion.div initial={{ opacity: 0, scale: 1.03 }} animate={{ opacity: 0.55, scale: 1 }} transition={{ duration: 2, ease: "easeOut", delay: 0.3 }} className="absolute inset-[10px] sm:inset-[22px] pointer-events-none border border-[#D4AF37]/18 rounded-lg sm:rounded-xl z-10" />
      {/* ── Corner ornaments ── */}
      <CornerOrnament className="top-[10px]  left-[10px]  sm:top-[22px] sm:left-[22px]" />
      <CornerOrnament className="top-[10px]  right-[10px] sm:top-[22px] sm:right-[22px] rotate-90" />
      <CornerOrnament className="bottom-[10px] left-[10px]  sm:bottom-[22px] sm:left-[22px]  -rotate-90" />
      <CornerOrnament className="bottom-[10px] right-[10px] sm:bottom-[22px] sm:right-[22px] rotate-180" />
      {/* ── Swaying Bells ── */}
      <motion.div initial={{ y: -80, opacity: 0 }} animate={{ y: 0, opacity: 1 }} transition={{ duration: 1.5, ease: [0.22, 1, 0.36, 1], delay: 0.5 }} className="absolute left-3.5 sm:left-10 top-[10px] sm:top-[22px] origin-top flex flex-col items-center pointer-events-none z-20">
        <div className="w-px h-10 sm:h-20 bg-gradient-to-b from-[#D4AF37] to-[#D4AF37]/30" />
        <motion.div animate={{ rotate: [-3, 3, -3] }} transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }} className="origin-top -mt-1"><HangingBell /></motion.div>
      </motion.div>
      <motion.div initial={{ y: -80, opacity: 0 }} animate={{ y: 0, opacity: 1 }} transition={{ duration: 1.5, ease: [0.22, 1, 0.36, 1], delay: 0.7 }} className="absolute right-3.5 sm:right-10 top-[10px] sm:top-[22px] origin-top flex flex-col items-center pointer-events-none z-20">
        <div className="w-px h-10 sm:h-20 bg-gradient-to-b from-[#D4AF37] to-[#D4AF37]/30" />
        <motion.div animate={{ rotate: [3, -3, 3] }} transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }} className="origin-top -mt-1"><HangingBell /></motion.div>
      </motion.div>
      <MandalaBg className="left-1/2 top-20 h-[900px] w-[900px] -translate-x-1/2 opacity-30" />
      <FloatingPetals count={8} />

      <div className="mx-auto max-w-6xl px-6 relative z-10 w-full">
        <SectionTitle eyebrow="Memories" title="Our Gallery" subtitle="Moments we've collected on the way to now." light subtitleClassName="!text-[#F5E6A8]/90 font-medium" />

        {/* ── Category Filters ── */}
        <div className="flex flex-wrap justify-center gap-2 mt-6 mb-6">
          {Object.entries(CATEGORY_MAP).map(([key, label]) => {
            const isActive = activeCategory === key;
            return (
              <button
                key={key}
                onClick={() => setActiveCategory(key)}
                className={`relative px-4 py-1.5 text-xs font-heading font-medium tracking-widest uppercase transition-all duration-300 rounded-full border cursor-pointer select-none ${
                  isActive
                    ? "text-[#260508] bg-gradient-to-r from-[#D4AF37] to-[#E6C280] border-transparent font-bold shadow-[0_4px_12px_rgba(212,175,55,0.3)]"
                    : "text-white/70 border-[#D4AF37]/20 hover:text-white hover:bg-white/5"
                }`}
              >
                {label}
              </button>
            );
          })}
        </div>

        {/* ── Interactive Main Gallery Viewport ── */}
        <div className="max-w-3xl mx-auto">
          {filteredGallery.length > 0 ? (
            <div 
              className="relative p-1 bg-gradient-to-br from-[#590d18]/25 to-black/40 border border-[#D4AF37]/35 rounded-3xl shadow-[0_15px_45px_rgba(0,0,0,0.6)] group overflow-hidden"
              style={{
                aspectRatio: "16/10",
              }}
            >
              <div className="relative w-full h-full overflow-hidden rounded-2xl bg-black/20">
                {/* Framer motion transition on active image */}
                <AnimatePresence mode="wait">
                  <motion.div
                    key={filteredGallery[activeIndex]?.url}
                    initial={{ opacity: 0, scale: 1.03 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 0.97 }}
                    transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
                    className="absolute inset-0 w-full h-full"
                  >
                    <img
                      src={filteredGallery[activeIndex]?.url}
                      alt={filteredGallery[activeIndex]?.caption}
                      className="w-full h-full object-cover select-none cursor-pointer"
                      onClick={() => setLightboxIndex(activeIndex)}
                      loading="eager"
                    />
                    
                    {/* Hover Shimmer/Glow Overlay */}
                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none z-10" />
                    
                    {/* Zoom / Maximize hover icon */}
                    <div 
                      onClick={() => setLightboxIndex(activeIndex)}
                      className="absolute top-4 right-4 bg-black/60 hover:bg-[#D4AF37] text-white hover:text-[#260508] p-3 rounded-full border border-[#D4AF37]/20 hover:border-transparent scale-0 group-hover:scale-100 transition-all duration-300 cursor-pointer z-30 shadow-lg"
                    >
                      <Maximize2 className="w-4 h-4" />
                    </div>
                  </motion.div>
                </AnimatePresence>

                {/* Corner Ornaments */}
                <div className="absolute inset-0 pointer-events-none z-20">
                  <div className="absolute top-3 left-3 w-4.5 h-4.5 border-t border-l border-[#D4AF37]" />
                  <div className="absolute top-3 right-3 w-4.5 h-4.5 border-t border-r border-[#D4AF37]" />
                  <div className="absolute bottom-3 left-3 w-4.5 h-4.5 border-b border-l border-[#D4AF37]" />
                  <div className="absolute bottom-3 right-3 w-4.5 h-4.5 border-b border-r border-[#D4AF37]" />
                </div>

                {/* Left Navigation Arrow */}
                <button
                  onClick={handlePrev}
                  className="absolute left-4 top-1/2 -translate-y-1/2 bg-black/50 hover:bg-[#D4AF37] text-[#FAF8F3] hover:text-[#260508] p-2.5 rounded-full border border-[#D4AF37]/20 hover:border-transparent hover:scale-110 transition-all duration-300 z-30 opacity-0 group-hover:opacity-100 shadow-md cursor-pointer"
                  aria-label="Previous image"
                >
                  <ChevronLeft className="w-5 h-5" />
                </button>

                {/* Right Navigation Arrow */}
                <button
                  onClick={handleNext}
                  className="absolute right-4 top-1/2 -translate-y-1/2 bg-black/50 hover:bg-[#D4AF37] text-[#FAF8F3] hover:text-[#260508] p-2.5 rounded-full border border-[#D4AF37]/20 hover:border-transparent hover:scale-110 transition-all duration-300 z-30 opacity-0 group-hover:opacity-100 shadow-md cursor-pointer"
                  aria-label="Next image"
                >
                  <ChevronRight className="w-5 h-5" />
                </button>
              </div>
            </div>
          ) : (
            <div className="text-center py-20 border border-[#D4AF37]/20 rounded-2xl bg-black/25">
              <p className="text-white/60 font-body">No photos in this category yet.</p>
            </div>
          )}

          {/* ── Caption and Controls Center ── */}
          {filteredGallery.length > 0 && (
            <div className="flex flex-col sm:flex-row items-center justify-between mt-5 px-1 gap-4">
              <div className="text-center sm:text-left">
                <motion.h3
                  key={filteredGallery[activeIndex]?.caption}
                  initial={{ opacity: 0, y: 5 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="text-lg sm:text-xl font-heading text-[#F5E6A8] tracking-wide"
                >
                  {filteredGallery[activeIndex]?.caption}
                </motion.h3>
                <p className="text-[10px] font-body text-white/50 mt-0.5 uppercase tracking-[0.2em]">
                  {CATEGORY_MAP[filteredGallery[activeIndex]?.category] || ""}
                </p>
              </div>

              {/* Controls: Play/Pause with Progress and Count */}
              <div className="flex items-center gap-4 shrink-0">
                <span className="text-xs font-body text-[#FAF8F3]/60 tracking-wider">
                  {activeIndex + 1} / {filteredGallery.length}
                </span>

                <button
                  onClick={() => setIsAutoplay(!isAutoplay)}
                  className="relative p-2.5 rounded-full border border-[#D4AF37]/20 text-[#D4AF37] hover:bg-white/5 transition-colors cursor-pointer"
                  aria-label={isAutoplay ? "Pause slideshow" : "Play slideshow"}
                >
                  {/* Autoplay Circular Progress SVG */}
                  <svg className="absolute inset-0 w-full h-full pointer-events-none" viewBox="0 0 36 36">
                    <circle
                      cx="18"
                      cy="18"
                      r="16.5"
                      stroke="rgba(212, 175, 55, 0.1)"
                      strokeWidth="1.5"
                      fill="transparent"
                    />
                    <motion.circle
                      key={`${activeIndex}-${isAutoplay}`}
                      cx="18"
                      cy="18"
                      r="16.5"
                      stroke="#D4AF37"
                      strokeWidth="1.5"
                      fill="transparent"
                      strokeDasharray="103.6"
                      initial={{ strokeDashoffset: 103.6 }}
                      animate={isAutoplay ? { strokeDashoffset: 0 } : { strokeDashoffset: 103.6 }}
                      transition={isAutoplay ? { duration: 5, ease: "linear" } : {}}
                      className="origin-center -rotate-90"
                    />
                  </svg>
                  
                  {isAutoplay ? <Pause className="w-3.5 h-3.5 z-10" /> : <Play className="w-3.5 h-3.5 z-10" />}
                </button>
              </div>
            </div>
          )}

          {/* ── Scrollable Thumbnail Ribbon ── */}
          {filteredGallery.length > 1 && (
            <div className="relative mt-6 max-w-2xl mx-auto px-4">
              <div className="flex gap-2.5 overflow-x-auto py-2 px-4 justify-start sm:justify-center hide-scrollbar">
                {filteredGallery.map((item, idx) => {
                  const isActive = idx === activeIndex;
                  return (
                    <button
                      key={idx}
                      onClick={() => setActiveIndex(idx)}
                      className={`relative flex-shrink-0 w-12 h-12 sm:w-14 sm:h-14 rounded-xl overflow-hidden border transition-all duration-300 cursor-pointer ${
                        isActive
                          ? "border-[#D4AF37] scale-105 shadow-[0_0_12px_rgba(212,175,55,0.4)]"
                          : "border-[#D4AF37]/25 opacity-50 hover:opacity-100"
                      }`}
                    >
                      <img
                        src={item.url}
                        alt=""
                        className="w-full h-full object-cover"
                        loading="lazy"
                      />
                    </button>
                  );
                })}
              </div>
            </div>
          )}
        </div>
      </div>

      {/* ── Cinematic Fullscreen Lightbox ── */}
      <AnimatePresence>
        {lightboxIndex !== null && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.4 }}
            className="fixed inset-0 z-[100] bg-black/95 backdrop-blur-2xl flex flex-col items-center justify-center p-4"
          >
            {/* Background click to close */}
            <div className="absolute inset-0 cursor-zoom-out" onClick={() => setLightboxIndex(null)} />

            {/* Close Button */}
            <button
              onClick={() => setLightboxIndex(null)}
              className="absolute top-6 right-6 text-white hover:text-[#D4AF37] hover:scale-110 p-3 rounded-full border border-white/20 hover:border-[#D4AF37] transition-all duration-300 z-[110] cursor-pointer bg-black/50"
              aria-label="Close fullscreen view"
            >
              <X className="w-5 h-5" />
            </button>

            {/* Image & Navigation Frame */}
            <div className="relative w-full max-w-4xl aspect-[16/10] flex items-center justify-center z-10 max-h-[75vh]">
              {/* Prev Button */}
              <button
                onClick={(e) => {
                  e.stopPropagation();
                  setLightboxIndex((prev) =>
                    prev !== null ? (prev - 1 + filteredGallery.length) % filteredGallery.length : null
                  );
                }}
                className="absolute left-2 sm:left-4 text-white hover:text-[#D4AF37] hover:scale-110 p-2.5 rounded-full border border-white/20 hover:border-[#D4AF37] transition-all duration-300 bg-black/50 z-20 cursor-pointer"
                aria-label="Previous lightbox image"
              >
                <ChevronLeft className="w-5 h-5" />
              </button>

              {/* Active Image Box */}
              <div className="relative max-h-[70vh] max-w-[85vw] overflow-hidden border border-[#D4AF37]/35 shadow-[0_0_50px_rgba(212,175,55,0.25)] bg-black/40 rounded-2xl">
                <AnimatePresence mode="wait">
                  <motion.img
                    key={filteredGallery[lightboxIndex]?.url}
                    src={filteredGallery[lightboxIndex]?.url}
                    alt={filteredGallery[lightboxIndex]?.caption}
                    initial={{ opacity: 0, scale: 0.97 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 1.03 }}
                    transition={{ duration: 0.3 }}
                    className="max-h-[68vh] max-w-full object-contain rounded-2xl"
                  />
                </AnimatePresence>

                {/* Lightbox Corners */}
                <div className="absolute inset-0 pointer-events-none">
                  <div className="absolute top-3 left-3 w-4.5 h-4.5 border-t border-l border-[#D4AF37]" />
                  <div className="absolute top-3 right-3 w-4.5 h-4.5 border-t border-r border-[#D4AF37]" />
                  <div className="absolute bottom-3 left-3 w-4.5 h-4.5 border-b border-l border-[#D4AF37]" />
                  <div className="absolute bottom-3 right-3 w-4.5 h-4.5 border-b border-r border-[#D4AF37]" />
                </div>
              </div>

              {/* Next Button */}
              <button
                onClick={(e) => {
                  e.stopPropagation();
                  setLightboxIndex((prev) =>
                    prev !== null ? (prev + 1) % filteredGallery.length : null
                  );
                }}
                className="absolute right-2 sm:right-4 text-white hover:text-[#D4AF37] hover:scale-110 p-2.5 rounded-full border border-white/20 hover:border-[#D4AF37] transition-all duration-300 bg-black/50 z-20 cursor-pointer"
                aria-label="Next lightbox image"
              >
                <ChevronRight className="w-5 h-5" />
              </button>
            </div>

            {/* Caption & Indicator */}
            <div className="mt-6 text-center z-10 max-w-xl px-4 pointer-events-none">
              <motion.h4
                key={filteredGallery[lightboxIndex]?.caption}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                className="text-lg sm:text-2xl font-heading text-[#F5E6A8] tracking-wide"
              >
                {filteredGallery[lightboxIndex]?.caption}
              </motion.h4>
              <p className="text-white/50 text-xs mt-1.5 font-body tracking-[0.2em] uppercase">
                {CATEGORY_MAP[filteredGallery[lightboxIndex]?.category] || ""} • Image {lightboxIndex + 1} of {filteredGallery.length}
              </p>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}

/* =========================================================
   FAMILY
   ========================================================= */
function getHindiRelation(relation: string): string {
  const rel = relation.toLowerCase();
  if (rel.includes("mother of the groom")) return "वर की माता जी";
  if (rel.includes("mother of the bride")) return "वधू की माता जी";
  if (rel.includes("father of the groom")) return "वर के पिता जी";
  if (rel.includes("father of the bride")) return "वधू के पिता जी";
  if (rel.includes("brother of the groom")) return "वर के भ्राता";
  if (rel.includes("brother of the bride")) return "वधू के भ्राता";
  if (rel.includes("sister of the groom")) return "वर की भगिनी";
  if (rel.includes("sister of the bride")) return "वधू की भगिनी";
  if (rel.includes("grandfather")) return "दादा जी / नाना जी";
  if (rel.includes("grandmother")) return "दादी जी / नानी जी";
  return relation;
}

export function Family() {
  const [activeSide, setActiveSide] = useState<"groom" | "bride" | null>(null);

  const toggleSide = (side: "groom" | "bride") => {
    setActiveSide((prev) => (prev === side ? null : side));
  };

  return (
    <section id="family" className="relative overflow-hidden min-h-[100dvh] flex flex-col justify-center py-20 sm:py-24">
      {/* ── Double gold frame border ── */}
      <motion.div initial={{ opacity: 0, scale: 1.05 }} animate={{ opacity: 1, scale: 1 }} transition={{ duration: 1.8, ease: "easeOut" }} className="absolute inset-2 sm:inset-4 pointer-events-none border border-[#D4AF37]/35 rounded-xl sm:rounded-2xl z-10" />
      <motion.div initial={{ opacity: 0, scale: 1.03 }} animate={{ opacity: 0.55, scale: 1 }} transition={{ duration: 2, ease: "easeOut", delay: 0.3 }} className="absolute inset-[10px] sm:inset-[22px] pointer-events-none border border-[#D4AF37]/18 rounded-lg sm:rounded-xl z-10" />
      {/* Background Mandala */}
      <div className="absolute inset-0 -z-20 opacity-[0.03] flex items-center justify-center pointer-events-none select-none">
        <MandalaBg className="w-[85vw] h-[85vh] text-[#D4AF37]" />
      </div>

      <FloatingPetals count={10} />
      <GoldenParticles count={15} />

      {/* Double gold frame border */}
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

      {/* Corner Ornaments */}
      <CornerOrnament className="top-[10px] left-[10px] sm:top-[22px] sm:left-[22px]" />
      <CornerOrnament className="top-[10px] right-[10px] sm:top-[22px] sm:right-[22px] rotate-90" />
      <CornerOrnament className="bottom-[10px] left-[10px] sm:bottom-[22px] sm:left-[22px] -rotate-90" />
      <CornerOrnament className="bottom-[10px] right-[10px] sm:bottom-[22px] sm:right-[22px] rotate-180" />

      {/* Hanging Bells */}
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
        <SectionTitle eyebrow="With Blessings From" title="Our Families" subtitle="Two hearts, two families, one beautiful union." light subtitleClassName="!text-[#F5E6A8]/90 font-medium" />

        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 sm:gap-14 mt-16 max-w-5xl mx-auto items-start">
          {([
            { side: "Groom's Family", key: "groom" },
            { side: "Bride's Family", key: "bride" }
          ] as const).map((f) => {
            const sideKey = f.key;
            const isOpen = activeSide === sideKey;
            const isAnyOpen = activeSide !== null;
            const isDimmed = isAnyOpen && !isOpen;
            const members = wedding.family[sideKey];

            return (
              <motion.div
                key={f.side}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: isDimmed ? 0.45 : 1, y: 0 }}
                viewport={{ once: true, amount: 0.15 }}
                animate={{ 
                  opacity: isDimmed ? 0.45 : 1,
                  scale: isOpen ? 1.02 : 1
                }}
                transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
                className={`relative rounded-3xl p-6 sm:p-8 flex flex-col justify-between
                           border border-[#D4AF37]/25 backdrop-blur-xl cursor-pointer
                           shadow-[0_25px_60px_-20px_rgba(0,0,0,0.7)]
                           transition-shadow duration-500 overflow-hidden group
                           ${isOpen ? 'shadow-[0_0_50px_rgba(212,175,55,0.35)] border-[#D4AF37]/50' : 'hover:shadow-[0_20px_45px_rgba(212,175,55,0.15)]'}`}
                style={{
                  background: "linear-gradient(145deg, rgba(89, 13, 21, 0.85) 0%, rgba(20, 10, 4, 0.92) 100%)",
                }}
                onClick={() => toggleSide(sideKey)}
              >
                {/* Golden corner designs */}
                <span className="absolute left-3 top-3 w-5 h-5 border-l border-t border-[#D4AF37]/35 rounded-tl-lg pointer-events-none group-hover:border-[#D4AF37] transition-colors duration-300" />
                <span className="absolute right-3 top-3 w-5 h-5 border-r border-t border-[#D4AF37]/35 rounded-tr-lg pointer-events-none group-hover:border-[#D4AF37] transition-colors duration-300" />
                <span className="absolute left-3 bottom-3 w-5 h-5 border-l border-b border-[#D4AF37]/35 rounded-bl-lg pointer-events-none group-hover:border-[#D4AF37] transition-colors duration-300" />
                <span className="absolute right-3 bottom-3 w-5 h-5 border-r border-b border-[#D4AF37]/35 rounded-br-lg pointer-events-none group-hover:border-[#D4AF37] transition-colors duration-300" />

                {/* Inner gold dashed ring */}
                <div
                  className="pointer-events-none absolute inset-1.5 rounded-[1.35rem] transition-colors duration-300"
                  style={{ border: isOpen ? "1px dashed rgba(212,175,55,0.3)" : "1px dashed rgba(212,175,55,0.12)" }}
                />

                {/* Golden Border Chase on hover/open */}
                <div
                  className={`absolute inset-0 rounded-3xl p-[1.5px] pointer-events-none select-none overflow-hidden transition-opacity duration-700
                             ${isOpen ? 'opacity-100' : 'opacity-0 group-hover:opacity-60'}`}
                  style={{
                    WebkitMask: "linear-gradient(#000 0 0) content-box, linear-gradient(#000 0 0)",
                    WebkitMaskComposite: "xor",
                    maskComposite: "exclude",
                  }}
                >
                  <div
                    className="absolute top-1/2 left-1/2 w-[250%] h-[250%] -translate-x-1/2 -translate-y-1/2 aspect-square animate-[spin_6s_linear_infinite] pointer-events-none"
                    style={{
                      background: "conic-gradient(from 0deg, transparent 30%, #D4AF37 50%, #FFFBEA 55%, #D4AF37 60%, transparent 80%)",
                    }}
                  />
                </div>

                {/* Header info */}
                <div className="text-center pb-5 select-none relative z-10 border-b border-[#D4AF37]/20">
                  <h3 className="font-heading text-xl sm:text-2xl font-semibold tracking-widest text-[#FFF3D6] opacity-90">
                    {f.side}
                  </h3>
                </div>

                {/* Expand indicator */}
                <div className="flex flex-col items-center justify-center mt-5 mb-1 select-none relative z-10">
                  <motion.div
                    animate={{ rotate: isOpen ? 180 : 0 }}
                    transition={{ duration: 0.4, ease: "easeInOut" }}
                    className="p-2.5 rounded-full border border-[#D4AF37]/30 bg-black/40 shadow-lg text-[#D4AF37] group-hover:border-[#D4AF37]/70 group-hover:text-white transition-all duration-300"
                  >
                    <ChevronDown size={18} />
                  </motion.div>
                  <span className="font-body text-[10px] tracking-wider text-[#D4AF37]/80 mt-2 font-light">
                    {isOpen ? "Hide Details" : "View Family Members & Blessings"}
                  </span>
                </div>

                {/* Members list */}
                <AnimatePresence initial={false}>
                  {isOpen && (
                    <motion.div
                      initial={{ height: 0, opacity: 0, marginTop: 0 }}
                      animate={{ height: "auto", opacity: 1, marginTop: 24 }}
                      exit={{ height: 0, opacity: 0, marginTop: 0 }}
                      transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
                      className="overflow-hidden relative z-10 w-full"
                      onClick={(e) => e.stopPropagation()}
                    >
                      <div className="max-h-[360px] overflow-y-auto pr-1
                                      [&::-webkit-scrollbar]:w-1.5 
                                      [&::-webkit-scrollbar-track]:bg-black/20 
                                      [&::-webkit-scrollbar-thumb]:bg-[#D4AF37]/50 
                                      [&::-webkit-scrollbar-thumb]:rounded-full">
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 py-2">
                          {members.map((m, i) => {
                            const initials = m.name.split(" ").map(s => s[0]).slice(0, 2).join("");
                            return (
                              <motion.div
                                key={`${m.name}-${i}`}
                                initial={{ opacity: 0, y: 15 }}
                                animate={{ opacity: 1, y: 0 }}
                                whileHover={{ y: -4, scale: 1.02 }}
                                transition={{ duration: 0.4, delay: i * 0.05 }}
                                className="group/member relative rounded-2xl border border-[#D4AF37]/20 p-4 text-center
                                           backdrop-blur-md transition-all duration-300
                                           hover:shadow-[0_0_24px_rgba(212,175,55,0.25)]
                                           hover:border-[#D4AF37]/50"
                                style={{
                                  background: "linear-gradient(145deg, rgba(89, 13, 21, 0.6) 0%, rgba(20, 10, 4, 0.75) 100%)",
                                }}
                              >
                                <span className="pointer-events-none absolute inset-x-4 top-0 h-[1px] bg-gradient-to-r from-transparent via-[#D4AF37]/40 to-transparent" />

                                <div className="relative mx-auto h-14 w-14 mb-2">
                                  <div
                                    className="absolute inset-0 rounded-full p-[1.2px] animate-[spin_8s_linear_infinite] pointer-events-none"
                                    style={{
                                      background: "conic-gradient(from 0deg, transparent 30%, #D4AF37 55%, #FFFBEA 60%, #D4AF37 70%, transparent 90%)",
                                      WebkitMask: "linear-gradient(#000 0 0) content-box, linear-gradient(#000 0 0)",
                                      WebkitMaskComposite: "xor",
                                      maskComposite: "exclude",
                                    }}
                                  />
                                  <div
                                    className="relative flex h-full w-full items-center justify-center rounded-full font-heading text-lg text-[#F5E6A8]"
                                    style={{
                                      background: "linear-gradient(145deg, #3d070c, #140a04)",
                                      boxShadow: "0 0 0 1px rgba(212,175,55,0.3)",
                                    }}
                                  >
                                    {initials}
                                  </div>
                                </div>

                                <h4 className="font-heading text-base font-semibold text-[#FFF3D6] leading-tight select-none">
                                  {m.name}
                                </h4>

                                <div className="flex justify-center mt-2.5">
                                  <span className="font-body inline-flex items-center gap-1 border border-[#D4AF37]/30 bg-[#D4AF37]/10 px-3.5 py-1 rounded-full text-[#F5E6A8] text-[10px] uppercase tracking-wider font-medium">
                                    <Sparkles size={8} className="text-[#D4AF37]" />
                                    {m.relation}
                                  </span>
                                </div>
                              </motion.div>
                            );
                          })}
                        </div>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

/* =========================================================
   WISHING WALL
   ========================================================= */
const GUEST_NAME = "Honored Guest";

function WishCard({ wish, index, onCardClick }: { wish: { name: string; msg: string }; index: number; onCardClick: (w: typeof wish) => void }) {
  const isLong = wish.msg.length > 70;
  const previewText = isLong ? wish.msg.slice(0, 68) + "..." : wish.msg;

  return (
    <article
      onClick={() => onCardClick(wish)}
      className="group relative shrink-0 cursor-pointer transition-all duration-500 hover:-translate-y-1.5 select-none w-[320px] h-[180px]"
    >
      {/* Premium Luxury Background Card */}
      <div 
        className="absolute inset-0 rounded-2xl border border-[#D4AF37]/30 backdrop-blur-[6px] overflow-hidden"
        style={{
          background: "linear-gradient(135deg, rgba(89, 13, 21, 0.85) 0%, rgba(38, 5, 9, 0.9) 50%, rgba(20, 10, 4, 0.95) 100%)",
          boxShadow: "0 12px 30px rgba(0,0,0,0.65), inset 0 0 15px rgba(212,175,55,0.05)"
        }}
      />
      
      {/* Double gold inner border frame */}
      <div className="absolute inset-1.5 rounded-[10px] border border-[#D4AF37]/15 pointer-events-none z-10 group-hover:border-[#D4AF37]/45 transition-colors duration-500" />
      
      {/* Golden Corner Accents */}
      <div className="absolute top-3.5 left-3.5 w-3.5 h-3.5 border-t border-l border-[#D4AF37]/50 pointer-events-none z-10" />
      <div className="absolute top-3.5 right-3.5 w-3.5 h-3.5 border-t border-r border-[#D4AF37]/50 pointer-events-none z-10" />
      <div className="absolute bottom-3.5 left-3.5 w-3.5 h-3.5 border-b border-l border-[#D4AF37]/50 pointer-events-none z-10" />
      <div className="absolute bottom-3.5 right-3.5 w-3.5 h-3.5 border-b border-r border-[#D4AF37]/50 pointer-events-none z-10" />

      {/* Mini gold star top-right */}
      <span className="absolute top-4 right-4 opacity-40 pointer-events-none z-10">
        <svg viewBox="0 0 12 12" className="w-3.5 h-3.5 animate-spin-slow" fill="none" stroke="#D4AF37" strokeWidth="1.2">
          <line x1="6" y1="0" x2="6" y2="12" /><line x1="0" y1="6" x2="12" y2="6" />
          <line x1="1.8" y1="1.8" x2="10.2" y2="10.2" /><line x1="10.2" y1="1.8" x2="1.8" y2="10.2" />
        </svg>
      </span>

      <div className="relative z-10 p-5 pt-8 pb-10 px-8 flex flex-col h-[180px] justify-between">
        {/* Message preview */}
        <div className="flex-1 flex items-center justify-center text-center max-h-[70px] overflow-hidden">
          <p className="text-white/90 italic leading-relaxed text-xs sm:text-[12.5px] break-words font-body">
            "{previewText}"
          </p>
        </div>

        {/* Footer */}
        <div className="pt-2.5 border-t border-[#D4AF37]/25 flex justify-between items-end shrink-0">
          <span className="font-heading text-sm text-[#D4AF37] leading-none">{wish.name}</span>
          <span className="text-[9px] uppercase tracking-[0.20em] text-white/40">Blessings</span>
        </div>
      </div>
    </article>
  );
}

export function WishingWall() {
  const [wishes, setWishes] = useState(wedding.initialWishes);
  const [message, setMessage] = useState("");
  const [sending, setSending] = useState(false);
  const [sent, setSent] = useState(false);
  const [selectedWish, setSelectedWish] = useState<typeof wishes[0] | null>(null);

  const tickerRef = useRef<HTMLDivElement>(null);
  const animRef = useRef<number>(0);
  const posRef = useRef(0);
  const pausedRef = useRef(false);
  const SPEED = 0.55;

  /* Ticker animation loop */
  useEffect(() => {
    const el = tickerRef.current;
    if (!el) return;
    const CARD_W = 320 + 20; // card width + gap

    const step = () => {
      if (!pausedRef.current) {
        posRef.current += SPEED;
        const totalW = wishes.length * CARD_W;
        if (posRef.current >= totalW) posRef.current = 0;
        el.style.transform = `translateX(-${posRef.current}px)`;
      }
      animRef.current = requestAnimationFrame(step);
    };
    animRef.current = requestAnimationFrame(step);
    return () => cancelAnimationFrame(animRef.current);
  }, [wishes.length]);

  const submit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!message.trim()) return;
    setSending(true);
    setTimeout(() => {
      setWishes((w) => [{ name: GUEST_NAME, msg: message.trim() }, ...w]);
      setMessage("");
      setSending(false);
      setSent(true);
      setTimeout(() => setSent(false), 3000);
    }, 850);
  };

  const loopedWishes = [...wishes, ...wishes];

  return (
    <section id="wishes" className="relative py-24 overflow-hidden bg-black/10">
      {/* ── Double gold frame border ── */}
      <motion.div initial={{ opacity: 0, scale: 1.05 }} animate={{ opacity: 1, scale: 1 }} transition={{ duration: 1.8, ease: "easeOut" }} className="absolute inset-2 sm:inset-4 pointer-events-none border border-[#D4AF37]/35 rounded-xl sm:rounded-2xl z-10" />
      <motion.div initial={{ opacity: 0, scale: 1.03 }} animate={{ opacity: 0.55, scale: 1 }} transition={{ duration: 2, ease: "easeOut", delay: 0.3 }} className="absolute inset-[10px] sm:inset-[22px] pointer-events-none border border-[#D4AF37]/18 rounded-lg sm:rounded-xl z-10" />
      {/* ── Corner ornaments ── */}
      <CornerOrnament className="top-[10px]  left-[10px]  sm:top-[22px] sm:left-[22px]" />
      <CornerOrnament className="top-[10px]  right-[10px] sm:top-[22px] sm:right-[22px] rotate-90" />
      <CornerOrnament className="bottom-[10px] left-[10px]  sm:bottom-[22px] sm:left-[22px]  -rotate-90" />
      <CornerOrnament className="bottom-[10px] right-[10px] sm:bottom-[22px] sm:right-[22px] rotate-180" />
      {/* ── Swaying Bells ── */}
      <motion.div initial={{ y: -80, opacity: 0 }} animate={{ y: 0, opacity: 1 }} transition={{ duration: 1.5, ease: [0.22, 1, 0.36, 1], delay: 0.5 }} className="absolute left-3.5 sm:left-10 top-[10px] sm:top-[22px] origin-top flex flex-col items-center pointer-events-none z-20">
        <div className="w-px h-10 sm:h-20 bg-gradient-to-b from-[#D4AF37] to-[#D4AF37]/30" />
        <motion.div animate={{ rotate: [-3, 3, -3] }} transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }} className="origin-top -mt-1"><HangingBell /></motion.div>
      </motion.div>
      <motion.div initial={{ y: -80, opacity: 0 }} animate={{ y: 0, opacity: 1 }} transition={{ duration: 1.5, ease: [0.22, 1, 0.36, 1], delay: 0.7 }} className="absolute right-3.5 sm:right-10 top-[10px] sm:top-[22px] origin-top flex flex-col items-center pointer-events-none z-20">
        <div className="w-px h-10 sm:h-20 bg-gradient-to-b from-[#D4AF37] to-[#D4AF37]/30" />
        <motion.div animate={{ rotate: [3, -3, 3] }} transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }} className="origin-top -mt-1"><HangingBell /></motion.div>
      </motion.div>
      <style>{`
        @keyframes modalScaleUp {
          from { opacity: 0; transform: scale(0.95); }
          to { opacity: 1; transform: scale(1); }
        }
        .animate-modal-scale {
          animation: modalScaleUp 0.3s cubic-bezier(0.16, 1, 0.3, 1) forwards;
        }
      `}</style>

      <GoldenParticles count={15} />

      <div className="relative z-10 max-w-5xl mx-auto px-6">
        <SectionTitle eyebrow="From Loved Ones" title="Wishing Wall" subtitle="Blessings and warm wishes from those we hold dear." light subtitleClassName="!text-[#F5E6A8]/90 font-medium" />

        {/* Compose Form */}
        <form
          onSubmit={submit}
          className="mt-14 max-w-2xl mx-auto relative border border-[#D4AF37]/35 backdrop-blur-xl overflow-hidden rounded-[40px] sm:rounded-[60px]"
          style={{
            background: "linear-gradient(135deg, rgba(89, 13, 21, 0.85) 0%, rgba(20, 10, 4, 0.9) 100%)",
            boxShadow: "0 25px 55px -15px rgba(0,0,0,0.85), inset 0 0 20px rgba(255, 255, 255, 0.05)",
          }}
        >
          {/* Subtle Mandala background */}
          <MandalaBg className="absolute -right-24 -bottom-24 w-80 h-80 opacity-[0.06] pointer-events-none" />

          <div className="relative z-10 p-8 pt-10 pb-10 px-10 md:px-14">
            {/* Auto-name badge */}
            <div className="flex items-center gap-2.5 mb-5 px-3 py-2 rounded-lg border border-[#D4AF37]/25 bg-[#D4AF37]/5 w-fit">
              <span className="text-[9px] uppercase tracking-[0.4em] text-[#D4AF37]">Sending as</span>
              <span className="text-[11px] font-heading text-white">{GUEST_NAME}</span>
            </div>

            {/* Textarea */}
            <div className="relative mb-5">
              <textarea
                placeholder="Leave a heartfelt wish for Aarav & Priya..."
                value={message}
                maxLength={500}
                rows={4}
                onChange={(e) => setMessage(e.target.value)}
                className="w-full bg-black/30 border border-[#D4AF37]/20 rounded-xl py-3.5 px-4 text-white placeholder:text-white/30 focus:outline-none focus:border-[#D4AF37]/65 transition-colors text-sm resize-none leading-relaxed"
                style={{ minHeight: 100, maxHeight: 180, overflowY: "auto" }}
              />
              <span className="absolute bottom-2.5 right-3 text-[9px] text-white/30 select-none pointer-events-none">
                {message.length}/500
              </span>
            </div>

            {/* Submit Button */}
            <div className="flex justify-end">
              <button
                type="submit"
                disabled={!message.trim() || sending}
                className="group relative overflow-hidden rounded-full disabled:opacity-40 disabled:cursor-not-allowed cursor-pointer"
                style={{ background: "var(--gradient-gold)", boxShadow: "0 0 15px rgba(212,175,55,0.4)" }}
              >
                <span className="absolute inset-[-6px] rounded-full border border-dashed border-white/20 animate-spin-slow pointer-events-none" />
                <span className="relative z-10 flex items-center gap-2 px-6 py-3 text-[#260508] font-bold">
                  {sending ? (
                    <span className="w-4 h-4 rounded-full border-2 border-t-transparent border-[#260508] animate-spin" />
                  ) : sent ? (
                    <Check className="w-4 h-4" strokeWidth={2.5} />
                  ) : (
                    <Heart className="w-4 h-4 animate-pulse fill-current" />
                  )}
                  <span className="text-[10px] uppercase tracking-[0.4em] font-semibold">
                    {sending ? "Sending..." : sent ? "Sent! ✧" : "Send Wish"}
                  </span>
                </span>
              </button>
            </div>
          </div>
        </form>

        {/* Section Divider */}
        <div className="mt-14 mb-6 flex items-center gap-4">
          <span className="h-px flex-1 bg-gradient-to-r from-transparent via-[#D4AF37]/30 to-transparent" />
          <span className="text-[9px] uppercase tracking-[0.4em] text-[#D4AF37]">Wishes from loved ones</span>
          <span className="h-px flex-1 bg-gradient-to-r from-transparent via-[#D4AF37]/30 to-transparent" />
        </div>
      </div>

      {/* Infinite marquee ticker */}
      <div
        className="relative w-full overflow-hidden mt-2"
        onMouseEnter={() => { pausedRef.current = true; }}
        onMouseLeave={() => { pausedRef.current = false; }}
        onTouchStart={() => { pausedRef.current = true; }}
        onTouchEnd={() => { setTimeout(() => { pausedRef.current = false; }, 1500); }}
        style={{ cursor: "grab" }}
      >
        <div className="pointer-events-none absolute inset-y-0 left-0 w-24 z-10 bg-gradient-to-r from-nightbg to-transparent" />
        <div className="pointer-events-none absolute inset-y-0 right-0 w-24 z-10 bg-gradient-to-l from-nightbg to-transparent" />

        <div
          ref={tickerRef}
          className="flex gap-5 will-change-transform"
          style={{ width: "max-content", paddingBottom: 8 }}
        >
          {loopedWishes.map((w, i) => (
            <WishCard key={i} wish={w} index={i} onCardClick={setSelectedWish} />
          ))}
        </div>

        <p className="text-center text-[9px] uppercase tracking-[0.4em] text-white/30 mt-4 pb-2 select-none pointer-events-none">
          Hover or tap to pause · Click cards to read full wishes
        </p>
      </div>

      {/* Dialog modal */}
      {selectedWish && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 backdrop-blur-[2px] p-4 transition-opacity duration-300 pointer-events-auto"
          onClick={() => setSelectedWish(null)}
        >
          <div
            className="relative max-w-md w-full p-8 md:p-10 border border-[#D4AF37]/35 backdrop-blur-2xl rounded-[40px] text-center animate-modal-scale"
            style={{
              background: "linear-gradient(135deg, rgba(89, 13, 21, 0.95) 0%, rgba(20, 10, 4, 0.98) 100%)",
              boxShadow: "0 30px 70px rgba(0,0,0,0.85), inset 0 0 25px rgba(212,175,55,0.15)",
            }}
            onClick={(e) => e.stopPropagation()}
          >
            {/* Close Button */}
            <button
              onClick={() => setSelectedWish(null)}
              className="absolute top-4 right-5 text-white/40 hover:text-white transition-colors p-2 cursor-pointer"
            >
              <X className="w-5 h-5" />
            </button>

            {/* Quote icon */}
            <div className="w-12 h-12 rounded-full bg-[#D4AF37]/10 border border-[#D4AF37]/30 flex items-center justify-center mx-auto mb-6 text-[#D4AF37] text-2xl font-serif">
              “
            </div>

            {/* Full Message */}
            <div className="max-h-[220px] overflow-y-auto pr-2 text-center mb-6">
              <p className="text-white italic leading-relaxed text-base font-body">
                "{selectedWish.msg}"
              </p>
            </div>

            {/* Footer */}
            <div className="pt-5 border-t border-[#D4AF37]/20 flex justify-between items-center">
              <span className="font-heading text-[#D4AF37] text-base">{selectedWish.name}</span>
              <span className="text-[9px] uppercase tracking-[0.25em] text-white/40">Warm Blessings</span>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}

/* =========================================================
   RSVP
   ========================================================= */
type RsvpData = {
  name: string;
  attending: "yes" | "no";
  guests: number;
  meal: "veg" | "nonveg" | "jain";
};

const STORAGE_KEY = "wedding-rsvp-v2";
type Step = "closed" | "thanks" | "form";

const fireGoldConfetti = () => {
  const end = Date.now() + 3000;
  const colors = ["#D4AF37", "#F5E6A8", "#AA7C11", "#FFDF00"];

  (function frame() {
    confetti({
      particleCount: 6,
      startVelocity: 25,
      spread: 360,
      ticks: 150,
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
  const [step, setStep] = useState<Step>("closed");
  const [rsvp, setRsvp] = useState<RsvpData | null>(null);
  const [form, setForm] = useState<RsvpData>({
    name: "Honored Guest",
    attending: "yes",
    guests: 1,
    meal: "veg",
  });

  useEffect(() => {
    try {
      const raw = localStorage.getItem(STORAGE_KEY);
      if (raw) {
        const parsed = JSON.parse(raw) as RsvpData;
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
    const data = { ...form, guests: Math.max(1, Math.min(10, Number(form.guests) || 1)) };
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
    <section id="rsvp" className="relative overflow-hidden min-h-[100dvh] flex flex-col justify-center py-20 sm:py-24">
      {/* ── Double gold frame border ── */}
      <motion.div initial={{ opacity: 0, scale: 1.05 }} animate={{ opacity: 1, scale: 1 }} transition={{ duration: 1.8, ease: "easeOut" }} className="absolute inset-2 sm:inset-4 pointer-events-none border border-[#D4AF37]/35 rounded-xl sm:rounded-2xl z-10" />
      <motion.div initial={{ opacity: 0, scale: 1.03 }} animate={{ opacity: 0.55, scale: 1 }} transition={{ duration: 2, ease: "easeOut", delay: 0.3 }} className="absolute inset-[10px] sm:inset-[22px] pointer-events-none border border-[#D4AF37]/18 rounded-lg sm:rounded-xl z-10" />
      {/* ── Corner ornaments ── */}
      <CornerOrnament className="top-[10px]  left-[10px]  sm:top-[22px] sm:left-[22px]" />
      <CornerOrnament className="top-[10px]  right-[10px] sm:top-[22px] sm:right-[22px] rotate-90" />
      <CornerOrnament className="bottom-[10px] left-[10px]  sm:bottom-[22px] sm:left-[22px]  -rotate-90" />
      <CornerOrnament className="bottom-[10px] right-[10px] sm:bottom-[22px] sm:right-[22px] rotate-180" />
      {/* ── Swaying Bells ── */}
      <motion.div initial={{ y: -80, opacity: 0 }} animate={{ y: 0, opacity: 1 }} transition={{ duration: 1.5, ease: [0.22, 1, 0.36, 1], delay: 0.5 }} className="absolute left-3.5 sm:left-10 top-[10px] sm:top-[22px] origin-top flex flex-col items-center pointer-events-none z-20">
        <div className="w-px h-10 sm:h-20 bg-gradient-to-b from-[#D4AF37] to-[#D4AF37]/30" />
        <motion.div animate={{ rotate: [-3, 3, -3] }} transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }} className="origin-top -mt-1"><HangingBell /></motion.div>
      </motion.div>
      <motion.div initial={{ y: -80, opacity: 0 }} animate={{ y: 0, opacity: 1 }} transition={{ duration: 1.5, ease: [0.22, 1, 0.36, 1], delay: 0.7 }} className="absolute right-3.5 sm:right-10 top-[10px] sm:top-[22px] origin-top flex flex-col items-center pointer-events-none z-20">
        <div className="w-px h-10 sm:h-20 bg-gradient-to-b from-[#D4AF37] to-[#D4AF37]/30" />
        <motion.div animate={{ rotate: [3, -3, 3] }} transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }} className="origin-top -mt-1"><HangingBell /></motion.div>
      </motion.div>
      {/* Background elements */}

      <MandalaBg className="absolute left-10 top-10 h-[500px] w-[500px] opacity-[0.04]" />
      
      <div className="mx-auto max-w-3xl px-6 text-center">
        <SectionTitle eyebrow="Kindly Respond" title="RSVP" subtitle="Please let us know by 15 days before the wedding." light subtitleClassName="!text-[#F5E6A8]/90 font-medium" />

        <div className="mt-12 max-w-lg mx-auto p-8 rounded-3xl border border-[#D4AF37]/25 backdrop-blur-xl shadow-2xl bg-black/10">
          <div className="accept-cta-wrap mx-auto relative flex flex-col items-center">
            {/* Acceptance glowing background effect */}
            <span className="absolute inset-0 bg-[#D4AF37]/15 rounded-full blur-xl opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none" />
            
            <button 
              type="button" 
              onClick={openFlow} 
              className="group relative overflow-hidden rounded-full cursor-pointer transition-all duration-300 hover:scale-105 active:scale-95 shadow-[0_10px_35px_rgba(212,175,55,0.45)] hover:shadow-[0_15px_40px_rgba(212,175,55,0.6)]"
              style={{ 
                background: "linear-gradient(135deg, #FFE58F 0%, #D4AF37 50%, #B8862A 100%)",
                border: "2px solid rgba(255, 255, 255, 0.4)",
              }}
            >
              {/* Spinning decorative frame */}
              <span className="absolute inset-[-6px] rounded-full border border-dashed border-[#260508]/15 animate-spin-slow pointer-events-none z-10" />
              
              {/* Luxury Sweep Shine Effect */}
              <span className="absolute inset-0 bg-gradient-to-r from-transparent via-white/50 to-transparent -translate-x-full animate-luxury-shine pointer-events-none z-10" />

              <span className="relative z-10 flex items-center gap-3 px-10 py-5 text-[#260508] font-heading text-sm sm:text-base uppercase tracking-[0.25em] font-extrabold">
                <Heart className="w-5 h-5 fill-current animate-pulse text-[#800020]" />
                <span>{rsvp ? "View / Edit RSVP" : "Accept Invitation"}</span>
                <span className="text-[#800020]">❋</span>
              </span>
            </button>
          </div>

          <p className="mt-6 font-body italic text-[#FAF8F3]/80 text-sm sm:text-base">
            {rsvp
              ? `Your RSVP is saved · ${rsvp.attending === "yes" ? "Attending" : "Unable to attend"}`
              : "With your blessings, this celebration becomes complete."}
          </p>
        </div>
      </div>

      {/* STEP 1: Thanks Overlay */}
      {step === "thanks" && (
        <div
          className="fixed inset-0 z-[100] flex items-center justify-center px-6 bg-black/90 backdrop-blur-md animate-in fade-in duration-500"
          role="dialog"
          aria-modal="true"
          onClick={close}
        >
          <div className="text-center max-w-md">
            <div
              className="w-20 h-20 mx-auto rounded-full flex items-center justify-center mb-6 shadow-[0_12px_40px_-8px_rgba(212,175,55,0.55)] animate-in zoom-in duration-700"
              style={{ background: "var(--gradient-gold)" }}
            >
              <Heart className="w-10 h-10 text-maroon-deep fill-current animate-pulse" />
            </div>
            <p className="font-heading text-[10px] uppercase tracking-[0.4em] text-[#D4AF37] mb-2">
              From Our Hearts
            </p>
            <h3 className="font-couple text-5xl md:text-6xl gold-text mb-3 leading-none">
              Thank You
            </h3>
            <div className="h-[1px] w-24 bg-gradient-to-r from-transparent via-[#D4AF37] to-transparent mx-auto my-4" />
            <p className="font-body italic text-[#FAF8F3]/80 text-base md:text-lg">
              Your love means the world to us.
            </p>
          </div>
        </div>
      )}

      {/* STEP 2: Form Modal */}
      {step === "form" && (
        <div
          className="fixed inset-0 z-[100] flex items-center justify-center p-4 bg-black/90 backdrop-blur-md animate-in fade-in duration-400"
          role="dialog"
          aria-modal="true"
          onClick={(e) => {
            if (e.target === e.currentTarget) close();
          }}
        >
          <button
            type="button"
            onClick={close}
            className="absolute top-4 right-4 w-10 h-10 rounded-full flex items-center justify-center bg-black/40 border border-[#D4AF37]/30 text-white hover:bg-black/60 transition z-10 cursor-pointer"
            aria-label="Close"
          >
            <X className="w-5 h-5" />
          </button>

          <div 
            className="w-full max-w-md mx-auto max-h-[90vh] flex flex-col p-8 border border-[#D4AF37]/35 rounded-[32px] overflow-y-auto animate-modal-scale"
            style={{
              background: "linear-gradient(135deg, rgba(89, 13, 21, 0.98) 0%, rgba(20, 10, 4, 0.98) 100%)",
              boxShadow: "0 30px 70px rgba(0,0,0,0.85), inset 0 0 25px rgba(212,175,55,0.15)",
            }}
          >
            <div className="text-center mb-6 shrink-0">
              <div
                className="w-12 h-12 mx-auto rounded-full flex items-center justify-center mb-3 shadow-[0_8px_24px_-6px_rgba(212,175,55,0.45)]"
                style={{ background: "var(--gradient-gold)" }}
              >
                {rsvp ? (
                  <Check className="w-6 h-6 text-maroon-deep" strokeWidth={3} />
                ) : (
                  <Heart className="w-5 h-5 text-maroon-deep fill-current animate-pulse" />
                )}
              </div>
              <h3 className="font-heading text-2xl text-[#F5E6A8] leading-none">
                Kindly RSVP
              </h3>
              <div className="h-[1px] w-16 bg-gradient-to-r from-transparent via-[#D4AF37] to-transparent mx-auto my-3" />
            </div>

            <form onSubmit={submit} className="space-y-4 text-left">
              <div>
                <label className="block text-[10px] uppercase tracking-[0.3em] text-[#D4AF37] mb-2">Number of Guests</label>
                <select
                  value={form.guests}
                  onChange={(e) => setForm({ ...form, guests: Number(e.target.value) })}
                  className="w-full rounded-xl border border-[#D4AF37]/30 bg-[#260508] px-4 py-3 text-sm text-white focus:outline-none focus:border-[#D4AF37] transition appearance-none cursor-pointer"
                  style={{
                    backgroundImage: `url("data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' width='24' height='24' viewBox='0 0 24 24' fill='none' stroke='%23D4AF37' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'><polyline points='6 9 12 15 18 9'></polyline></svg>")`,
                    backgroundRepeat: "no-repeat",
                    backgroundPosition: "right 1rem center",
                    backgroundSize: "1.2em",
                  }}
                >
                  {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map((num) => (
                    <option key={num} value={num} className="bg-[#260508] text-white">
                      {num} {num === 1 ? "Guest" : "Guests"}
                    </option>
                  ))}
                </select>
              </div>

              <div>
                <label className="block text-[10px] uppercase tracking-[0.3em] text-[#D4AF37] mb-2">Will you be joining us?</label>
                <div className="grid grid-cols-2 gap-2">
                  {(["yes", "no"] as const).map((opt) => (
                    <button
                      key={opt}
                      type="button"
                      onClick={() => setForm({ ...form, attending: opt })}
                      className={`py-3 px-4 rounded-xl text-center text-xs uppercase tracking-[0.15em] border transition cursor-pointer select-none
                                 ${form.attending === opt 
                                   ? "bg-gradient-to-r from-[#D4AF37] to-[#E6C280] text-[#260508] font-bold border-[#D4AF37]" 
                                   : "bg-transparent border-white/20 text-white/80 hover:bg-white/5"}`}
                    >
                      {opt === "yes" ? "Joyfully Yes" : "Regretfully No"}
                    </button>
                  ))}
                </div>
              </div>

              <div>
                <label className="block text-[10px] uppercase tracking-[0.3em] text-[#D4AF37] mb-2">Meal Preference</label>
                <div className="grid grid-cols-3 gap-2">
                  {(["veg", "nonveg", "jain"] as const).map((opt) => (
                    <button
                      key={opt}
                      type="button"
                      onClick={() => setForm({ ...form, meal: opt })}
                      className={`py-2 px-1.5 rounded-xl text-center text-[10px] uppercase tracking-[0.1em] border transition cursor-pointer select-none
                                 ${form.meal === opt 
                                   ? "bg-gradient-to-r from-[#D4AF37] to-[#E6C280] text-[#260508] font-bold border-[#D4AF37]" 
                                   : "bg-transparent border-white/20 text-white/80 hover:bg-white/5"}`}
                    >
                      {opt === "veg" ? "Veg" : opt === "nonveg" ? "Non-Veg" : "Jain"}
                    </button>
                  ))}
                </div>
              </div>

              <div className="flex gap-2 pt-3">
                <button 
                  type="submit" 
                  className="flex-1 flex items-center justify-center gap-2 rounded-full cursor-pointer py-3.5 text-xs uppercase tracking-[0.2em] text-[#FAF8F3] font-bold border border-[#D4AF37]/50 shadow-[0_4px_20px_rgba(128,0,32,0.4)] hover:scale-102 hover:shadow-[0_6px_25px_rgba(128,0,32,0.6)] transition-all duration-300 relative overflow-hidden group"
                  style={{ background: "linear-gradient(135deg, #800020 0%, #590D18 50%, #3D070C 100%)" }}
                >
                  {/* Luxury Shine Effect */}
                  <span className="absolute inset-0 bg-gradient-to-r from-transparent via-[#D4AF37]/30 to-transparent -translate-x-full animate-luxury-shine pointer-events-none z-10" />

                  <Check className="w-4 h-4 text-[#D4AF37]" strokeWidth={3} />
                  <span className="relative z-10">{rsvp ? "Update RSVP" : "Submit RSVP"}</span>
                </button>
                {rsvp && (
                  <button
                    type="button"
                    onClick={() => setForm(rsvp)}
                    className="px-6 rounded-full border border-white/20 text-white text-xs uppercase tracking-[0.2em] hover:bg-white/5 transition flex items-center gap-2 cursor-pointer"
                  >
                    <Pencil className="w-3.5 h-3.5" />
                    <span>Reset</span>
                  </button>
                )}
              </div>
            </form>
          </div>
        </div>
      )}
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

const COUNTDOWN_MAX = { days: 365, hours: 24, minutes: 60, seconds: 60 } as const;

function RingTimer({
  value,
  max,
  label,
  hindi,
}: {
  value: number;
  max: number;
  label: string;
  hindi: string;
}) {
  const R = 62;
  const C = 2 * Math.PI * R;
  const pct = Math.min(1, value / max);
  const dash = C * pct;

  return (
    <div
      className="relative group overflow-hidden rounded-2xl p-[1px] transition-all duration-500 z-10"
      style={{
        background: "linear-gradient(135deg, rgba(212, 175, 55, 0.3), transparent 40%, rgba(212, 175, 55, 0.15))"
      }}
    >
      {/* Glow on hover */}
      <div className="absolute -inset-10 bg-[#D4AF37]/5 opacity-0 group-hover:opacity-100 blur-2xl transition-opacity duration-500 -z-10" />

      {/* Card body */}
      <div className="relative rounded-2xl bg-gradient-to-b from-[#3d070c]/50 via-[#140a04]/80 to-[#260508]/90 p-5 sm:p-6 flex flex-col items-center justify-center border border-white/10 backdrop-blur-xl">
        <span className="absolute inset-1.5 border border-dashed border-[#D4AF37]/25 rounded-xl pointer-events-none select-none z-10" />
        <span className="absolute left-2.5 top-2.5 w-2 h-2 border-l border-t border-[#D4AF37]/45 rounded-tl z-10" />
        <span className="absolute right-2.5 top-2.5 w-2 h-2 border-r border-t border-[#D4AF37]/45 rounded-tr z-10" />
        <span className="absolute left-2.5 bottom-2.5 w-2 h-2 border-l border-b border-[#D4AF37]/45 rounded-bl z-10" />
        <span className="absolute right-2.5 bottom-2.5 w-2 h-2 border-r border-b border-[#D4AF37]/45 rounded-br z-10" />

        <div
          className="absolute inset-0 rounded-2xl p-[1.5px] opacity-60 group-hover:opacity-100 pointer-events-none select-none overflow-hidden transition-opacity duration-500 z-10"
          style={{
            WebkitMask: "linear-gradient(#000 0 0) content-box, linear-gradient(#000 0 0)",
            WebkitMaskComposite: "xor",
            maskComposite: "exclude",
          }}
        >
          <div
            className="absolute top-1/2 left-1/2 w-[250%] h-[250%] -translate-x-1/2 -translate-y-1/2 aspect-square animate-[spin_5s_linear_infinite] pointer-events-none"
            style={{
              background: "conic-gradient(from 0deg, transparent 30%, #D4AF37 55%, #FFFBEA 60%, #D4AF37 70%, transparent 90%)",
            }}
          />
        </div>

        {/* Circular progress bar */}
        <div className="relative">
          <div className="anim-pulse-glow pointer-events-none absolute inset-0 -m-3 rounded-full bg-[radial-gradient(circle,rgba(212,175,55,0.22),transparent_70%)]" />
          <svg width="150" height="150" viewBox="0 0 150 150" className="drop-shadow-[0_0_12px_rgba(212,175,55,0.25)]">
            <defs>
              <linearGradient id={`grad-${label}`} x1="0" y1="0" x2="1" y2="1">
                <stop offset="0%" stopColor="#FFF3D6" />
                <stop offset="50%" stopColor="#D4AF37" />
                <stop offset="100%" stopColor="#AA7C11" />
              </linearGradient>
            </defs>
            <circle cx="75" cy="75" r={R} fill="none" stroke="rgba(212,175,55,0.12)" strokeWidth="3" />
            <motion.circle
              cx="75"
              cy="75"
              r={R}
              fill="none"
              stroke={`url(#grad-${label})`}
              strokeWidth="4"
              strokeLinecap="round"
              strokeDasharray={`${dash} ${C}`}
              transform="rotate(-90 75 75)"
              initial={{ strokeDasharray: `0 ${C}` }}
              animate={{ strokeDasharray: `${dash} ${C}` }}
              transition={{ duration: 0.8, ease: "easeOut" }}
            />
            {[0, 90, 180, 270].map((deg) => (
              <circle
                key={deg}
                cx={75 + R * Math.cos((deg * Math.PI) / 180)}
                cy={75 + R * Math.sin((deg * Math.PI) / 180)}
                r="2"
                fill="#D4AF37"
              />
            ))}
          </svg>
          <div className="absolute inset-0 flex flex-col items-center justify-center">
            <p className="font-heading text-xs font-bold text-[#D4AF37]">
              {hindi}
            </p>
            <div className="h-10 mt-1">
              <AnimatePresence mode="popLayout">
                <motion.span
                  key={value}
                  initial={{ opacity: 0, y: 10, filter: "blur(4px)" }}
                  animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
                  exit={{ opacity: 0, y: -10, filter: "blur(4px)" }}
                  transition={{ duration: 0.4 }}
                  className="block font-heading text-3xl font-bold leading-none text-[#F5E6A8] drop-shadow-[0_2px_8px_rgba(212,175,55,0.3)]"
                >
                  {String(value).padStart(2, "0")}
                </motion.span>
              </AnimatePresence>
            </div>
          </div>
        </div>

        <p className="mt-4 font-body text-[9px] uppercase tracking-[0.25em] text-[#F5E6A8]/90 font-bold select-none z-20">
          {label}
        </p>
      </div>
    </div>
  );
}

export function Countdown() {
  const c = useCountdown(wedding.date);
  const items: Array<[keyof typeof COUNTDOWN_MAX, string, string]> = [
    ["days", "Days", "दिवस"],
    ["hours", "Hours", "घंटे"],
    ["minutes", "Minutes", "मिनट"],
    ["seconds", "Seconds", "सेकंड"],
  ];

  return (
    <section id="countdown" className="relative overflow-hidden min-h-[100dvh] flex flex-col justify-center py-20 sm:py-24 text-ivory">
      {/* ── Double gold frame border ── */}
      <motion.div initial={{ opacity: 0, scale: 1.05 }} animate={{ opacity: 1, scale: 1 }} transition={{ duration: 1.8, ease: "easeOut" }} className="absolute inset-2 sm:inset-4 pointer-events-none border border-[#D4AF37]/35 rounded-xl sm:rounded-2xl z-10" />
      <motion.div initial={{ opacity: 0, scale: 1.03 }} animate={{ opacity: 0.55, scale: 1 }} transition={{ duration: 2, ease: "easeOut", delay: 0.3 }} className="absolute inset-[10px] sm:inset-[22px] pointer-events-none border border-[#D4AF37]/18 rounded-lg sm:rounded-xl z-10" />
      {/* ── Corner ornaments ── */}
      <CornerOrnament className="top-[10px]  left-[10px]  sm:top-[22px] sm:left-[22px]" />
      <CornerOrnament className="top-[10px]  right-[10px] sm:top-[22px] sm:right-[22px] rotate-90" />
      <CornerOrnament className="bottom-[10px] left-[10px]  sm:bottom-[22px] sm:left-[22px]  -rotate-90" />
      <CornerOrnament className="bottom-[10px] right-[10px] sm:bottom-[22px] sm:right-[22px] rotate-180" />
      <FloatingPetals count={10} />
      <GoldenParticles count={15} />

      {/* Hanging Bells */}
      <motion.div
        initial={{ y: -60, opacity: 0 }}
        animate={{ y: 0, opacity: 0.85 }}
        transition={{ duration: 1.5, ease: [0.22, 1, 0.36, 1], delay: 0.2 }}
        className="absolute left-6 sm:left-12 top-6 origin-top flex flex-col items-center pointer-events-none z-10"
      >
        <div className="w-px h-8 bg-gradient-to-b from-[#D4AF37] to-[#D4AF37]/20" />
        <motion.div animate={{ rotate: [-3, 3, -3] }} transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }} className="origin-top -mt-0.5">
          <HangingBell />
        </motion.div>
      </motion.div>

      <motion.div
        initial={{ y: -60, opacity: 0 }}
        animate={{ y: 0, opacity: 0.85 }}
        transition={{ duration: 1.5, ease: [0.22, 1, 0.36, 1], delay: 0.4 }}
        className="absolute right-6 sm:right-12 top-12 origin-top flex flex-col items-center pointer-events-none z-10"
      >
        <div className="w-px h-10 bg-gradient-to-b from-[#D4AF37] to-[#D4AF37]/20" />
        <motion.div animate={{ rotate: [3, -3, 3] }} transition={{ duration: 6.5, repeat: Infinity, ease: "easeInOut" }} className="origin-top -mt-0.5">
          <HangingBell />
        </motion.div>
      </motion.div>

      <div className="relative mx-auto max-w-5xl px-6">
        <SectionTitle eyebrow="The Wait Begins" title="Countdown" light subtitle="Every second closer to forever." subtitleClassName="!text-[#F5E6A8]/90 font-medium" />

        {c.done ? (
          <p className="text-center font-heading text-3xl sm:text-5xl gold-text">The Celebration Has Begun!</p>
        ) : (
          <div className="mt-16 grid grid-cols-2 gap-5 sm:gap-8 md:grid-cols-4 px-2">
            {items.map(([key, label, hindi]) => (
              <motion.div
                key={label}
                initial={{ opacity: 0, y: 30, scale: 0.93 }}
                whileInView={{ opacity: 1, y: 0, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.7, ease: "easeOut" }}
              >
                <RingTimer value={c[key]} max={COUNTDOWN_MAX[key]} label={label} hindi={hindi} />
              </motion.div>
            ))}
          </div>
        )}
      </div>
    </section>
  );
}

/* =========================================================
   VENUE, REGISTRY, AND FAQ REMOVED
   ========================================================= */

/* =========================================================
   CONTACT
   ========================================================= */
export function Contact() {
  return (
    <section id="contact" className="relative overflow-hidden min-h-[100dvh] flex flex-col justify-center py-20 sm:py-24">
      {/* ── Double gold frame border ── */}
      <motion.div initial={{ opacity: 0, scale: 1.05 }} animate={{ opacity: 1, scale: 1 }} transition={{ duration: 1.8, ease: "easeOut" }} className="absolute inset-2 sm:inset-4 pointer-events-none border border-[#D4AF37]/35 rounded-xl sm:rounded-2xl z-10" />
      <motion.div initial={{ opacity: 0, scale: 1.03 }} animate={{ opacity: 0.55, scale: 1 }} transition={{ duration: 2, ease: "easeOut", delay: 0.3 }} className="absolute inset-[10px] sm:inset-[22px] pointer-events-none border border-[#D4AF37]/18 rounded-lg sm:rounded-xl z-10" />
      {/* ── Corner ornaments ── */}
      <CornerOrnament className="top-[10px]  left-[10px]  sm:top-[22px] sm:left-[22px]" />
      <CornerOrnament className="top-[10px]  right-[10px] sm:top-[22px] sm:right-[22px] rotate-90" />
      <CornerOrnament className="bottom-[10px] left-[10px]  sm:bottom-[22px] sm:left-[22px]  -rotate-90" />
      <CornerOrnament className="bottom-[10px] right-[10px] sm:bottom-[22px] sm:right-[22px] rotate-180" />
      {/* ── Swaying Bells ── */}
      <motion.div initial={{ y: -80, opacity: 0 }} animate={{ y: 0, opacity: 1 }} transition={{ duration: 1.5, ease: [0.22, 1, 0.36, 1], delay: 0.5 }} className="absolute left-3.5 sm:left-10 top-[10px] sm:top-[22px] origin-top flex flex-col items-center pointer-events-none z-20">
        <div className="w-px h-10 sm:h-20 bg-gradient-to-b from-[#D4AF37] to-[#D4AF37]/30" />
        <motion.div animate={{ rotate: [-3, 3, -3] }} transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }} className="origin-top -mt-1"><HangingBell /></motion.div>
      </motion.div>
      <motion.div initial={{ y: -80, opacity: 0 }} animate={{ y: 0, opacity: 1 }} transition={{ duration: 1.5, ease: [0.22, 1, 0.36, 1], delay: 0.7 }} className="absolute right-3.5 sm:right-10 top-[10px] sm:top-[22px] origin-top flex flex-col items-center pointer-events-none z-20">
        <div className="w-px h-10 sm:h-20 bg-gradient-to-b from-[#D4AF37] to-[#D4AF37]/30" />
        <motion.div animate={{ rotate: [3, -3, 3] }} transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }} className="origin-top -mt-1"><HangingBell /></motion.div>
      </motion.div>
      <div className="mx-auto max-w-5xl px-6 w-full relative z-10">
        <SectionTitle eyebrow="Need Help?" title="Reach Out" subtitle="We'd love to hear from you." />
        
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {([...wedding.contacts.bride.map(c => ({ ...c, side: "bride" })), ...wedding.contacts.groom.map(c => ({ ...c, side: "groom" }))]).map((c, idx) => (
            <div 
              key={c.name} 
              className="relative rounded-3xl p-6 text-center border border-[#D4AF37]/25 overflow-hidden group shadow-xl hover:-translate-y-2 hover:border-[#D4AF37]/50 hover:shadow-[0_15px_35px_rgba(212,175,55,0.15)] transition-all duration-500"
              style={{
                background: "linear-gradient(135deg, rgba(61, 7, 12, 0.9) 0%, rgba(20, 10, 4, 0.98) 100%)",
              }}
            >
              {/* Inner Decorative Border */}
              <div className="absolute inset-2 border border-dashed border-[#D4AF37]/10 rounded-[22px] pointer-events-none group-hover:border-[#D4AF37]/30 transition-colors duration-500" />
              
              {/* Luxury Sweep Shine Effect */}
              <span className="absolute inset-0 bg-gradient-to-r from-transparent via-white/5 to-transparent -translate-x-full group-hover:animate-luxury-shine pointer-events-none z-10" />

              {/* Corner Mandala watermark */}
              <MandalaBg className="absolute -bottom-12 -right-12 w-32 h-32 opacity-[0.03] pointer-events-none transition-all duration-700 group-hover:opacity-[0.08] group-hover:rotate-12" />

              <div className="relative z-10 flex flex-col h-full justify-between min-h-[170px]">
                <div>
                  <p className="font-body text-[8px] uppercase tracking-[0.25em] text-[#D4AF37]/80 mb-3">
                    {c.side === "bride" ? "Bride's Side" : "Groom's Side"}
                  </p>
                  <h3 className="font-heading text-lg sm:text-xl font-semibold text-white leading-snug mb-1">{c.name}</h3>
                  <p className="font-body text-[10px] text-white/50 tracking-wider uppercase">{c.role}</p>
                </div>
                
                <div>
                  <span aria-hidden className="block h-px w-10 bg-gradient-to-r from-transparent via-[#D4AF37]/35 to-transparent mx-auto my-3.5 group-hover:w-16 transition-all duration-500" />
                  
                  <div className="flex justify-center gap-4 mt-2">
                    <a 
                      href={`tel:${c.phone}`} 
                      className="w-10 h-10 rounded-full flex items-center justify-center border border-[#D4AF37]/30 text-[#FAF8F3] hover:bg-[#D4AF37] hover:text-[#260508] hover:scale-110 active:scale-95 transition-all duration-300 shadow-[0_4px_12px_rgba(212,175,55,0.1)] group/btn cursor-pointer"
                      aria-label={`Call ${c.name}`}
                    >
                      <Phone size={13} className="group-hover/btn:animate-pulse" />
                    </a>
                    <a 
                      href={`https://wa.me/${c.phone.replace(/\D/g, "")}`} 
                      target="_blank" 
                      rel="noreferrer"
                      className="w-10 h-10 rounded-full flex items-center justify-center border border-[#D4AF37]/30 text-[#FAF8F3] hover:bg-[#D4AF37] hover:text-[#260508] hover:scale-110 active:scale-95 transition-all duration-300 shadow-[0_4px_12px_rgba(212,175,55,0.1)] group/btn cursor-pointer"
                      aria-label={`WhatsApp ${c.name}`}
                    >
                      <MessageCircle size={13} />
                    </a>
                  </div>
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
   THANK YOU
   ========================================================= */
export function ThankYou() {
  return (
    <section className="relative overflow-hidden min-h-[100dvh] flex flex-col justify-center py-20 text-ivory">
      {/* ── Double gold frame border ── */}
      <motion.div initial={{ opacity: 0, scale: 1.05 }} animate={{ opacity: 1, scale: 1 }} transition={{ duration: 1.8, ease: "easeOut" }} className="absolute inset-2 sm:inset-4 pointer-events-none border border-[#D4AF37]/35 rounded-xl sm:rounded-2xl z-10" />
      <motion.div initial={{ opacity: 0, scale: 1.03 }} animate={{ opacity: 0.55, scale: 1 }} transition={{ duration: 2, ease: "easeOut", delay: 0.3 }} className="absolute inset-[10px] sm:inset-[22px] pointer-events-none border border-[#D4AF37]/18 rounded-lg sm:rounded-xl z-10" />
      {/* ── Corner ornaments ── */}
      <CornerOrnament className="top-[10px]  left-[10px]  sm:top-[22px] sm:left-[22px]" />
      <CornerOrnament className="top-[10px]  right-[10px] sm:top-[22px] sm:right-[22px] rotate-90" />
      <CornerOrnament className="bottom-[10px] left-[10px]  sm:bottom-[22px] sm:left-[22px]  -rotate-90" />
      <CornerOrnament className="bottom-[10px] right-[10px] sm:bottom-[22px] sm:right-[22px] rotate-180" />
      {/* ── Swaying Bells ── */}
      <motion.div initial={{ y: -80, opacity: 0 }} animate={{ y: 0, opacity: 1 }} transition={{ duration: 1.5, ease: [0.22, 1, 0.36, 1], delay: 0.5 }} className="absolute left-3.5 sm:left-10 top-[10px] sm:top-[22px] origin-top flex flex-col items-center pointer-events-none z-20">
        <div className="w-px h-10 sm:h-20 bg-gradient-to-b from-[#D4AF37] to-[#D4AF37]/30" />
        <motion.div animate={{ rotate: [-3, 3, -3] }} transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }} className="origin-top -mt-1"><HangingBell /></motion.div>
      </motion.div>
      <motion.div initial={{ y: -80, opacity: 0 }} animate={{ y: 0, opacity: 1 }} transition={{ duration: 1.5, ease: [0.22, 1, 0.36, 1], delay: 0.7 }} className="absolute right-3.5 sm:right-10 top-[10px] sm:top-[22px] origin-top flex flex-col items-center pointer-events-none z-20">
        <div className="w-px h-10 sm:h-20 bg-gradient-to-b from-[#D4AF37] to-[#D4AF37]/30" />
        <motion.div animate={{ rotate: [3, -3, 3] }} transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }} className="origin-top -mt-1"><HangingBell /></motion.div>
      </motion.div>
      <FloatingPetals count={18} />
      <GoldenParticles count={30} />
      <div className="relative mx-auto max-w-3xl px-6 text-center">
        <Reveal>
          <h2 className="font-couple gold-text text-5xl sm:text-7xl">Thank You</h2>
          <Ornament className="mt-6" />
          <p className="mx-auto mt-8 max-w-xl font-heading italic text-lg sm:text-xl text-white leading-relaxed">
            "Your presence is the greatest blessing we could ask for. We look forward to celebrating this beautiful journey with you."
          </p>
          <div className="mt-12">
            <p className="text-[10px] uppercase tracking-[0.5em] text-white">With Love</p>
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
