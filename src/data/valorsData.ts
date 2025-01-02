import heroImage from "@assets/hero-images/valors.webp";
import carousel1 from "@assets/carousel-images/valors/valors_carrusel_1.webp";
import carousel2 from "@assets/carousel-images/valors/valors_carrusel_2.webp";
import carousel3 from "@assets/carousel-images/valors/valors_carrusel_3.webp";
import carousel4 from "@assets/carousel-images/valors/valors_carrusel_4.webp";

import valorsChart1 from "@assets/charts/valors/jugadors-i-jugadores-chart.svg";
import valorsChart2 from "@assets/charts/valors/jugadors-chart.svg";
import valorsChart3 from "@assets/charts/valors/jugadores-chart.svg";
export const VALORS = {
  title: "Un club amb valors",
  heroImage: {
    heroImageSrc: heroImage,
    heroImageAlt:
      "Tots els jugadors i jugadors de totes les categories, entrenadors i membres del Balonmano Granollers",
  },
  sections: {
    text: [
      "Seguint els estatuts de la Fundació BM Granollers i fidels a la nostra història, el Club Balonmano Granollers ha centrat la seva activitat en la formació esportiva i en la transmissió de valors als joves esportistes. Generació rere generació, molts joves han confiat en aquest club, que està profundament arrelat a la ciutat i té una gran projecció en el món de l'handbol. Els centenars d'esportistes que formen part dels nostres equips, des de categories de base fins als equips sèniors, així com els títols aconseguits a Catalunya i Espanya en aquests primers 25 anys, en són el millor testimoni.",
    ],
    boldTerms: ["el Club Balonmano Granollers"],
  },
  chartSection: {
    chartIntro:
      "Els gràfics següents permeten veure l’evolució creixent del nombre de jugadors i jugadores dels diferents equips al llarg d’aquests primers 25 anys.",
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
      imgAlt: "Els jugadors i jugadores de tots els equips de la temporada 2009/10",
      details:
        "Els jugadors i jugadores de tots els equips de la temporada 2009/10",
    },
    {
      img: carousel2,
      imgAlt: "Els equips tècnics de la temporada 2009/10",
      details:
        "Els equips tècnics de la temporada 2009/10",
    },
    {
      img: carousel3,
      imgAlt: "Els jugadors i jugadores de tots els equips de la temporada 2016/17",
      details:
        "Els jugadors i jugadores de tots els equips de la temporada 2016/17",
    },
    {
      img: carousel4,
      imgAlt: "Els equips tècnics de la temporada 2016/17",
      details:
        "Els equips tècnics de la temporada 2016/17",
    },
  ],
};
