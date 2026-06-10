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
  { id: "s1", name: "Unuigboje Aisagbonhi Ohimai", matric: "840404062" },
  { id: "s2", name: "DIKE SAMUEL CHINWE", matric: "950403029" },
  { id: "s3", name: "Okoh Victor Iduh", matric: "249074104" },
  { id: "s4", name: "HASSAN ABDULLAHI ADEWALE", matric: "60403042" },
  { id: "s5", name: "Olajide Ronke Opeyemi", matric: "249074097" },
  { id: "s6", name: "Adeyemo David Oluwatosin", matric: "100808017" },
  { id: "s7", name: "ECHEWODOR CHINANU SONIA", matric: "100903065" },
  { id: "s8", name: "OGBONNA AGUIYI FIDELIS", matric: "110808053" },
  { id: "s9", name: "Ogunyemi Dolapo Ezekiel", matric: "120805086" },
  { id: "s10", name: "Ikeri Priscilla Oluchukwu", matric: "130310014" },
  { id: "s11", name: "Oyeleye Daniel Aduragbemi", matric: "140201134" },
  { id: "s12", name: "Kesinro Iyinolanla Jubilee", matric: "140205049" },
  { id: "s13", name: "Akintelure Omowasola Oluwatamilore", matric: "140408025" },
  { id: "s14", name: "Ekundayo Mathew Mayowa", matric: "140408037" },
  { id: "s15", name: "Alade Olumide Segun", matric: "150808040" },
  { id: "s16", name: "Adebayo Olabode Oluwatimileyin", matric: "160804519" },
  { id: "s17", name: "OYEBOLA Olaoluwa Isaac", matric: "170901082" },
  { id: "s18", name: "AKINRULI OLUWASEUN AYOTUNDE", matric: "219043011" },
  { id: "s19", name: "ARIBISALA ADETOMIWA SAMUEL", matric: "239074130" },
  { id: "s20", name: "SOLOLA OPEYEMI BENJAMIN", matric: "239074149" },
  { id: "s21", name: "BALOGUN RIDWAN BABATUNDE", matric: "249074001" },
  { id: "s22", name: "Olowofela Yinka Seun", matric: "249074003" },
  { id: "s23", name: "Ikegbune Nnamdi Franklin", matric: "249074004" },
  { id: "s24", name: "Oluwa Damilola Mojeed", matric: "249074005" },
  { id: "s25", name: "Abass Olaniyi Suraju", matric: "249074095" },
  { id: "s26", name: "Olalude Oluwasegun", matric: "249074008" },
  { id: "s27", name: "Mosaku Oreoluwa Olasubomi", matric: "249074009" },
  { id: "s28", name: "Odemakin Victoria Ifeoluwa", matric: "249074010" },
  { id: "s29", name: "Adeniyi Oluwadamilare Elijah", matric: "249074011" },
  { id: "s30", name: "Obadele Akindele Olawunmi", matric: "249074012" },
  { id: "s31", name: "AKOMOLAFE MARY TITILAYO", matric: "249074013" },
  { id: "s32", name: "UMAR BOBGA SANTOS", matric: "249074096" },
  { id: "s33", name: "Idowu Olaoluwa John", matric: "249074015" },
  { id: "s34", name: "Sofolabo Ebunoluwa Godiya", matric: "249074016" },
  { id: "s35", name: "Olukotun Felicia", matric: "249074017" },
  { id: "s36", name: "Rauf Babatunde Abdulqudus", matric: "249074018" },
  { id: "s37", name: "Boluwade Segun Joshua", matric: "249074019" },
  { id: "s38", name: "Omoruyi Efosa David", matric: "249074020" },
  { id: "s39", name: "Ogunjumelo Jesubori Oladunni", matric: "249074021" },
  { id: "s40", name: "AJAYI FRIDAY ASHA", matric: "249074022" },
  { id: "s41", name: "Afasinu Kayode Julius", matric: "249074023" },
  { id: "s42", name: "Idris Mustapha Suleiman", matric: "249074024" },
  { id: "s43", name: "Ali Hussaina", matric: "249074025" },
  { id: "s44", name: "Akinbami Collins Tobi", matric: "249074027" },
  { id: "s45", name: "Talabi Titilayo Joy", matric: "249074029" },
  { id: "s46", name: "Awofolaju Oluwatobiloba Jesufolaju", matric: "249074100" },
  { id: "s47", name: "Bodunde Olaoluwa Joseph", matric: "249074031" },
  { id: "s48", name: "AJAYI OLUWAFIKAYO OMONIYI", matric: "249074032" },
  { id: "s49", name: "Okesanjo Quamarudeen Okedayo", matric: "249074033" },
  { id: "s50", name: "Kafari Qudus Adeshola", matric: "249074034" },
  { id: "s51", name: "Uhoegbu Chinyere Perpetua", matric: "249074228" },
  { id: "s52", name: "On-Emore Nyerovwo Bobs", matric: "249074036" },
  { id: "s53", name: "Oladokun Ajibola Grace", matric: "249074037" },
  { id: "s54", name: "AYENI TOLULOPE OLABODE", matric: "249074038" },
  { id: "s55", name: "Obibi Amarachukwu Jacob", matric: "249074039" },
  { id: "s56", name: "ODEKU TOLUWALOPE OLASUNKANMI", matric: "249074040" },
  { id: "s57", name: "Faleye Opeoluwa Emmanuel", matric: "249074041" },
  { id: "s58", name: "Ndukwe Emmanuel Chukwudi", matric: "249074043" },
  { id: "s59", name: "IDOWU OLUBUNMI DEBORAH", matric: "249074044" },
  { id: "s60", name: "Osifeso Ayodeji Oluwaseun", matric: "249074045" },
  { id: "s61", name: "Uwamusi Amos Ehiomone", matric: "249074046" },
  { id: "s62", name: "Ayoade Rasheed Adedamola", matric: "249074048" },
  { id: "s63", name: "Balogun Oluwasegun Olamilekan", matric: "249074049" },
  { id: "s64", name: "IBRAHIM ABIOLA DAVID", matric: "249074052" },
  { id: "s65", name: "Ogunlana Ibrahim Tokunbo", matric: "249074105" },
  { id: "s66", name: "OGUNLEYE MOYOSORE ADEDOLAMU", matric: "249074054" },
  { id: "s67", name: "ALAYAKI ALEEMAH OYINDAMOLA", matric: "249074094" },
  { id: "s68", name: "Osilaja Oyindamola Oluwatosin", matric: "249074056" },
  { id: "s69", name: "Oluseye Bolaji Solomon", matric: "249074059" },
  { id: "s70", name: "FALOMO SEGUN SAMUEL", matric: "249074062" },
  { id: "s71", name: "Salami Yinka Ibrahim", matric: "249074063" },
  { id: "s72", name: "ODOMETA BAYOWA ANUOLU", matric: "249074065" },
  { id: "s73", name: "Ayeni Mariam Abiodun", matric: "249074102" },
  { id: "s74", name: "Odili Janet Olaoluwa", matric: "249074101" },
  { id: "s75", name: "Ochim Hannah Lebechi", matric: "249074070" },
  { id: "s76", name: "FATUNWASE MICHEAL", matric: "249074072" },
  { id: "s77", name: "Echatah Oluwatunmise Deborah", matric: "249074073" },
  { id: "s78", name: "CHUKWUMAH RHEMA EMEKA", matric: "249074074" },
  { id: "s79", name: "OLOGUNRO AGBOOLA AREMU", matric: "249074077" },
  { id: "s80", name: "ABIODUN KEHINDE ABDULRAHMAN", matric: "249074078" },
  { id: "s81", name: "Ekumatalor Glory Funmilayo", matric: "249074079" },
  { id: "s82", name: "Oduh Ihiene Stephen", matric: "249074080" },
  { id: "s83", name: "Nsofor Rosecollet Ifeoma", matric: "249074081" },
  { id: "s84", name: "KAZEEM OLADEHINDE OLANREWAJU", matric: "249074082" },
  { id: "s85", name: "SHOSANYA OLAWALE LUKMON", matric: "249074085" },
  { id: "s86", name: "Oshodi Babatunde Opeyemi", matric: "249074088" },
  { id: "s87", name: "Momoh Ridwan Ohiani", matric: "249074090" },
  { id: "s88", name: "Olabayo Oluwagbemiga Olakunle", matric: "249074091" },
  { id: "s89", name: "OLADOSU TAYO HABIB", matric: "249074092" },
  { id: "s90", name: "Owonam Enobong Godwin", matric: "249074093" },
  { id: "s91", name: "BADIRU ISMAIL KOFOWOROLA", matric: "80201050" },
  { id: "s92", name: "OYEDELE BABATUNDE GBEMILEKE", matric: "249074119" },
  { id: "s93", name: "AZEEZ YUSSUF OLABANJI", matric: "249074007" },
  { id: "s94", name: "oshinnuga olufayokunmi ololade", matric: "249074030" },
  { id: "s95", name: "LAWAL AZEEZAT OPEYEMI", matric: "249074035" },
  { id: "s96", name: "Abagha Emmanuel Chimdi", matric: "249074014" },
  { id: "s97", name: "SOILE KAZEEM OLUWOLE", matric: "249074067" },
  { id: "s98", name: "OKUNGBURE OLUSEGUN OPEYEMI", matric: "249074055" },
  { id: "s99", name: "Palmer Mary Enifome", matric: "249074066" },
  { id: "s100", name: "Ekwebelem Barry Ifeanyi", matric: "249074053" },
  { id: "s101", name: "Ajayi Sefunmi Ayomilekan", matric: "249074106" },
  { id: "s102", name: "ADENUGA OLUWAPELUMI AYOMIKUN", matric: "249074107" },
  { id: "s103", name: "Salaudeen Abdmuiz Omogbolahan", matric: "249074108" },
  { id: "s104", name: "UGWUNNAH EBERECHUKWU ENYINNA", matric: "249074110" },
  { id: "s105", name: "Nkwo Chidubem Ambrose", matric: "249074111" },
  { id: "s106", name: "Hassan Rofiat Olamide", matric: "249074112" },
  { id: "s107", name: "Ajayi Olamide Peter", matric: "249074113" },
  { id: "s108", name: "Olasehinde Victor Jeremiah", matric: "249074114" },
  { id: "s109", name: "Adepoju William Olorunfemi", matric: "249074117" },
  { id: "s110", name: "Agboola Afolabi Olulewa", matric: "249074118" },
  { id: "s111", name: "IBEH JUDE KELECHI", matric: "971002340" },
  { id: "s112", name: "Adeniji Jumain Adedolapo", matric: "249074121" },
  { id: "s113", name: "Alimi Mukhtar Odunayo", matric: "249074122" },
  { id: "s114", name: "Ighele-efi Theresa Okhozagbon", matric: "249074123" },
  { id: "s115", name: "Odusegun Oluwafemi Oluwaseun", matric: "249074126" },
  { id: "s116", name: "Adenroye Olanrewaju Faruk", matric: "249074127" },
  { id: "s117", name: "Muhammed Khaliq Adeola", matric: "249074128" },
  { id: "s118", name: "Awogbemi Oluwatobiloba Emmanuel", matric: "249074129" },
  { id: "s119", name: "ODUNUGA OLUWANINSOLA OLUWATOSIN", matric: "249074131" },
  { id: "s120", name: "Obadina Olusegun Babatunji", matric: "249074133" },
  { id: "s121", name: "Osuagwu Juliet Chidinma", matric: "249074134" },
  { id: "s122", name: "BADMUS-RAJI ZAYNAB GBEMISOLA", matric: "249074135" },
  { id: "s123", name: "SHOWEMIMO RUKAYAT OYINDAMOLA", matric: "249074136" },
  { id: "s124", name: "ADAMU ABUBAKAR", matric: "249074138" },
  { id: "s125", name: "Atoyebi John Oluwafemi", matric: "249074139" },
  { id: "s126", name: "Bello Deborah Abidemi", matric: "249074141" },
  { id: "s127", name: "ADESANYA DAMILARE DAVID", matric: "249074145" },
  { id: "s128", name: "ALIMI AZEEZ ADEBAYO", matric: "249074146" },
  { id: "s129", name: "Zaid Oluwatamilore Ayomide", matric: "249074150" },
  { id: "s130", name: "Dina Iyanuloluwa Anuoluwapo", matric: "249074152" },
  { id: "s131", name: "Mosi Paul Arinze", matric: "249074153" },
  { id: "s132", name: "Adebanjo Ademola Michael", matric: "249074154" },
  { id: "s133", name: "Ezekiel Olabode Johnson", matric: "249074155" },
  { id: "s134", name: "IDOWU OLOLADE ADEDAPO", matric: "249074156" },
  { id: "s135", name: "Ojoboorun Babajide Olawale", matric: "249074160" },
  { id: "s136", name: "Yusuf Saheed Sijuade", matric: "249074161" },
  { id: "s137", name: "Ayu Sunday Mkav", matric: "249074162" },
  { id: "s138", name: "OSEH AUGUSTA CHUKWUNONSO", matric: "249074163" },
  { id: "s139", name: "Aitomun Faith Omonigho", matric: "249074164" },
  { id: "s140", name: "Abdulsalam Ahmed Ola", matric: "249074165" },
  { id: "s141", name: "SHORUN TOLUWASE EMMANUEL", matric: "249074166" },
  { id: "s142", name: "Oyedeji Oluwafunsho Oluwatosin", matric: "249074167" },
  { id: "s143", name: "Johnson Iffiok", matric: "249074169" },
  { id: "s144", name: "Ile Samuel", matric: "249074170" },
  { id: "s145", name: "Arijeloye Oluwarotimi Emmanuel", matric: "249074171" },
  { id: "s146", name: "NMONWU ERNEST OBUMNEKE", matric: "249074172" },
  { id: "s147", name: "EGHO SUNDAY IMUENTINYAN", matric: "249074173" },
  { id: "s148", name: "AYENI OPEYEMI MOYINOLUWA", matric: "249074174" },
  { id: "s149", name: "Ariyo Temitope Williams", matric: "249074175" },
  { id: "s150", name: "OJEZUA LAURA", matric: "249074176" },
  { id: "s151", name: "Olotu Johnson Olurotimi", matric: "249074177" },
  { id: "s152", name: "NKUMEH CHIDINMA LOVETH", matric: "249074178" },
  { id: "s153", name: "SIDI DAUDA", matric: "249074179" },
  { id: "s154", name: "Amoke Paschal Chizoba", matric: "249074180" },
  { id: "s155", name: "Sobamowo Busayo Omowunmi", matric: "249074181" },
  { id: "s156", name: "OKUNADE OLUWASEUN ADEGBAYIN", matric: "249074185" },
  { id: "s157", name: "Ibeh Juliet Chinwe", matric: "249074186" },
  { id: "s158", name: "ALARAPE OLUWAFEMI OLAOLU", matric: "249074187" },
  { id: "s159", name: "Osadebamwen Oghosa Ogheneochuko", matric: "249074188" },
  { id: "s160", name: "Bassey Constant Joseph", matric: "249074189" },
  { id: "s161", name: "MURITALA MUYIDEEN BABATUNDE", matric: "249074191" },
  { id: "s162", name: "Adebayo Tosin Esther", matric: "249074192" },
  { id: "s163", name: "John Monday Thomas", matric: "249074193" },
  { id: "s164", name: "Udoh Godswill Francis", matric: "249074194" },
  { id: "s165", name: "Ajayi Oladotun Temitope", matric: "249074195" },
  { id: "s166", name: "ABUDU HAMMED OPEYEMI", matric: "249074196" },
  { id: "s167", name: "Oshodi Nasirudeen Oladipupo", matric: "249074197" },
  { id: "s168", name: "Sadoh Israel Oyakhilome", matric: "249074198" },
  { id: "s169", name: "Adeneye Samuel Oluwaseun", matric: "249074199" },
  { id: "s170", name: "IROKO MOSES MAUNAPON", matric: "249074200" },
  { id: "s171", name: "Akinola Isaiah Akinpelumi", matric: "249074201" },
  { id: "s172", name: "Olaniran Samuel Ayomide", matric: "249074202" },
  { id: "s173", name: "Taiwo Babatunde Oluwatoyin", matric: "249074205" },
  { id: "s174", name: "ONYEBUCHI JULIET UGONNA", matric: "249074208" },
  { id: "s175", name: "Jimoh Kadiri Bola", matric: "249074209" },
  { id: "s176", name: "Ovwori Edesiri", matric: "249074210" },
  { id: "s177", name: "Adeniyi Segun Gbenga", matric: "249074212" },
  { id: "s178", name: "Chukwu Emmanuel Oluwatobi", matric: "249074213" },
  { id: "s179", name: "Eze Favour Amarachi", matric: "249074214" },
  { id: "s180", name: "OKEKE CHINUA KENNEDY", matric: "249074215" },
  { id: "s181", name: "SHONDE PETER DAMILOLA", matric: "249074217" },
  { id: "s182", name: "Idaewor Peace Nihin", matric: "249074218" },
  { id: "s183", name: "Abioye Ayokunnumi Tomiwa", matric: "249074219" },
  { id: "s184", name: "Opasanya Favour Ibukunoluwa", matric: "249074220" },
  { id: "s185", name: "Oluwasola Tolase Mercy", matric: "249074221" },
  { id: "s186", name: "LONGE OLUWADAMILARE DANIEL", matric: "249074223" },
  { id: "s187", name: "ADEDEJI ADESIMBO ISAAC", matric: "249074226" },
  { id: "s188", name: "Richard Peculiar Chinonyelum", matric: "249074227" },
  { id: "s189", name: "Agbo Emmanuel Aboh", matric: "249074103" },
  { id: "s190", name: "ANYAOHA JOHN AMARACHI", matric: "249074229" },
  { id: "s191", name: "OGUNBIYI OLUWADAMILOLA MARY", matric: "249074230" },
  { id: "s192", name: "BABATUNDE ISAAC FISAYO", matric: "249074231" },
  { id: "s193", name: "Arowoogun Peter Ademola", matric: "249074233" },
  { id: "s194", name: "POMARY PATRICK OPEYEMI", matric: "249074235" },
  { id: "s195", name: "Egwunyenga Gloria Onokiloye", matric: "249074237" },
  { id: "s196", name: "Adebayo Ademola Ayobami", matric: "249074243" },
  { id: "s197", name: "Okeke Ebuka Vincent", matric: "249074244" },
  { id: "s198", name: "OYEKANMI SAMUEL AYOBAMI", matric: "249074245" },
  { id: "s199", name: "Sheni Nangwang Jeremiah", matric: "249074246" },
  { id: "s200", name: "Edareno Nicholas Oroghene", matric: "249074247" },
  { id: "s201", name: "Ukaegbu Chidinma Glory", matric: "249074248" },
  { id: "s202", name: "EMENIKE KINGSLEY CHIJIOKE", matric: "249074249" },
  { id: "s203", name: "AKINRINMADE OLUWASEGUN MICHAEL", matric: "249074250" },
  { id: "s204", name: "Oruma Chojakeme Benedicta", matric: "249074251" },
  { id: "s205", name: "AWHANJINU EBENEZER SETON", matric: "249074252" },
  { id: "s206", name: "Adeboye Noah Adegoke", matric: "249074253" },
  { id: "s207", name: "Daramola Oluwafemi Opeoluwa", matric: "249074255" },
  { id: "s208", name: "NABABA SALAUDEEN IMAM", matric: "249074258" },
  { id: "s209", name: "IKIODA OSIONE OLUWASEYI", matric: "249074259" },
  { id: "s210", name: "Demurin Martins Olalekan", matric: "249074260" },
  { id: "s211", name: "UGHEGHE EHIOSU DANIEL", matric: "249074261" },
  { id: "s212", name: "AYOADE OPEOLUWA DAVID", matric: "249074263" },
  { id: "s213", name: "Toki Omoye", matric: "249074265" },
  { id: "s214", name: "Akintomide Anuoluwapo Mary", matric: "249074266" },
  { id: "s215", name: "Osundare Olajide Soji", matric: "249074267" },
  { id: "s216", name: "Olatoke Jumai Ayomide", matric: "249074268" },
  { id: "s217", name: "Atewe Obed Onuelu", matric: "249074270" },
  { id: "s218", name: "Ekpobadarho Blessing Oghenetejiri", matric: "249074271" },
  { id: "s219", name: "Russel Eduje Sharon", matric: "249074275" },
  { id: "s220", name: "ADEKANBI ABOLADE TEMITOPE", matric: "249074276" },
  { id: "s221", name: "KENNEDY WILSON UGO", matric: "249074277" },
  { id: "s222", name: "Oyewole Emmanuel Temitope", matric: "249074279" },
  { id: "s223", name: "Okumgba Samuel Diepreye", matric: "249074280" },
  { id: "s224", name: "OLAMISOJI OLUWAKAMIKUN EBUN", matric: "249074283" },
  { id: "s225", name: "Banjo Victoria Oluwatosin", matric: "249074284" },
  { id: "s226", name: "Olalekan Muyiwa Olawale", matric: "249074285" },
  { id: "s227", name: "Akinola Olalekan Idris", matric: "249074286" },
  { id: "s228", name: "Akpan Patience Friday", matric: "249074287" },
  { id: "s229", name: "Luke-Metibaiye Oluwashina Christopher", matric: "249074288" },
  { id: "s230", name: "Oreoluwa Israel Ipinnuoluwakiiye", matric: "249074289" },
  { id: "s231", name: "TONY-OSAHON ADESUWA OMONO", matric: "249074290" },
  { id: "s232", name: "Adeniyi Abdulazeez Tosin", matric: "249074292" },
  { id: "s233", name: "Ugbala James Emeka", matric: "249074293" },
  { id: "s234", name: "Aliu Lateefat", matric: "249074294" },
  { id: "s235", name: "Gezawa Umar Sulaiman", matric: "249074295" },
  { id: "s236", name: "HAMMED MUBARAQ OLAMILEKAN", matric: "249074296" },
  { id: "s237", name: "Ekuge Obiara Obianuju", matric: "249074299" },
  { id: "s238", name: "Akindele Oluwademilade Adeyemi", matric: "249074300" },
  { id: "s239", name: "Salu Oluwatomisin Emmanuel", matric: "249074301" },
  { id: "s240", name: "Otokpeya Michael Ejovi", matric: "249074302" },
  { id: "s241", name: "Lawal Isaac Onimisi", matric: "249074305" },
  { id: "s242", name: "Awolola Adebayo Oluwatosin", matric: "249074306" },
  { id: "s243", name: "Daranijo Hassan Olakunle", matric: "249074307" },
  { id: "s244", name: "IDOGBE KEHINDE BUSAYO", matric: "249074308" },
  { id: "s245", name: "Afor Daniel Ochuko", matric: "249074309" },
  { id: "s246", name: "Obanoyen Olawande Mubarak", matric: "249074310" },
  { id: "s247", name: "Adekeye Olamide", matric: "249074311" },
  { id: "s248", name: "JOLAYEMI OLUWATOMI OPEYEMI", matric: "249074313" },
  { id: "s249", name: "Gaawa Domale Moses", matric: "249074317" },
  { id: "s250", name: "Olowolade Samuel Adebayo", matric: "249074318" },
  { id: "s251", name: "AGBO PETER ONYEMAECHI", matric: "249074319" },
  { id: "s252", name: "Adeniji Emmanuel Adebayo", matric: "249074320" },
  { id: "s253", name: "Ighodalo Precious Osemudiamen", matric: "249074321" },
  { id: "s254", name: "OFFORDILE FRANCISCO CHUKWUKA", matric: "249074322" },
  { id: "s255", name: "Batula Olasehindemi John", matric: "249074324" },
  { id: "s256", name: "IDAM DAVID CHINONSO", matric: "249074325" },
  { id: "s257", name: "Ologun Ayodeji Olanrewaju", matric: "249074326" },
  { id: "s258", name: "Ojo Gbenga Timothy", matric: "249074328" },
  { id: "s259", name: "Omolaja Samuel Olawale", matric: "249074330" },
  { id: "s260", name: "JIKIEMI DASOLA IDAYAT", matric: "249074331" }
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
    id: "v1",
    type: "video",
    url: "https://firebasestorage.googleapis.com/v0/b/kfit-fe6eb.firebasestorage.app/o/IMG_0651.MOV?alt=media&token=a81a368c-e4c3-4cdc-9e47-1ec61bea7973",
    thumbnail:
      "https://lh3.googleusercontent.com/d/152OtWQXcINO0AxF0KtYHGLExGd0Di1Ct",
    caption: "Moments of Grit: Highlight 1",
    category: "Videos",
  },
  {
    id: "v2",
    type: "video",
    url: "https://firebasestorage.googleapis.com/v0/b/kfit-fe6eb.firebasestorage.app/o/IMG_0646.MOV?alt=media&token=f31e16c5-8e54-486e-a1d7-ec3350979069",
    thumbnail:
      "https://lh3.googleusercontent.com/d/1KclGk0eJ2qeYddOH_sZCgUnVHnKOh84r",
    caption: "Moments of Grit: Highlight 2",
    category: "Videos",
  },
  {
    id: "v3",
    type: "video",
    url: "https://firebasestorage.googleapis.com/v0/b/kfit-fe6eb.firebasestorage.app/o/IMG_0632.MOV?alt=media&token=d8ed73cb-9745-4f49-80ea-b053c9e6e2c9",
    thumbnail:
      "https://lh3.googleusercontent.com/d/1X0y6hLq-SL_ZQMbXc8kvROOwEtrrzH0Y",
    caption: "Moments of Grit: Highlight 3",
    category: "Videos",
  },
  {
    id: "v4",
    type: "video",
    url: "https://firebasestorage.googleapis.com/v0/b/kfit-fe6eb.firebasestorage.app/o/C1765813-AB3D-4A1A-8ED2-F26D4D5362FE.MP4?alt=media&token=025e2d5c-0103-4754-8bab-f1e94c9225d3",
    thumbnail:
      "https://lh3.googleusercontent.com/d/1jQOnylAxBKpkIqw4V7cqHRY_vKwzImTR",
    caption: "Moments of Grit: Highlight 4",
    category: "Videos",
  },
  {
    id: "v5",
    type: "video",
    url: "https://firebasestorage.googleapis.com/v0/b/kfit-fe6eb.firebasestorage.app/o/24495647-C28B-44F9-8EA1-A86454E4531C.MP4?alt=media&token=f146e150-c31b-467f-9724-2fac0dc38a84",
    thumbnail:
      "https://lh3.googleusercontent.com/d/1qKBBPRVxbwK341NinArkmu0XqwCs-ToW",
    caption: "Moments of Grit: Highlight 5",
    category: "Videos",
  },
  // {
  //   id: "v6",
  //   type: "video",
  //   url: "https://firebasestorage.googleapis.com/v0/b/kfit-fe6eb.firebasestorage.app/o/24495647-C28B-44F9-8EA1-A86454E4531C.MP4?alt=media&token=f146e150-c31b-467f-9724-2fac0dc38a84",
  //   thumbnail:
  //     "https://lh3.googleusercontent.com/d/1yX4kh7DvcEdjBv17G31b3XYU67SlYgCJ",
  //   caption: "Moments of Grit: Highlight 6",
  //   category: "Videos",
  // },
  {
    id: "v7",
    type: "video",
    url: "https://firebasestorage.googleapis.com/v0/b/kfit-fe6eb.firebasestorage.app/o/IMG_7553.mov?alt=media&token=ce70d378-cbef-4b3c-bb28-f0e742a9fcc0",
    thumbnail:
      "https://lh3.googleusercontent.com/d/1A_Jo4uQFyaKpxPTVTVsWhSLJWxv4E16M",
    caption: "Moments of Grit: Highlight 7",
    category: "Videos",
  },
  {
    id: "v8",
    type: "video",
    url: "https://firebasestorage.googleapis.com/v0/b/kfit-fe6eb.firebasestorage.app/o/IMG_7419.MOV?alt=media&token=39747a10-e0d6-48db-9070-975075a25350",
    thumbnail:
      "https://lh3.googleusercontent.com/d/1Mf88m3RLqpeIqfma57CFFDz6eD5Gf97P",
    caption: "Moments of Grit: Highlight 8",
    category: "Videos",
  },
];

