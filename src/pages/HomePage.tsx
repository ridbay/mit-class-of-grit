import React from "react";
import { motion } from "motion/react";
import {
  Cpu,
  Lightbulb,
  Users,
  Mic2,
  UtensilsCrossed,
  Award,
  ChevronRight,
} from "lucide-react";
import { useNavigate } from "react-router-dom";
import { HeroSlider } from "../components/HeroSlider";
import { SponsorsSection } from "../components/SponsorsSection";
import { StudentSpotlight } from "../components/StudentSpotlight";
import { EVENT_DETAILS } from "../data/constants";

const PILLARS = [
  {
    icon: <Cpu size={28} />,
    title: "Technology",
    desc: "Conversations that reflect the future of digital innovation, enterprise technology, artificial intelligence, software, fintech, data, and emerging solutions.",
  },
  {
    icon: <Lightbulb size={28} />,
    title: "Innovation",
    desc: "A platform for ideas, projects, products, and builders within the MIT community and beyond.",
  },
  {
    icon: <Users size={28} />,
    title: "Networking",
    desc: "A premium room for postgraduate students, professionals, alumni, lecturers, entrepreneurs, executives, sponsors, and special guests to connect meaningfully.",
  },
  {
    icon: <Mic2 size={28} />,
    title: "Pitch",
    desc: "A showcase for promising ideas, startups, SaaS products, and student-led innovation.",
  },
  {
    icon: <UtensilsCrossed size={28} />,
    title: "Dinner",
    desc: "A refined evening experience that allows the class, guests, partners, and stakeholders to connect beyond the classroom.",
  },
  {
    icon: <Award size={28} />,
    title: "Awards",
    desc: "A celebration of excellence, resilience, service, leadership, brilliance, and the Grit spirit that defines the MIT Class of 2026.",
  },
];

const ROOM_GUESTS = [
  "Postgraduate IT students",
  "Working professionals",
  "Alumni",
  "Lecturers",
  "University representatives",
  "Entrepreneurs",
  "Innovators",
  "Corporate guests",
  "Executives",
  "Technology stakeholders",
  "Potential employers",
  "Sponsors and partners",
];

const staggerContainer = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.12 } },
};

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { type: "spring" as const, stiffness: 300, damping: 24 },
  },
};

