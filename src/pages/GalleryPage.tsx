import React, { useState } from "react";
import { motion } from "motion/react";
import { Play, Camera, Twitter, Facebook, Linkedin, Share2 } from "lucide-react";
import { GALLERY_ITEMS } from "../data/constants";

type FilterType = "Photos" | "Videos" | "Highlights";

export const GalleryPage = () => {
  const [galleryFilter, setGalleryFilter] = useState<FilterType>("Photos");

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -20 }}
      className="py-20 px-6 max-w-7xl mx-auto"
    >
      <div className="text-center mb-16">
        <h2 className="section-title">Moments of Grit</h2>
        <p className="text-slate-500 max-w-xl mx-auto">
          Relive the highlights of our past celebrations and academic
          milestones.
        </p>
      </div>

      <div className="flex justify-center gap-4 mb-12 overflow-x-auto pb-2">
        {["Photos", "Videos", "Highlights"].map((f) => (
          <button
            key={f}
            onClick={() => setGalleryFilter(f as FilterType)}
            className={`px-8 py-2 rounded-full font-bold transition-all ${galleryFilter === f ? "bg-brand-blue text-white shadow-lg" : "bg-slate-100 text-slate-600 hover:bg-slate-200"}`}
          >
            {f}
          </button>
        ))}
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {GALLERY_ITEMS.filter(
          (item) => item.category === galleryFilter,
        ).map((item) => (
          <motion.div
            layout
            key={item.id}
            whileHover={{
              y: -8,
              scale: 1.02,
              borderRadius: "1.5rem",
            }}
            transition={{ type: "spring", stiffness: 300, damping: 20 }}
            className="group relative overflow-hidden rounded-[2rem] bg-slate-100 aspect-[4/3] cursor-pointer shadow-sm hover:shadow-xl"
          >
            <img
              src={item.thumbnail}
              alt={item.caption}
              className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
              referrerPolicy="no-referrer"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity flex flex-col justify-end p-8">
              {/* Share Buttons */}
              <div className="absolute top-6 right-6 flex gap-2 opacity-0 translate-y-[-20px] group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-500 ease-out">
                {[
                  {
                    icon: <Twitter size={14} />,
                    color: "bg-sky-500",
                    label: "Twitter",
                  },
                  {
                    icon: <Facebook size={14} />,
                    color: "bg-blue-600",
                    label: "Facebook",
                  },
                  {
                    icon: <Linkedin size={14} />,
                    color: "bg-blue-700",
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

              <div className="text-white drop-shadow-md">
                <div className="flex items-center gap-2 mb-2">
                  {item.type === "video" ? (
                    <Play
                      size={16}
                      className="fill-brand-teal text-brand-teal"
                    />
                  ) : (
                    <Camera size={16} className="text-brand-teal" />
                  )}
                  <span className="text-[10px] font-bold uppercase tracking-widest text-brand-teal">
                    {item.type}
                  </span>
                </div>
                <h4 className="text-lg font-bold">{item.caption}</h4>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </motion.div>
  );
};
