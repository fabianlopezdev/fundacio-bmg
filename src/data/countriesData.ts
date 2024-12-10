const countriesInAfrica = ["Egypt", "Kenya", "Morocco", "Nigeria", "Tunisia"];
const countriesInAsia = ["China", "India", "Israel", "South Korea", "Taiwan"];
const countriesInEurope = [
  "Austria", "Belgium", "Bosnia", "Bulgaria", "Croatia", "Czechia", "Denmark",
  "England", "Estonia", "Faroe Islands", "Finland", "France", "Georgia",
  "Germany", "Greece", "Hungary", "Iceland", "Italy", "Latvia", "Lithuania",
  "Macedonia", "Moldova", "Norway", "Poland", "Portugal", "Romania", "Russia",
  "Scotland", "Serbia", "Slovenia", "Spain", "Sweden", "Switzerland",
];
const countriesInNorthAmerica = ["Canada", "Guatemala", "Mexico", "United States"];
const countriesInSouthAmerica = ["Argentina", "Brazil", "Chile", "Colombia", "Uruguay", "Venezuela"];
const countriesInOceania = ["Australia"];

export const allCountriesThatPlayed = [
"Argentina", "Australia", "Austria", "Belgium", "Bosnia", "Brazil", "Bulgaria",
  "Canada", "Chile", "China", "Colombia", "Croatia", "Czechia", "Denmark",
  "Egypt", "England", "Estonia", "Faroe Islands", "Finland", "France", "Georgia",
  "Germany", "Greece", "Guatemala", "Hungary", "Iceland", "India", "Israel",
  "Italy", "Kenya", "Latvia", "Lithuania", "Macedonia", "Mexico", "Moldova",
  "Morocco", "Nigeria", "Norway", "Poland", "Portugal", "Romania", "Russia",
  "Scotland", "Serbia", "Slovenia", "South Korea", "Spain", "Sweden",
  "Switzerland", "Taiwan", "Tunisia", "United States", "Uruguay", "Venezuela",
];

export const countriesInContinents = {
  africa: new Set(countriesInAfrica),
  asia: new Set(countriesInAsia),
  europe: new Set(countriesInEurope),
  "north-america": new Set(countriesInNorthAmerica),
  "south-america": new Set(countriesInSouthAmerica),
  oceania: new Set(countriesInOceania),
};
