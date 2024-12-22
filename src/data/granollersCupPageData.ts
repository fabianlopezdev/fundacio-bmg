import maskImage from "@assets/Mask-group-(1).webp";
import carousel1 from "@assets/carousel-1.png";
import carousel2 from "@assets/carousel-2.png";
import carousel3 from "@assets/carousel-3.png";
export const GRANOLLERS_CUP = {
  title: "Granollers Cup",
  homePageMenuImg: {
    imageSrc: maskImage, // Ensure maskImage is defined
    imageAlt: "",
  },
  heroImage: { heroImageSrc: maskImage, heroImageAlt: "" },
  sections: [
    {
      title: "Granollers Cup",
      text: [
        "La Granollers Cup s’inspira en la famosa Partille Cup de Göteborg, Suècia, organitzada pel club IK Sävehof. Aquest torneig internacional busca aplegar jugadors i jugadores joves d'arreu del món, facilitant l’intercanvi cultural i la convivència entre persones de diferents llengües i creences.",
        "Al llarg dels anys, la Granollers Cup ha experimentat un creixement constanten nombre de participants i equips. Això és possible gràcies a la capacitat organitzativa del club; el bon nivell arbitral; les excel·lents instal·lacions esportives a Granollers, Canovelles, Cardedeu, Les Franqueses, Montornès i Vilanova del Vallès; i la tasca dels més de 200 voluntaris/es que fan possible l’esdeveniment. També compta amb el suport d'institucions, federacions i empreses privades.",
        "A més de la repercussió esportiva, la Granollers Cup té un resultat econòmic significatiu a Granollers i les poblacions veïnes. Un estudi de la Diputació de Barcelona de 2019 va estimar que aquest impacte superava els 3 milions d’euros.",
      ],
    },
    {
      contrast: true,
      title: "Els inicis del torneig",
      text: [
        "L’any 1999 s’inicia el torneig de la Granollers Cup en què hi participen 55 equips, 43 dels quals eren catalans, 4 equips de la resta d’Espanya i 8 equips venien d’altres països.",
        "El quadre següent il·lustra l’evolució extraordinàriament positiva pel que fa a esportistes, equips i països participants fins arribar a les xifres de l’edició de 2024 amb 468 equips dels quals 216 eren femenins, uns 7.000 esportistes i tècnics participants procedents de 21 països.",
      ],
    },
  ],
  sectionCarousel: [
    {
      img: carousel1,
      imgAlt: "",
    },
    {
      img: carousel2,
      imgAlt: "",
    },
    {
      img: carousel3,
      imgAlt: "",
    },
  ],
};
