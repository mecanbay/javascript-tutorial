let fullName = prompt('İsim Girin :');

let name = document.querySelector('#name');

name.innerHTML = `${name.innerHTML} <small>${fullName}</small>`