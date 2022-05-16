let counterDOM = document.querySelector('#counter');
let azalt = document.querySelector('#azalt');
let artir = document.querySelector('#artir');
let temizle = document.querySelector('#temizle');
let counter;

if (localStorage.getItem('counter') == null){
    counter = 0;
}else{
    counter = parseInt(localStorage.getItem('counter'));
}

// localStorage.getItem('counter') === null ? counter = 0 : counter = localStorage.getItem('counter')

counterDOM.innerHTML = counter;


azalt.addEventListener('click', clickEvent);
artir.addEventListener('click', clickEvent);
temizle.addEventListener('click', temizleFunc);

// function clickEvent(){
//     if(this.id == artir.id){
//         counterDOM.innerHTML = counter += 1
//     }else{
//         counterDOM.innerHTML = counter -= 1
//     }
// }

function temizleFunc(){
    counter = 0;
    localStorage.setItem('counter', counter)
    counterDOM.innerHTML = counter;
}

function clickEvent(){
    this.id == artir.id ? counterDOM.innerHTML = counter +=1 : counterDOM.innerHTML = counter -=1; 
    localStorage.setItem('counter', counter);
    // 
}

