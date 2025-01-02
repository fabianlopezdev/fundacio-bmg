import { slugify } from "@utils/index";

import heroCooperacio from "@assets/hero-images/cooperacio.webp";
import heroResidencia from "@assets/hero-images/residencia.webp";
import heroVeterans from "@assets/hero-images/veterans.webp";
import heroSpecial from "@assets/hero-images/special.webp";
import heroLlegat from "@assets/hero-images/llegat.webp";

import cooperacioCarousel1_1 from "@assets/carousel-images/cooperacio/nigeria/nigeria_carrusel_1.webp";
import cooperacioCarousel1_2 from "@assets/carousel-images/cooperacio/nigeria/nigeria_carrusel_2.webp";
import cooperacioCarousel1_3 from "@assets/carousel-images/cooperacio/nigeria/nigeria_carrusel_3.webp";

import cooperacioCarousel2_1 from "@assets/carousel-images/cooperacio/senegal/senegal_carrusel_1.webp";
import cooperacioCarousel2_2 from "@assets/carousel-images/cooperacio/senegal/senegal_carrusel_2.webp";
import cooperacioCarousel2_3 from "@assets/carousel-images/cooperacio/senegal/senegal_carrusel_3.webp";
import cooperacioCarousel2_4 from "@assets/carousel-images/cooperacio/senegal/senegal_carrusel_4.webp";
import cooperacioCarousel2_5 from "@assets/carousel-images/cooperacio/senegal/senegal_carrusel_5.webp";
import cooperacioCarousel2_6 from "@assets/carousel-images/cooperacio/senegal/senegal_carrusel_6.webp";

import residenciaCarousel1_1 from "@assets/carousel-images/residencia/residencia_carrusel_1.webp";
import residenciaCarousel1_2 from "@assets/carousel-images/residencia/residencia_carrusel_2.webp";
import residenciaCarousel1_3 from "@assets/carousel-images/residencia/residencia_carrusel_3.webp";

import veteransCarousel1_1 from "@assets/carousel-images/veterans/veterans_carrusel_1.webp";
import veteransCarousel1_2 from "@assets/carousel-images/veterans/veterans_carrusel_2.webp";
import veteransCarousel1_3 from "@assets/carousel-images/veterans/veterans_carrusel_3.webp";
import veteransCarousel1_4 from "@assets/carousel-images/veterans/veterans_carrusel_4.webp";

import specialCarousel1_1 from "@assets/carousel-images/special/equipspecial_carrusel_1.webp";
import specialCarousel1_2 from "@assets/carousel-images/special/equipspecial_carrusel_2.webp";
import specialCarousel1_3 from "@assets/carousel-images/special/equipspecial_carrusel_3.webp";
import specialCarousel1_4 from "@assets/carousel-images/special/equipspecial_carrusel_4.webp";
import specialCarousel1_5 from "@assets/carousel-images/special/equipspecial_carrusel_5.webp";

import llegatCarousel1_1 from "@assets/carousel-images/llegat/llegat_carrusel_1.webp";
import llegatCarousel1_2 from "@assets/carousel-images/llegat/llegat_carrusel_2.webp";
import llegatCarousel1_3 from "@assets/carousel-images/llegat/llegat_carrusel_3.webp";

