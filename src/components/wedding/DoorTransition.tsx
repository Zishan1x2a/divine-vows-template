import { motion, AnimatePresence } from "framer-motion";
import { IMG } from "@/data/wedding";

interface DoorTransitionProps {
  isOpen: boolean;
  onComplete?: () => void;
}

// ── Symmetrical Folded Hands (Namaste / Anjali Mudra) SVG ──
const NamasteSVG = () => (
  <svg
    viewBox="0 0 120 120"
    className="w-36 h-36 sm:w-40 sm:h-40 stroke-[#D4AF37] fill-none stroke-[1.4] opacity-95 filter drop-shadow-[0_0_15px_rgba(212,175,55,0.5)]"
  >
    {/* Elegant Aura rays behind the hands */}
    <circle cx="60" cy="52" r="44" strokeDasharray="3 4" opacity="0.35" />
    <circle cx="60" cy="52" r="32" strokeDasharray="2 3" opacity="0.25" />

    {/* Left hand sleeve / wrist details */}
    <path d="M 40,98 C 40,92 43,84 46,76" />
    <path d="M 37,100 C 37,94 40,86 43,78" opacity="0.6" />
    
    {/* Right hand sleeve / wrist details */}
    <path d="M 80,98 C 80,92 77,84 74,76" />
    <path d="M 83,100 C 83,94 80,86 77,78" opacity="0.6" />
    
    {/* Hands contour (folded palms) */}
    {/* Left hand boundary */}
    <path d="M 46,76 Q 40,55 52,24 C 55,17 58,11 60,6" strokeLinecap="round" />
    {/* Right hand boundary */}
    <path d="M 74,76 Q 80,55 68,24 C 65,17 62,11 60,6" strokeLinecap="round" />
    
    {/* Seam / boundary where palms meet */}
    <line x1="60" y1="6" x2="60" y2="88" strokeDasharray="1.5 1.5" opacity="0.5" />
    
    {/* Thumb lines */}
    <path d="M 50,56 Q 56,49 57,41" />
    <path d="M 70,56 Q 64,49 63,41" />
    
    {/* Finger separations / creases (Left Hand) */}
    <path d="M 48,61 Q 55,42 58,25" opacity="0.85" />
    <path d="M 49,68 Q 54,54 58,34" opacity="0.85" />
    <path d="M 50,74 Q 53,66 56,51" opacity="0.75" />

    {/* Finger separations / creases (Right Hand) */}
    <path d="M 72,61 Q 65,42 62,25" opacity="0.85" />
    <path d="M 71,68 Q 66,54 62,34" opacity="0.85" />
    <path d="M 70,74 Q 67,66 64,51" opacity="0.75" />
  </svg>
);

// ── Hanging temple bell for the doors ──
const DoorHangingBell = () => (
  <svg
    width="28"
    height="32"
    viewBox="0 0 24 28"
    fill="none"
    stroke="#D4AF37"
    strokeWidth="1.5"
  >
    <path d="M12 0 L12 10" strokeDasharray="1 1.5" />
    <path d="M12 8 C7 10, 6 18, 6 22 L18 22 C18 18, 17 10, 12 8 Z" fill="rgba(212,175,55,0.2)" />
    <circle cx="12" cy="22" r="1.5" fill="#D4AF37" />
    <path d="M9 22 A3 3 0 0 0 15 22" strokeWidth="1.2" />
  </svg>
);

