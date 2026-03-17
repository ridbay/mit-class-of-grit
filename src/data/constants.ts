import { Nominee, Testimonial, GalleryItem } from "../types";

export const CATEGORY_GROUPS = [
  {
    name: "Merit Awards for Lecturers",
    description:
      "Recognizing lecturers who have gone above and beyond in their academic duties.",
    categories: [
      {
        id: "l1",
        name: "Outstanding Lecturer of the Year",
        description:
          "Awarded to the lecturer who consistently demonstrates exceptional teaching quality, thorough knowledge of their subject, and a genuine commitment to student success. This lecturer shows up prepared, engaged, and passionate every single time.",
      },
      {
        id: "l2",
        name: "Most Impactful Lecturer",
        description:
          "For the lecturer whose influence extends beyond the classroom — one whose lessons, advice, or mentorship has meaningfully shaped the way students think, work, or see the world. Their impact is felt long after the semester ends.",
      },
      {
        id: "l3",
        name: "Student's Choice Lecturer Award",
        description:
          "A people's award — purely driven by student appreciation. This goes to the lecturer who students genuinely love: approachable, fair, supportive, and always in their corner.",
      },
    ],
  },
  {
    name: "Merit Awards for Students",
    description:
      "Celebrating students who have demonstrated exceptional character and contribution.",
    categories: [
      {
        id: "s_m1",
        name: "Leadership Excellence Award",
        description:
          "For the student who leads with integrity, vision, and purpose. Whether in official roles or informally, this person inspires others, takes initiative, and sets the standard for what it means to lead well.",
      },
      {
        id: "s_m2",
        name: "Most Supportive Classmate Award",
        description:
          "For the student who is always there — sharing notes, offering encouragement, checking in on others, and making sure no one is left behind. Their kindness makes the entire class better.",
      },
      {
        id: "s_m3",
        name: "Outstanding Student Award",
        description:
          "Recognizing the student who excels across the board — academically, socially, and in character. This is the all-around best representation of what a student in this department should be.",
      },
    ],
  },
  {
    name: "Recognition Awards for Students",
    description:
      "Fun, personality-driven awards that celebrate the unique qualities that make our class special.",
    categories: [
      {
        id: "r1",
        name: "Most Enterprising Student",
        description:
          "For the student who is always building something — a business, a brand, a project, or an idea. Resourceful, ambitious, and never waiting for opportunity to knock.",
      },
      {
        id: "r2",
        name: "Most Influential Student",
        description:
          "For the student whose opinions, actions, and presence genuinely shape the thinking and behavior of those around them. When they speak, people listen.",
      },
      {
        id: "r3",
        name: "Best Dressed / Style Icon",
        description:
          "For the student who consistently shows up looking put-together, stylish, and intentional. Their personal style is distinctive and always on point.",
      },
      {
        id: "r4",
        name: "Most Community-Minded Student",
        description:
          "For the student who thinks beyond themselves — actively contributing to the class, department, or wider community through service, advocacy, or consistent acts of goodwill.",
      },
      {
        id: "r5",
        name: "The Charisma Award",
        description:
          "For the student with a magnetic personality — warm, confident, and naturally draws people in. Everyone knows them, and everyone enjoys being around them.",
      },
      {
        id: "r6",
        name: "The Connector Award",
        description:
          "For the student who knows everyone and brings people together. They make introductions, build bridges, and are the reason many friendships and collaborations in the class even exist.",
      },
      {
        id: "r7",
        name: "The Innovative Thinker Award",
        description:
          "For the student who approaches problems differently — creative, analytical, and never satisfied with \"because that's how it's always been done.\" They bring fresh perspectives to every challenge.",
      },
      {
        id: "r8",
        name: "The Collaboration Award",
        description:
          "For the student who makes every group work better. Reliable, team-oriented, and the kind of person everyone wants on their project — not just for the work, but for the energy they bring.",
      },
      {
        id: "r9",
        name: "The Renaissance Student Award",
        description:
          "For the student who does it all — academics, extracurriculars, creativity, and more. Versatile, well-rounded, and impossible to put in a box.",
      },
      {
        id: "r10",
        name: "The Catalyst Award",
        description:
          "For the student whose energy, enthusiasm, and presence elevates every room they walk into. They don't just participate — they ignite. Where they go, things happen.",
      },
    ],
  },
];

