const makeRandomColor = () => {
    const r = Math.floor(Math.random() * 255);
    const g = Math.floor(Math.random() * 255);
    const b = Math.floor(Math.random() * 255);

    return `rgb(${r}, ${g}, ${b})`;
}

// OLD WAY
const h1s = document.querySelectorAll('h1');
for (let h1 of h1s) {
    h1.addEventListener('click', () => {
        h1.style.backgroundColor = makeRandomColor();
    })
}


//REFACTOR - USING GENERIC FUNCTION
const buttons = document.querySelectorAll('button');

for (let button of buttons) {
    button.addEventListener('click', colorize);
}

 

// MAKING A GENERIC FUNCTION - REPLACE BUTTON WITH THIS

function colorize() {
    this.style.backgroundColor = makeRandomColor();
}

// KEYBOARD EVENT AND EVEN OBJECT
document.querySelector('button').addEventListener('click', function(evt) {
    console.log(evt);
})

const input = document.querySelector('input');
input.addEventListener('keydown', (evt) => {
    console.log(evt);
})

// input.addEventListener('keyup', ()=> {
//     console.log("KEY UP");
// })

