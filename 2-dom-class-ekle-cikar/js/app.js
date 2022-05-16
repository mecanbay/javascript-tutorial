let card = document.querySelector(".card");
let ekle = document.querySelector("#ekle");
let sil  = document.querySelector("#sil");




ekle.addEventListener('click', function() {
    card.classList.add('bg-dark', 'text-white')
    console.log(`${this.id} tıklandı !`);
})

sil.addEventListener('click', function(){
    card.classList.remove('bg-dark', 'text-white') 
    console.log(`${this.id} tıklandı !`);
})

