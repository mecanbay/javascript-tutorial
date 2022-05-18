let rowDOM = document.querySelector('.row');
let list = document.querySelector('.list');

{/* <div class="card">
    <div class="card-header text-center">For Loop</div>
    <div class="card-body">
        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Vero perferendis corporis aspernatur at optio. Quod.</p>
    </div>
</div> */}

let cardArray = ['lorem', 'ipsum', 'dolor', 'amet', 'asdasd', 'asdasdwd2', 'sit'];


function createCard(headerText="", bodyText="", footerText=""){
    let col_4 = document.createElement('div');
    let card = document.createElement('div');
    let header = document.createElement('div');
    let body = document.createElement('div');
    let footer = document.createElement('div');

    col_4.classList.add('col-md-4', 'mb-4');
    card.classList.add('card');
    header.classList.add('card-header','text-center');
    body.classList.add('card-body');
    footer.classList.add('card-footer');

    header.innerHTML = headerText;
    body.innerHTML = bodyText;
    footer.innerHTML = footerText;


    card.append(header, body, footer);

    col_4.append(card);
    rowDOM.append(col_4);
}

// while döngüsü içerisine aldığı değer sağlandığı sürece çalışır.
// Mesela i = 0 diye bir değişkenimiz olsun ve bunu while(cardArray[i]) 
// diye belirtip döngü içerisiden i değerini her seferinde 1 arttırırsak 
// cardArray içersindeki eleman sayısı bittiğinde döngü sonlanacaktır.
// Çünkü while her seferinde cardArray 'in i değerindeki elemanını kontrol eder
// eğer ki değer dönüyorsa o zaman şart sağlanmıştır ve çalışmaya devam eder.
// fakat örnekteki gibi i = 7 olduğu zaman cardArray içerisinde 7. eleman olmadığı için
// sart sağlanmaz ve döngü sonlanır. 

let i = 0
while(cardArray[i]){
    createCard(`test ${i}`, `${cardArray[i]}`, 'test')
    i ++;
}