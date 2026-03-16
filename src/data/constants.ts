import { Nominee, Testimonial, GalleryItem } from "../types";

export const CATEGORIES = [
  "Best Student",
  "Best Project",
  "Most Innovative",
  "Most Creative",
  "Best Leader",
  "Social Media Star",
];

export const STUDENTS = [
  { id: "s1", name: "Ridwan Balogun", matric: "123456789" },
  { id: "s2", name: "John Doe", matric: "987654321" },
  { id: "s3", name: "Jane Smith", matric: "111222333" },
  { id: "s4", name: "Alex Johnson", matric: "444555666" },
  { id: "s5", name: "Sarah Williams", matric: "777888999" },
  { id: "s6", name: "David Chen", matric: "121212121" },
  { id: "s7", name: "Emily Brown", matric: "343434343" },
  { id: "s8", name: "Michael Scott", matric: "565656565" },
  { id: "s9", name: "Pam Beesly", matric: "787878787" },
  { id: "s10", name: "Jim Halpert", matric: "909090909" },
  { id: "s11", name: "Dwight Schrute", matric: "112233445" },
  { id: "s12", name: "Angela Martin", matric: "556677889" },
  { id: "s13", name: "Kevin Malone", matric: "998877665" },
  { id: "s14", name: "Oscar Martinez", matric: "443322110" },
  { id: "s15", name: "Stanley Hudson", matric: "135792468" },
];

export const NOMINEES: Nominee[] = [
  {
    id: "1",
    name: "Alex Johnson",
    category: "Best Student",
    image: "https://picsum.photos/seed/student1/400/400",
  },
  {
    id: "2",
    name: "Sarah Williams",
    category: "Best Student",
    image: "https://picsum.photos/seed/student2/400/400",
  },
  {
    id: "3",
    name: "David Chen",
    category: "Best Project",
    image: "https://picsum.photos/seed/project1/400/400",
  },
  {
    id: "4",
    name: "Emily Brown",
    category: "Best Project",
    image: "https://picsum.photos/seed/project2/400/400",
  },
  {
    id: "5",
    name: "Michael Scott",
    category: "Most Innovative",
    image: "https://picsum.photos/seed/innov1/400/400",
  },
  {
    id: "6",
    name: "Pam Beesly",
    category: "Most Innovative",
    image: "https://picsum.photos/seed/innov2/400/400",
  },
];

export const TESTIMONIALS: Testimonial[] = [
  {
    id: "1",
    name: "John Doe",
    quote:
      "The awards night was the highlight of my final year. Seeing everyone's hard work recognized was truly inspiring.",
    rating: 5,
    image: "https://picsum.photos/seed/user1/100/100",
  },
  {
    id: "2",
    name: "Jane Smith",
    quote:
      "A night of elegance and celebration. The department really knows how to put on a show!",
    rating: 5,
    image: "https://picsum.photos/seed/user2/100/100",
  },
  {
    id: "3",
    name: "Robert Lee",
    quote:
      "I'm so excited for this year's event. The voting process is fair and the atmosphere is electric.",
    rating: 4,
    image: "https://picsum.photos/seed/user3/100/100",
  },
  {
    id: "4",
    name: "Alice Wong",
    quote:
      "Incredible organization and a truly professional academic atmosphere. Highly recommended!",
    rating: 5,
    image: "https://picsum.photos/seed/user4/100/100",
  },
];

export const GALLERY_ITEMS: GalleryItem[] = [
  {
    id: "1",
    type: "photo",
    url: "https://picsum.photos/seed/event1/800/600",
    thumbnail: "https://picsum.photos/seed/event1/400/300",
    caption: "Grand Opening Ceremony 2025",
    category: "Photos",
  },
  {
    id: "2",
    type: "photo",
    url: "https://picsum.photos/seed/event2/800/600",
    thumbnail: "https://picsum.photos/seed/event2/400/300",
    caption: "Award Presentation",
    category: "Photos",
  },
  {
    id: "3",
    type: "video",
    url: "#",
    thumbnail: "https://picsum.photos/seed/video1/400/300",
    caption: "2025 Highlights Reel",
    category: "Videos",
  },
  {
    id: "4",
    type: "photo",
    url: "https://picsum.photos/seed/event3/800/600",
    thumbnail: "https://picsum.photos/seed/event3/400/300",
    caption: "Student Innovation Showcase",
    category: "Highlights",
  },
  {
    id: "5",
    type: "photo",
    url: "https://picsum.photos/seed/event4/800/600",
    thumbnail: "https://picsum.photos/seed/event4/400/300",
    caption: "Networking Dinner",
    category: "Photos",
  },
  {
    id: "6",
    type: "video",
    url: "#",
    thumbnail: "https://picsum.photos/seed/video2/400/300",
    caption: "Keynote Speech Highlights",
    category: "Videos",
  },
];

