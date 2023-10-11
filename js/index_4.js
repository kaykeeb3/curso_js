// Arrays de produtos, códigos e meses
let produtos = ['Arroz', 'Feijão', 'Leite'];
let codigos = [10, 20, 30];
let meses = ['Jan', 'Fev', 'Mar', 'Abr'];

// Modificar o primeiro mês para 'Janeiro'
meses[0] = 'Janeiro';

// Adicionar elementos no final dos arrays
produtos.push('Açúcar', 'Café');
codigos.push(40, 50, 60, 70);
meses.push('Mai', 'Jun', 'Ago', '07');

// Remover elementos do final dos arrays
produtos.pop();
codigos.pop();
meses.pop();

// Adicionar elementos no início do array de produtos
produtos.unshift('Uva', 'Banana');

// Remover o primeiro elemento do array de produtos
produtos.shift();

// Remover elementos de uma posição específica no array de códigos
codigos.splice(1, 3); // Remove 3 elementos a partir da posição 1

// Copiar arrays usando slice
let meses1 = meses.slice();     // Copia todos os elementos
let meses2 = meses.slice(0, 3); // Copia os três primeiros elementos

// Obter o tamanho dos arrays
let tamanhoMeses = meses.length;
let tamanhoMeses1 = meses1.length;

// Copiar arrays usando o spread operator
let teste = [...produtos, 'Ovo', 'Carne']; // Copia o array de produtos e adiciona 'Ovo' e 'Carne'
