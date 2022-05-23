const degistir = document.querySelector('.btn');
const text = document.querySelector('span');

function readLocalStorage(){
    let hex = localStorage.getItem('color');
    if(!hex){
        localStorage.setItem('color', '#FFFFFF')
    }else{
        document.body.style.backgroundColor = hex;
        text.textContent = hex;
    }
}

readLocalStorage()

const changeBackground = (e) => {
    let hex = hexColor();
    localStorage.setItem('color', hex);
    document.body.style.backgroundColor = `${hex}`;
    text.textContent = hex;
}

const hexColor = () => {
    let hex = '#'
    const hexValues = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 'A', 'B', 'C', 'D', 'E', 'F'];
    for(let i = 0 ; i < 6; i++){
        hex += hexValues[Math.floor(Math.random() * hexValues.length)];
    }
    return hex;
}

degistir.addEventListener('click', changeBackground);

