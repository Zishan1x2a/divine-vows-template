import { createFileRoute } from "@tanstack/react-router";
import { useEffect, useState, useRef } from "react";
import { Opening } from "@/components/wedding/opening";
import { Nav } from "@/components/wedding/nav";
import {
  Welcome, Hero, Story, Events, Gallery, Family, WishingWall,
  Rsvp, Countdown, Venue, DressCode, Registry, Faq, Contact, ThankYou,
} from "@/components/wedding/sections";

export const Route = createFileRoute("/")({
  component: WeddingPage,
});

function WeddingPage() {
  const [entered, setEntered] = useState(false);
  const [musicOn, setMusicOn] = useState(false);
  const audioRef = useRef<HTMLAudioElement | null>(null);

  useEffect(() => {
    if (entered) {
      document.body.style.overflow = "";
    } else {
      document.body.style.overflow = "hidden";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [entered]);

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

  return (
    <>
      {!entered && <Opening onEnter={() => setEntered(true)} />}

      <audio
        ref={audioRef}
        loop
        preload="none"
        src="https://cdn.pixabay.com/audio/2022/10/18/audio_25a5116c2b.mp3"
        aria-hidden
      />

      <Nav musicOn={musicOn} toggleMusic={toggleMusic} />

      <main>
        <Welcome />
        <Hero />
        <Story />
        <Events />
        <Gallery />
        <Family />
        <WishingWall />
        <Rsvp />
        <Countdown />
        <Venue />
        <DressCode />
        <Registry />
        <Faq />
        <Contact />
        <ThankYou />
      </main>
    </>
  );
}
