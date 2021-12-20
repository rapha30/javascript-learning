{
    let weight, age, name, stars, isSubscribed
    weight= 67
    name= 'Jonel',
    age= 18,
    stars= 1.83
    isSubscribed= false
//    console.log(typeof weight);
}

// questão rocketseat
{
    let student={
        name: 'Jorge', 
        weight: 63.6, 
        age: 18, 
    }
    console.log(`${student.name} de idade ${student.age} anos pesa ${student.weight}kg.` );

    let students=[
        student,
    ]
    console.log(students);
    console.log(students[0]);
    let student2={
        name2: 'Larissa',
        weight2: 50.3,
        height: 1.505,
        age: 17
    }
    // atribuindo variavel na array
    students[1]= student2
    console.log(students);
}

// quest2
{
    console.log(a);
    var a= 1
// resp: a= undefined (hosting)
}