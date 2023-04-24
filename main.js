

let pippo=[47,12,4,5,7,8,4,578]


let modulus = 2

let pari ='pari'
let dispari ='dispari'


function andrea(array, modulus) {
return array.map(el => el % modulus === 0 ? pari : dispari)
}

console.log(andrea(pippo));