export const CATEGORIES = CATEGORY_GROUPS.flatMap((group) =>
  group.categories.map((cat) => cat.name),
);

export const CATEGORY_DESCRIPTIONS: Record<string, string> = {};
CATEGORY_GROUPS.forEach((group) => {
  group.categories.forEach((cat) => {
    CATEGORY_DESCRIPTIONS[cat.name] = cat.description;
  });
});

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
    category: "Outstanding Student Award",
    image: "https://picsum.photos/seed/student1/400/400",
  },
  {
    id: "2",
    name: "Sarah Williams",
    category: "Outstanding Student Award",
    image: "https://picsum.photos/seed/student2/400/400",
  },
  {
    id: "3",
    name: "Dr. David Chen",
    category: "Outstanding Lecturer of the Year",
    image: "https://picsum.photos/seed/project1/400/400",
  },
  {
    id: "4",
    name: "Prof. Emily Brown",
    category: "Outstanding Lecturer of the Year",
    image: "https://picsum.photos/seed/project2/400/400",
  },
  {
    id: "5",
    name: "Michael Scott",
    category: "The Charisma Award",
    image: "https://picsum.photos/seed/innov1/400/400",
  },
  {
    id: "6",
    name: "Pam Beesly",
    category: "The Charisma Award",
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
    id: "g1",
    type: "photo",
    url: "https://lh3.googleusercontent.com/d/11WLjCuKNJUOptI7zVEEDwhmTj5sJ-f0V",
    thumbnail:
      "https://lh3.googleusercontent.com/d/11WLjCuKNJUOptI7zVEEDwhmTj5sJ-f0V",
    caption: "Memories of Grit 1",
    category: "Photos",
  },
  {
    id: "g2",
    type: "photo",
    url: "https://lh3.googleusercontent.com/d/12HD6g-gy_Hp0pqQ91eMKlcpTuYyDX1_K",
    thumbnail:
      "https://lh3.googleusercontent.com/d/12HD6g-gy_Hp0pqQ91eMKlcpTuYyDX1_K",
    caption: "Memories of Grit 2",
    category: "Photos",
  },
  {
    id: "g3",
    type: "photo",
    url: "https://lh3.googleusercontent.com/d/13k41Yd96I0hnIriGXBPDNi9RnWOvbueP",
    thumbnail:
      "https://lh3.googleusercontent.com/d/13k41Yd96I0hnIriGXBPDNi9RnWOvbueP",
    caption: "Memories of Grit 3",
    category: "Photos",
  },
  {
    id: "g4",
    type: "photo",
    url: "https://lh3.googleusercontent.com/d/14_9K7d0YcFDbm_hQ3_LqO10BC9IMrFd4",
    thumbnail:
      "https://lh3.googleusercontent.com/d/14_9K7d0YcFDbm_hQ3_LqO10BC9IMrFd4",
    caption: "Memories of Grit 4",
    category: "Photos",
  },
  {
    id: "g5",
    type: "photo",
    url: "https://lh3.googleusercontent.com/d/152OtWQXcINO0AxF0KtYHGLExGd0Di1Ct",
    thumbnail:
      "https://lh3.googleusercontent.com/d/152OtWQXcINO0AxF0KtYHGLExGd0Di1Ct",
    caption: "Memories of Grit 5",
    category: "Photos",
  },
  {
    id: "g6",
    type: "photo",
    url: "https://lh3.googleusercontent.com/d/18LmNpmK7yoGdnI89sxGt0maT9wdGG2v6",
    thumbnail:
      "https://lh3.googleusercontent.com/d/18LmNpmK7yoGdnI89sxGt0maT9wdGG2v6",
    caption: "Memories of Grit 6",
    category: "Photos",
  },
  {
    id: "g7",
    type: "photo",
    url: "https://lh3.googleusercontent.com/d/1A_Jo4uQFyaKpxPTVTVsWhSLJWxv4E16M",
    thumbnail:
      "https://lh3.googleusercontent.com/d/1A_Jo4uQFyaKpxPTVTVsWhSLJWxv4E16M",
    caption: "Memories of Grit 7",
    category: "Photos",
  },
  {
    id: "g8",
    type: "photo",
    url: "https://lh3.googleusercontent.com/d/1EO_OorSMxs1UnOr4OIaIgROveU698tuI",
    thumbnail:
      "https://lh3.googleusercontent.com/d/1EO_OorSMxs1UnOr4OIaIgROveU698tuI",
    caption: "Memories of Grit 8",
    category: "Photos",
  },
  {
    id: "g9",
    type: "photo",
    url: "https://lh3.googleusercontent.com/d/1EUPBEsDF5oxZjhy_aQznLaqxuaWj2IXX",
    thumbnail:
      "https://lh3.googleusercontent.com/d/1EUPBEsDF5oxZjhy_aQznLaqxuaWj2IXX",
    caption: "Memories of Grit 9",
    category: "Photos",
  },
  {
    id: "g10",
    type: "photo",
    url: "https://lh3.googleusercontent.com/d/1FpZCU-uTkwA8YOybV__bnY6CmcOTreHe",
    thumbnail:
      "https://lh3.googleusercontent.com/d/1FpZCU-uTkwA8YOybV__bnY6CmcOTreHe",
    caption: "Memories of Grit 10",
    category: "Photos",
  },
  {
    id: "g11",
    type: "photo",
    url: "https://lh3.googleusercontent.com/d/1Jr5FqJ8f0-lp_CepC844Zcp1ITLZRpHs",
    thumbnail:
      "https://lh3.googleusercontent.com/d/1Jr5FqJ8f0-lp_CepC844Zcp1ITLZRpHs",
    caption: "Memories of Grit 11",
    category: "Photos",
  },
  {
    id: "g12",
    type: "photo",
    url: "https://lh3.googleusercontent.com/d/1KclGk0eJ2qeYddOH_sZCgUnVHnKOh84r",
    thumbnail:
      "https://lh3.googleusercontent.com/d/1KclGk0eJ2qeYddOH_sZCgUnVHnKOh84r",
    caption: "Memories of Grit 12",
    category: "Photos",
  },
  {
    id: "g13",
    type: "photo",
    url: "https://lh3.googleusercontent.com/d/1LcjM0idKZeuKyBy-2Yk1ehDoeKtO_QgK",
    thumbnail:
      "https://lh3.googleusercontent.com/d/1LcjM0idKZeuKyBy-2Yk1ehDoeKtO_QgK",
    caption: "Memories of Grit 13",
    category: "Photos",
  },
  {
    id: "g14",
    type: "photo",
    url: "https://lh3.googleusercontent.com/d/1Mf88m3RLqpeIqfma57CFFDz6eD5Gf97P",
    thumbnail:
      "https://lh3.googleusercontent.com/d/1Mf88m3RLqpeIqfma57CFFDz6eD5Gf97P",
    caption: "Memories of Grit 14",
    category: "Photos",
  },
  {
    id: "g15",
    type: "photo",
    url: "https://lh3.googleusercontent.com/d/1QWND3c8CpLxqdhCNhdMUUcaunVPp6vb1",
    thumbnail:
      "https://lh3.googleusercontent.com/d/1QWND3c8CpLxqdhCNhdMUUcaunVPp6vb1",
    caption: "Memories of Grit 15",
    category: "Photos",
  },
  {
    id: "g16",
    type: "photo",
    url: "https://lh3.googleusercontent.com/d/1QlRWKXfnUSLmp_pKax4s0X5OL2by7bMm",
    thumbnail:
      "https://lh3.googleusercontent.com/d/1QlRWKXfnUSLmp_pKax4s0X5OL2by7bMm",
    caption: "Memories of Grit 16",
    category: "Photos",
  },
  {
    id: "g17",
    type: "photo",
    url: "https://lh3.googleusercontent.com/d/1VDr3NjQn0GuGHQVeQwZWGpIA7URknFSR",
    thumbnail:
      "https://lh3.googleusercontent.com/d/1VDr3NjQn0GuGHQVeQwZWGpIA7URknFSR",
    caption: "Memories of Grit 17",
    category: "Photos",
  },
  {
    id: "g18",
    type: "photo",
    url: "https://lh3.googleusercontent.com/d/1W7-0-XGTqmdrqcfY00BUfkU6Q8fsXQIg",
    thumbnail:
      "https://lh3.googleusercontent.com/d/1W7-0-XGTqmdrqcfY00BUfkU6Q8fsXQIg",
    caption: "Memories of Grit 18",
    category: "Photos",
  },
  {
    id: "g19",
    type: "photo",
    url: "https://lh3.googleusercontent.com/d/1X0y6hLq-SL_ZQMbXc8kvROOwEtrrzH0Y",
    thumbnail:
      "https://lh3.googleusercontent.com/d/1X0y6hLq-SL_ZQMbXc8kvROOwEtrrzH0Y",
    caption: "Memories of Grit 19",
    category: "Photos",
  },
  {
    id: "g20",
    type: "photo",
    url: "https://lh3.googleusercontent.com/d/1Y3HeoyVSFbwMdEEsuGpp2XWsU8fe1JX4",
    thumbnail:
      "https://lh3.googleusercontent.com/d/1Y3HeoyVSFbwMdEEsuGpp2XWsU8fe1JX4",
    caption: "Memories of Grit 20",
    category: "Photos",
  },
  {
    id: "g21",
    type: "photo",
    url: "https://lh3.googleusercontent.com/d/1YAjI3uf-W2lKjkyoHunE57Xmd9n3K_jE",
    thumbnail:
      "https://lh3.googleusercontent.com/d/1YAjI3uf-W2lKjkyoHunE57Xmd9n3K_jE",
    caption: "Memories of Grit 21",
    category: "Photos",
  },
  {
    id: "g22",
    type: "photo",
    url: "https://lh3.googleusercontent.com/d/1YNbR7XgnHWvtl68LAxS9fHWvWHesZ4ru",
    thumbnail:
      "https://lh3.googleusercontent.com/d/1YNbR7XgnHWvtl68LAxS9fHWvWHesZ4ru",
    caption: "Memories of Grit 22",
    category: "Photos",
  },
  {
    id: "g23",
    type: "photo",
    url: "https://lh3.googleusercontent.com/d/1aWq0EsQFpYqf_nuNEiAV2OivvRhN2TO0",
    thumbnail:
      "https://lh3.googleusercontent.com/d/1aWq0EsQFpYqf_nuNEiAV2OivvRhN2TO0",
    caption: "Memories of Grit 23",
    category: "Photos",
  },
  {
    id: "g24",
    type: "photo",
    url: "https://lh3.googleusercontent.com/d/1e4MTiH-8h27eu3c2dGCs5gCFvD-6d3D6",
    thumbnail:
      "https://lh3.googleusercontent.com/d/1e4MTiH-8h27eu3c2dGCs5gCFvD-6d3D6",
    caption: "Memories of Grit 24",
    category: "Photos",
  },
  {
    id: "g25",
    type: "photo",
    url: "https://lh3.googleusercontent.com/d/1fIcokdAEkDPnXfgEqcZY_v1Xn8az6eBW",
    thumbnail:
      "https://lh3.googleusercontent.com/d/1fIcokdAEkDPnXfgEqcZY_v1Xn8az6eBW",
    caption: "Memories of Grit 25",
    category: "Photos",
  },
  {
    id: "g26",
    type: "photo",
    url: "https://lh3.googleusercontent.com/d/1jQOnylAxBKpkIqw4V7cqHRY_vKwzImTR",
    thumbnail:
      "https://lh3.googleusercontent.com/d/1jQOnylAxBKpkIqw4V7cqHRY_vKwzImTR",
    caption: "Memories of Grit 26",
    category: "Photos",
  },
  {
    id: "g27",
    type: "photo",
    url: "https://lh3.googleusercontent.com/d/1jsuli_ceas7KlMjBu9JZt1TLNJyzrVxD",
    thumbnail:
      "https://lh3.googleusercontent.com/d/1jsuli_ceas7KlMjBu9JZt1TLNJyzrVxD",
    caption: "Memories of Grit 27",
    category: "Photos",
  },
  {
    id: "g28",
    type: "photo",
    url: "https://lh3.googleusercontent.com/d/1kGo5kyeHNfHO6e8gNCXMRSbtfHWavLlk",
    thumbnail:
      "https://lh3.googleusercontent.com/d/1kGo5kyeHNfHO6e8gNCXMRSbtfHWavLlk",
    caption: "Memories of Grit 28",
    category: "Photos",
  },
  {
    id: "g29",
    type: "photo",
    url: "https://lh3.googleusercontent.com/d/1lG7mQhuICvG0fsdl1sPX7zkwwpZPjIlJ",
    thumbnail:
      "https://lh3.googleusercontent.com/d/1lG7mQhuICvG0fsdl1sPX7zkwwpZPjIlJ",
    caption: "Memories of Grit 29",
    category: "Photos",
  },
  {
    id: "g30",
    type: "photo",
    url: "https://lh3.googleusercontent.com/d/1lmUBFebPMNjSztdf2rArDiDz4ZgZ52Qy",
    thumbnail:
      "https://lh3.googleusercontent.com/d/1lmUBFebPMNjSztdf2rArDiDz4ZgZ52Qy",
    caption: "Memories of Grit 30",
    category: "Photos",
  },
  {
    id: "g31",
    type: "photo",
    url: "https://lh3.googleusercontent.com/d/1mWopkD0Eko2WDM7PpKHXpoeTKyVwwHdu",
    thumbnail:
      "https://lh3.googleusercontent.com/d/1mWopkD0Eko2WDM7PpKHXpoeTKyVwwHdu",
    caption: "Memories of Grit 31",
    category: "Photos",
  },
  {
    id: "g32",
    type: "photo",
    url: "https://lh3.googleusercontent.com/d/1ox_oEjUhNbc1ME-3-0uizMFaGIaR0C44",
    thumbnail:
      "https://lh3.googleusercontent.com/d/1ox_oEjUhNbc1ME-3-0uizMFaGIaR0C44",
    caption: "Memories of Grit 32",
    category: "Photos",
  },
  {
    id: "g33",
    type: "photo",
    url: "https://lh3.googleusercontent.com/d/1qKBBPRVxbwK341NinArkmu0XqwCs-ToW",
    thumbnail:
      "https://lh3.googleusercontent.com/d/1qKBBPRVxbwK341NinArkmu0XqwCs-ToW",
    caption: "Memories of Grit 33",
    category: "Photos",
  },
  {
    id: "g34",
    type: "photo",
    url: "https://lh3.googleusercontent.com/d/1qajkR1oVwlaP7HAFVllICjh9ZIXjHMfT",
    thumbnail:
      "https://lh3.googleusercontent.com/d/1qajkR1oVwlaP7HAFVllICjh9ZIXjHMfT",
    caption: "Memories of Grit 34",
    category: "Photos",
  },
  {
    id: "g35",
    type: "photo",
    url: "https://lh3.googleusercontent.com/d/1qwWTnjrM9DbEIxVL9-jIzRhAlYoe_W19",
    thumbnail:
      "https://lh3.googleusercontent.com/d/1qwWTnjrM9DbEIxVL9-jIzRhAlYoe_W19",
    caption: "Memories of Grit 35",
    category: "Photos",
  },
  {
    id: "g36",
    type: "photo",
    url: "https://lh3.googleusercontent.com/d/1rni-v0gG0ecS_B0uVSpq8R_c7o6UKOg_",
    thumbnail:
      "https://lh3.googleusercontent.com/d/1rni-v0gG0ecS_B0uVSpq8R_c7o6UKOg_",
    caption: "Memories of Grit 36",
    category: "Photos",
  },
  {
    id: "g37",
    type: "photo",
    url: "https://lh3.googleusercontent.com/d/1sx4Z8kxOoX4oUpvJtiGPf0QqFYdpFyck",
    thumbnail:
      "https://lh3.googleusercontent.com/d/1sx4Z8kxOoX4oUpvJtiGPf0QqFYdpFyck",
    caption: "Memories of Grit 37",
    category: "Photos",
  },
  {
    id: "g38",
    type: "photo",
    url: "https://lh3.googleusercontent.com/d/1vYRdOo9bNAG9ijImnbd1CSJSNRyIdufv",
    thumbnail:
      "https://lh3.googleusercontent.com/d/1vYRdOo9bNAG9ijImnbd1CSJSNRyIdufv",
    caption: "Memories of Grit 38",
    category: "Photos",
  },
  {
    id: "g39",
    type: "photo",
    url: "https://lh3.googleusercontent.com/d/1wTeFNFLnLwWx1UJOtjejskAW8gIFR9bM",
    thumbnail:
      "https://lh3.googleusercontent.com/d/1wTeFNFLnLwWx1UJOtjejskAW8gIFR9bM",
    caption: "Memories of Grit 39",
    category: "Photos",
  },
  {
    id: "g40",
    type: "photo",
    url: "https://lh3.googleusercontent.com/d/1yX4kh7DvcEdjBv17G31b3XYU67SlYgCJ",
    thumbnail:
      "https://lh3.googleusercontent.com/d/1yX4kh7DvcEdjBv17G31b3XYU67SlYgCJ",
    caption: "Memories of Grit 40",
    category: "Photos",
  },
  {
    id: "g41",
    type: "photo",
    url: "https://lh3.googleusercontent.com/d/1yrQdrXEnoTdyHSZMF57bLaE3oEVSdPbS",
    thumbnail:
      "https://lh3.googleusercontent.com/d/1yrQdrXEnoTdyHSZMF57bLaE3oEVSdPbS",
    caption: "Memories of Grit 41",
    category: "Photos",
  },
  {
    id: "3",
    type: "video",
    url: "https://firebasestorage.googleapis.com/v0/b/kfit-fe6eb.firebasestorage.app/o/IMG_0632.MOV?alt=media&token=d8ed73cb-9745-4f49-80ea-b053c9e6e2c9",
    thumbnail:
      "https://lh3.googleusercontent.com/d/1e4MTiH-8h27eu3c2dGCs5gCFvD-6d3D6",
    caption: "Moments of Grit: Performance",
    category: "Videos",
  },
  {
    id: "8",
    type: "video",
    url: "https://firebasestorage.googleapis.com/v0/b/kfit-fe6eb.firebasestorage.app/o/IMG_0646.MOV?alt=media&token=f31e16c5-8e54-486e-a1d7-ec3350979069",
    thumbnail:
      "https://lh3.googleusercontent.com/d/1EUPBEsDF5oxZjhy_aQznLaqxuaWj2IXX",
    caption: "Moments of Grit: Awards",
    category: "Videos",
  },
];

export const HERO_SLIDES = [
  {
    image: "/banner.jpeg",
    title: "THEME: Celebrating Excellence & Innovation",
    subtitle:
      "Join us for an unforgettable evening of recognition, connection, and celebration as we honour the resilience, brilliance, and innovation of the MIT Class.",
  },
  {
    image: "/banner.jpeg",
    title: "Innovation at its Finest",
    subtitle:
      "A night dedicated to celebrating the brilliant minds, hard work, and unyielding determination of our IT students.",
  },
  {
    image: "/banner.jpeg",
    title: "A Class of Grit",
    subtitle: "Honoring the masters of IT and their journey.",
  },
];

export const SPONSORS = [
  { name: "Tech Corp", logo: "https://picsum.photos/seed/techcorp/200/100" },
  { name: "Innovation Labs", logo: "https://picsum.photos/seed/inno/200/100" },
  { name: "Future Systems", logo: "https://picsum.photos/seed/future/200/100" },
  {
    name: "Digital Ventures",
    logo: "https://picsum.photos/seed/global/200/100",
  },
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
