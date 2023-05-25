interface Dog {
  name: string;
  breed: string;
  hunger: number;
}

let chien: Dog = {
  name: "Plutot",
  breed: "Caniche",
  hunger: 100,
};

feedDog(chien);

feedDog({
  name: "Rex",
  breed: "Dalmatian",
  hunger: 0,
});

function feedDog(arg: Dog) {
  arg.hunger -= 50;
  if (arg.hunger >= 50) {
    arg.hunger -= 50;
    console.log(`${arg.name} is eating`);
  } else {
    console.log(`${arg.name} is not hungry`);
  }
}