// ── Corner ornament for the doors ──
const DoorCornerOrnament = ({ className }: { className: string }) => (
  <svg
    className={`absolute w-10 h-10 sm:w-14 sm:h-14 pointer-events-none z-20 stroke-[#D4AF37] stroke-[1.2] fill-none opacity-75 ${className}`}
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

const DoorTransition = ({ isOpen, onComplete }: DoorTransitionProps) => {
  return (
    <AnimatePresence onExitComplete={onComplete}>
      {!isOpen && (
        <motion.div
          className="fixed inset-0 z-[200] pointer-events-none flex"
          style={{ perspective: "2500px" }}
          initial={{ scale: 1 }}
          animate={{ scale: 1 }}
          exit={{
            scale: 1.5,
            opacity: [1, 1, 0],
            transition: { duration: 2.0, ease: [0.76, 0, 0.24, 1] },
          }}
        >
          {/* ── Left Door ── */}
          <motion.div
            className="relative h-[100dvh] w-1/2 pointer-events-auto border-r-[3px] border-[#D4AF37] overflow-hidden"
            style={{
              transformOrigin: "left center",
              background: "linear-gradient(135deg, #150a06 0%, #260508 50%, #3D070C 100%)",
              boxShadow: "inset -30px 0 80px rgba(0,0,0,0.9), 30px 0 60px rgba(0,0,0,0.8)",
              WebkitBackfaceVisibility: "hidden",
              backfaceVisibility: "hidden",
              willChange: "transform",
              transformStyle: "preserve-3d",
            }}
            initial={{ rotateY: 0, x: 0 }}
            animate={{ rotateY: 0, x: 0 }}
            exit={{
              rotateY: 105,
              x: "-50%",
              transition: { duration: 1.6, ease: [0.76, 0, 0.24, 1] },
            }}
          >
            {/* Background Image Parallax Overlay */}
            <div 
              className="absolute inset-0 opacity-[0.08] mix-blend-overlay pointer-events-none"
              style={{
                backgroundImage: `url(${IMG.sunset})`,
                backgroundSize: "cover",
                backgroundPosition: "center",
              }}
            />

            {/* Repeating Gold Mandala Watermark Pattern */}
            <div 
              className="absolute inset-0 opacity-12 mix-blend-color-dodge pointer-events-none"
              style={{
                backgroundImage: `url(/mandala.png)`,
                backgroundSize: '240px',
                backgroundRepeat: 'repeat',
              }}
            />

            {/* Corner Ornaments */}
            <DoorCornerOrnament className="top-[10px] left-[10px] sm:top-[22px] sm:left-[22px]" />
            <DoorCornerOrnament className="bottom-[10px] left-[10px] sm:bottom-[22px] sm:left-[22px] -rotate-90" />

            {/* Hanging Bells */}
            <div className="absolute left-[20%] top-0 flex flex-col items-center origin-top pointer-events-none">
              <div className="w-[1.5px] h-14 sm:h-24 bg-gradient-to-b from-[#D4AF37] to-[#D4AF37]/20" />
              <motion.div animate={{ rotate: [-3, 3, -3] }} transition={{ duration: 5.5, repeat: Infinity, ease: "easeInOut" }} className="origin-top -mt-1">
                <DoorHangingBell />
              </motion.div>
            </div>
            <div className="absolute left-[60%] top-0 flex flex-col items-center origin-top pointer-events-none">
              <div className="w-[1.5px] h-10 sm:h-18 bg-gradient-to-b from-[#D4AF37] to-[#D4AF37]/20" />
              <motion.div animate={{ rotate: [3, -3, 3] }} transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }} className="origin-top -mt-1">
                <DoorHangingBell />
              </motion.div>
            </div>

            {/* Arched Border Accent */}
            <div
              className="absolute inset-4 sm:inset-10 bottom-24 sm:bottom-32 border-[2px] border-[#D4AF37]/45 rounded-t-[100px] sm:rounded-t-[140px] pointer-events-none"
              style={{ background: "radial-gradient(circle at center, rgba(212,175,55,0.05) 0%, transparent 80%)" }}
            >
              <div className="absolute inset-2 sm:inset-3 border border-dashed border-[#D4AF37]/25 rounded-t-[90px] sm:rounded-t-[125px]" />
            </div>

            {/* Left Half of Namaste Medallion */}
            <div className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-1/2 w-24 h-48 sm:w-28 sm:h-56 z-25 overflow-hidden flex items-center justify-end">
              <div className="w-48 h-48 sm:w-56 sm:h-56 rounded-full border-4 border-[#D4AF37]/65 bg-[#260508] shadow-[inset_-10px_0_20px_rgba(0,0,0,0.8),0_0_30px_rgba(212,175,55,0.25)] flex items-center justify-center">
                <div className="translate-x-[48px] sm:translate-x-[56px] scale-100 sm:scale-110">
                  <NamasteSVG />
                </div>
              </div>
            </div>

            {/* Edge Glow Strip */}
            <div
              className="absolute right-0 top-0 h-full w-32 opacity-35"
              style={{ background: "linear-gradient(90deg, transparent, #D4AF37)" }}
            />
          </motion.div>

          {/* ── Right Door ── */}
          <motion.div
            className="relative h-[100dvh] w-1/2 pointer-events-auto border-l-[3px] border-[#D4AF37] overflow-hidden"
            style={{
              transformOrigin: "right center",
              background: "linear-gradient(225deg, #150a06 0%, #260508 50%, #3D070C 100%)",
              boxShadow: "inset 30px 0 80px rgba(0,0,0,0.9), -30px 0 60px rgba(0,0,0,0.8)",
              WebkitBackfaceVisibility: "hidden",
              backfaceVisibility: "hidden",
              willChange: "transform",
              transformStyle: "preserve-3d",
            }}
            initial={{ rotateY: 0, x: 0 }}
            animate={{ rotateY: 0, x: 0 }}
            exit={{
              rotateY: -105,
              x: "50%",
              transition: { duration: 1.6, ease: [0.76, 0, 0.24, 1] },
            }}
          >
            {/* Background Image Parallax Overlay */}
            <div 
              className="absolute inset-0 opacity-[0.08] mix-blend-overlay pointer-events-none"
              style={{
                backgroundImage: `url(${IMG.sunset})`,
                backgroundSize: "cover",
                backgroundPosition: "center",
              }}
            />

            {/* Repeating Gold Mandala Watermark Pattern */}
            <div 
              className="absolute inset-0 opacity-12 mix-blend-color-dodge pointer-events-none"
              style={{
                backgroundImage: `url(/mandala.png)`,
                backgroundSize: '240px',
                backgroundRepeat: 'repeat',
              }}
            />

            {/* Corner Ornaments */}
            <DoorCornerOrnament className="top-[10px] right-[10px] sm:top-[22px] sm:right-[22px] rotate-90" />
            <DoorCornerOrnament className="bottom-[10px] right-[10px] sm:bottom-[22px] sm:right-[22px] rotate-180" />

            {/* Hanging Bells */}
            <div className="absolute right-[20%] top-0 flex flex-col items-center origin-top pointer-events-none">
              <div className="w-[1.5px] h-14 sm:h-24 bg-gradient-to-b from-[#D4AF37] to-[#D4AF37]/20" />
              <motion.div animate={{ rotate: [3, -3, 3] }} transition={{ duration: 5.5, repeat: Infinity, ease: "easeInOut" }} className="origin-top -mt-1">
                <DoorHangingBell />
              </motion.div>
            </div>
            <div className="absolute right-[60%] top-0 flex flex-col items-center origin-top pointer-events-none">
              <div className="w-[1.5px] h-10 sm:h-18 bg-gradient-to-b from-[#D4AF37] to-[#D4AF37]/20" />
              <motion.div animate={{ rotate: [-3, 3, -3] }} transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }} className="origin-top -mt-1">
                <DoorHangingBell />
              </motion.div>
            </div>

            {/* Arched Border Accent */}
            <div
              className="absolute inset-4 sm:inset-10 bottom-24 sm:bottom-32 border-[2px] border-[#D4AF37]/45 rounded-t-[100px] sm:rounded-t-[140px] pointer-events-none"
              style={{ background: "radial-gradient(circle at center, rgba(212,175,55,0.05) 0%, transparent 80%)" }}
            >
              <div className="absolute inset-2 sm:inset-3 border border-dashed border-[#D4AF37]/25 rounded-t-[90px] sm:rounded-t-[125px]" />
            </div>

            {/* Right Half of Namaste Medallion */}
            <div className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-1/2 w-24 h-48 sm:w-28 sm:h-56 z-25 overflow-hidden flex items-center justify-start">
              <div className="w-48 h-48 sm:w-56 sm:h-56 rounded-full border-4 border-[#D4AF37]/65 bg-[#260508] shadow-[inset_10px_0_20px_rgba(0,0,0,0.8),0_0_30px_rgba(212,175,55,0.25)] flex items-center justify-center">
                <div className="-translate-x-[48px] sm:-translate-x-[56px] scale-100 sm:scale-110">
                  <NamasteSVG />
                </div>
              </div>
            </div>

            {/* Edge Glow Strip */}
            <div
              className="absolute left-0 top-0 h-full w-32 opacity-35"
              style={{ background: "linear-gradient(270deg, transparent, #D4AF37)" }}
            />
          </motion.div>

          {/* Flash / God Rays on open */}
          <motion.div
            className="absolute inset-0 bg-gradient-to-t from-[#D4AF37] via-[#FFF6E8] to-[#590d18] mix-blend-screen pointer-events-none z-10"
            initial={{ opacity: 0 }}
            animate={{ opacity: 0 }}
            exit={{
              opacity: [0, 0.85, 0],
              scale: [1, 1.2],
              transition: { duration: 1.8, delay: 0.1, ease: "easeOut" },
            }}
          />
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default DoorTransition;
