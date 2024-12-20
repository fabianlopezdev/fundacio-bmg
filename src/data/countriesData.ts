const countriesInAfrica = ["Egipte", "Kenya", "Marroc", "Nigèria", "Tunísia"];

const countriesInAsia = ["Xina", "Índia", "Israel", "Corea del Sud", "Taiwan"];

const countriesInEurope = [
  "Àustria", "Bèlgica", "Bòsnia", "Bulgària", "Croàcia", "Txèquia", "Dinamarca",
  "Anglaterra", "Estònia", "Illes Fèroe", "Finlàndia", "França", "Geòrgia",
  "Alemanya", "Grècia", "Hongria", "Islàndia", "Itàlia", "Letònia", "Lituània",
  "Macedònia", "Moldàvia", "Noruega", "Polònia", "Portugal", "Romania", "Rússia",
  "Escòcia", "Sèrbia", "Eslovènia", "Espanya", "Suècia", "Suïssa"
];

const countriesInNorthAmerica = ["Canadà", "Guatemala", "Mèxic", "Estats Units"];

const countriesInSouthAmerica = ["Argentina", "Brasil", "Xile", "Colòmbia", "Uruguai", "Veneçuela"];

const countriesInOceania = ["Austràlia"];

export const allCountriesThatPlayed = [
  "Argentina", "Austràlia", "Àustria", "Bèlgica", "Bòsnia", "Brasil", "Bulgària",
  "Canadà", "Xile", "Xina", "Colòmbia", "Croàcia", "Txèquia", "Dinamarca",
  "Egipte", "Anglaterra", "Estònia", "Illes Fèroe", "Finlàndia", "França", "Geòrgia",
  "Alemanya", "Grècia", "Guatemala", "Hongria", "Islàndia", "Índia", "Israel",
  "Itàlia", "Kenya", "Letònia", "Lituània", "Macedònia", "Mèxic", "Moldàvia",
  "Marroc", "Nigèria", "Noruega", "Polònia", "Portugal", "Romania", "Rússia",
  "Escòcia", "Sèrbia", "Eslovènia", "Corea del Sud", "Espanya", "Suècia",
  "Suïssa", "Taiwan", "Tunísia", "Estats Units", "Uruguai", "Veneçuela"
];

export const countriesInContinents = {
  africa: new Set(countriesInAfrica),
  asia: new Set(countriesInAsia),
  europe: new Set(countriesInEurope),
  "north-america": new Set(countriesInNorthAmerica),
  "south-america": new Set(countriesInSouthAmerica),
  oceania: new Set(countriesInOceania),
};
const formatContinentName = (continent) => {
  const nameMap = {
    europe: "Europa",
    asia: "Àsia",
    africa: "Àfrica",
    "north-america": "Amèrica del Nord",
    "south-america": "Amèrica del Sud",
    oceania: "Oceania",
  };
  return nameMap[continent] || continent;
};

export const continentInfoElements = Object.entries(countriesInContinents).map(
  ([continent, countries]) => ({
    id: continent,
    name: formatContinentName(continent),
    countriesCount: countries.size,
    countriesList: Array.from(countries).join(", "),
  }),
);

// A more comprehensive list of countries by continent
// You can refine these lists based on the definition/source you use for continent groupings

const allCountriesInAfrica = [
  "Algeria", "Angola", "Benin", "Botswana", "Burkina Faso", "Burundi", "Cabo Verde",
  "Cameroon", "Central African Republic", "Chad", "Comoros", "Congo, Republic of the",
  "Congo, Democratic Republic of Congo", "Côte d'Ivoire", "Djibouti", "Egypt", "Equatorial Guinea",
  "Eritrea", "Eswatini", "Ethiopia", "Gabon", "Gambia", "Ghana", "Guinea", "Guinea-Bissau",
  "Kenya", "Lesotho", "Liberia", "Libya", "Madagascar", "Malawi", "Mali",
  "Mauritania", "Mauritius", "Morocco", "Mozambique", "Namibia", "Niger", "Nigeria",
  "Rwanda", "Sao Tome and Principe", "Senegal", "Seychelles", "Sierra Leone", "Somalia",
  "South Africa", "South Sudan", "Sudan", "Tanzania", "Togo", "Tunisia", "Uganda",
  "Zambia", "Zimbabwe"
];

const allCountriesInAsia = [
  "Afghanistan", "Armenia", "Azerbaijan", "Bahrain", "Bangladesh", "Bhutan", "Brunei",
  "Cambodia", "China", "Cyprus", "Georgia", "India", "Indonesia", "Iran", "Iraq",
  "Israel", "Japan", "Jordan", "Kazakhstan", "Kuwait", "Kyrgyzstan", "Laos", "Lebanon",
  "Malaysia", "Maldives", "Mongolia", "Myanmar", "Nepal", "North Korea", "Oman",
  "Pakistan", "Philippines", "Qatar", "Saudi Arabia", "Singapore",
  "South Korea", "Sri Lanka", "Syria", "Taiwan", "Tajikistan", "Thailand", "Timor-Leste",
  "Turkey", "Turkmenistan", "United Arab Emirates", "Uzbekistan", "Vietnam", "Yemen"
];

const allCountriesInEurope = [
  "Albania", "Andorra", "Austria", "Belarus", "Belgium", "Bosnia and Herzegovina",
  "Bulgaria", "Croatia", "Czech Republic", "Denmark", "Estonia", "Finland",
  "France", "Germany", "Greece", "Hungary", "Iceland", "Ireland", "Italy", "Kosovo",
  "Latvia", "Liechtenstein", "Lithuania", "Luxembourg", "Malta", "Moldova", "Monaco",
  "Montenegro", "Netherlands", "North Macedonia", "Norway", "Poland", "Portugal",
  "Romania", "Russia", "San Marino", "Serbia", "Slovakia", "Slovenia", "Spain",
  "Sweden", "Switzerland", "Turkey", "Ukraine", "United Kingdom", "Vatican City"
];

const allCountriesInNorthAmerica = [
  "Antigua and Barbuda", "Bahamas", "Barbados", "Belize", "Canada", "Costa Rica",
  "Cuba", "Dominica", "Dominican Republic", "El Salvador", "Grenada", "Guatemala",
  "Haiti", "Honduras", "Jamaica", "Mexico", "Nicaragua", "Panama", "Saint Kitts and Nevis",
  "Saint Lucia", "Saint Vincent and the Grenadines", "Trinidad and Tobago", "United States"
];

const allCountriesInSouthAmerica = [
  "Argentina", "Bolivia", "Brazil", "Chile", "Colombia", "Ecuador", "Guyana",
  "Paraguay", "Peru", "Suriname", "Uruguay", "Venezuela"
];

const allCountriesInOceania = [
  "Australia", "Fiji", "Kiribati", "Marshall Islands", "Micronesia",
  "Nauru", "New Zealand", "Palau", "Papua New Guinea", "Samoa",
  "Solomon Islands", "Tonga", "Tuvalu", "Vanuatu"
];

// Now you can export them as needed
export const allCountriesByContinent = {
  africa: new Set(allCountriesInAfrica),
  asia: new Set(allCountriesInAsia),
  europe: new Set(allCountriesInEurope),
  "north-america": new Set(allCountriesInNorthAmerica),
  "south-america": new Set(allCountriesInSouthAmerica),
  oceania: new Set(allCountriesInOceania),
};
