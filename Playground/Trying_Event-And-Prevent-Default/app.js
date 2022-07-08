const form = document.querySelector("#shelterForm");
const input = document.querySelector("#catName");
const list = document.querySelector("#cats");
const h2 = document.querySelector('h2');
form.addEventListener("submit", (e) => {
    e.preventDefault();
    const catName = input.value;

    const newLi = document.createElement('li');
    newLi.innerText = catName;

    list.append(newLi);
    input.value = "";

    if (input.value == "") {
        h2.innerText = 'Please enter something';
    }
})

 // EXTRACT THE DATA OUT OF INPUT
 h1 = document.querySelector('h1');

 input.addEventListener('input', () => {
    h1.innerText = input.value;
 })


 //REMOVE , BUT I CAN ONLY REMOVE THE ALREADY TYPED ONE
 // FOR THE ONE WHICH WAS TYPED IN THE INPUT -> HAVE TO USE EVENT DELEGATION

const lis = document.querySelectorAll('li');
for (let li of lis) {
    li.addEventListener('click', () => {
        li.remove();
    })
}
// --> this one can only remove the ones already written in HTML

//now use the container of all lis + .target to choose the child

list.addEventListener('click', (e) => {
    e.target.remove();
})