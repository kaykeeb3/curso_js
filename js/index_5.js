/* 
   Revisão das aulas passadas e Desafios
*/

// Declarando variáveis usando 'let' ou 'var'
let produtos = 'Arroz';
let quantidade = 2;
let precoUnitario = 5.50;

// Calculando o preço total
let precoTotal = quantidade * precoUnitario;

// Exibindo o preço total com formatação em Reais (BRL)
document.write(`Preço total R$ ${precoTotal} <br>`);

// Exibindo o preço total formatado com Intl.NumberFormat
console.log(new Intl.NumberFormat('pt-BR').format(precoTotal));

// Criando constantes
const nome = 'Kayke';
const peso = 80.50;
const altura = 1.80;

// Calculando o IMC
const imc = peso / (altura * altura);

// Exibindo o IMC
document.write(`IMC: ${imc} <br>`);
document.write(`IMC: ${imc.toFixed(2)} <br>`);

// Declarando notas e calculando a nota final
let nota1 = 10;
let nota2 = 7;
let nota3 = 8;
let notaFinal = (nota1 + nota2 + nota3) / 3;

// Exibindo a nota final com duas casas decimais
document.write(`Nota final: ${notaFinal.toFixed(2)} <br>`);

// Declarando valores de compra e desconto
let compra = 1800.99;
let desconto = 180.59;

// Calculando o valor da compra com desconto
let compraDesconto = compra - desconto;

// Exibindo o valor da compra com desconto formatado em Reais (BRL)
document.write(compraDesconto.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' }) + '<br>');

// Exibindo o valor da compra com desconto sem formatação
document.write(compraDesconto + '<br>');
