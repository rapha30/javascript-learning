const sum= function(n1, n2) { // n1 e n2 são parâmetros (parameters)
    soma= (n1+n2);
    return soma
}

sum(2,3) // aqui são argumentos (arguments)
sum(1231, 12313)
sum(22, 37) // função para somar, seria 22+37, mas a função resumiu o cód.

    let n3= 34, n4= 35
sum(n3, n4) // demonstrando que alterando os argumentos/parametros o bloco de cód segue mudando as variaveis.

console.log(`number one is: ${n3}`);
console.log(`two is: ${n4}`);
console.log(`sua soma é: ${sum(n3, n4)}`);  // pra não dar undefined faz function com return.
console.log(soma);