export const HERO_SLIDES = [
  {
    image: "/banner.jpeg",
    title: "Celebrating Academic Excellence",
    subtitle: "Join us for a night of recognition and achievement.",
  },
  {
    image: "/banner.jpeg",
    title: "Innovation at its Finest",
    subtitle: "Witness the most groundbreaking projects of the year.",
  },
  {
    image: "/banner.jpeg",
    title: "A Community of Grit",
    subtitle: "Honoring the masters of IT and their journey.",
  },
];

export const SPONSORS = [
  { name: "Tech Corp", logo: "https://picsum.photos/seed/techcorp/200/100" },
  { name: "Innovation Labs", logo: "https://picsum.photos/seed/inno/200/100" },
  { name: "Future Systems", logo: "https://picsum.photos/seed/future/200/100" },
  { name: "Digital Ventures", logo: "https://picsum.photos/seed/global/200/100" },
  { name: "Smart Solutions", logo: "https://picsum.photos/seed/nexus/200/100" },
];

export const SPONSORSHIP_TIERS = [
  {
    level: "Bronze",
    icon: "🥉",
    price: "₦75,000",
    tagline: "Community Supporter",
    color: "from-[#CD7F32] via-[#B87333] to-[#804A00]",
    benefits: [
      "Logo on event banner + digital flyer",
      "Name listed on event website (permanent)",
      "1× dedicated post on class platform (200+ IT professionals)",
    ],
  },
  {
    level: "Silver",
    icon: "🥈",
    price: "₦120,000",
    tagline: "Event Supporter",
    color: "from-[#CBD5E1] via-[#94A3B8] to-[#475569]",
    benefits: [
      "Logo on event banner + digital flyer",
      "Name listed on event website",
      "MC mention at event",
      "2× promo posts on class platform (200+ IT professionals) leading up to the event",
      "Logo on the event programme / printed materials",
    ],
  },
  {
    level: "Gold",
    icon: "🥇",
    price: "₦200,000",
    tagline: "Event Co-presenter · Most Popular",
    color: "from-[#FDE047] via-[#EAB308] to-[#854D0E]",
    popular: true,
    benefits: [
      "Everything in Silver",
      "Prominent logo on all event materials",
      "Brand logo + 60-sec reel played during event (no talking required)",
      "3× promo posts on class platform leading up to event",
      "Featured brand section on event website",
      "Logo embedded in all event promo video clips",
      "Multiple MC mentions throughout event",
    ],
  },
  {
    level: "Platinum",
    icon: "💎",
    price: "₦450,000",
    tagline: "Official Partner · Limited to 3 slots",
    color: "from-[#F8FAFC] via-[#CBD5E1] to-[#64748B]",
    benefits: [
      "Everything in Gold",
      "Recognized as Official Platinum Sponsor",
      "5-min brand moment (90-sec video reel + 2-min MC-led introduction)",
      "Branded activation stand / display table at venue",
      "Option to include branded items in guest packs",
      "Weekly promo posts on class platform until event date",
      "Dedicated brand page on event website",
      "Logo on all recap/highlight videos post-event",
      "Priority MC mentions throughout the entire event",
    ],
  },
  {
    level: "Headline",
    icon: "👑",
    price: "₦1,000,000",
    tagline: "The Presenting Partner · 1 slot only · Most Exclusive",
    color: "from-[#2DD4BF] via-[#14B8A6] to-[#0D9488]",
    exclusive: true,
    benefits: [
      "Everything in Platinum",
      'Event co-branded as "[Your Brand] presents: MIT Class of Grit Awards Night"',
      "Brand name in the event title on all materials",
      "Opening acknowledgement as presenting partner",
      "Branded welcome message / video played at the start",
      'Exclusive "Headline Sponsor" recognition on all digital promotions',
      "Brand logo as the most prominent element on every piece of material",
      "Post-event thank-you campaign naming the Headline Sponsor",
    ],
  },
];


export const FAQS = [
  {
    q: "How are the winners decided?",
    a: "Winners are decided through a combination of student voting (60%) and a faculty review panel (40%) to ensure both popularity and academic merit are recognized.",
  },
  {
    q: "Can I change my vote after submission?",
    a: "Yes, you can change your selection at any time before the voting deadline by re-identifying yourself and updating your choices.",
  },
  {
    q: "What is the dress code for the night?",
    a: "The dress code is Black Tie / Formal. We encourage everyone to dress their best for this prestigious celebration!",
  },
  {
    q: "Is there a limit to how many tickets I can buy?",
    a: "Each student is eligible for up to 2 tickets (one for themselves and one for a guest). Tickets are limited and sold on a first-come, first-served basis.",
  },
];
