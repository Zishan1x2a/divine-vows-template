import { useEffect, useState, useRef } from "react";
import { motion } from "framer-motion";
import { wedding } from "@/data/wedding";
import { FloatingPetals, GoldenParticles } from "./decor";

// A beautiful, highly-detailed gold mandala component
function GoldMandala({ className = "" }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 200 200"
      className={`w-full h-full stroke-[#D4AF37] fill-none stroke-[0.8] ${className}`}
    >
      <circle cx="100" cy="100" r="90" strokeDasharray="3,3" className="opacity-60" />
      <circle cx="100" cy="100" r="75" className="opacity-80" />
      <circle cx="100" cy="100" r="60" />
      <circle cx="100" cy="100" r="45" strokeDasharray="1,2" className="opacity-50" />
      <circle cx="100" cy="100" r="30" />
      <circle cx="100" cy="100" r="15" className="opacity-90" />
      
      {/* Ray lines */}
      {Array.from({ length: 16 }).map((_, i) => {
        const angle = (i * 360) / 16;
        const rad = (angle * Math.PI) / 180;
        const x2 = (100 + Math.cos(rad) * 90).toFixed(3);
        const y2 = (100 + Math.sin(rad) * 90).toFixed(3);
        return (
          <line
            key={i}
            x1="100"
            y1="100"
            x2={x2}
            y2={y2}
            className="opacity-20"
          />
        );
      })}

      {/* Outer scallops */}
      {Array.from({ length: 24 }).map((_, i) => {
        const angle = (i * 360) / 24;
        const rad = (angle * Math.PI) / 180;
        const nextRad = (((angle + 15) * Math.PI) / 180);
        const x1 = (100 + Math.cos(rad) * 85).toFixed(3);
        const y1 = (100 + Math.sin(rad) * 85).toFixed(3);
        const x2 = (100 + Math.cos(nextRad) * 85).toFixed(3);
        const y2 = (100 + Math.sin(nextRad) * 85).toFixed(3);
        
        const cx1 = 100 + Math.cos(rad) * 85;
        const cy1 = 100 + Math.sin(rad) * 85;
        const cx2 = 100 + Math.cos(nextRad) * 85;
        const cy2 = 100 + Math.sin(nextRad) * 85;
        const qx = (((cx1 + cx2) / 2) * 1.03).toFixed(3);
        const qy = (((cy1 + cy2) / 2) * 1.03).toFixed(3);
        return (
          <path
            key={i}
            d={`M ${x1} ${y1} Q ${qx} ${qy} ${x2} ${y2}`}
            className="opacity-50"
          />
        );
      })}
    </svg>
  );
}

