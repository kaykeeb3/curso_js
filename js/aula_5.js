/*  CRIAR OBJETOS   */
let pessoa = {
  nome: 'Kayke',
  idade: 18,
  peso: 80,
  altura: 1.80,
  doador: false,
}

let produtos = {
  descricao: [],
  preco: []
}

const carros = {
  marca: ['Gol', 'Toyota', 'Fiat'],
  modelo: ['Golf', 'Corola', 'Uno'],
  ano: [2008, 2020, 2005],
}

// Como acessar uma propiedade usando .
/*
  pessoa.nome
  pessoa.idade
  pessoa.altura
  pessoa.doador
*/

// ACESSAR PROPIEDADES usando ['']
/*
  pessoa['nome']
  pessoa['idade']
  pessoa['altura']
  pessoa['doador']
*/

// OPERAÇÃO IMC = peso / (altura * altura)
let imc = pessoa.peso  / (pessoa.altura * pessoa.altura)

// toFixed(x)
// limita o número de casas decimais
//console.log("IMC " + imc.toFixed(2)) // 2 casas

// ALTERAR / ATUALIZAR VALOR da propiedade
pessoa.nome = 'Iris'
produtos.descricao = ['Arroz', 'Leite']
produtos.preco = [5.99]

// Usando spreed operator 
produtos.descricao = [...produtos.descricao, 'Feijão', 'Carne']
produtos.preco = [...produtos.preco, 10.99, 4.50]

// // Usando spreed operator em objetos cons
carros.marca = [...carros.marca, 'VW'],
carros.modelo = [...carros.modelo, 'Fusca'],
carros.ano = [...carros.ano, 1979]