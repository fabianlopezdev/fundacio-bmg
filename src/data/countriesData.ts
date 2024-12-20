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

// A more comprehensive list of countries by continent
// You can refine these lists based on the definition/source you use for continent groupings

const allCountriesInAfrica = [
  "Algeria", "Angola", "Benin", "Botswana", "Burkina Faso", "Burundi", "Cabo Verde",
  "Cameroon", "Central African Republic", "Chad", "Comoros", "Congo, Republic of the",
  "Congo, Democratic Republic of the", "Côte d'Ivoire", "Djibouti", "Egypt", "Equatorial Guinea",
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
  "Bulgaria", "Croatia", "Czech Republic (Czechia)", "Denmark", "Estonia", "Finland",
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
