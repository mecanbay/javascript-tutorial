let items = [ 10, 20, 30, 40, 50, 60 ]


console.log('Items ilk durumu : ', items);


// Array'in sonuna eleman eklemek / push() ;

items.push(50);
console.log('Items Push Sonrası : ', items);


// Array'in başına eleman eklemek / unshift() ;

items.unshift(5);
console.log('Items Unshift Sonrası : ', items);

// Array'in en sonundaki elemanın çıkarılması / pop() ;
items.pop();
console.log('Items Pop Sonrası : ' , items);

// Array'in en sonundaki elemanını çıkarırken bir değişkene atanması ;

let lastItem = items.pop()
console.log("Array'in Silinen Son Elemanı : ", lastItem);
console.log('Items Anlık Durulumu : ', items);


// Array'in başındaki elemanın çıkarılması / shift() ;
items.shift();
console.log('Items Shift Sonrası : ', items);


// Array'in başındaki elemanın silerken bir değişkene atanması ;
let firstItem = items.shift()
console.log("Array'in Silinen İlk Elemanı : ", firstItem);
console.log('Items Anlık Durum : ', items);


// Array'in içindeki herhangi bir elemanın güncellenmesi ;

items[2] = 65;
console.log('items[2] güncellendikten sonra : ' , items);

// Array içindeki ilk elemanın güncellenmesi //
items[0] = 2022;
console.log('Items ilk elemanı güncellendikten sonra :', items);

// Array içindeki son elemanın güncellenmesi //
items[items.length - 1] = 2025;
console.log('Items son elemanı güncellendikten sonra : ', items);