export type Page =
  | "home"
  | "about"
  | "sponsors"
  | "categories"
  | "vote"
  | "gallery"
  | "feedback"
  | "payment"
  | "nominate";

export interface Nominee {
  id: string;
  name: string;
  category: string;
  image: string;
}

export interface Testimonial {
  id: string;
  name: string;
  quote: string;
  rating: number;
  image: string;
}

export interface GalleryItem {
  id: string;
  type: "photo" | "video";
  url: string;
  thumbnail: string;
  caption: string;
  category: "Photos" | "Videos" | "Highlights";
}
