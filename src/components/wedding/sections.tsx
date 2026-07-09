import { useEffect, useMemo, useRef, useState } from "react";
import { useForm } from "react-hook-form";
import {
  Calendar, Clock, MapPin, Sparkles, Heart, Phone, MessageCircle,
  Gift, ChevronDown, X, Car, BedDouble, Navigation, Check,
} from "lucide-react";
import { wedding, ganeshMantra, IMG } from "@/data/wedding";
import {
  ArchFrame, FloatingPetals, GoldenParticles, MandalaBg,
  Ornament, Reveal, SectionTitle, GoldButton,
} from "./decor";

/* =========================================================
   WELCOME
   ========================================================= */
export function Welcome() {
  return (
    <section id="welcome" className="relative overflow-hidden py-24 sm:py-32">
      <MandalaBg className="left-1/2 top-1/2 h-[900px] w-[900px] -translate-x-1/2 -translate-y-1/2" />
      <FloatingPetals count={10} />
      <GoldenParticles count={16} />
      <div className="mx-auto max-w-4xl px-6 text-center">
        <Reveal>
          <p className="mb-4 text-xs uppercase tracking-[0.5em] text-maroon/60">
            Dear {wedding.guest.name}
          </p>
        </Reveal>
        <Reveal delay={0.15}>
          <div className="mx-auto w-full max-w-md">
            <div className="relative animate-glow-pulse rounded-2xl">
              <img
                src={IMG.ganesha}
                alt="Lord Ganesha, remover of obstacles"
                width={1024}
                height={1280}
                className="w-full rounded-2xl gold-border animate-soft-zoom"
                loading="eager"
              />
            </div>
          </div>
        </Reveal>
        <Reveal delay={0.35}>
          <div className="mt-10 space-y-2 font-heading text-xl sm:text-2xl italic text-maroon-deep">
            {ganeshMantra.sanskrit.map((line, i) => (
              <p key={i}>{line}</p>
            ))}
          </div>
          <p className="mx-auto mt-4 max-w-xl text-sm text-muted-foreground italic">
            {ganeshMantra.english}
          </p>
        </Reveal>
        <Reveal delay={0.5}>
          <Ornament className="mt-10" />
          <p className="mt-6 text-xs uppercase tracking-[0.4em] text-maroon/70">
            With the blessings of Lord Ganesha
          </p>
          <p className="mt-4 font-heading text-2xl sm:text-3xl text-maroon-deep">
            You are cordially invited
          </p>
          <p className="mt-1 text-sm text-muted-foreground">to celebrate the wedding of</p>
          <h1 className="mt-6 font-couple gold-text text-5xl sm:text-7xl md:text-8xl leading-[1.1]">
            {wedding.couple.brideShort}
            <span className="mx-3 text-3xl sm:text-5xl text-[#D4AF37]">&</span>
            {wedding.couple.groomShort}
          </h1>
          <div className="mt-8">
            <GoldButton
              as="a"
              href="#hero"
              onClick={undefined as unknown as () => void}
            >
              Open Invitation ✧
            </GoldButton>
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
      <div
        aria-hidden
        className="absolute inset-0"
        style={{
          backgroundImage: `linear-gradient(180deg, color-mix(in oklab, var(--ivory) 90%, transparent), color-mix(in oklab, var(--ivory) 60%, transparent)), url(${IMG.templeArch})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          filter: "saturate(1.1)",
        }}
      />
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
            <div className="mt-8 flex flex-wrap justify-center gap-3 md:justify-start">
              <GoldButton as="a" href="#story">Explore Celebration</GoldButton>
              <a
                href="#events"
                className="inline-flex items-center gap-2 rounded-full gold-border px-8 py-3.5 text-sm uppercase tracking-[0.25em] text-maroon-deep transition-all hover:bg-gold/10"
              >
                Wedding Events
              </a>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}

/* =========================================================
   STORY (curved timeline)
   ========================================================= */
export function Story() {
  return (
    <section id="story" className="relative overflow-hidden py-24 bg-[color-mix(in_oklab,var(--beige)_55%,var(--ivory))]">
      <MandalaBg className="right-0 top-10 h-[600px] w-[600px] opacity-40" />
      <div className="mx-auto max-w-6xl px-6">
        <SectionTitle eyebrow="Our Journey" title="Our Story" subtitle="Five moments woven into forever." />
        <div className="relative">
          {/* curved gold line */}
          <svg
            aria-hidden
            viewBox="0 0 1000 1200"
            preserveAspectRatio="none"
            className="pointer-events-none absolute inset-0 hidden h-full w-full md:block"
          >
            <path
              d="M500 40 C 200 200, 800 400, 200 600 S 800 900, 500 1160"
              fill="none"
              stroke="#D4AF37"
              strokeWidth="2"
              strokeDasharray="6 8"
              opacity="0.5"
            />
          </svg>
          <div className="relative space-y-14">
            {wedding.story.map((s, i) => (
              <Reveal key={s.title} delay={i * 0.05}>
                <div className={`grid grid-cols-1 items-center gap-6 md:grid-cols-2 ${i % 2 ? "md:[&>*:first-child]:order-2" : ""}`}>
                  <div className="glass-card rounded-2xl p-3 shadow-xl">
                    <div className="aspect-[4/3] overflow-hidden rounded-xl">
                      <img src={s.img} alt={s.title} className="h-full w-full object-cover transition-transform duration-700 hover:scale-105" loading="lazy" />
                    </div>
                  </div>
                  <div className={`glass-card relative rounded-2xl p-8 shadow-lg`}>
                    <div className="absolute -top-4 left-8 grid h-10 w-10 place-items-center rounded-full gold-gradient text-maroon-deep font-couple text-sm shadow-gold">
                      {i + 1}
                    </div>
                    <p className="text-xs uppercase tracking-[0.35em] text-[#B8862A]">{s.date}</p>
                    <h3 className="mt-2 font-heading text-3xl text-maroon-deep">{s.title}</h3>
                    <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{s.desc}</p>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

/* =========================================================
   EVENTS
   ========================================================= */
export function Events() {
  const [openIdx, setOpenIdx] = useState<number | null>(null);
  return (
    <section id="events" className="relative overflow-hidden py-24">
      <FloatingPetals count={10} />
      <div className="mx-auto max-w-6xl px-6">
        <SectionTitle eyebrow="Ceremonies" title="Wedding Events" subtitle="Each ritual, a chapter of our celebration." />
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {wedding.events.map((e, i) => (
            <Reveal key={e.name} delay={i * 0.04}>
              <button
                onClick={() => setOpenIdx(openIdx === i ? null : i)}
                className={`group relative w-full text-left glass-card rounded-2xl p-6 transition-all duration-500 hover:-translate-y-1 hover:shadow-2xl ${
                  i % 2 ? "md:translate-y-6" : ""
                }`}
              >
                <div className="mb-3 flex items-start justify-between">
                  <span className="text-4xl">{e.icon}</span>
                  <span className="text-[10px] uppercase tracking-[0.3em] text-[#B8862A]">{e.date}</span>
                </div>
                <h3 className="font-heading text-2xl text-maroon-deep">{e.name}</h3>
                <div className="mt-3 space-y-1 text-xs text-muted-foreground">
                  <p className="flex items-center gap-2"><Clock size={12} /> {e.time}</p>
                  <p className="flex items-center gap-2"><MapPin size={12} /> {e.venue}</p>
                  <p className="flex items-center gap-2"><Sparkles size={12} /> {e.dress}</p>
                </div>
                <div
                  className="grid overflow-hidden transition-[grid-template-rows] duration-500"
                  style={{ gridTemplateRows: openIdx === i ? "1fr" : "0fr" }}
                >
                  <div className="min-h-0">
                    <p className="mt-4 border-t border-gold/30 pt-4 text-sm italic text-maroon-deep">{e.desc}</p>
                  </div>
                </div>
                <div className="mt-4 flex items-center gap-1 text-[10px] uppercase tracking-[0.3em] text-[#B8862A]">
                  {openIdx === i ? "Less" : "More"} <ChevronDown size={12} className={`transition-transform ${openIdx === i ? "rotate-180" : ""}`} />
                </div>
              </button>
            </Reveal>
          ))}
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
    <section id="gallery" className="relative overflow-hidden py-24 bg-[color-mix(in_oklab,var(--beige)_45%,var(--ivory))]">
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
    <section id="wishes" className="relative overflow-hidden py-24 bg-[color-mix(in_oklab,var(--maroon)_8%,var(--ivory))]">
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
  meal: string;
  message?: string;
};

export function Rsvp() {
  const { register, handleSubmit, formState: { errors, isSubmitting } } = useForm<RsvpForm>({
    defaultValues: { attending: "yes", guests: 1, meal: "veg" },
  });
  const [sent, setSent] = useState(false);

  async function onSubmit(data: RsvpForm) {
    console.log("RSVP:", data);
    await new Promise((r) => setTimeout(r, 600));
    setSent(true);
  }

  return (
    <section id="rsvp" className="relative overflow-hidden py-24">
      <MandalaBg className="left-10 top-10 h-[500px] w-[500px]" />
      <div className="mx-auto max-w-3xl px-6">
        <SectionTitle eyebrow="Kindly Respond" title="RSVP" subtitle="Please let us know by 15 days before the wedding." />
        <div className="glass-card rounded-3xl p-8 sm:p-12 shadow-xl">
          {sent ? (
            <div className="py-12 text-center">
              <div className="mx-auto grid h-20 w-20 place-items-center rounded-full gold-gradient text-maroon-deep shadow-gold animate-glow-pulse">
                <Check size={40} strokeWidth={3} />
              </div>
              <FloatingPetals count={20} className="opacity-70" />
              <h3 className="mt-6 font-heading text-3xl gold-text">Thank you!</h3>
              <p className="mt-2 text-sm text-muted-foreground">Your blessing is our joy. We can't wait to celebrate with you.</p>
            </div>
          ) : (
            <form onSubmit={handleSubmit(onSubmit)} className="grid gap-5 sm:grid-cols-2">
              <Field label="Full Name" error={errors.name?.message}>
                <input {...register("name", { required: "Name required", maxLength: 80 })} className={inp} />
              </Field>
              <Field label="Phone" error={errors.phone?.message}>
                <input {...register("phone", { required: "Phone required", maxLength: 20 })} className={inp} />
              </Field>
              <Field label="Will you attend?" full>
                <div className="flex gap-3">
                  {["yes", "no"].map((v) => (
                    <label key={v} className="flex-1 cursor-pointer">
                      <input type="radio" value={v} {...register("attending")} className="peer sr-only" />
                      <div className="rounded-lg gold-border px-4 py-3 text-center text-sm capitalize transition-all peer-checked:gold-gradient peer-checked:text-maroon-deep peer-checked:shadow-gold">
                        {v === "yes" ? "Yes, joyfully!" : "Regrets"}
                      </div>
                    </label>
                  ))}
                </div>
              </Field>
              <Field label="Number of Guests">
                <input type="number" min={1} max={10} {...register("guests", { valueAsNumber: true })} className={inp} />
              </Field>
              <Field label="Meal Preference">
                <select {...register("meal")} className={inp}>
                  <option value="veg">Vegetarian</option>
                  <option value="non-veg">Non-Vegetarian</option>
                  <option value="jain">Jain</option>
                  <option value="vegan">Vegan</option>
                </select>
              </Field>
              <Field label="Message (optional)" full>
                <textarea rows={3} maxLength={300} {...register("message")} className={inp} />
              </Field>
              <div className="sm:col-span-2 flex justify-center">
                <GoldButton type="submit">
                  {isSubmitting ? "Sending..." : "Send RSVP ✧"}
                </GoldButton>
              </div>
            </form>
          )}
        </div>
      </div>
    </section>
  );
}

const inp =
  "w-full rounded-lg gold-border bg-ivory/60 px-4 py-2.5 text-sm outline-none transition focus:ring-2 focus:ring-[#D4AF37]";

function Field({
  label, children, error, full,
}: { label: string; children: React.ReactNode; error?: string; full?: boolean }) {
  return (
    <div className={full ? "sm:col-span-2" : ""}>
      <label className="mb-2 block text-[10px] uppercase tracking-[0.3em] text-maroon-deep">{label}</label>
      {children}
      {error && <p className="mt-1 text-xs text-destructive">{error}</p>}
    </div>
  );
}

/* =========================================================
   COUNTDOWN
   ========================================================= */
function useCountdown(target: Date) {
  const [now, setNow] = useState(() => Date.now());
  useEffect(() => {
    const id = setInterval(() => setNow(Date.now()), 1000);
    return () => clearInterval(id);
  }, []);
  const diff = Math.max(0, target.getTime() - now);
  const s = Math.floor(diff / 1000);
  return {
    done: diff === 0,
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
      className="relative overflow-hidden py-24 text-ivory"
      style={{
        backgroundImage: `linear-gradient(180deg, rgba(20,10,4,.85), rgba(20,10,4,.75)), url(${IMG.sunset})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
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
   DRESS CODE
   ========================================================= */
export function DressCode() {
  return (
    <section id="dresscode" className="relative overflow-hidden py-24 bg-[color-mix(in_oklab,var(--beige)_45%,var(--ivory))]">
      <div className="mx-auto max-w-6xl px-6">
        <SectionTitle eyebrow="What to Wear" title="Dress Code" subtitle="A palette for every ceremony." />
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {wedding.dressCode.map((d, i) => (
            <Reveal key={d.event} delay={i * 0.05}>
              <div className="group glass-card rounded-2xl p-6 transition-all duration-500 hover:-translate-y-1 hover:shadow-2xl">
                <div className="flex gap-2 mb-4">
                  {d.colors.map((c) => (
                    <span
                      key={c}
                      className="h-10 flex-1 rounded-lg shadow-inner transition-transform group-hover:scale-y-110"
                      style={{ background: c }}
                    />
                  ))}
                </div>
                <p className="text-[10px] uppercase tracking-[0.3em] text-[#B8862A]">{d.event}</p>
                <h3 className="mt-2 font-heading text-2xl text-maroon-deep">{d.palette}</h3>
                <p className="mt-2 text-sm text-muted-foreground">{d.desc}</p>
              </div>
            </Reveal>
          ))}
        </div>
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
    <section id="faq" className="relative overflow-hidden py-24 bg-[color-mix(in_oklab,var(--maroon)_6%,var(--ivory))]">
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
    <section
      className="relative overflow-hidden py-32 text-ivory"
      style={{
        backgroundImage: `linear-gradient(180deg, rgba(10,6,3,.55), rgba(10,6,3,.9)), url(${IMG.sunset})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
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
