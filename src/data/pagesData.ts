import maskImage from "@assets/Mask-group.avif";
import maskImage2 from "@assets/Mask-group-(1).webp";
import maskImage3 from "@assets/Mask-group-(2).webp";
import maskImage4 from "@assets/Mask-group-(3).avif";
import maskImage5 from "@assets/Mask-group-(4).avif";
import maskImage6 from "@assets/Mask-group-(5).avif";
import maskImage7 from "@assets/Mask-group-(6).webp";
import maskImage8 from "@assets/Mask-group-(7).webp";
import maskImage9 from "@assets/Mask-group-(8).avif";
import carousel1 from "@assets/carousel-1.png";
import carousel2 from "@assets/carousel-2.png";
import carousel3 from "@assets/carousel-3.png";

function slugify(text: string): string {
  return text
    .toString() // Ensure it's a string
    .normalize("NFD") // Decompose accents from letters
    .replace(/[\u0300-\u036f]/g, "") // Remove diacritical marks (accents)
    .toLowerCase() // Convert to lowercase
    .trim() // Remove whitespace from both ends
    .replace(/\s+/g, "-") // Replace spaces with dashes
    .replace(/[^\w\-]+/g, "") // Remove all non-word characters
    .replace(/\-\-+/g, "-"); // Replace multiple dashes with a single dash
}

