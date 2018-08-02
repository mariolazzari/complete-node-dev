// fixer.io
// http://data.fixer.io/api/latest?access_key=266599b236d6bfa752a6ff8b75c56051

// Rest countries
// https://restcountries.eu

const axios = require("axios");

const getExchangeRate = async (from, to) => {
    try {
        const url = `http://data.fixer.io/api/latest?access_key=266599b236d6bfa752a6ff8b75c56051&base=${from}`;
        const response = await axios.get(url);
        const rate = response.data.rates[to];

        if (rate) {
            return rates;
        } else {
            throw new Error();
        }
    } catch (error) {
        throw new Error(`Unable to find a rate from ${from} to ${to}`);
    }
};

const getCountries = async currencyCode => {
    try {
        const url = `https://restcountries.eu/rest/v2/currency/${currencyCode}`;
        const response = await axios.get(url);

        return response.data.map(country => country.name);
    } catch (error) {
        throw new Error(
            `Unable to fetch country that use currency code ${currencyCode}`
        );
    }
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

convertCurrency("EUR", "yyy", 100)
    .then(status => console.log(status))
    .catch(err => console.log(err.message));
