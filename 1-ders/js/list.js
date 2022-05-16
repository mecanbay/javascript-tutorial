
let firstItem = document.querySelector("ul#list>li:first-child").innerHTML;
let lastItem = document.querySelector("ul#list>li:last-child").innerHTML;


console.log(firstItem);
console.log(lastItem);




let ulDOM = document.querySelector('ul#list');

// Yeni element oluştumak için --> createElement() :
let liDOM = document.createElement('li');

liDOM.innerHTML = 'Muhammed Ensar Canbay';

// En sona eklemek için --> append():
// ulDOM.append(liDOM)

// En başa eklemek için --> prepend():
ulDOM.prepend(liDOM);
console.log(ulDOM);