// ES6 arrow functions
/*
const square = function(x) {
  return x * x;
};
*/

const square = x => x * x;
console.log(square(2));

const event = {
  name: "Birthday party",
  guestList: ["Mario", "Mariarosa"],
  printGuestList: function() {
    console.log(`Guest list for ${this.name}`);
    this.guestList.forEach(guest => console.log(guest));
  },
  printGuestList2: () => console.log(`Guest list for ${this.name}`),
  printGuestList3() {
    console.log(`Guest list for ${this.name}`);
  }
};

event.printGuestList();
event.printGuestList2();
event.printGuestList3();