export function Opening({ onEnter }: { onEnter: () => void }) {
  const [leaving, setLeaving] = useState(false);
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });
  const [particles, setParticles] = useState<{ id: number; x: number; y: number; size: number; color: string }[]>([]);
  const videoRef = useRef<HTMLVideoElement | null>(null);

  // Track mouse coordinates for interactive parallax
  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      const x = (e.clientX / window.innerWidth) - 0.5;
      const y = (e.clientY / window.innerHeight) - 0.5;
      setMousePos({ x, y });
    };
    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  // Set video playback rate to 1.5x and force autoplay on mount
  useEffect(() => {
    if (videoRef.current) {
      videoRef.current.defaultMuted = true;
      videoRef.current.muted = true;
      videoRef.current.playbackRate = 1.5;
      videoRef.current.play().catch((err) => {
        console.log("Intro video play failed:", err);
      });
    }
  }, []);

  // Automatically open the gates after the sped-up video duration (approx 6.9 seconds)
  useEffect(() => {
    const timer = setTimeout(() => {
      handleEnter();
    }, 6900); // 6.9 seconds (10.4s video played at 1.5x speed)
    return () => clearTimeout(timer);
  }, []);

  function handleEnter() {
    setLeaving(true);
    
    // Trigger a majestic particle explosion (150 particles)
    const newParticles = Array.from({ length: 150 }).map((_, i) => {
      const angle = Math.random() * Math.PI * 2;
      // High variation in speeds (up to 1200px/sec) to throw them across the entire screen
      const speed = 100 + Math.random() * 1100;
      return {
        id: i,
        x: Math.cos(angle) * speed,
        y: Math.sin(angle) * speed,
        size: 1.5 + Math.random() * 6.5,
        color: Math.random() > 0.6 
          ? "#D4AF37" // Bright gold
          : Math.random() > 0.25 
            ? "#F5E6A8" // Warm ivory/champagne
            : "#FFFFFF" // White spark
      };
    });
    setParticles(newParticles);

    // Call onEnter after particles fly off-screen (2.0s delay)
    setTimeout(onEnter, 2000);
  }

  return (
    <div className="fixed inset-0 z-[100] overflow-hidden select-none">
      {/* Main Full-Screen Intro Card */}
      <motion.div
        initial={{ opacity: 1 }}
        animate={leaving ? { opacity: 0, scale: 0.95, filter: "blur(8px)" } : { opacity: 1, scale: 1 }}
        transition={{ duration: 1.0, ease: "easeInOut" }}
        className="relative z-50 flex w-full h-full flex-col items-center justify-center px-6 text-center"
        style={{
          background: "radial-gradient(ellipse at center, #26150b 0%, #0a0503 70%, #000 100%)",
        }}
      >
        {/* Golden glow orb (parallax shifted) */}
        <motion.div
          className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 pointer-events-none"
          style={{
            width: "80vmin",
            height: "80vmin",
            borderRadius: "50%",
            background: "radial-gradient(circle, rgba(245,230,168,.3) 0%, rgba(212,175,55,.1) 40%, transparent 70%)",
            filter: "blur(40px)",
            x: mousePos.x * -25,
            y: mousePos.y * -25,
          }}
          initial={{ scale: 0, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 2.5, ease: "easeOut" }}
        />

        {/* Light rays (Slow spin) */}
        <div
          aria-hidden
          className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 pointer-events-none"
          style={{
            width: "120vmax",
            height: "120vmax",
            background: "conic-gradient(from 0deg, transparent 0deg, rgba(245,230,168,.04) 10deg, transparent 20deg, transparent 45deg, rgba(245,230,168,.03) 55deg, transparent 65deg)",
            animation: "ring-spin 80s linear infinite",
            opacity: 0.8,
          }}
        />

        <GoldenParticles count={35} />
        <FloatingPetals count={8} />

        {/* Particle Splash Elements */}
        {particles.length > 0 && (
          <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 z-[60] pointer-events-none">
            {particles.map((p) => (
              <motion.span
                key={p.id}
                initial={{ x: 0, y: 0, opacity: 1, scale: 1 }}
                animate={{ x: p.x, y: p.y, opacity: 0, scale: 0 }}
                transition={{ duration: 1.8, ease: "easeOut" }}
                className="absolute rounded-full pointer-events-none"
                style={{
                  width: p.size,
                  height: p.size,
                  background: p.color,
                  boxShadow: `0 0 8px ${p.color}`,
                }}
              />
            ))}
          </div>
        )}

        {/* Central 3D Rotating Video with Golden Mandala Frame */}
        <div className="relative w-48 h-48 sm:w-56 sm:h-56 flex items-center justify-center">
          {/* Rotating golden mandala frame around the video */}
          <motion.div
            className="absolute w-[180%] h-[180%] pointer-events-none opacity-40 z-0"
            animate={{ rotate: 360 }}
            transition={{ duration: 60, repeat: Infinity, ease: "linear" }}
          >
            <GoldMandala />
          </motion.div>

          {/* Video Container */}
          <motion.div
            initial={{ opacity: 0, scale: 0.5 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ type: "spring", stiffness: 80, damping: 15, delay: 0.4 }}
            className="w-full h-full rounded-full overflow-hidden relative z-10 flex items-center justify-center cursor-pointer"
            onClick={() => {
              if (videoRef.current) {
                videoRef.current.defaultMuted = true;
                videoRef.current.muted = true;
                videoRef.current.play().catch(e => console.log("Intro manual play failed:", e));
              }
            }}
            style={{
              boxShadow: "0 0 50px rgba(212, 175, 55, 0.35)",
              border: "1.5px solid rgba(212, 175, 55, 0.45)",
              background: "#000",
            }}
          >
            <video
              ref={videoRef}
              src="/hiiiii.mp4"
              autoPlay
              loop={false}
              muted
              playsInline
              className="w-full h-full object-cover"
              style={{
                mixBlendMode: "screen",
              }}
            />
          </motion.div>
        </div>
      </motion.div>
    </div>
  );
}
