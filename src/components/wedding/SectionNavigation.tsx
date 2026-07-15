import { motion, AnimatePresence } from "framer-motion";

interface Props {
  canGoBack: boolean;
  canGoNext: boolean;
  onBack: () => void;
  onNext: () => void;
}

const SectionNavigation = ({ canGoBack, canGoNext, onBack, onNext }: Props) => {
  return (
    <div className="fixed bottom-6 md:bottom-10 left-0 right-0 z-[100] flex justify-between px-6 md:px-16 pointer-events-none">
      {/* Back Button */}
      <div className="flex-1 flex justify-start">
        <AnimatePresence>
          {canGoBack && (
            <motion.button
              key="back-btn"
              initial={{ opacity: 0, scale: 0, rotate: -45 }}
              animate={{ opacity: 1, scale: 1, rotate: 0 }}
              exit={{ opacity: 0, scale: 0, rotate: -45 }}
              transition={{ type: "spring", stiffness: 200, damping: 20 }}
              whileHover={{
                scale: 1.15,
                boxShadow: "0 15px 30px rgba(212,175,55,0.4), inset 0 2px 5px rgba(255,255,255,0.3)",
                y: -5,
              }}
              whileTap={{ scale: 0.9, y: 0 }}
              onClick={onBack}
              className="pointer-events-auto relative flex items-center justify-center w-14 h-14 md:w-16 md:h-16 rounded-full overflow-hidden group"
              style={{
                background: "linear-gradient(135deg, #590d18 0%, #3b0a11 50%, #0a0206 100%)",
                boxShadow: "0 10px 20px rgba(59,10,17,0.7), inset 0 2px 5px rgba(255,255,255,0.2)",
                border: "1.5px solid rgba(212,175,55,0.85)",
              }}
              aria-label="Go back to previous section"
            >
              {/* Spinning conic glow on hover */}
              <motion.div
                className="absolute inset-[-50%] z-0 opacity-0 group-hover:opacity-100"
                style={{ background: "conic-gradient(from 0deg, transparent 70%, rgba(249,217,118,0.6) 80%, #D4AF37 100%)" }}
                animate={{ rotate: 360 }}
                transition={{ duration: 2, repeat: Infinity, ease: "linear" }}
              />
              <div
                className="absolute inset-[2px] rounded-full z-10"
                style={{ background: "linear-gradient(135deg, #590d18, #0a0206)" }}
              />
              <span className="relative z-20 text-2xl text-[#F9D976] drop-shadow-[0_2px_4px_rgba(0,0,0,0.9)] font-bold">
                ⟵
              </span>
            </motion.button>
          )}
        </AnimatePresence>
      </div>

      {/* Next Button */}
      <div className="flex-1 flex justify-end">
        <AnimatePresence>
          {canGoNext && (
            <motion.button
              key="next-btn"
              initial={{ opacity: 0, scale: 0, rotate: 45 }}
              animate={{ opacity: 1, scale: 1, rotate: 0 }}
              exit={{ opacity: 0, scale: 0, rotate: 45 }}
              transition={{ type: "spring", stiffness: 200, damping: 20 }}
              whileHover={{
                scale: 1.15,
                boxShadow: "0 15px 30px rgba(212,175,55,0.4), inset 0 2px 5px rgba(255,255,255,0.3)",
                y: -5,
              }}
              whileTap={{ scale: 0.9, y: 0 }}
              onClick={onNext}
              className="pointer-events-auto relative flex items-center justify-center w-14 h-14 md:w-16 md:h-16 rounded-full overflow-hidden group"
              style={{
                background: "linear-gradient(135deg, #590d18 0%, #3b0a11 50%, #0a0206 100%)",
                boxShadow: "0 10px 20px rgba(59,10,17,0.7), inset 0 2px 5px rgba(255,255,255,0.2)",
                border: "1.5px solid rgba(212,175,55,0.85)",
              }}
              aria-label="Go to next section"
            >
              {/* Spinning conic glow on hover */}
              <motion.div
                className="absolute inset-[-50%] z-0 opacity-0 group-hover:opacity-100"
                style={{ background: "conic-gradient(from 0deg, transparent 70%, rgba(249,217,118,0.6) 80%, #D4AF37 100%)" }}
                animate={{ rotate: 360 }}
                transition={{ duration: 2, repeat: Infinity, ease: "linear" }}
              />
              <div
                className="absolute inset-[2px] rounded-full z-10"
                style={{ background: "linear-gradient(135deg, #590d18, #0a0206)" }}
              />
              <span className="relative z-20 text-2xl text-[#F9D976] drop-shadow-[0_2px_4px_rgba(0,0,0,0.9)] font-bold">
                ⟶
              </span>
            </motion.button>
          )}
        </AnimatePresence>
      </div>
    </div>
  );
};

export default SectionNavigation;
