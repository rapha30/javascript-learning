/*
    Variáveis:
  var
  let
  const
*/
var clima= "Quente"
console.log(clima)
console.log(typeof clima)

/*
    Var é global e local.
  hoisting = "elevação"
*/
{
console.log('Existe X antes do bloco? ', x); // mesmo não ainda criada existe, mas sem valor.
{
  var x= 0
}
console.log(`Existe X depois do bloco? ${x}`);
}

// Com const e let <> [são locais]
{
  console.log(`existe x antes do escopo? ${x}`);
  {
    const x= true
    console.log(`Existe o x do bloco? ${x}`);
  }
  console.log(`Mostre a variável fora do bloco: ${x}`);
}
console.log(true);

/*
Nomeação de Variáveis:

*/
{
  let alisson= 'Alisson'
  let álisson= 'álisson'
  var testefrase= 'frase pra teste'
  var a= 'conjunto de teste 2'
  console.log(testefrase, a, alisson, álisson);
}