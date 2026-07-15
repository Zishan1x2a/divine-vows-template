import { createFileRoute } from "@tanstack/react-router";
import { useEffect, useState, useRef, useCallback } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { Opening } from "@/components/wedding/opening";
import DoorTransition from "@/components/wedding/DoorTransition";
import SectionNavigation from "@/components/wedding/SectionNavigation";

import {
  Welcome, Hero, Story, Events, Gallery, Family, WishingWall,
  Rsvp, Countdown, Contact, ThankYou,
} from "@/components/wedding/sections";

export const Route = createFileRoute("/")({
  component: WeddingPage,
});

// ── Scene order (exactly like 4th project's WeddingApp) ──────────────────────
const SCENES = [
  "welcome",
  "hero",
  "story",
  "events",
  "gallery",
  "family",
  "wishes",
  "rsvp",
  "countdown",
  "contact",
  "thankyou",
] as const;

type Scene = (typeof SCENES)[number];

function WeddingPage() {
  const [entered, setEntered] = useState(false);
  const [ganeshaStarted, setGaneshaStarted] = useState(false);
  const [musicOn, setMusicOn] = useState(false);

  // Scene navigation state
  const [currentScene, setCurrentScene] = useState<Scene>("welcome");
  const [doorOpen, setDoorOpen] = useState(false);
  const [showDoor, setShowDoor] = useState(false);
  const [welcomeFading, setWelcomeFading] = useState(false);

  const audioRef = useRef<HTMLAudioElement | null>(null);

  // Start Ganesha animation 0.2 s before intro ends (6.9s at 1.5x → 6.7s)
  useEffect(() => {
    const t = setTimeout(() => setGaneshaStarted(true), 6700);
    return () => clearTimeout(t);
  }, []);

  // Lock body scroll — each scene fills the viewport, no page scroll needed
  useEffect(() => {
    document.body.style.overflow = "hidden";
    return () => { document.body.style.overflow = ""; };
  }, []);

  // Auto-play background music on first interaction
  useEffect(() => {
    const play = () => {
      const el = audioRef.current;
      if (el && !musicOn) {
        el.play()
          .then(() => setMusicOn(true))
          .catch(() => {});
      }
    };
    window.addEventListener("click", play);
    window.addEventListener("touchstart", play);
    return () => {
      window.removeEventListener("click", play);
      window.removeEventListener("touchstart", play);
    };
  }, [musicOn]);

  // ── Navigation helpers ────────────────────────────────────────────────────

  const goToNext = useCallback(() => {
    const idx = SCENES.indexOf(currentScene);
    if (idx >= SCENES.length - 1) return;

    const isWelcome = currentScene === "welcome";

    if (isWelcome) {
      // Door swing animation before revealing Hero
      setWelcomeFading(true);
      setShowDoor(true);
      setDoorOpen(false);

      setTimeout(() => setDoorOpen(true), 300);          // start opening doors
      setTimeout(() => setCurrentScene("hero"), 2200);   // switch scene mid-open
    } else {
      setCurrentScene(SCENES[idx + 1]);
    }
  }, [currentScene]);

  const goToPrevious = useCallback(() => {
    const idx = SCENES.indexOf(currentScene);
    if (idx <= 0) return;
    setCurrentScene(SCENES[idx - 1]);
  }, [currentScene]);

  // ── Scene renderer ────────────────────────────────────────────────────────

  const renderScene = () => {
    switch (currentScene) {
      case "welcome":
        return (
          <Welcome
            onOpen={goToNext}
            animateGanesha={ganeshaStarted}
            isFading={welcomeFading}
          />
        );
      case "hero":      return <Hero />;
      case "story":     return <Story />;
      case "events":    return <Events />;
      case "gallery":   return <Gallery />;
      case "family":    return <Family />;
      case "wishes":    return <WishingWall />;
      case "rsvp":      return <Rsvp />;
      case "countdown": return <Countdown />;
      case "contact":   return <Contact />;
      case "thankyou":  return <ThankYou />;
    }
  };

  const sceneIdx      = SCENES.indexOf(currentScene);
  const isWelcome     = currentScene === "welcome";
  const isThankYou    = currentScene === "thankyou";

  return (
    <div className="h-[100dvh] overflow-hidden">
      {/* ── Opening intro animation (plays once on page load) ── */}
      {!entered && <Opening onEnter={() => setEntered(true)} />}

      {/* ── Background music ── */}
      <audio
        ref={audioRef}
        loop
        preload="none"
        src="https://cdn.pixabay.com/audio/2022/10/18/audio_25a5116c2b.mp3"
        aria-hidden
      />

      {/* ── Door swing overlay (Welcome → Hero transition) ── */}
      {showDoor && (
        <DoorTransition
          isOpen={doorOpen}
          onComplete={() => setShowDoor(false)}
        />
      )}

      {/* ── Scene with fade + scale transition (like 4th project) ── */}
      <AnimatePresence mode="wait">
        <motion.div
          key={currentScene}
          className={
            isWelcome
              ? "h-[100dvh] overflow-hidden"
              : "h-[100dvh] overflow-y-auto hide-scrollbar"
          }
          initial={{ opacity: 0, scale: 0.97 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0, scale: 1.02 }}
          transition={{ duration: 0.55, ease: "easeInOut" }}
        >
          {renderScene()}
        </motion.div>
      </AnimatePresence>

      {/* ── Floating Back / Next navigation (hidden on Welcome screen) ── */}
      {!isWelcome && entered && (
        <SectionNavigation
          canGoBack={sceneIdx > 1}          /* hide Back on Hero (first real scene) */
          canGoNext={!isThankYou}
          onBack={goToPrevious}
          onNext={goToNext}
        />
      )}
    </div>
  );
}
