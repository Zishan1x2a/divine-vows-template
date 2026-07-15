import { createFileRoute } from "@tanstack/react-router";
import { useEffect, useState, useRef } from "react";
import { Opening } from "@/components/wedding/opening";

import {
  Welcome, Hero, Story, Events, Gallery, Family, WishingWall,
  Rsvp, Countdown, Venue, Registry, Faq, Contact, ThankYou,
} from "@/components/wedding/sections";

export const Route = createFileRoute("/")({
  component: WeddingPage,
});

function WeddingPage() {
  const [entered, setEntered] = useState(false);
  const [ganeshaStarted, setGaneshaStarted] = useState(false);
  const [scrollUnlocked, setScrollUnlocked] = useState(false);
  const [musicOn, setMusicOn] = useState(false);
  const [welcomeFading, setWelcomeFading] = useState(false);
  const [welcomeOpened, setWelcomeOpened] = useState(false);
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
    setWelcomeFading(true);
    setScrollUnlocked(true);
    setTimeout(() => {
      setWelcomeOpened(true);
    }, 700);
  }

  return (
    <>
      {!entered && <Opening onEnter={handleEnter} />}

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
        <Venue />
        <Registry />
        <Faq />
        <Contact />
        <ThankYou />
      </main>
    </>
  );
}
