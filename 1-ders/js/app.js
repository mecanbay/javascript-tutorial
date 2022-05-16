// let username = "mecanbay";

// const DOMAIN = "vancozum.com";


// let email = username + "@" + DOMAIN;

//  console.log(email)



//  let info = `Merhaba ${username} 
//  sitemize hoş geldin.. 
//  Mail Adresin : ${email}
 
//  Mail adresinin uzunluğu : ${email.length}
 
//  borcunuz : ${(2 + 3) * 12 } TL

//  Saat : ${new Date().getHours()}:${new Date().getMinutes()}

//  Saniye : ${new Date().getSeconds()}
 


//  `
//  console.log(info);




let email = "mecanbay@protonmail.com";
let firstName = "Muhammed Ensar";
let lastName = "Canbay";


// String karakter sayısını bulmak -> length
console.log(email.length);

// String İlk karakteri Bulmak  -> [0]
console.log(firstName[0]);
console.log(firstName.charAt(0));

// Büyük harf  / Küçük harf :
console.log(firstName.toUpperCase()); //Büyük
console.log(lastName.toLocaleLowerCase()); // Küçük


// String içinde isteidğimiz veriyi aramak --> search:

console.log(email.search("@"));
console.log(email[8]);


email.search('olmayan veri') // OLmayan bir değer aratırsak -1 döner..

// Belli bir yere kadar al -> slice :
let DOMAIN = email.slice(email.search('@') + 1);

console.log(DOMAIN);

console.log(DOMAIN.slice(0, DOMAIN.indexOf('.')));

// String içindeki veriyi değiştir. --> replace :

console.log(email.replace('protonmail.com', 'pm.me'));

// İstediğim bilgi var mı ? --> includes
console.log(email.includes('proton')); // true
console.log(email.includes('yok')); // false

// İstediğim bilgiyle başladı mı ? / Bitti mi ? --> startsWidth, endsWidth

console.log(email.startsWith('mecanbay')); // true
console.log(email.endsWith('protonmail.com')); // true
console.log(email.startsWith('asdasdsa')); //false
console.log(email.endsWith('gmail.com')); // false


