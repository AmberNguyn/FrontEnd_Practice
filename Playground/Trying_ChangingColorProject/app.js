let btn = document.querySelector('button');
let h1 = document.querySelector('h1');
btn.addEventListener('click', () => {
    
    //change color by using random number;
    const newColor = makeRandomColor();
    
    document.body.style.backgroundColor = newColor;
    h1.innerHTML = newColor;
})


const makeRandomColor = () => {
    const r = Math.floor(Math.random() * 255);
    const g = Math.floor(Math.random() * 255);
    const b = Math.floor(Math.random() * 255);

    return `rgb(${r}, ${g}, ${b})`;
}


