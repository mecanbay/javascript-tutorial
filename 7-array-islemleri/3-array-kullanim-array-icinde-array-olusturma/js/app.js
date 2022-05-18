let items = [ 1, 2, 3, 4, 5 ];

let maleUsers = ["Ali", "Ömer", 'Osman', 'Ebubekir'];
let femaleUsers = ["Ayşe", "Fatma", "Zeynep"];


console.log("Items : ", items);


// Array içinde Array ...;

items.unshift(femaleUsers); // items array'inin en başına femaleUsers array'ini ekledik
items.push(maleUsers); // items array'inin en sonuna maleUsers array'ini ekledik.
console.log(items);

console.log(items.length); // items array'inin kaç elemanlı olduğunu yazdırdık.

console.log(items[0].length); // items array'inin ilk elemanında olan femaleUsers array'inin uzunluğunu yazdırdık.
console.log(items[0][0]); // items array'i içerisindeki ilk eleman olan femaleUsers array'inin ilk elemanını yazdırdık.


// Array içerisinden öğe ayırmak -> splice
let newItems = items.splice(2, 5) // items içerisindeki elemanların 2.cisinden(items[2]) başla ve 5.ci(items[5]) elemana kadar getirip newItem değişkenine ata...

console.log(newItems);
console.log(items);

// Array içerisindeki öğenin index bilgisini bulmak;

items.unshift('lorem') // items 'ın başına lorem elemanının ekledik.
items.push('ipsum'); // items'ın sonuna ipsum elemanını ekledik.

console.log(items.indexOf('ipsum')); // indexOf kullanarak içerisindeki değerin items array'i içerisindeki index değerini yazıdırdık.  Sonuç : 3
console.log(items[3]); // sonuç : 'ipsum';

// Array Kopyalamak -> slice

// BU YÖNTEM İŞE YARAMADI !!!
let copyItems = items;
console.log('Kopya sonrası hali : ', copyItems);
copyItems.pop() // copyItems içirisindeki son elemanı çıkarttık. fakat iki değeri de kontrol ettiğimizde çıkarılan değer iki array içerisinden de çıkıyor. Yani bu şekilde koplayama sağlayamadık...
console.log('CopyItems : ', copyItems);
console.log('Items : ', items);
//////////////////////////////////////////////////////////////


copyItems = items.slice()
copyItems.pop();

console.log(copyItems);
console.log(items);

// ES6 ve sontası için gelen kopyalama yöntemi

let ES6Items = [...items];
console.log(ES6Items);

// ÖRNEK 2 

let allUsers = [...femaleUsers, ...maleUsers]
console.log(allUsers); 


// Array'i Stringe çevirme..  toString() ile

console.log(allUsers.toString());

// YADA join() ile

console.log(allUsers.join()); // join içerisine parametre girilirse her eleman arasına ,(virgül) yerine içine aldığı değeri koyar...

// İstediğimiz index bilgisine Eleman eklemek -> splice(index_no, 0, 'eklenecek değer')

allUsers.splice(2, 0 ,'Yeni eklenen değer ');
console.log(allUsers);