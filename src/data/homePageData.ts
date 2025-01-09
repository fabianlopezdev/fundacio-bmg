import homePageHero from "@assets/homepage/homepage.webp";

import valorsImgSection from "@assets/homepage/sections/valors-section.webp";
import palmaresImgSection from "@assets/homepage/sections/palmares-section.webp";
import tornejosImgSection from "@assets/homepage/sections/tornejos-section.webp";
import especialImgSection from "@assets/homepage/sections/equip-special-section.webp";
import cooperacioImgSection from "@assets/homepage/sections/cooperacio-section.webp";
import residenciaImgSection from "@assets/homepage/sections/residencia-section.webp";
import veteransImgSection from "@assets/homepage/sections/veterans-section.webp";
import acompanyantImgSection from "@assets/homepage/sections/acompanyant-section.webp";
import llegatImgSection from "@assets/homepage/sections/llegat-section.webp";

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
        alt: "Jugadors, jugadores i equip t[ecnincs de totes les seccions del Balonmano Granollers",
        objectPosition: "bottom",
        pb: "8.5rem",
      },
      url: "/un-club-amb-valors",
    },
    {
      label: "Palmarès del planter",
      image: {
        img: palmaresImgSection,
        alt: "Un equip del planter del BM Granollers aixecant un trofeu a l'ajuntament de Granollers",
        objectPosition: "center",
        pb: "5.5rem",
      },
      url: "/palmares-del-planter",
    },
    {
      label: "Tornejos",
      image: {
        img: tornejosImgSection,
        alt: "La plaça de la porxada pleana a vessar amb tots els equips participants del torneig de la Granollers Cup",
        objectPosition: "center",
        pb: "3.5rem",
      },
      url: "/tornejos",
    },
    {
      label: "Equip Special",
      image: {
        img: especialImgSection,
        alt: "Jugadors i jugadores de l'equip especial del BM Granollers",
        objectPosition: "bottom",
        pb: "5.5rem",
      },
      url: "equip-special",
    },
    {
      label: "Projectes de cooperació",
      image: {
        img: cooperacioImgSection,
        alt: "Un grup de senegalesos amb jugadores i jugadors del BM Granollers a Senegal",
        objectPosition: "bottom",
        pb: "6.5rem",
      },
      url: "projectes-de-cooperacio",
    },
    {
      label: "La residència",
      image: {
        img: residenciaImgSection,
        alt: "Els primers residents de la residència del BM Granollers amb la gent que la va fer possible",
        objectPosition: "center",
        pb: "6.5rem",
      },
      url: "la-residencia",
    },
    {
      label: "Veterans",
      image: {
        img: veteransImgSection,
        alt: "L'equip de veteranes del Balonmano Granollers celebrant un trofeu",
        objectPosition: "bottom",
        pb: "6rem",
      },
      url: "/equips-de-veteranes-i-veterans",
    },
    {
      label: "Acompanyant el club",
      image: {
        img: acompanyantImgSection,
        alt: "Palau d'esports de Granollers ple de gent durant un partit del BM Granollers",
        objectPosition: "top",
      },
      url: "acompanyant-el-club",
    },
    {
      label: "El llegat dels 25 anys",
      image: {
        img: llegatImgSection,
        alt: "Grup dels directius i gent que va fer possible la fundació del Bm Granollers durant l'acte dels 25 anys",
        objectPosition: "bottom",
        pb: "6rem",
      },
      url: "el-llegat-dels-25-anys",
    },
  ],
};
