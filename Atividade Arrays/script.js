// Exercício 1
function somaArray(arr) {
    return arr.reduce((soma, num) => soma + num, 0);
}
console.log(somaArray([1, 2, 3, 4, 5, 6])); 

// Exercício 2
function letrasMaiusculas(arr) {
    return arr.map(str => str.toUpperCase());
}
console.log(letrasMaiusculas(["banana", "maçã", "uva"])); 

// Exercício 3
function adicionarItem(arr, item) {
    arr.push(item);
    return arr;
}
console.log(adicionarItem([1, 2, 3], 4));

// Exercício 4
function removerPrimeiro(arr) {
    arr.shift();
    return arr;
}
console.log(removerPrimeiro([10, 20, 30])); 

// Exercício 5
function Pares(arr) {
    return arr.filter(num => num % 2 === 0);
}
console.log(Pares([1, 2, 3, 4, 5, 6, 7, 8, 9])); 

// Exercício 6
function contarPalavras(arr) {
    return arr.filter(str => str.length > 5).length;
}
console.log(contarPalavras(["banana", "maçã", "abacaxi", "uva", "melancia", "Kiwi"])); 

// Exercício 7
function maiorNumero(arr) {
    return Math.max(...arr);
}
console.log(maiorNumero([48, 5, 25, 8, 3]));

// Exercício 8
function nomes(arr) {
    return arr.join(", ");
}
console.log(nomes(["Vinicius", "Nicolas", "Allison", "Caio", "Biel"])); 

// Exercício 9
function reverso(arr) {
    return arr.slice().reverse();
}
console.log(reverso([1, 2, 3, 4, 5, 6]));

// Exercício 10
function quadrados(arr) {
    return arr.map(num => num * num);
}
console.log(quadrados([1, 2, 3, 4, 5, 6])); 