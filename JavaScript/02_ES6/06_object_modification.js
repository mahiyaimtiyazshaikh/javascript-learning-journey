let country = {
    name: "india",
    states: 24,
    capital: "delhi"
};
country.states = 22;
country.ut = "andaman";
delete country.capital;
console.log(country);