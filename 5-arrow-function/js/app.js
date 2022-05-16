function hello(name) {
    console.log(name);
}




const helloFunc = (firstName) => { console.log(firstName); }


helloFunc('mecanbay-V1')


const helloFunc2 = firstName => console.log(`Merhabe ${firstName}`);

helloFunc2('mecanbay-V2');


const helloFunc3 = (firstName, lastName) => console.log(`Selam ${firstName}, ${lastName}`);

helloFunc3("Dünya", 'mecanbay-V3')


const helloFunc4 = (firstName, lastName) => {
    let info = `Selam ${firstName}, ${lastName}`
    // console.log(info);
    return info;
}

console.log(helloFunc4('Dünya', 'mecanbay-V4'));