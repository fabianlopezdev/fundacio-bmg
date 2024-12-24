import carousel1 from "@assets/carousel-1.png";
import carousel2 from "@assets/carousel-2.png";
import carousel3 from "@assets/carousel-3.png";
import valorsChart1 from "@assets/charts/valors/jugadors-i-jugadores-chart.svg";
import valorsChart2 from "@assets/charts/valors/jugadors-chart.svg";
import valorsChart3 from "@assets/charts/valors/jugadores-chart.svg";

import maskImage from "@assets/Mask-group-(1).webp";
export const VALORS = {
  title: "Un club amb valors",
  homePageMenuImg: {
    imageSrc: maskImage,
    imageAlt: "",
  },
  heroImage: { heroImageSrc: maskImage, heroImageAlt: "" },
  sections: {
    title: "Un club amb valors",
    text: [
      "Seguint els estatuts de la Fundació BM Granollers i fidels a la nostra història, el club ha centrat la seva activitat en la formació esportiva i en la transmissió de valors als joves esportistes. Generació rere generació, molts joves han confiat en aquest club, que està profundament arrelat a la ciutat i té una gran projecció en el món de l'handbol. Els centenars d'esportistes que formen part dels nostres equips, des de categories de base fins als equips sèniors, així com els títols aconseguits a Catalunya i Espanya en aquests primers 25 anys, en són el millor testimoni.",
    ],
  },
  chartSection: {
    chartIntro:
      "Els següents gràfics permeten veure l’evolució creixent del nombre de jugadors i jugadores dels diferents equips al llarg d’aquests primers 25 anys.",
    charts: [
      {
        chartImg: valorsChart1,
        chartAlt:
          "Gràfica del número de jugadors i jugadores del Balonmano Granollers desde la temporadada 2001-02 a la temporada 2024-25",
      },
      {
        chartImg: valorsChart2,
        chartAlt:
          "Gràfica del número de jugadors masculins del Balonmano Granollers desde la temporadada 2001-02 a la temporada 2024-25",
      },
      {
        chartImg: valorsChart3,
        chartAlt:
          "Gràfica del número de jugadores del Balonmano Granollers desde la temporadada 2001-02 a la temporada 2024-25",
      },
    ],
  },
  images: [
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
