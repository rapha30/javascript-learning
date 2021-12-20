// function scope, hosting
let subject
function createThink(subject) {
    subject= 'study'
    return subject
}
console.log(subject);
console.log(createThink(subject));
console.log(subject);
// mais a fundo no escope do function.

// function hosting now.
SayMyName();
function SayMyName() {
    console.log('Mayk');  
}
// ela eleva, porém se uma variável tiver a função não. Ex: "var SayMyName= function() {}" [dá como undefined]

// arrow function =>
const SayMyName2=() => {
    console.log('rapha');
}
SayMyName2()
    SayMyName3=(name3) => {
    console.log(name3);
}
SayMyName3('Jonas')