export const PAGES = [
  {
    title: "Projectes de cooperació",
    heroImage: { heroImageSrc: heroCooperacio, heroImageAlt: "" },
    sectionsLabels: ["Nigèria", "Senegal"],
    sections: [
      {
        title: "Cooperació amb Nigèria",
        text: [
          "El 2006, la participació d'un equip masculí de Nigèria a la Granollers Cup va ser una fita destacable. Els jugadors van sorprendre tothom amb el seu joc explosiu i de gran qualitat, cosa que va obrir la porta a una col·laboració única. Aquest intercanvi va permetre iniciar un projecte de cooperació amb la Federació Nigeriana d’Handbol. L'objectiu era facilitar la formació esportiva d'aquests jugadors al Club BM Granollers i oferir-los la possibilitat de continuar els seus estudis en un entorn familiar, gràcies a la generosa acollida de famílies vinculades al club.",
          "El projecte es va materialitzar la temporada 2007/08 amb l'arribada de tres joves jugadors: Salisu Garba, A. Babangida i Alí Ahmed, que es van incorporar als equips Infantil A, Infantil Sporting i Aleví A, respectivament. Tot i que aquesta iniciativa només va tenir continuïtat durant una temporada, va ser una experiència enriquidora i va destacar per la seva ambició de crear oportunitats internacionals per a joves esportistes.",
        ],
        images: [
          {
            img: cooperacioCarousel1_1,
            imgAlt: "",
          },
          {
            img: cooperacioCarousel1_2,
            imgAlt: "",
          },
          {
            img: cooperacioCarousel1_3,
            imgAlt: "",
          },
        ],
      },
      {
        title: "Cooperació a la regió de Kédougou, Senegal",
        text: [
          "El projecte de cooperació a Kédougou va néixer impulsat per diversos factors. D'una banda, els germans Mamadou, Kaba i Gundo Gassama, esportistes del Club BM Granollers, tenien arrels familiars a la regió de Kédougou, al Senegal. A més, a la zona hi havia un equip femení que practicava handbol, i l'Ajuntament de Granollers, sota la direcció de l'alcalde Josep Mayoral, va establir lligams de col·laboració amb la regió després d'una visita oficial.",
          "Aquestes circumstàncies van ser l’estímul per a que la Fundació BM Granollers i el Club engeguessin un projecte de formació entre els anys 2017 i 2022, amb la participació de tècnics com Pol García, David Ginesta i Aleix Caussa. Aquests formadors, plens d’entusiasme, van treballar per promoure l’handbol femení a la regió i ajudar a la formació de tècnics locals, amb l'objectiu de fomentar trobades escolars d'handbol.",
          "Un moment destacat del projecte va ser el Torneig de l’Amistat del 2019, on un equip femení del Club BM Granollers va participar i va guanyar el títol de campiones. L'expedició incloïa també la directiva Mireia Cammany i un representant de la Universitat de Barcelona, reafirmant el compromís del club amb la formació esportiva i la cooperació internacional.",
        ],
        images: [
          {
            img: cooperacioCarousel2_1,
            imgAlt: "",
          },
          {
            img: cooperacioCarousel2_2,
            imgAlt: "",
          },
          {
            img: cooperacioCarousel2_3,
            imgAlt: "",
          },
          {
            img: cooperacioCarousel2_4,
            imgAlt: "",
          },
          {
            img: cooperacioCarousel2_5,
            imgAlt: "",
          },
          {
            img: cooperacioCarousel2_6,
            imgAlt: "",
          },
        ],
      },
    ],
  },
  {
    title: "La residència",
    heroImage: { heroImageSrc: heroResidencia, heroImageAlt: "" },
    sections: [
      {
        text: [
          "L'any 2008, gràcies a un acord urbanístic impulsat el 1999 per la junta directiva presidida per Ramon Font, es va inaugurar la residència de jugadors joves al carrer de l’Enginyer, a Granollers. Aquesta instal·lació va néixer amb l'objectiu d'acollir joves talents en formació, oferint-los l'oportunitat de perfeccionar les seves habilitats esportives a la ciutat, en un entorn adequat per al seu desenvolupament.",
          "Al llarg dels anys la residència ha estat la llar de jugadors com Juan Del Arco, José Rial, Mikel Muguerza, Saúl Campo, David Herrera, Pep Reixach i Carlos Barbero. Recentment, amb l'ascens de l'equip sènior femení a la màxima categoria de l'handbol espanyol, la residència també ha acollit destacades jugadores de l’equip femení com Giulia Guareiro, Tilda Mathis, Nicole Wiggins, Carmen Prelchi, Lora Sarandeva, Ana González i Lea Kofler.",
          "Aquesta residència no només ofereix allotjament, sinó que és un espai on els esportistes poden créixer tant a nivell esportiu com personal, consolidant-se com una peça clau per a l'èxit dels jugadors i jugadores del Club BM Granollers.",
        ],
        images: [
          {
            img: residenciaCarousel1_1,
            imgAlt: "",
          },
          {
            img: residenciaCarousel1_2,
            imgAlt: "",
          },
          {
            img: residenciaCarousel1_3,
            imgAlt: "",
          },
        ],
      },
    ],
  },
  {
    title: "Equips de veteranes i veterans",
    heroImage: { heroImageSrc: heroVeterans, heroImageAlt: "" },
    sections: [
      {
        text: [
          "La Fundació i el Club BM Granollers han impulsat la continuïtat en la pràctica de l'handbol i l’exercici físic per a aquells jugadors i jugadores que desitgen seguir competint. Tot i que durant un temps es van mantenir equips tant de veterans com de veteranes, actualment és l'equip de veteranes el que segueix actiu. Aquest equip ha aconseguit importants fites, incloent diversos campionats de Catalunya, i es va proclamar campió d’Europa al torneig celebrat a Granollers l'any 2022. ",
        ],
        images: [
          {
            img: veteransCarousel1_1,
            imgAlt: "",
          },
          {
            img: veteransCarousel1_2,
            imgAlt: "",
          },
          {
            img: veteransCarousel1_3,
            imgAlt: "",
          },
          {
            img: veteransCarousel1_4,
            imgAlt: "",
          },
        ],
      },
    ],
  },
  {
    title: "Acompanyant el club",
    sections: [
      {
        text: [
          "La Fundació BM Granollers i el Club BM Granollers comparteixen una missió fonamental: la formació esportiva i en valors. Tal com recull el codi ètic de la Fundació, la seva tasca té un doble objectiu: formar esportistes tant en l'àmbit esportiu, ajudant-los a desenvolupar les seves capacitats fins a poder arribar en alguns casos a l'elit, com en l’àmbit personal, impulsant valors cívics i democràtics com el respecte, el compromís, l'esforç i el treball en equip. Aquests valors ajuden a arrelar els esportistes a l’entitat i a la ciutat. El creixement dels jugadors i jugadores i els títols aconseguits fins ara són testimoni d’aquesta tasca de formació contínua.",
          "En moments clau, especialment des de la crisi de la temporada 2010-11, la Fundació ha estat també un pilar essencial d’estabilitat institucional i econòmica per al Club BM Granollers. Gràcies a una gestió rigorosa i a l’esforç conjunt d'empreses i particulars, l’any 2021 es va poder encaminar la recuperació de la solidesa financera de l’entitat.",
        ],
      },
    ],
  },
  {
    title: "El llegat dels 25 anys",
    heroImage: { heroImageSrc: heroLlegat, heroImageAlt: "" },
    sections: [
      {
        text: [
          " El 13 de juny de 2024 es va celebrar un acte especial amb fundadors, empreses i institucions que han donat suport a la Fundació BM Granollers durant els primers vint-i-cinc anys d’història. La trobada es va dur a terme a l’Espai BMG, al Palau d’Esports de Granollers, on actualment s’exposa la història del club. Aquest acte va permetre reconèixer i agrair la dedicació d’aquelles persones i entitats que han contribuït al creixement i a la tasca de la Fundació BM Granollers. Avui, com des del primer dia, la Fundació col·labora amb el Club BM Granollers per promoure l’handbol, fomentar valors en les noves generacions i treballar per un esport i una societat més inclusius.",
          "La Fundació vol expressar un agraïment especial a les institucions i empreses que han estat al seu costat durant aquest temps:",
          "Institucions: Ajuntament de Granollers, Ajuntaments de Canovelles, Les Franqueses del Vallès, Cardedeu, Montornès del Vallès i Vilanova del Vallès; Diputació de Barcelona; Consell Comarcal del Vallès Oriental i Consell Català de l’Esport.",
          "Empreses: Advisoria, Aparthotel Atenea, BBVA, CaixaBank, Caprabo, Coaliment, Consorci de Gestió de Residus del Vallès Oriental, Covalco, La Mútua de Granollers, Electro Pla Granollers SA, Estabanell Energia, Fraikin, Kiloutou, KH-7, Top Toys i Vilor.",
          "Gràcies per ser-hi i per fer possible la nostra història!",
        ],
        images: [
          {
            img: llegatCarousel1_1,
            imgAlt: "",
          },
          {
            img: llegatCarousel1_2,
            imgAlt: "",
          },
          {
            img: llegatCarousel1_3,
            imgAlt: "",
          },
        ],
      },
    ],
  },
  {
    title: "Equip Special",
    heroImage: { heroImageSrc: heroSpecial, heroImageAlt: "" },
    sections: [
      {
        text: [
          "Segons els estatuts de la Fundació BM Granollers i amb l'objectiu de millorar la salut i el benestar de les persones amb diversitat funcional, es crea l'equip Magic’s la temporada 2018/19. Des d’aleshores participa en les lligues de la Fundació DeManoenMano per donar visibilitat a nois i noies amb necessitats especials. L'equip Magic’s ofereix un espai per a la pràctica de l'esport, l'exercici físic i fomenta la relació i convivència entre els seus membres.",
        ],
        images: [
          {
            img: specialCarousel1_1,
            imgAlt: "",
          },
          {
            img: specialCarousel1_2,
            imgAlt: "",
          },
          {
            img: specialCarousel1_3,
            imgAlt: "",
          },
          {
            img: specialCarousel1_4,
            imgAlt: "",
          },
          {
            img: specialCarousel1_5,
            imgAlt: "",
          },
        ],
      },
    ],
  },
].map((page) => ({
  ...page,
  linkHref: slugify(page.title),
}));