export const HERO_SLIDES = [
  {
    image: "/banner.jpeg",
    title: "Celebrating Excellence & Innovation",
    subtitle:
      "An evening to celebrate the resilience, brilliance, and innovation of the MIT Class.",
  },
  // {
  //   image: "/banner.jpeg",
  //   title: "Innovation at its Finest",
  //   subtitle:
  //     "A night dedicated to celebrating the brilliant minds, hard work, and unyielding determination of our IT students.",
  // },
  // {
  //   image: "/banner.jpeg",
  //   title: "A Class of Grit",
  //   subtitle: "Honoring the masters of IT and their journey.",
  // },
];

export const SPONSORS = [
  { name: "University of Lagos", logo: "/unilag_logo.jpeg" },
  { name: "Bmoni", logo: "/bmoni_logo.jpeg" },
  // { name: "Tech Corp", logo: "https://picsum.photos/seed/techcorp/200/100" },
  // { name: "Innovation Labs", logo: "https://picsum.photos/seed/inno/200/100" },
  // { name: "Future Systems", logo: "https://picsum.photos/seed/future/200/100" },
  // {
  //   name: "Digital Ventures",
  //   logo: "https://picsum.photos/seed/global/200/100",
  // },
  // { name: "Smart Solutions", logo: "https://picsum.photos/seed/nexus/200/100" },
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


export const LECTURERS = [
  { id: "lec1", name: "C. O. Yinka-Banjo" },
  { id: "lec2", name: "C. O. Uwadia" },
  { id: "lec3", name: "A.P. Adewole" },
  { id: "lec4", name: "O. Abass" },
  { id: "lec5", name: "F. A. Oladeji" },
  { id: "lec6", name: "V. T. Odumuyiwa" },
  { id: "lec7", name: "N.A. Azeez" },
  { id: "lec8", name: "E.P. Fasina" },
  { id: "lec9", name: "B. A. Sawyerr" },
  { id: "lec10", name: "O. A. Sennaike" },
  { id: "lec11", name: "O. B. Okunoye" },
  { id: "lec12", name: "A.S. Akinboro" },
  { id: "lec13", name: "A.U. Rufai" },
  { id: "lec14", name: "F. O. Alamu" },
  { id: "lec15", name: "A. M. Nwohiri" },
  { id: "lec16", name: "U. C. Ogude" },
  { id: "lec17", name: "R. Isimeto" },
  { id: "lec18", name: "R.A. Koleoso" },
  { id: "lec19", name: "L. Ikuvwerha" },
  { id: "lec20", name: "S.E. Edagbami" },
  { id: "lec21", name: "C. Ojiako" },
  { id: "lec22", name: "D.T. Afolabi" },
  { id: "lec23", name: "R. O. Abass" }
];
