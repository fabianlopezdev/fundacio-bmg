import maskImage from "@assets/Mask-group.avif";
import maskImage2 from "@assets/Mask-group-(1).webp";
import maskImage3 from "@assets/Mask-group-(2).webp";
import maskImage4 from "@assets/Mask-group-(3).avif";
import maskImage5 from "@assets/Mask-group-(4).avif";
import maskImage6 from "@assets/Mask-group-(5).avif";
import maskImage7 from "@assets/Mask-group-(6).webp";
import maskImage8 from "@assets/Mask-group-(7).webp";
import maskImage9 from "@assets/Mask-group-(8).avif";

function slugify(text: string): string {
  return text
      .toString()                          // Ensure it's a string
      .normalize("NFD")                    // Decompose accents from letters
      .replace(/[\u0300-\u036f]/g, '')     // Remove diacritical marks (accents)
      .toLowerCase()                       // Convert to lowercase
      .trim()                              // Remove whitespace from both ends
      .replace(/\s+/g, '-')                // Replace spaces with dashes
      .replace(/[^\w\-]+/g, '')            // Remove all non-word characters
      .replace(/\-\-+/g, '-');             // Replace multiple dashes with a single dash
}

export const SECTIONS = [
  {
    label: "Un club amb valors",
    imageSrc: maskImage,
    imageAlt: "",
  },
  {
    label: "Palmarés del planter",
    imageSrc: maskImage2,
    imageAlt: "",
  },
  {
    label: "Tornejos",
    imageSrc: maskImage3,
    imageAlt: "",
  },
  {
    label: "Equip Especial",
    imageSrc: maskImage4,
    imageAlt: "",
  },
  {
    label: "Projectes de cooperació",
    imageSrc: maskImage5,
    imageAlt: "",
  },
  {
    label: "La residència",
    imageSrc: maskImage6,
    imageAlt: "",
  },
  {
    label: "Veterans",
    imageSrc: maskImage7,
    imageAlt: "",
  },
  {
    label: "Acompanyant el club",
    imageSrc: maskImage8,
    imageAlt: "",
  },
  {
    label: "El llegat dels 25anys",
    imageSrc: maskImage9,
    imageAlt: "",
  },
].map((section) => ({
  ...section,
  linkHref: slugify(section.label), // Generate slug for each section label
}));
