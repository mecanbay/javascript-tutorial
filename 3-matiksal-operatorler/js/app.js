let price = 100;

// Eşitse | ==
console.log(price == 1); //false
console.log(price == 100); //true

// Eşit ve Denkse | ===

console.log(price === 1); //false
console.log(price === 100); //true

price = '100';

// price hemen bir üst satırda bir string olarak tanımlandı bunu 100 ile
// yeniden eşit ve denk mi diye kontrol ettiğimizde bu sefer false döndü çünkü
// price içindeki değer string fakat bizim kontrol için verdiğimiz değer ise 
// numberic olduğu için eşit olsa bile veri türü farklı olduğu için false dönüyor...

console.log(price === 1); //false
console.log(price === 100 ); // false



// Eşit değilse | !=

console.log(price != '100'); // false
console.log(price != '101'); // true



// Küçükse | < :
price = 65;

console.log(price < 100 ); // true
console.log(price < 65); //false


// Küçük veya Eşitse | <= :

console.log(price <= 100); // true
console.log(price <= 65); // true
console.log(price <= 64); //false


// Büyükse | > :

console.log(price > 100); //false
console.log(price > 55); // true
console.log(price > 65); // false

// Büyük veya Eşitse | >= :

console.log(price >= 100); //false
console.log(price >= 55); // true
console.log(price >= 65); //true

// Ve Operatörü | && :
console.log(price == 65 && price === 65); //true


// Veya Operatörü -- || :
console.log(!!2);