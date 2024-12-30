import heroImage from "@assets/hero-images/palmares.webp";

import carousel1_1 from "@assets/carousel-images/palmares/catalunya/plecampionats_carrusel_1.webp";
import carousel1_2 from "@assets/carousel-images/palmares/catalunya/plecampionats_carrusel_2.webp";
import carousel1_3 from "@assets/carousel-images/palmares/catalunya/plecampionats_carrusel_3.webp";
import carousel1_4 from "@assets/carousel-images/palmares/catalunya/plecampionats_carrusel_4.webp";
import carousel1_5 from "@assets/carousel-images/palmares/catalunya/plecampionats_carrusel_5.webp";
import carousel1_6 from "@assets/carousel-images/palmares/catalunya/plecampionats_carrusel_6.webp";

import carousel2_1 from "@assets/carousel-images/palmares/generacio-or/generacio_carrusel_1.webp";
import carousel2_2 from "@assets/carousel-images/palmares/generacio-or/generacio_carrusel_2.webp";
import carousel2_3 from "@assets/carousel-images/palmares/generacio-or/generacio_carrusel_3.webp";

import carousel3_1 from "@assets/carousel-images/palmares/campiones/campiones_carrusel_1.webp";
import carousel3_2 from "@assets/carousel-images/palmares/campiones/campiones_carrusel_2.webp";

import carousel4_1 from "@assets/carousel-images/palmares/supercampiones/supercampiones_carrusel_1.webp";
import carousel4_2 from "@assets/carousel-images/palmares/supercampiones/supercampiones_carrusel_2.webp";
import carousel4_3 from "@assets/carousel-images/palmares/supercampiones/supercampiones_carrusel_3.webp";
import carousel4_4 from "@assets/carousel-images/palmares/supercampiones/supercampiones_carrusel_4.webp";


