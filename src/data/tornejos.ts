import maskImage from "@assets/Mask-group-(1).webp";
import carousel1 from "@assets/carousel-1.png";
import carousel2 from "@assets/carousel-2.png";
import carousel3 from "@assets/carousel-3.png";

import tornejosChart1 from "@assets/charts/tornejos/coaliment-players-chart.svg";
import tornejosChart2 from "@assets/charts/tornejos/coaliment-teams-chart.svg";
import tornejosChart3 from "@assets/charts/tornejos/coaliment-minihandbol.svg";

export const TORNEJOS = {
  title: "Tornejos",
  homePageMenuImg: {
    imageSrc: maskImage,
  },
  heroImage: { heroImageSrc: maskImage, heroImageAlt: "" },
  sections: {
    granollersCup: {
      infoSection: {
        title: "Granollers Cup",
        text: [
          "La Granollers Cup s’inspira en la famosa Partille Cup de Göteborg, Suècia, organitzada pel club IK Sävehof. Aquest torneig internacional busca aplegar jugadors i jugadores joves d'arreu del món, facilitant l’intercanvi cultural i la convivència entre persones de diferents llengües i creences.",
          "Al llarg dels anys, la Granollers Cup ha experimentat un creixement constant en nombre de participants i equips. Això és possible gràcies a la capacitat organitzativa del club; el bon nivell arbitral; les excel·lents instal·lacions esportives a Granollers, Canovelles, Cardedeu, Les Franqueses, Montornès i Vilanova del Vallès; i la tasca dels més de 200 voluntaris/es que fan possible l’esdeveniment. També compta amb el suport d'institucions, federacions i empreses privades.",
          "A més de la repercussió esportiva, la Granollers Cup té un resultat econòmic significatiu a Granollers i les poblacions veïnes. Un estudi de la Diputació de Barcelona de 2019 va estimar que aquest impacte superava els 3 milions d’euros",
        ],
      },
      additionalSections: [
        {
          title: "Els inicis del torneig",
          text: [
            "L’any 1999 s’inicia el torneig de la Granollers Cup en què hi participen 55 equips, 43 dels quals eren catalans, 4 equips de la resta d’Espanya i 8 equips venien d’altres països.",
            "El quadre següent il·lustra l’evolució extraordinàriament positiva pel que fa a esportistes, equips i països participants fins arribar a les xifres de l’edició de 2024 amb 468 equips dels quals 216 eren femenins, uns 7.000 esportistes i tècnics participants procedents de 21 països.",
          ],
        },
      ],
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
    },
    torneigEscolar: {
      infoSection: {
        title: "Torneig d’Handbol Escolar",
        text: [
          "Des de 1995, el Club BM Granollers primer, i posteriorment també la Fundació BM Granollers, han promogut un torneig d'handbol escolar. L'objectiu és donar a conèixer aquest esport, iniciar els nens i nenes en la seva pràctica i transmetre els seus valors. Aquest torneig inclou equips dels centres educatius de Granollers i altres municipis de la comarca. Els participants, nens i nenes d'entre 5 i 12 anys, reben formació, material i equipament per participar.",
          "Des dels inicis, l'empresa de distribució alimentària Coaliment ha estat un patrocinador clau, gràcies al suport decisiu del seu president, el senyor Josep Saperas.",
        ],
      },
      chartSection: {
        chartIntro:
          "Els gràfics següents permeten veure l’evolució creixent del nombre de nois i noies i equips participants. ",
        charts: [
          {
            chartImg: tornejosChart1,
            chartAlt:
              "Gràfica del número de jugadors i jugadores del Balonmano Granollers desde la temporadada 2001-02 a la temporada 2024-25",
          },
          {
            chartImg: tornejosChart2,
            chartAlt:
              "Gràfica del número de jugadors masculins del Balonmano Granollers desde la temporadada 2001-02 a la temporada 2024-25",
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
    },
    miniHandbol: {
      infoSection: {
        title: "Torneig de Minihandbol",
        text: [
          "Des de 1995, el Club BM Granollers primer, i posteriorment també la Fundació BM Granollers, han promogut un torneig d'handbol escolar. L'objectiu és donar a conèixer aquest esport, iniciar els nens i nenes en la seva pràctica i transmetre els seus valors. Aquest torneig inclou equips dels centres educatius de Granollers i altres municipis de la comarca. Els participants, nens i nenes d'entre 5 i 12 anys, reben formació, material i equipament per participar.",
          "Des dels inicis, l'empresa de distribució alimentària Coaliment ha estat un patrocinador clau, gràcies al suport decisiu del seu president, el senyor Josep Saperas.",
        ],
      },
      chartSection: {
        chartIntro:
          "Els gràfics següents permeten veure l’evolució creixent del nombre de nois i noies i equips participants. ",
        charts: [
          {
            chartImg: tornejosChart3,
            chartAlt:
              "Gràfica del número de jugadors i jugadores del Balonmano Granollers desde la temporadada 2001-02 a la temporada 2024-25",
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
    },
  },
};
