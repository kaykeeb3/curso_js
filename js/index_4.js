// Definir um objeto pessoa com informações
let pessoa = {
  nome: 'Kayke',
  idade: 18,
  peso: 80,
  altura: 1.80,
  doador: false,
}

// Criar um objeto produtos com descrições e preços
let produtos = {
  descricao: [],
  preco: []
}

// Definir um objeto carros com informações sobre carros
const carros = {
  marca: ['Gol', 'Toyota', 'Fiat'],
  modelo: ['Golf', 'Corola', 'Uno'],
  ano: [2008, 2020, 2005],
}

// Cálculo do IMC (Índice de Massa Corporal)
let imc = pessoa.peso / (pessoa.altura * pessoa.altura);

// Limitar o número de casas decimais no IMC para 2 casas
//console.log("IMC " + imc.toFixed(2));

// Atualizar o valor da propriedade 'nome' no objeto pessoa
pessoa.nome = 'Iris';

// Adicionar itens aos objetos produtos usando o spread operator
produtos.descricao = [...produtos.descricao, 'Arroz', 'Leite'];
produtos.preco = [...produtos.preco, 5.99];

// Adicionar itens aos objetos carros usando o spread operator
carros.marca = [...carros.marca, 'VW'];
carros.modelo = [...carros.modelo, 'Fusca'];
carros.ano = [...carros.ano, 1979];