export const HomePage = () => {
  const navigate = useNavigate();

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
    >
      <HeroSlider />

      {/* Short Intro */}
      <section id="event-details" className="py-24 px-6 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
          >
         
						 <h2 className="section-title text-center max-w-4xl mx-auto">
   MIT Connect &rsquo;26 is more than an event. It is a statement
              of what the Class of Grit represents.          </h2>
            <p className="text-slate-600 font-medium leading-relaxed text-base sm:text-lg mb-4">
              We are bringing together people, ideas, opportunities, and
              recognition in one room. From technology conversations to
              innovation pitching, from professional networking to awards
              and dinner, MIT Connect &rsquo;26 is designed to celebrate
              excellence while creating real connections for the future.
            </p>
            <p className="text-slate-600 font-medium leading-relaxed text-base sm:text-lg">
              This is where postgraduate technology talent meets industry,
              academia, alumni, founders, and partners who believe in what
              comes next.
            </p>
          </motion.div>

          <div className="mt-12 inline-flex flex-col sm:flex-row gap-3 sm:gap-6 items-center justify-center text-slate-700 font-bold text-sm sm:text-base bg-white/70 border border-white/60 rounded-2xl px-6 py-5 shadow-sm">
            <span>{EVENT_DETAILS.date}</span>
            <span className="hidden sm:inline text-slate-300">•</span>
            <span>{EVENT_DETAILS.time}</span>
            <span className="hidden sm:inline text-slate-300">•</span>
            <span>{EVENT_DETAILS.venue}</span>
          </div>
        </div>
      </section>
<div>
   <div className="max-w-7xl mx-auto px-6 mb-12 text-center">
      <h4 className="text-xs font-black uppercase tracking-[0.3em] text-slate-500 mb-4">
        Our Prestigious Partners
      </h4>
    </div>
      <SponsorsSection />
</div>

      {/* What MIT Connect '26 Is Built Around */}
      <section className="py-24 px-6 relative z-10">
        <div className="max-w-7xl mx-auto">
          <h2 className="section-title text-center max-w-3xl mx-auto">
            What MIT Connect &rsquo;26 Is Built Around
          </h2>
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={staggerContainer}
            className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-12"
          >
            {PILLARS.map((item, i) => (
              <motion.div
                key={i}
                variants={fadeUp}
                className="glass-card p-10 border-transparent hover:border-brand-teal/30 hover:bg-white/90"
              >
                <div className="w-16 h-16 bg-slate-50 rounded-2xl flex items-center justify-center text-slate-400 mb-8 transition-all duration-500 group-hover:bg-gradient-to-br group-hover:from-brand-blue group-hover:to-blue-600 group-hover:text-white shadow-inner">
                  {item.icon}
                </div>
                <h3 className="text-2xl font-black mb-4 text-slate-900 tracking-tight">
                  {item.title}
                </h3>
                <p className="text-slate-600 font-medium leading-relaxed text-base">
                  {item.desc}
                </p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Why It Matters */}
      <section className="py-24 px-6 relative z-10 bg-white/30 border-y border-white/20 backdrop-blur-sm">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
          >
            <h2 className="section-title">Why It Matters</h2>
            <p className="text-xl font-black text-slate-900 mb-6 tracking-tight">
              The Class of Grit is not waiting for the future. We are
              creating it.
            </p>
            <p className="text-slate-600 font-medium leading-relaxed text-base sm:text-lg">
              MIT Connect &rsquo;26 is our platform to connect classroom
              learning with real-world opportunity. It gives visibility to
              students, honors lecturers and contributors, welcomes alumni
              back into the community, and creates space for companies and
              partners to engage with emerging technology leaders.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Who Will Be in the Room */}
      <section className="py-24 px-6 relative z-10">
        <div className="max-w-5xl mx-auto text-center">
          <h2 className="section-title">Who Will Be in the Room</h2>
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={staggerContainer}
            className="flex flex-wrap justify-center gap-x-8 gap-y-5 mt-10"
          >
            {ROOM_GUESTS.map((guest, i) => (
              <motion.span
                key={i}
                variants={fadeUp}
                className="text-lg sm:text-xl font-bold text-slate-700 hover:text-brand-teal hover:-translate-y-1 transition-all duration-300 cursor-default"
              >
                {guest}
              </motion.span>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Partner Section */}
      <section className="py-24 px-6 relative z-10 bg-white/30 border-y border-white/20 backdrop-blur-sm">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="section-title">
            Partner With the Next Generation of Technology Leaders
          </h2>
          <p className="text-slate-600 font-medium leading-relaxed text-base sm:text-lg mb-4">
            MIT Connect &rsquo;26 offers brands and organizations a
            meaningful opportunity to connect with postgraduate IT
            professionals, future technology leaders, entrepreneurs,
            innovators, alumni, and academic stakeholders.
          </p>
          <p className="text-slate-600 font-medium leading-relaxed text-base sm:text-lg mb-10">
            Whether your organization is in technology, finance, telecoms,
            training, consulting, media, real estate, logistics, or
            enterprise services, this is a platform for visibility,
            relationship-building, talent engagement, and long-term impact.
          </p>
          <button
            onClick={() => navigate("/sponsors")}
            className="btn-primary inline-flex items-center gap-2"
          >
            View Partnership Opportunities <ChevronRight size={20} />
          </button>
        </div>
      </section>

      {/* Awards Section */}
      <section className="py-24 px-6 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="section-title">
            Celebrating the People Who Carried the Grit
          </h2>
          <p className="text-slate-600 font-medium leading-relaxed text-base sm:text-lg mb-4">
            The awards segment will recognize students, lecturers, leaders,
            contributors, innovators, and class members who have shown
            excellence, resilience, commitment, support, and impact
            throughout the MIT journey.
          </p>
          <p className="text-slate-600 font-medium leading-relaxed text-base sm:text-lg mb-10">
            This is not just about popularity. It is about contribution,
            presence, effort, consistency, leadership, and the Grit spirit.
          </p>
          <button
            onClick={() => navigate("/categories")}
            className="btn-secondary inline-flex items-center gap-2"
          >
            View Award Categories <ChevronRight size={20} />
          </button>
        </div>
      </section>

      <StudentSpotlight />

      {/* Voting Section */}
      <section className="py-24 px-6 relative z-10 bg-white/30 border-y border-white/20 backdrop-blur-sm">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="section-title">Fair. Verified. Transparent.</h2>
          <p className="text-slate-600 font-medium leading-relaxed text-base sm:text-lg mb-10">
            Voting will be handled through a secure process designed to
            protect fairness, credibility, and class trust. Eligible voters
            will access the voting portal using approved credentials, and
            final award outcomes will combine community participation with
            review where required.
          </p>
          <button
            onClick={() => navigate("/vote")}
            className="btn-primary inline-flex items-center gap-2"
          >
            Go to Voting Portal <ChevronRight size={20} />
          </button>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-24 px-6 relative z-10">
        <div className="max-w-6xl mx-auto text-center">
          <h2 className="section-title !leading-snug">
            MIT Connect &rsquo;26 Is Where We Gather, Celebrate, and Create
            What&rsquo;s Next.
          </h2>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 sm:gap-6 mt-8">
            <button
              onClick={() => navigate("/sponsors")}
              className="btn-primary w-full sm:w-auto whitespace-nowrap"
            >
              Become a Partner
            </button>
            <button
              onClick={() => navigate("/payment")}
              className="btn-secondary w-full sm:w-auto whitespace-nowrap"
            >
              Reserve Your Seat
            </button>
            <button
              onClick={() => navigate("/contact")}
              className="px-10 py-4 font-black text-slate-700 border-2 border-slate-200 rounded-full hover:bg-slate-50 transition-colors w-full sm:w-auto whitespace-nowrap"
            >
              Contact the Planning Committee
            </button>
          </div>
        </div>
      </section>
    </motion.div>
  );
};
