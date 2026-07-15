import { createFileRoute } from "@tanstack/react-router";
import { useEffect, useState, useRef, useCallback } from "react";
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

// All scrollable section IDs in order
const SECTION_IDS = [
  "hero", "story", "events", "gallery", "family",
  "wishes", "rsvp", "countdown", "contact",
] as const;

type SectionId = typeof SECTION_IDS[number];

function WeddingPage() {
  const [entered, setEntered] = useState(false);
  const [ganeshaStarted, setGaneshaStarted] = useState(false);
  const [scrollUnlocked, setScrollUnlocked] = useState(false);
  const [musicOn, setMusicOn] = useState(false);
  const [welcomeFading, setWelcomeFading] = useState(false);
  const [welcomeOpened, setWelcomeOpened] = useState(false);
  const [doorOpen, setDoorOpen] = useState(false);
  const [showDoor, setShowDoor] = useState(false);
  const [currentSectionIndex, setCurrentSectionIndex] = useState(0);
  const audioRef = useRef<HTMLAudioElement | null>(null);

  // Start Ganesha animation video exactly 0.2 seconds before the intro ends (6.9s - 0.2s = 6.7s)
  useEffect(() => {
    const timer = setTimeout(() => {
      setGaneshaStarted(true);
    }, 6700);
    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    if (scrollUnlocked) {
      document.body.style.overflow = "";
    } else {
      document.body.style.overflow = "hidden";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [scrollUnlocked]);

  useEffect(() => {
    if (entered) {
      // Keep body background dark brown during transition, then restore default
      const timer = setTimeout(() => {
        document.body.style.backgroundColor = "";
      }, 1500);
      return () => clearTimeout(timer);
    } else {
      document.body.style.backgroundColor = "#150a06"; // Match Welcome section background theme
    }
  }, [entered]);

  // Handle auto-playing music on any mobile/desktop touch or click interaction
  useEffect(() => {
    const handleInteraction = () => {
      const el = audioRef.current;
      if (el && !musicOn) {
        el.play()
          .then(() => setMusicOn(true))
          .catch((e) => console.log("Audio play blocked by browser:", e));
      }
    };

    window.addEventListener("click", handleInteraction);
    window.addEventListener("touchstart", handleInteraction);

    return () => {
      window.removeEventListener("click", handleInteraction);
      window.removeEventListener("touchstart", handleInteraction);
    };
  }, [musicOn]);

  // Track current visible section for Back/Next navigation
  useEffect(() => {
    if (!welcomeOpened) return;

    const observers: IntersectionObserver[] = [];

    SECTION_IDS.forEach((id, idx) => {
      const el = document.getElementById(id);
      if (!el) return;
      const observer = new IntersectionObserver(
        ([entry]) => {
          if (entry.isIntersecting) setCurrentSectionIndex(idx);
        },
        { threshold: 0.4 }
      );
      observer.observe(el);
      observers.push(observer);
    });

    return () => observers.forEach((o) => o.disconnect());
  }, [welcomeOpened]);

  function toggleMusic() {
    const el = audioRef.current;
    if (!el) return;
    if (musicOn) {
      el.pause();
      setMusicOn(false);
    } else {
      el.play().then(() => setMusicOn(true)).catch(() => setMusicOn(false));
    }
  }

  function handleEnter() {
    setEntered(true);
  }

  function handleOpenWelcome() {
    // Show door animation first, then open the page content
    setShowDoor(true);
    setDoorOpen(false); // doors closed initially

    setTimeout(() => {
      // Start swinging doors open
      setDoorOpen(true);
    }, 300);

    // After doors fully open, unlock scroll and show content
    setTimeout(() => {
      setWelcomeFading(true);
      setScrollUnlocked(true);
      setTimeout(() => {
        setWelcomeOpened(true);
      }, 700);
    }, 2300);
  }

  const scrollToSection = useCallback((id: SectionId) => {
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: "smooth" });
  }, []);

  const goToNext = useCallback(() => {
    const nextIdx = Math.min(currentSectionIndex + 1, SECTION_IDS.length - 1);
    scrollToSection(SECTION_IDS[nextIdx]);
    setCurrentSectionIndex(nextIdx);
  }, [currentSectionIndex, scrollToSection]);

  const goToPrevious = useCallback(() => {
    const prevIdx = Math.max(currentSectionIndex - 1, 0);
    scrollToSection(SECTION_IDS[prevIdx]);
    setCurrentSectionIndex(prevIdx);
  }, [currentSectionIndex, scrollToSection]);

  return (
    <>
      {!entered && <Opening onEnter={handleEnter} />}

      {/* Door animation overlay — shown when "Open Invitation" is clicked */}
      {showDoor && (
        <DoorTransition
          isOpen={doorOpen}
          onComplete={() => setShowDoor(false)}
        />
      )}

      <audio
        ref={audioRef}
        loop
        preload="none"
        src="https://cdn.pixabay.com/audio/2022/10/18/audio_25a5116c2b.mp3"
        aria-hidden
      />

      <main>
        {!welcomeOpened && (
          <Welcome
            onOpen={handleOpenWelcome}
            animateGanesha={ganeshaStarted}
            isFading={welcomeFading}
          />
        )}
        <Hero />
        <Story />
        <Events />
        <Gallery />
        <Family />
        <WishingWall />
        <Rsvp />
        <Countdown />
        <Contact />
        <ThankYou />
      </main>

      {/* Floating Back / Next section navigation (visible after welcome is dismissed) */}
      {welcomeOpened && (
        <SectionNavigation
          canGoBack={currentSectionIndex > 0}
          canGoNext={currentSectionIndex < SECTION_IDS.length - 1}
          onBack={goToPrevious}
          onNext={goToNext}
        />
      )}
    </>
  );
}
