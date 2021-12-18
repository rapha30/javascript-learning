    {
        console.log('ah, é');
    }
// assignment -> atribuition of values
{
    var name, heigh
    name= 'maik'
    heigh= 182
}
console.log(`your variable have a type of: ${typeof name}`);
let age= 20
let ishuman= true
console.log(age, ishuman);

// object
const person= {
    name: 'Jhon',
    age2: 30,
    weight: 68.8,
    IsAdmin: true
}
console.log(person);
console.log(`Take one value from object is ${person.age2}. 
For take full obeject we have too ${person}.`);
console.log(`${person.weight}kg it's weight's ${person.name}.`);
console.log(person);

// array
const animals= [
    'dog',
    'fish',
    'alpaca'
]
console.log(animals);
console.log(`For take one property is ${animals[0]}`);
console.log(`Elements totally= ${animals.length}`);
console.log(`The item from position 2 is: ${animals[1]}`);
console.log();