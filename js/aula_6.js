/*  Revisão das aulas passadas e Desafios  */


// Crias váriaveis use let ou var
let produtos = 'Arroz'
let quantidade = 2
let precoUnitario = 5.50
let precoTotal = quantidade * precoUnitario
document.write(`Preço total R$ ${precoTotal} <br>`)
console.log(new Intl.NumberFormat('pt-BR').format(precoTotal))

document.write(`Preço Total ${precoTotal.toLocaleString('pt-BR', {style: 'currency', currency: 'BRL' })} <hr>`)

// criar constantes
const nome = 'Kayke'
const peso = 80.50
const altura = 1.80 
const imc = peso / (altura * altura)


document.write(`IMC: ${imc} <br>`)
document.write(`IMC: ${imc.toFixed(2)} <br>`)

let nota1 = 10
let nota2 = 7
let nota3 = 8
let notFinal = nota1 + nota2 + nota3 / 3
//document.write("Nota Final " + notFinal + '<br>')
document.write(`Nota final: ${notFinal.toFixed(2)} <br>`)

let compra = 1800.99
let desconto = 180.59
let compraDesconto = compra - desconto

document.write(compraDesconto.toLocaleString('pt-BR' , {style: 'currency', currency: 'BRL'}) + '<br>')
document.write(compraDesconto + '<br>')