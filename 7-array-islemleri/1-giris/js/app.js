let domain = 'protonmail';
let isActive = false;


// Array Oluşturmak
let emptyArray = []; // Boş Array
let items = [15,22,34, isActive, domain]; // Dolu Array
console.log(items);


// Array içerisideki eleman sayısını öğrenmek
console.log(items.length); // length


// Array'in ilk elemanın ulaşmak için ;

console.log(items[0]);


// Array'in son elemanın erişmek için ;
console.log(items[items.length - 1]); // Elemanları saymaya 0 'dan başladığını için 'items.length - 1' diyoruz... 


// Array'in ortasındaki elemana ulaşmak için ;
console.log(
    items[Math.floor(items.length / 2)]
);


// Değişkenin içerisindeki bilginin Array olup olmadığını kontrol etmek için :

// console.log(typeof(items));

console.log(Array.isArray( [] )); // true
console.log(Array.isArray( 1 )); // false
console.log(Array.isArray(items)); // true
