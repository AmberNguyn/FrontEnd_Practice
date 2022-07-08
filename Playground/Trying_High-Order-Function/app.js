// high order function

function callTwice(func) {
  func();
  func();
}

function rollDie() {
  const roll = Math.floor(Math.random() * 6) + 1;
  console.log(roll);
}

callTwice(rollDie);

//-----------------------------
function makeMysteryFunc() {
  const rand = Math.random();

  if (rand > 0.5) {
    return function () {
      console.log("Random number > 0.5");
    };
  } else {
    return function () {
      console.log("Random number < 0.5");
    };
  }
}

function isBetween(min, max) {
  return function (num) {
    return num > min && num < max;
  };
}

const isTeenager = isBetween(12, 18);
isTeenager(15); // return true or false

// methods
//object
const myMath = {
  PI: 3.14,
  square: function (num) {
    return num * num;
  },
  cute(num) {
    return num ** 3;
  },
};
