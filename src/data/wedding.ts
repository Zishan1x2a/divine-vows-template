import ganesha from "@/assets/ganesha.jpg";
import couple from "@/assets/couple.jpg";
import templeArch from "@/assets/temple-arch.jpg";
import g1 from "@/assets/gallery-1.jpg";
import g2 from "@/assets/gallery-2.jpg";
import g3 from "@/assets/gallery-3.jpg";
import g4 from "@/assets/gallery-4.jpg";
import sunset from "@/assets/sunset-temple.jpg";
import venueImg from "@/assets/venue.jpg";

export const IMG = {
  ganesha, couple, templeArch, sunset, venue: venueImg,
  gallery: [g1, g2, g3, g4, g1, g2, g3, g4],
};

// Fixed demo wedding date (stable across SSR/client)
const WEDDING_DATE = new Date("2026-11-14T18:30:00+05:30");

export const wedding = {
  guest: { name: "Rajesh & Family" },
  couple: {
    bride: "Priya Sharma",
    groom: "Aarav Kapoor",
    brideShort: "Priya",
    groomShort: "Aarav",
    tagline: "Two souls, one sacred vow",
  },
  date: WEDDING_DATE,
  dateLabel: WEDDING_DATE.toLocaleDateString("en-IN", {
    weekday: "long", day: "numeric", month: "long", year: "numeric",
  }),
  venue: {
    name: "Rambagh Heritage Palace",
    address: "Bhawani Singh Rd, Rambagh, Jaipur, Rajasthan 302005",
    mapEmbed: "https://www.google.com/maps?q=Rambagh+Palace+Jaipur&output=embed",
    directions: "https://www.google.com/maps/dir/?api=1&destination=Rambagh+Palace+Jaipur",
    parking: "Complimentary valet parking available on-site",
    stay: "Reserved rooms at Rambagh Palace and Jai Mahal — mention 'Priya & Aarav Wedding'",
  },
  story: [
    { title: "First Meeting", date: "Mumbai, 2019", desc: "A rainy monsoon evening at a friend's Diwali party — one glance across a room of diyas, and the world went quiet.", img: g1 },
    { title: "First Conversation", date: "December 2019", desc: "Three hours over cutting chai that felt like three minutes. We knew that night this was something rare.", img: g3 },
    { title: "The Proposal", date: "Udaipur, 2023", desc: "On a boat at Lake Pichola, at golden hour, with a ring hidden in a marigold bouquet.", img: g2 },
    { title: "Engagement", date: "Spring 2024", desc: "Blessed by both families under a canopy of jasmine, we exchanged rings and promises.", img: g4 },
    { title: "The Wedding", date: "This Season", desc: "And now, surrounded by everyone we love, we begin forever.", img: couple },
  ],
  events: [
    { name: "Ganesh Puja", icon: "🕉️", date: "Day 1 · Morning", time: "9:00 AM", venue: "Family Residence", dress: "Traditional Ivory", desc: "Invoking the blessings of Lord Ganesha to begin our sacred journey." },
    { name: "Haldi", icon: "🌼", date: "Day 1 · Afternoon", time: "12:00 PM", venue: "Palace Courtyard", dress: "Yellow Traditional", desc: "A joyful turmeric ceremony bathing the couple in golden blessings." },
    { name: "Mehendi", icon: "🌿", date: "Day 1 · Evening", time: "5:00 PM", venue: "Garden Pavilion", dress: "Green & Floral", desc: "Intricate henna stories drawn on hands to the sound of dholak and song." },
    { name: "Sangeet", icon: "🎶", date: "Day 2 · Evening", time: "7:30 PM", venue: "Grand Ballroom", dress: "Cocktail Indian", desc: "A night of music, dance, laughter — where both families become one." },
    { name: "Baraat", icon: "🐎", date: "Day 3 · Evening", time: "6:00 PM", venue: "Palace Entrance", dress: "Royal Attire", desc: "The groom's procession — horses, drums, and dancing through torchlight." },
    { name: "Wedding Ceremony", icon: "🔥", date: "Day 3 · Night", time: "8:30 PM", venue: "Sacred Mandap", dress: "Royal Maroon & Gold", desc: "Seven vows around the sacred fire, witnessed by earth, sky, and all we love." },
    { name: "Reception", icon: "✨", date: "Day 4 · Evening", time: "7:00 PM", venue: "Palace Terrace", dress: "Black Tie / Indo-Western", desc: "A celebration under the stars — champagne, kababs, and endless dancing." },
  ],
  family: {
    groom: [
      { name: "Vikram Kapoor", relation: "Father of the Groom" },
      { name: "Meera Kapoor", relation: "Mother of the Groom" },
      { name: "Arjun Kapoor", relation: "Brother of the Groom" },
      { name: "Isha Kapoor", relation: "Sister of the Groom" },
      { name: "Dadaji Kapoor", relation: "Grandfather" },
      { name: "Dadiji Kapoor", relation: "Grandmother" },
    ],
    bride: [
      { name: "Rakesh Sharma", relation: "Father of the Bride" },
      { name: "Anjali Sharma", relation: "Mother of the Bride" },
      { name: "Rohan Sharma", relation: "Brother of the Bride" },
      { name: "Kavya Sharma", relation: "Sister of the Bride" },
      { name: "Nanaji Verma", relation: "Grandfather" },
      { name: "Naniji Verma", relation: "Grandmother" },
    ],
  },
  initialWishes: [
    { name: "Neha & Karan", msg: "May your love be as eternal as the Ganges. So happy for you both!" },
    { name: "Uncle Suresh", msg: "Aarav beta, from your childhood cricket days to now — what a journey. Blessings always." },
    { name: "Sneha", msg: "Priya, watching you find your person has been the joy of a lifetime. 💖" },
    { name: "The Malhotras", msg: "Two beautiful families becoming one. Wishing you a lifetime of laughter." },
    { name: "Riya", msg: "Best cousin ever finally settling down! Congratulations to you both!" },
  ],
  dressCode: [
    { event: "Haldi", palette: "Sunshine Yellow", desc: "Anything that glows like turmeric — kurtas, saris, or florals.", colors: ["#F4C430", "#F8E473", "#E8B60E"] },
    { event: "Mehendi", palette: "Emerald & Floral", desc: "Green tones with fresh floral prints, comfortable and light.", colors: ["#0B6B4A", "#84C58E", "#E7E1B7"] },
    { event: "Sangeet", palette: "Sapphire & Silver", desc: "Cocktail-ready jewel tones for a night of dancing.", colors: ["#1B3A6B", "#7A9CC6", "#C7CBD4"] },
    { event: "Wedding", palette: "Royal Maroon & Gold", desc: "Traditional finery — silks, gold jewelry, regal reds.", colors: ["#6E1F2A", "#D4AF37", "#F8F6F2"] },
    { event: "Reception", palette: "Midnight & Champagne", desc: "Black tie or indo-western in sleek, elegant tones.", colors: ["#0F0F17", "#C7A870", "#F2E9D8"] },
  ],
  faqs: [
    { q: "What time should I arrive?", a: "Please arrive 30 minutes before each ceremony to be seated. The Baraat begins promptly, so being on time helps us all!" },
    { q: "Is parking available?", a: "Yes — complimentary valet parking is available at the palace for all guests across all events." },
    { q: "Is accommodation provided?", a: "We've reserved a block of rooms at Rambagh Palace and Jai Mahal Palace at a special rate. Mention 'Priya & Aarav Wedding' when booking." },
    { q: "Can I bring a plus one?", a: "Please refer to your invitation — plus ones are listed by name. For any changes, kindly reach out to us before RSVP closes." },
    { q: "What is the dress code?", a: "Each event has its own palette — see the Dress Code section for guidance. Traditional Indian attire is always welcomed and encouraged." },
    { q: "Will there be vegetarian options?", a: "Yes! All events feature extensive vegetarian, vegan, and Jain menus alongside non-vegetarian selections." },
  ],
  contacts: {
    bride: [
      { name: "Rohan Sharma", role: "Bride's Brother", phone: "+91 98765 43210" },
      { name: "Kavya Sharma", role: "Bride's Sister", phone: "+91 98765 43211" },
    ],
    groom: [
      { name: "Arjun Kapoor", role: "Groom's Brother", phone: "+91 98765 43220" },
      { name: "Isha Kapoor", role: "Groom's Sister", phone: "+91 98765 43221" },
    ],
  },
};

export const ganeshMantra = {
  sanskrit: [
    "॥ वक्रतुण्ड महाकाय सूर्यकोटि समप्रभ ।",
    "निर्विघ्नं कुरु मे देव सर्वकार्येषु सर्वदा ॥",
  ],
  english: "O Lord with the curved trunk and mighty form, radiant as a million suns — remove all obstacles from our path, always, in every endeavour.",
};

export const navSections = [
  { id: "welcome", label: "Welcome" },
  { id: "hero", label: "Couple" },
  { id: "story", label: "Story" },
  { id: "events", label: "Events" },
  { id: "gallery", label: "Gallery" },
  { id: "family", label: "Family" },
  { id: "wishes", label: "Wishes" },
  { id: "rsvp", label: "RSVP" },
  { id: "countdown", label: "Countdown" },
  { id: "venue", label: "Venue" },
  { id: "dresscode", label: "Dress Code" },
  { id: "registry", label: "Gifts" },
  { id: "faq", label: "FAQ" },
  { id: "contact", label: "Contact" },
];
