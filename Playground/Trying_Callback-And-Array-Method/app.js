//FOR EACH - ITEM WILL BE CALLED ONCE PER ITEM IN THE ARRAY

const names = ["William", "John", "Indiana"];

names.forEach(function (name) {
  if (name.includes("i")) {
    console.log(name);
  }
});

// MAP - MAKE A COPY OF AN ARRAY AND DO SOMETHING WITH IT
console.log(names);
const capitalNames = names.map(function (name) {
  console.log(name.toUpperCase());
});


const total = (x, y) => {
  return x + y;
};

const rollDie = () => {
  return Math.floor(Math.random() * 6) + 1;
};

//ARROW
const newNames = names.map((name) => {
    console.log("Take a look")
    return name.toUpperCase();
})