export const PAGES = [
  {
    title: "Un club amb valors",
    homePageMenuImg: {
      imageSrc: maskImage,
      imageAlt: "",
    },
    sections: [
      {
        title: "Cooperació amb Nigèria",
        label: "Nigèria",
        text: [
          "El 2006, la participació d'un equip masculí de Nigèria a la Granollers Cup va ser una fita destacable. Els jugadors van sorprendre tothom amb el seu joc explosiu i de gran qualitat, cosa que va obrir la porta a una col·laboració única. Aquest intercanvi va permetre iniciar un projecte de cooperació amb la Federació Nigeriana d’Handbol. L'objectiu era facilitar la formació esportiva d'aquests jugadors al Club BM Granollers i oferir-los la possibilitat de continuar els seus estudis en un entorn familiar, gràcies a la generosa acollida de famílies vinculades al club.",
          "El projecte es va materialitzar la temporada 2007/08 amb l'arribada de tres joves jugadors: Salisu Garba, A. Babangida i Alí Ahmed, que es van incorporar als equips Infantil A, Infantil Sporting i Aleví A, respectivament. Tot i que aquesta iniciativa només va tenir continuïtat durant una temporada, va ser una experiència enriquidora i va destacar per la seva ambició de crear oportunitats internacionals per a joves esportistes.",
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
      },
      {
        title: "Cooperació a la regió de Kédougou, Senegal",
        label: "Senegal",
        text: [
          "El projecte de cooperació a Kédougou va néixer impulsat per diversos factors. D'una banda, els germans Mamadou, Kaba i Gundo Gassama, esportistes del Club BM Granollers, tenien arrels familiars a la regió de Kédougou, al Senegal. A més, a la zona hi havia un equip femení que practicava handbol, i l'Ajuntament de Granollers, sota la direcció de l'alcalde Josep Mayoral, va establir lligams de col·laboració amb la regió després d'una visita oficial.",
          "Aquestes circumstàncies van ser l’estímul per a que la Fundació BM Granollers i el Club engeguessin un projecte de formació entre els anys 2017 i 2022, amb la participació de tècnics com Pol García, David Ginesta i Aleix Caussa. Aquests formadors, plens d’entusiasme, van treballar per promoure l’handbol femení a la regió i ajudar a la formació de tècnics locals, amb l'objectiu de fomentar trobades escolars d'handbol.",
          "Un moment destacat del projecte va ser el Torneig de l’Amistat del 2019, on un equip femení del Club BM Granollers va participar i va guanyar el títol de campiones. L'expedició incloïa també la directiva Mireia Cammany i un representant de la Universitat de Barcelona, reafirmant el compromís del club amb la formació esportiva i la cooperació internacional.",
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
      },
    ],
  },
  {
    title: "Palmarés del planter",
    homePageMenuImg: {
      imageSrc: maskImage2,
      imageAlt: "",
    },
    sections: [
      {
        title: "Cooperació amb Nigèria",
        label: "Nigèria",
        text: [
          "El 2006, la participació d'un equip masculí de Nigèria a la Granollers Cup va ser una fita destacable. Els jugadors van sorprendre tothom amb el seu joc explosiu i de gran qualitat, cosa que va obrir la porta a una col·laboració única. Aquest intercanvi va permetre iniciar un projecte de cooperació amb la Federació Nigeriana d’Handbol. L'objectiu era facilitar la formació esportiva d'aquests jugadors al Club BM Granollers i oferir-los la possibilitat de continuar els seus estudis en un entorn familiar, gràcies a la generosa acollida de famílies vinculades al club.",
          "El projecte es va materialitzar la temporada 2007/08 amb l'arribada de tres joves jugadors: Salisu Garba, A. Babangida i Alí Ahmed, que es van incorporar als equips Infantil A, Infantil Sporting i Aleví A, respectivament. Tot i que aquesta iniciativa només va tenir continuïtat durant una temporada, va ser una experiència enriquidora i va destacar per la seva ambició de crear oportunitats internacionals per a joves esportistes.",
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
      },
      {
        title: "Cooperació a la regió de Kédougou, Senegal",
        label: "Senegal",
        text: [
          "El projecte de cooperació a Kédougou va néixer impulsat per diversos factors. D'una banda, els germans Mamadou, Kaba i Gundo Gassama, esportistes del Club BM Granollers, tenien arrels familiars a la regió de Kédougou, al Senegal. A més, a la zona hi havia un equip femení que practicava handbol, i l'Ajuntament de Granollers, sota la direcció de l'alcalde Josep Mayoral, va establir lligams de col·laboració amb la regió després d'una visita oficial.",
          "Aquestes circumstàncies van ser l’estímul per a que la Fundació BM Granollers i el Club engeguessin un projecte de formació entre els anys 2017 i 2022, amb la participació de tècnics com Pol García, David Ginesta i Aleix Caussa. Aquests formadors, plens d’entusiasme, van treballar per promoure l’handbol femení a la regió i ajudar a la formació de tècnics locals, amb l'objectiu de fomentar trobades escolars d'handbol.",
          "Un moment destacat del projecte va ser el Torneig de l’Amistat del 2019, on un equip femení del Club BM Granollers va participar i va guanyar el títol de campiones. L'expedició incloïa també la directiva Mireia Cammany i un representant de la Universitat de Barcelona, reafirmant el compromís del club amb la formació esportiva i la cooperació internacional.",
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
      },
    ],
  },
  {
    title: "Tornejos",
    homePageMenuImg: {
      imageSrc: maskImage3,
      imageAlt: "",
    },
    sections: [
      {
        title: "Cooperació a la regió de Kédougou, Senegal",
        label: "Senegal",
        text: [
          "El projecte de cooperació a Kédougou va néixer impulsat per diversos factors. D'una banda, els germans Mamadou, Kaba i Gundo Gassama, esportistes del Club BM Granollers, tenien arrels familiars a la regió de Kédougou, al Senegal. A més, a la zona hi havia un equip femení que practicava handbol, i l'Ajuntament de Granollers, sota la direcció de l'alcalde Josep Mayoral, va establir lligams de col·laboració amb la regió després d'una visita oficial.",
          "Aquestes circumstàncies van ser l’estímul per a que la Fundació BM Granollers i el Club engeguessin un projecte de formació entre els anys 2017 i 2022, amb la participació de tècnics com Pol García, David Ginesta i Aleix Caussa. Aquests formadors, plens d’entusiasme, van treballar per promoure l’handbol femení a la regió i ajudar a la formació de tècnics locals, amb l'objectiu de fomentar trobades escolars d'handbol.",
          "Un moment destacat del projecte va ser el Torneig de l’Amistat del 2019, on un equip femení del Club BM Granollers va participar i va guanyar el títol de campiones. L'expedició incloïa també la directiva Mireia Cammany i un representant de la Universitat de Barcelona, reafirmant el compromís del club amb la formació esportiva i la cooperació internacional.",
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
      },
    ],
  },
  {
    title: "Equip Especial",
    homePageMenuImg: {
      imageSrc: maskImage4,
      imageAlt: "",
    },
    sections: [
      {
        title: "Cooperació amb Nigèria",
        label: "Nigèria",
        text: [
          "El 2006, la participació d'un equip masculí de Nigèria a la Granollers Cup va ser una fita destacable. Els jugadors van sorprendre tothom amb el seu joc explosiu i de gran qualitat, cosa que va obrir la porta a una col·laboració única. Aquest intercanvi va permetre iniciar un projecte de cooperació amb la Federació Nigeriana d’Handbol. L'objectiu era facilitar la formació esportiva d'aquests jugadors al Club BM Granollers i oferir-los la possibilitat de continuar els seus estudis en un entorn familiar, gràcies a la generosa acollida de famílies vinculades al club.",
          "El projecte es va materialitzar la temporada 2007/08 amb l'arribada de tres joves jugadors: Salisu Garba, A. Babangida i Alí Ahmed, que es van incorporar als equips Infantil A, Infantil Sporting i Aleví A, respectivament. Tot i que aquesta iniciativa només va tenir continuïtat durant una temporada, va ser una experiència enriquidora i va destacar per la seva ambició de crear oportunitats internacionals per a joves esportistes.",
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
      },
      {
        title: "Cooperació a la regió de Kédougou, Senegal",
        label: "Senegal",
        text: [
          "El projecte de cooperació a Kédougou va néixer impulsat per diversos factors. D'una banda, els germans Mamadou, Kaba i Gundo Gassama, esportistes del Club BM Granollers, tenien arrels familiars a la regió de Kédougou, al Senegal. A més, a la zona hi havia un equip femení que practicava handbol, i l'Ajuntament de Granollers, sota la direcció de l'alcalde Josep Mayoral, va establir lligams de col·laboració amb la regió després d'una visita oficial.",
          "Aquestes circumstàncies van ser l’estímul per a que la Fundació BM Granollers i el Club engeguessin un projecte de formació entre els anys 2017 i 2022, amb la participació de tècnics com Pol García, David Ginesta i Aleix Caussa. Aquests formadors, plens d’entusiasme, van treballar per promoure l’handbol femení a la regió i ajudar a la formació de tècnics locals, amb l'objectiu de fomentar trobades escolars d'handbol.",
          "Un moment destacat del projecte va ser el Torneig de l’Amistat del 2019, on un equip femení del Club BM Granollers va participar i va guanyar el títol de campiones. L'expedició incloïa també la directiva Mireia Cammany i un representant de la Universitat de Barcelona, reafirmant el compromís del club amb la formació esportiva i la cooperació internacional.",
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
      },
    ],
  },
  {
    title: "Projectes de cooperació",
    homePageMenuImg: {
      imageSrc: maskImage5,
      imageAlt: "",
    },
    sections: [
      {
        title: "Cooperació amb Nigèria",
        label: "Nigèria",
        text: [
          "El 2006, la participació d'un equip masculí de Nigèria a la Granollers Cup va ser una fita destacable. Els jugadors van sorprendre tothom amb el seu joc explosiu i de gran qualitat, cosa que va obrir la porta a una col·laboració única. Aquest intercanvi va permetre iniciar un projecte de cooperació amb la Federació Nigeriana d’Handbol. L'objectiu era facilitar la formació esportiva d'aquests jugadors al Club BM Granollers i oferir-los la possibilitat de continuar els seus estudis en un entorn familiar, gràcies a la generosa acollida de famílies vinculades al club.",
          "El projecte es va materialitzar la temporada 2007/08 amb l'arribada de tres joves jugadors: Salisu Garba, A. Babangida i Alí Ahmed, que es van incorporar als equips Infantil A, Infantil Sporting i Aleví A, respectivament. Tot i que aquesta iniciativa només va tenir continuïtat durant una temporada, va ser una experiència enriquidora i va destacar per la seva ambició de crear oportunitats internacionals per a joves esportistes.",
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
      },
      {
        title: "Cooperació a la regió de Kédougou, Senegal",
        label: "Senegal",
        text: [
          "El projecte de cooperació a Kédougou va néixer impulsat per diversos factors. D'una banda, els germans Mamadou, Kaba i Gundo Gassama, esportistes del Club BM Granollers, tenien arrels familiars a la regió de Kédougou, al Senegal. A més, a la zona hi havia un equip femení que practicava handbol, i l'Ajuntament de Granollers, sota la direcció de l'alcalde Josep Mayoral, va establir lligams de col·laboració amb la regió després d'una visita oficial.",
          "Aquestes circumstàncies van ser l’estímul per a que la Fundació BM Granollers i el Club engeguessin un projecte de formació entre els anys 2017 i 2022, amb la participació de tècnics com Pol García, David Ginesta i Aleix Caussa. Aquests formadors, plens d’entusiasme, van treballar per promoure l’handbol femení a la regió i ajudar a la formació de tècnics locals, amb l'objectiu de fomentar trobades escolars d'handbol.",
          "Un moment destacat del projecte va ser el Torneig de l’Amistat del 2019, on un equip femení del Club BM Granollers va participar i va guanyar el títol de campiones. L'expedició incloïa també la directiva Mireia Cammany i un representant de la Universitat de Barcelona, reafirmant el compromís del club amb la formació esportiva i la cooperació internacional.",
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
      },
    ],
  },
  {
    title: "La residència",
    homePageMenuImg: {
      imageSrc: maskImage6,
      imageAlt: "",
    },
    sections: [
      {
        title: "Cooperació amb Nigèria",
        label: "Nigèria",
        text: [
          "El 2006, la participació d'un equip masculí de Nigèria a la Granollers Cup va ser una fita destacable. Els jugadors van sorprendre tothom amb el seu joc explosiu i de gran qualitat, cosa que va obrir la porta a una col·laboració única. Aquest intercanvi va permetre iniciar un projecte de cooperació amb la Federació Nigeriana d’Handbol. L'objectiu era facilitar la formació esportiva d'aquests jugadors al Club BM Granollers i oferir-los la possibilitat de continuar els seus estudis en un entorn familiar, gràcies a la generosa acollida de famílies vinculades al club.",
          "El projecte es va materialitzar la temporada 2007/08 amb l'arribada de tres joves jugadors: Salisu Garba, A. Babangida i Alí Ahmed, que es van incorporar als equips Infantil A, Infantil Sporting i Aleví A, respectivament. Tot i que aquesta iniciativa només va tenir continuïtat durant una temporada, va ser una experiència enriquidora i va destacar per la seva ambició de crear oportunitats internacionals per a joves esportistes.",
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
      },
      {
        title: "Cooperació a la regió de Kédougou, Senegal",
        label: "Senegal",
        text: [
          "El projecte de cooperació a Kédougou va néixer impulsat per diversos factors. D'una banda, els germans Mamadou, Kaba i Gundo Gassama, esportistes del Club BM Granollers, tenien arrels familiars a la regió de Kédougou, al Senegal. A més, a la zona hi havia un equip femení que practicava handbol, i l'Ajuntament de Granollers, sota la direcció de l'alcalde Josep Mayoral, va establir lligams de col·laboració amb la regió després d'una visita oficial.",
          "Aquestes circumstàncies van ser l’estímul per a que la Fundació BM Granollers i el Club engeguessin un projecte de formació entre els anys 2017 i 2022, amb la participació de tècnics com Pol García, David Ginesta i Aleix Caussa. Aquests formadors, plens d’entusiasme, van treballar per promoure l’handbol femení a la regió i ajudar a la formació de tècnics locals, amb l'objectiu de fomentar trobades escolars d'handbol.",
          "Un moment destacat del projecte va ser el Torneig de l’Amistat del 2019, on un equip femení del Club BM Granollers va participar i va guanyar el títol de campiones. L'expedició incloïa també la directiva Mireia Cammany i un representant de la Universitat de Barcelona, reafirmant el compromís del club amb la formació esportiva i la cooperació internacional.",
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
      },
    ],
  },
  {
    title: "Veterans",
    homePageMenuImg: {
      imageSrc: maskImage7,
      imageAlt: "",
    },
    sections: [
      {
        title: "Cooperació amb Nigèria",
        label: "Nigèria",
        text: [
          "El 2006, la participació d'un equip masculí de Nigèria a la Granollers Cup va ser una fita destacable. Els jugadors van sorprendre tothom amb el seu joc explosiu i de gran qualitat, cosa que va obrir la porta a una col·laboració única. Aquest intercanvi va permetre iniciar un projecte de cooperació amb la Federació Nigeriana d’Handbol. L'objectiu era facilitar la formació esportiva d'aquests jugadors al Club BM Granollers i oferir-los la possibilitat de continuar els seus estudis en un entorn familiar, gràcies a la generosa acollida de famílies vinculades al club.",
          "El projecte es va materialitzar la temporada 2007/08 amb l'arribada de tres joves jugadors: Salisu Garba, A. Babangida i Alí Ahmed, que es van incorporar als equips Infantil A, Infantil Sporting i Aleví A, respectivament. Tot i que aquesta iniciativa només va tenir continuïtat durant una temporada, va ser una experiència enriquidora i va destacar per la seva ambició de crear oportunitats internacionals per a joves esportistes.",
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
      },
      {
        title: "Cooperació a la regió de Kédougou, Senegal",
        label: "Senegal",
        text: [
          "El projecte de cooperació a Kédougou va néixer impulsat per diversos factors. D'una banda, els germans Mamadou, Kaba i Gundo Gassama, esportistes del Club BM Granollers, tenien arrels familiars a la regió de Kédougou, al Senegal. A més, a la zona hi havia un equip femení que practicava handbol, i l'Ajuntament de Granollers, sota la direcció de l'alcalde Josep Mayoral, va establir lligams de col·laboració amb la regió després d'una visita oficial.",
          "Aquestes circumstàncies van ser l’estímul per a que la Fundació BM Granollers i el Club engeguessin un projecte de formació entre els anys 2017 i 2022, amb la participació de tècnics com Pol García, David Ginesta i Aleix Caussa. Aquests formadors, plens d’entusiasme, van treballar per promoure l’handbol femení a la regió i ajudar a la formació de tècnics locals, amb l'objectiu de fomentar trobades escolars d'handbol.",
          "Un moment destacat del projecte va ser el Torneig de l’Amistat del 2019, on un equip femení del Club BM Granollers va participar i va guanyar el títol de campiones. L'expedició incloïa també la directiva Mireia Cammany i un representant de la Universitat de Barcelona, reafirmant el compromís del club amb la formació esportiva i la cooperació internacional.",
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
      },
    ],
  },
  {
    title: "Acompanyant el club",
    homePageMenuImg: {
      imageSrc: maskImage8,
      imageAlt: "",
    },
    sections: [
      {
        title: "Cooperació amb Nigèria",
        label: "Nigèria",
        text: [
          "El 2006, la participació d'un equip masculí de Nigèria a la Granollers Cup va ser una fita destacable. Els jugadors van sorprendre tothom amb el seu joc explosiu i de gran qualitat, cosa que va obrir la porta a una col·laboració única. Aquest intercanvi va permetre iniciar un projecte de cooperació amb la Federació Nigeriana d’Handbol. L'objectiu era facilitar la formació esportiva d'aquests jugadors al Club BM Granollers i oferir-los la possibilitat de continuar els seus estudis en un entorn familiar, gràcies a la generosa acollida de famílies vinculades al club.",
          "El projecte es va materialitzar la temporada 2007/08 amb l'arribada de tres joves jugadors: Salisu Garba, A. Babangida i Alí Ahmed, que es van incorporar als equips Infantil A, Infantil Sporting i Aleví A, respectivament. Tot i que aquesta iniciativa només va tenir continuïtat durant una temporada, va ser una experiència enriquidora i va destacar per la seva ambició de crear oportunitats internacionals per a joves esportistes.",
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
      },
      {
        title: "Cooperació a la regió de Kédougou, Senegal",
        label: "Senegal",
        text: [
          "El projecte de cooperació a Kédougou va néixer impulsat per diversos factors. D'una banda, els germans Mamadou, Kaba i Gundo Gassama, esportistes del Club BM Granollers, tenien arrels familiars a la regió de Kédougou, al Senegal. A més, a la zona hi havia un equip femení que practicava handbol, i l'Ajuntament de Granollers, sota la direcció de l'alcalde Josep Mayoral, va establir lligams de col·laboració amb la regió després d'una visita oficial.",
          "Aquestes circumstàncies van ser l’estímul per a que la Fundació BM Granollers i el Club engeguessin un projecte de formació entre els anys 2017 i 2022, amb la participació de tècnics com Pol García, David Ginesta i Aleix Caussa. Aquests formadors, plens d’entusiasme, van treballar per promoure l’handbol femení a la regió i ajudar a la formació de tècnics locals, amb l'objectiu de fomentar trobades escolars d'handbol.",
          "Un moment destacat del projecte va ser el Torneig de l’Amistat del 2019, on un equip femení del Club BM Granollers va participar i va guanyar el títol de campiones. L'expedició incloïa també la directiva Mireia Cammany i un representant de la Universitat de Barcelona, reafirmant el compromís del club amb la formació esportiva i la cooperació internacional.",
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
      },
    ],
  },
  {
    title: "El llegat dels 25anys",
    homePageMenuImg: {
      imageSrc: maskImage9,
      imageAlt: "",
    },
    sections: [
      {
        title: "Cooperació amb Nigèria",
        label: "Nigèria",
        text: [
          "El 2006, la participació d'un equip masculí de Nigèria a la Granollers Cup va ser una fita destacable. Els jugadors van sorprendre tothom amb el seu joc explosiu i de gran qualitat, cosa que va obrir la porta a una col·laboració única. Aquest intercanvi va permetre iniciar un projecte de cooperació amb la Federació Nigeriana d’Handbol. L'objectiu era facilitar la formació esportiva d'aquests jugadors al Club BM Granollers i oferir-los la possibilitat de continuar els seus estudis en un entorn familiar, gràcies a la generosa acollida de famílies vinculades al club.",
          "El projecte es va materialitzar la temporada 2007/08 amb l'arribada de tres joves jugadors: Salisu Garba, A. Babangida i Alí Ahmed, que es van incorporar als equips Infantil A, Infantil Sporting i Aleví A, respectivament. Tot i que aquesta iniciativa només va tenir continuïtat durant una temporada, va ser una experiència enriquidora i va destacar per la seva ambició de crear oportunitats internacionals per a joves esportistes.",
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
      },
      {
        title: "Cooperació a la regió de Kédougou, Senegal",
        label: "Senegal",
        text: [
          "El projecte de cooperació a Kédougou va néixer impulsat per diversos factors. D'una banda, els germans Mamadou, Kaba i Gundo Gassama, esportistes del Club BM Granollers, tenien arrels familiars a la regió de Kédougou, al Senegal. A més, a la zona hi havia un equip femení que practicava handbol, i l'Ajuntament de Granollers, sota la direcció de l'alcalde Josep Mayoral, va establir lligams de col·laboració amb la regió després d'una visita oficial.",
          "Aquestes circumstàncies van ser l’estímul per a que la Fundació BM Granollers i el Club engeguessin un projecte de formació entre els anys 2017 i 2022, amb la participació de tècnics com Pol García, David Ginesta i Aleix Caussa. Aquests formadors, plens d’entusiasme, van treballar per promoure l’handbol femení a la regió i ajudar a la formació de tècnics locals, amb l'objectiu de fomentar trobades escolars d'handbol.",
          "Un moment destacat del projecte va ser el Torneig de l’Amistat del 2019, on un equip femení del Club BM Granollers va participar i va guanyar el títol de campiones. L'expedició incloïa també la directiva Mireia Cammany i un representant de la Universitat de Barcelona, reafirmant el compromís del club amb la formació esportiva i la cooperació internacional.",
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
      },
    ],
  },
].map((page) => ({
  ...page,
  linkHref: slugify(page.title), // Generate slug for each section title
}));
