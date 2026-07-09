import { useEffect, useState } from "react";
import { Menu, X, Music2, VolumeX } from "lucide-react";
import { navSections } from "@/data/wedding";

export function Nav({ musicOn, toggleMusic }: { musicOn: boolean; toggleMusic: () => void }) {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const [active, setActive] = useState("welcome");

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 60);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) setActive(e.target.id);
        });
      },
      { rootMargin: "-40% 0px -55% 0px" },
    );
    navSections.forEach((s) => {
      const el = document.getElementById(s.id);
      if (el) io.observe(el);
    });
    return () => io.disconnect();
  }, []);

  function go(id: string) {
    setOpen(false);
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth", block: "start" });
  }

  return (
    <>
      <header
        className={`fixed inset-x-0 top-0 z-50 transition-all duration-500 ${
          scrolled ? "glass-card border-b-0 shadow-lg" : ""
        }`}
      >
        <div className="mx-auto flex max-w-7xl items-center justify-between gap-4 px-4 py-3 sm:px-8">
          <button onClick={() => go("welcome")} className="flex items-center gap-2 focus:outline-none">
            <svg width="28" height="28" viewBox="0 0 32 32">
              <path d="M16 2 L18 14 L30 16 L18 18 L16 30 L14 18 L2 16 L14 14 Z" fill="#D4AF37" />
            </svg>
            <span className="font-couple text-sm sm:text-base gold-text tracking-wider">P & A</span>
          </button>

          <nav className="hidden lg:flex items-center gap-6 text-[11px] uppercase tracking-[0.25em]">
            {navSections.slice(0, 10).map((s) => (
              <button
                key={s.id}
                onClick={() => go(s.id)}
                className={`transition-colors ${
                  active === s.id ? "text-[#B8862A]" : "text-maroon/70 hover:text-[#D4AF37]"
                }`}
              >
                {s.label}
              </button>
            ))}
          </nav>

          <div className="flex items-center gap-2">
            <button
              onClick={toggleMusic}
              aria-label={musicOn ? "Mute music" : "Play music"}
              className="grid h-10 w-10 place-items-center rounded-full gold-border glass-card text-maroon transition-transform hover:scale-105"
            >
              {musicOn ? <Music2 size={16} /> : <VolumeX size={16} />}
            </button>
            <button
              onClick={() => setOpen((v) => !v)}
              aria-label="Menu"
              className="grid h-10 w-10 place-items-center rounded-full gold-border glass-card text-maroon lg:hidden"
            >
              {open ? <X size={18} /> : <Menu size={18} />}
            </button>
          </div>
        </div>
      </header>

      {/* Mobile drawer */}
      <div
        className={`fixed inset-0 z-40 transition-opacity duration-500 lg:hidden ${
          open ? "opacity-100" : "pointer-events-none opacity-0"
        }`}
        onClick={() => setOpen(false)}
      >
        <div className="absolute inset-0 bg-nightbg/70 backdrop-blur-md" />
        <div
          className="absolute right-0 top-0 h-full w-[85%] max-w-sm glass-card p-8 pt-24"
          onClick={(e) => e.stopPropagation()}
        >
          <nav className="flex flex-col gap-4">
            {navSections.map((s) => (
              <button
                key={s.id}
                onClick={() => go(s.id)}
                className={`text-left font-heading text-2xl transition-colors ${
                  active === s.id ? "gold-text" : "text-maroon-deep hover:text-[#B8862A]"
                }`}
              >
                {s.label}
              </button>
            ))}
          </nav>
        </div>
      </div>
    </>
  );
}