export const PALMARES = {
  title: "Palmarès del planter",
  sectionsLabels: [
    "Palmarès",
    "Campionats de Catalunya",
    "La generació d'or",
    "Campiones de Catalunya i subcampiones d'Espanya",
    "Subcampiones de Catalunya",
  ],
  heroImage: { heroImageSrc: heroImage, heroImageAlt: "" },
  sections: [
    {
      title: "Ple de campionats de Catalunya",
      text: [
        "La temporada 2016/17 els equips femenins i masculins de les sis categories formatives, infantils, cadets i juvenils, assoliren per primera vegada a Catalunya els sis campionats de Catalunya. ",
        "Aquests són els equips que van assolir aquest ple de campionats, una efemèride única a l’handbol català.",
      ],
      images: [
        {
          img: carousel1_1,
          imgAlt: "",
        },
        {
          img: carousel1_2,
          imgAlt: "",
        },
        {
          img: carousel1_3,
          imgAlt: "",
        },
        {
          img: carousel1_4,
          imgAlt: "",
        },
        {
          img: carousel1_5,
          imgAlt: "",
        },
        {
          img: carousel1_6,
          imgAlt: "",
        },
      ],
    },
    {
      title: "La generació d'or",
      text: [
        "Entre les temporades 2012/13 i 2016/17 la generació de l’equip masculí que va anar competint des de la categories infantil, cadet i juvenil va assolir els diferents campionats d’Espanya i va es guanyar el respecte i l’admiració del món de l’handbol.",
        "Un dels seus jugadors, Sergi Navarro, va elaborar el documental “La generació d’or” com a treball de síntesi de secundària:",
      ],
      images: [
        {
          img: carousel2_1,
          imgAlt: "",
        },
        {
          img: carousel2_2,
          imgAlt: "",
        },
        {
          img: carousel2_3,
          imgAlt: "",
        },
      ],
      links: [
        {
          text: "Veure documental",
          slug: "https://votv.cat/generacio-dor/",
          ariaLabel: "Veure el documental de la generació d'or del Balonmano Granollers",
          newTab: true,
        },
      ],
    },
    {
      title: "Campiones de Catalunya i subcampiones d'Espanya",
      text: [
        "La temporada 2023/24 l’equip juvenil femení va quedar campió de Catalunya i subcampió d’Espanya.",
      ],
      images: [
        {
          img: carousel3_1,
          imgAlt: "",
        },
        {
          img: carousel3_2,
          imgAlt: "",
        },
      ],
    },
    {
      title: "Supercampiones de Catalunya",
      text: [
        "L’equip sènior femení des del seu ascens a la màxima categoria de l’handbol estatal la temporada 2013/14 ha guanyat de manera consecutiva tots els títols de la Supercopa de Catalunya des de la temporada esmentada i fins a l’actual 2023/24.",
      ],
      images: [
        {
          img: carousel4_1,
          imgAlt: "",
        },
        {
          img: carousel4_2,
          imgAlt: "",
        },
        {
          img: carousel4_3,
          imgAlt: "",
        },
        {
          img: carousel4_4,
          imgAlt: "",
        },
      ],
    },
  ],
  palmares: {
    introText:
      "La relació següent inclou els títols d’Europa, Espanya i Catalunya que han obtingut aquells equips que al llarg d’aquest període de 25 anys, des de 1999 a 2024, han estat totalment o molt majoritàriament en l’àmbit de la Fundació BM Granollers.",
    data: [
      {
        titleKind: "Títol europeu",
        titlesNum: "1",
        titles: [
          {
            team: "Equip de veteranes",
            titlesNum: "European Masters 2021/22",
          },
        ],
      },
      {
        titleKind: "Títols d'Espanya",
        titlesNum: "30",
        titles: [
          {
            team: "Equip sènior femení B",
            titlesNum: "dos títols",
            seasons: "temporades 2020/21 i 2023/24",
          },
          {
            team: "Equip masculí de Primera Nacional",
            titlesNum: "quatre títols",
            seasons: "temporades 2000/1, 2001/2, 2012/13, 2022/23",
          },
          {
            team: "Equip juvenil femení",
            titlesNum: "un títol",
            seasons: "temporades 2011/12",
          },
          {
            team: "Equip juvenil masculí",
            titlesNum: "cinc títols",
            seasons: "temporades 1998/99, 2012/13, 2015/16, 2016/17, 2021/22",
          },
          {
            team: "Equip cadet masculí",
            titlesNum: "sis títols",
            seasons:
              "temporades 2000/1, 20001/2, 2010/11, 2014/15, 2016/17, 2018/19",
          },
          {
            team: "Equip cadet masculí",
            titlesNum: "quatre títols de la Mini Copa",
            seasons: "temporades 2013/14, 2016/17, 2018/19, 2019/20",
          },
          {
            team: "Equip cadet femení",
            titlesNum: "quatre títols de la Mini Copa",
            seasons: "temporades 2016/17, 2018/19, 2021/22, 2022/23",
          },
          {
            team: "Equip infantil masculí",
            titlesNum: "quatre títols",
            seasons: "temporades 2007/08, 2011/12, 2012/13, 2014/15",
          },
        ],
      },
      {
        titleKind: "Títols de Catalunya",
        titlesNum: "37",
        titles: [
          {
            team: "Equip sènior femení",
            titlesNum: "onze Supercopes de Catalunya",
            seasons:
              "temporades 2013/14, 2014/15, 2015/16, 2016/17, 2017/18, 2018/19, 2019/20, 2020/21, 2021/22, 2022/23, 2023/24",
          },
          {
            team: "Equip juvenil femení",
            titlesNum: "tres títols",
            seasons: "temporades 2010/11, 2016/17, 2023/24",
          },
          {
            team: "Equip juvenil masculí",
            titlesNum: "cinc títols",
            seasons: "temporades 2001/02, 2003/04,  2010/11, 2016/17, 2020/21",
          },
          {
            team: "Equip cadet femení",
            titlesNum: "un títol",
            seasons: "temporada 2016/17",
          },
          {
            team: "Equip cadet masculí",
            titlesNum: "dos títols",
            seasons: "temporades 2010/11, 2016/17",
          },
          {
            team: "Equip infantil femení",
            titlesNum: "tres títols",
            seasons: "(temporades 2016/17, 2019/20, 2020/21",
          },
          {
            team: "Equip infantil masculí",
            titlesNum: "tres títols",
            seasons: "temporades 2016/17, 2019/20, 2022/23",
          },
          {
            team: "Equip aleví femení",
            titlesNum: "un títol",
            seasons: "temporada 2023/24",
          },
          {
            team: "Equip de veteranes",
            titlesNum: "vuit títols",
            seasons:
              "temporades 2005/06, 2014/15, 2015/16, 2018/19, 2020/21, 2021/22, 2022/23, 2023/24",
          },
        ],
      },
    ],
  },
};
