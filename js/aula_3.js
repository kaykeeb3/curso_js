/* Operadores e Operações */

let n1 = 10; // number INTEIRO
let n2 = 20; // number INTEIRO
let n3 = "2"; // string TEXTO

document.write("<h1>N1: " + n1 + "</h1>");
document.write("<h1>N2: " + n2 + "</h1>");
document.write("<h1>N3: " + n3 + "</h1>");

/*  OPERAÇÕES */
console.log(n1 + n2); // adição
console.log(n1 - n2); // subtração
console.log(n1 * n2); // multiplicação
console.log(n1 / n2); // diviçõa
console.log(n1 % n2); // restou ou modulo

/*  OPERADORES  */
console.log(n2 == n3); // igual (a) 
console.log(n2 === n3) // identico (a)
console.log(n2 != n3) // diferente de Não=
console.log(n2 !== n3) // não e identico

/*  OPERADORES  RELACIONAIS */
console.log(n1 > n2); // maior
console.log(n1 < n2); // menor
console.log(n1 >= n2); // maior igual
console.log(n1 <= n2); // menor igual


/*  OPERADORES LÓGICOS */
let a = true;
let b = false;
console.log(a && b); // E AND
console.log(a || b) // OU OR
console.log(!a) // NÃO NOT negação
console.log(!b)