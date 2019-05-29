const name = "Mario";
const age = 44;

const user = { name, age, location: "Coccaglio", state: "Italy" };
console.log(user);

// default values and alias
const { location, state: country, rate = 5 } = user;
console.log(location);
console.log(country);
console.log(rate);

const userAge = ({ name, age }) => {
  console.log(`${name} is ${age}`);
};

userAge(user);
