import homePageHero from "@assets/homepage/homepage.webp"

import valorsImgSection from "@assets/homepage/sections/valors-section.webp"
import palmaresImgSection from "@assets/homepage/sections/palmares-section.webp"
import tornejosImgSection from "@assets/homepage/sections/tornejos-section.webp"
import especialImgSection from "@assets/homepage/sections/equip-especial-section.webp"
import cooperacioImgSection from "@assets/homepage/sections/cooperacio-section.webp"
import residenciaImgSection from "@assets/homepage/sections/residencia-section.webp"
import veteransImgSection from "@assets/homepage/sections/veterans-section.webp"
import acompanyantImgSection from "@assets/homepage/sections/acompanyant-section.webp"
import llegatImgSection from "@assets/homepage/sections/llegat-section.webp"

export const HOMEPAGE = {
    heroImage: {
        img: homePageHero,
        alt: "",
    },
  sections: [
    {
      label: "Un club amb valors",
      image: {
        img: valorsImgSection,
        alt: "",
      },
      url: "/un-club-amb-valors",
    },
    {
      label: "Palmarès del planter",
      image: {
        img: palmaresImgSection,
        alt: "",
      },
      url: "/palmares-del-planter",
    },
    {
      label: "Tornejos",
      image: {
        img: tornejosImgSection,
        alt: "",
      },
      url: "/tornejos",
    },
    {
      label: "Equip Special",
      image: {
        img: especialImgSection,
        alt: "",
      },
      url: "equip-especial",
    },
    {
      label: "Projectes de cooperació",
      image: {
        img: cooperacioImgSection,
        alt: "",
      },
      url: "projectes-de-cooperacio",
    },
    {
      label: "La residència",
      image: {
        img: residenciaImgSection,
        alt: "",
      },
      url: "la-residencia",
    },
    {
      label: "Veterans",
      image: {
        img: veteransImgSection,
        alt: "",
      },
      url: "/equips-de-veteranes-i-veterans",
    },
    {
      label: "Acompanyant el club",
      image: {
        img: acompanyantImgSection,
        alt: "",
      },
      url: "acompanyant-el-club",
    },
    {
      label: "El llegat de 25 anys",
      image: {
        img: llegatImgSection,
        alt: "",
      },
      url: "el-llegat-de-25-anys",
    },
  ],
};
