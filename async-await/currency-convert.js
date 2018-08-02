// fixer.io
// http://data.fixer.io/api/latest?access_key=266599b236d6bfa752a6ff8b75c56051

// Rest countries
// https://restcountries.eu

const axios = require("axios");

const getExchangeRate = (from, to) => {
    const url = `http://data.fixer.io/api/latest?access_key=266599b236d6bfa752a6ff8b75c56051&base=${from}`;
    return axios.get(url).then(res => res.data.rates[to]);
};

const getCountries = currencyCode => {
    const url = `https://restcountries.eu/rest/v2/currency/${currencyCode}`;
    return axios.get(url).then(res => res.data.map(country => country.name));
};

/*
getExchangeRate("EUR", "USD")
    .then(rate => console.log(rate))
    .catch(err => console.log(err));

getCountries("EUR")
    .then(countries => console.log(countries))
    .catch(err => console.log(err));
*/

// combine both function with async / await
const convertCurrency = async (from, to, value) => {
    const rate = await getExchangeRate(from, to);
    const countries = await getCountries(to);
    const conversion = rate * value;

    return countries.map(
        country => `In ${country} ${value} ${from} worth ${conversion} ${to}`
    );
};

convertCurrency("EUR", "USD", 100)
    .then(status => console.log(status))
    .catch(err => console.log("ERRORE", err));
