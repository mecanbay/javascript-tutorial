let time = document.querySelector('#time');
let date = document.querySelector('#date');


let gunay = new Date().getDate()
let gun = new Date().getDay();
let ay = new Date().getMonth();
let yil = new Date().getFullYear();

//###################### GÜN HESAPLA ############################
if(gun === 0){
    gun = 'Pazar'
}
else if(gun === 1){
    gun = 'Pazartesi'
}
else if(gun === 2){
    gun = 'Salı'
}
else if(gun === 3){
    gun = 'Çarşamba'
}
else if(gun === 4){
    gun = 'Perşembe'
}
else if(gun === 5){
    gun = 'Cuma'
}
else if(gun === 6){
    gun = 'Cumartesi'
}
//###############################################################

//###################### AY HESAPLA ############################
if(ay === 0){
    ay = 'Ocak'
}
else if(ay === 1){
    ay = 'Şubat'
}
else if(ay === 2){
    ay = 'Mart'
}
else if(ay === 3){
    ay = 'Nisan'
}
else if(ay === 4){
    ay = 'Mayıs'
}
else if(ay === 5){
    ay = 'Haziran'
}
else if(ay === 6){
    ay = 'Temmuz'
}
else if(ay === 7){
    ay = 'Ağustos'
}
else if(ay === 8){
    ay = 'Eylül'
}
else if(ay === 9){
    ay = 'Ekim'
}
else if(ay === 10){
    ay = 'Kasım'
}
else if(ay === 11){
    ay = 'Aralık'
}



//###############################################################

date.innerHTML = `${gunay} ${ay} ${yil} <br> ${gun}`


function update() {
    time.innerHTML = `${new Date().getHours()}:${new Date().getMinutes()}:${new Date().getSeconds()}`
    return time
}

    setInterval(update,1000);




// date.innerHTML = `${new Date().getDay()} / ${new Date().getMonth()} / ${new Date().getFullYear()}`;
// console.log('GÜN :', gun);
// console.log('AY :', ay);
// console.log('YIL :', yil);
// console.log('GÜNAY :', gunay);