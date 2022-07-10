const container = document.querySelector('.container');
const badgeURL = 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/badges/'

for (let i = 1; i <= 58; i++) {
    const badgeDiv = document.createElement('div');
    badgeDiv.classList.add('badge');
    const label = document.createElement('span');
    label.innerText = `#${i}`;
    const newImg = document.createElement('img');
    newImg.src = `${badgeURL}${i}.png`;
    // badgeURL + ""+i + ".png";


    badgeDiv.appendChild(newImg);
    badgeDiv.appendChild(label);
    container.appendChild(badgeDiv);

    
}

// I AM LEARNING EVENT LISTENER RIGHT HERE
const myBtn = document.querySelector('#btn1')
myBtn.onclick = function() {
    console.log("click me!")
}

function scream() {
    console.log("AAHHHH!");
    console.log("Stop touching me!");
}

myBtn.onmouseenter = scream;


// document.querySelector('h1').onclick = function() {
//     document.body.innerHTML = "you turned me on";
// } --> REDIRECT TO OTHER PAGE


//--> ADD INTO PAGE, NO REDIRECTING
const h1 = document.querySelector('h1');
const createdH2 = document.createElement('h2');
createdH2.innerText = "You turned me on!";


h1.onclick = function() {
    h1.after(createdH2);
}

// TRYING ADDEVENTLISTENER
const btn3 = document.querySelector('#btn3');
btn3.addEventListener('click', () => {
    alert("You turned me on again");
})

// BUTTON TWIST AND SHOUT, EXAMPLE FOR ADDEVENTLISTENER WITH 2 FUNCTIONS
function twist() {
    console.log("TWIST!");
}

function shout() {
    console.log("SHOUT!");
}

const twistAndShoutBtn = document.querySelector('#tas');
twistAndShoutBtn.addEventListener('click', shout);
twistAndShoutBtn.addEventListener('click', twist);



