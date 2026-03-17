import React, { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { Play, Camera, Twitter, Facebook, Linkedin, Share2, X, Maximize2 } from "lucide-react";
import { GALLERY_ITEMS } from "../data/constants";

type FilterType = "Photos" | "Videos";

export const GalleryPage = () => {
  const [galleryFilter, setGalleryFilter] = useState<FilterType>("Photos");
  const [selectedItem, setSelectedItem] = useState<{ url: string; type: "photo" | "video" } | null>(null);
  const [shuffledItems, setShuffledItems] = useState([...GALLERY_ITEMS]);

  React.useEffect(() => {
    setShuffledItems([...GALLERY_ITEMS].sort(() => Math.random() - 0.5));
  }, []);

  return (
    <section className="py-24 px-6 max-w-7xl mx-auto min-h-screen">
      <div className="text-center mb-20">
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <span className="inline-block py-2 px-4 rounded-full bg-brand-blue/10 text-brand-blue text-[10px] font-bold uppercase tracking-[0.3em] mb-4 shadow-sm border border-brand-blue/20">
            Event Media
          </span>
        </motion.div>
        <motion.h2
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.1 }}
          className="section-title text-5xl md:text-6xl"
        >
          Moments of Grit
        </motion.h2>
        <motion.p
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
          className="text-slate-500 max-w-2xl mx-auto text-lg leading-relaxed font-medium mt-6"
        >
          Relive the highlights of our past celebrations and academic
          milestones.
        </motion.p>
      </div>

      <motion.div 
        initial={{ opacity: 0, y: 10 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ delay: 0.3 }}
        className="flex justify-center gap-4 mb-16 overflow-x-auto pb-4"
      >
        {["Photos", "Videos"].map((f) => (
          <button
            key={f}
            onClick={() => setGalleryFilter(f as FilterType)}
            className={`px-8 py-3 rounded-full font-bold transition-all duration-300 ${
              galleryFilter === f 
                ? "bg-gradient-to-r from-brand-blue to-[#155BB5] text-white shadow-lg shadow-brand-blue/30 scale-105" 
                : "bg-white text-slate-600 hover:bg-slate-50 hover:text-brand-blue shadow-sm border border-slate-100 hover:shadow-md"
            }`}
          >
            {f}
          </button>
        ))}
      </motion.div>

      <motion.div 
        layout
        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-24"
      >
        {shuffledItems.filter(
          (item) => item.category === galleryFilter,
        ).map((item) => (
          <motion.div
            layout
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.9 }}
            transition={{ type: "spring", stiffness: 300, damping: 25 }}
            key={item.id}
            className="group relative overflow-hidden rounded-[2rem] bg-slate-100 aspect-[4/3] cursor-pointer shadow-[0_10px_30px_rgba(30,111,217,0.06)] hover:shadow-[0_20px_40px_rgba(30,111,217,0.15)] transition-shadow duration-500"
          >
            {item.type === "video" && item.url !== "#" ? (
              <video
                src={item.url}
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                autoPlay
                muted
                loop
                playsInline
                poster={item.thumbnail}
              />
            ) : (
              <img
                src={item.thumbnail}
                alt={item.caption}
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                referrerPolicy="no-referrer"
              />
            )}
            
            <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex flex-col justify-end p-8">
              {/* Expand Button for Both Photos and Videos */}
              {(item.type === "photo" || (item.type === "video" && item.url !== "#")) && (
                <button
                  onClick={(e) => {
                    e.stopPropagation();
                    setSelectedItem({ url: item.url, type: item.type as "photo" | "video" });
                  }}
                  className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-white/20 hover:bg-white/40 text-white p-5 rounded-full backdrop-blur-md transition-all duration-300 scale-0 group-hover:scale-100 shadow-xl border border-white/30"
                >
                  <Maximize2 size={32} />
                </button>
              )}

              {/* Share Buttons */}
              <div className="absolute top-6 right-6 flex gap-2 opacity-0 translate-y-[-20px] group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-500 ease-out delay-100">
                {[
                  {
                    icon: <Twitter size={14} />,
                    color: "bg-sky-500",
                    label: "Twitter",
                  },
                  {
                    icon: <Facebook size={14} />,
                    color: "bg-[#1877F2]",
                    label: "Facebook",
                  },
                  {
                    icon: <Linkedin size={14} />,
                    color: "bg-[#0A66C2]",
                    label: "LinkedIn",
                  },
                  {
                    icon: <Share2 size={14} />,
                    color: "bg-slate-700",
                    label: "Share",
                  },
                ].map((btn, idx) => (
                  <button
                    key={idx}
                    onClick={(e) => {
                      e.stopPropagation();
                      console.log(
                        `Sharing "${item.caption}" to ${btn.label}`,
                      );
                    }}
                    className={`${btn.color} text-white p-2.5 rounded-full hover:scale-110 transition-transform shadow-lg border border-white/20`}
                    title={`Share on ${btn.label}`}
                  >
                    {btn.icon}
                  </button>
                ))}
              </div>

              <motion.div 
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                className="text-white drop-shadow-md translate-y-4 group-hover:translate-y-0 transition-transform duration-500"
              >
                <div className="flex items-center gap-2 mb-3">
                  {item.type === "video" ? (
                    <Play
                      size={16}
                      className="fill-brand-teal text-brand-teal"
                    />
                  ) : (
                    <Camera size={16} className="text-brand-teal" />
                  )}
                  <span className="text-[10px] font-bold uppercase tracking-[0.2em] text-brand-teal">
                    {item.type}
                  </span>
                </div>
                <h4 className="text-xl font-black">{item.caption}</h4>
              </motion.div>
            </div>
          </motion.div>
        ))}
      </motion.div>

      {/* Unified Preview Modal */}
      <AnimatePresence>
        {selectedItem && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[100] flex items-center justify-center bg-black/95 p-4 md:p-8 backdrop-blur-sm"
            onClick={() => setSelectedItem(null)}
          >
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              className="relative w-full max-w-5xl aspect-video rounded-3xl overflow-hidden shadow-2xl bg-black"
              onClick={(e) => e.stopPropagation()}
            >
              <button
                onClick={() => setSelectedItem(null)}
                className="absolute top-6 right-6 z-10 p-3 bg-white/10 hover:bg-white/20 text-white rounded-full backdrop-blur-md transition-colors"
              >
                <X size={24} />
              </button>
              
              {selectedItem.type === "video" ? (
                <video
                  src={selectedItem.url}
                  className="w-full h-full object-contain"
                  controls
                  autoPlay
                  playsInline
                />
              ) : (
                <img
                  src={selectedItem.url}
                  className="w-full h-full object-contain"
                  referrerPolicy="no-referrer"
                />
              )}
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
};
