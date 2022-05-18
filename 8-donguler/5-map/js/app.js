

let maaslar = ['1500', '2500', '3500', '4500', '5500', '7500']


let yeniMaaslar = maaslar.map( (maas) => {
    if(maas > 3000)
        return (maas * 1.15).toFixed(2);
    else
        return (maas * 1.25).toFixed(2);
})


console.log(yeniMaaslar);