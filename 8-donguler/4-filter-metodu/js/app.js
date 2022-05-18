let rowDOM = document.querySelector('.row');
let list = document.querySelector('.list');

{/* <div class="card">
    <div class="card-header text-center">For Loop</div>
    <div class="card-body">
        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Vero perferendis corporis aspernatur at optio. Quod.</p>
    </div>
</div> */}

let users = [
    {username : 'mecanbay', isActive : true},
    {username : 'pain', isActive : false},
    {username : 'legendary', isActive : false},
    {username : 'test1', isActive : true}
]

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
    footer.classList.add('card-footer', 'text-center');

    header.innerHTML = headerText;
    body.innerHTML = bodyText;
    footer.innerHTML = footerText;


    card.append(header, body, footer);

    col_4.append(card);
    rowDOM.append(col_4);
}


let activeUsers = users.filter(user => user.isActive === true)

console.log(activeUsers);