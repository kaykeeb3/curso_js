/* Arrays */

let produtos = ['Arroz', 'Feijão', 'Leite'];
var codigos = Array(10, 20, 30);
let meses = ['Jan', 'Fev', 'Mar', 'Abr'];
meses[0] = 'Janeiro';

// ADICIONAR no final push = empurre
produtos.push('Açúcar', 'Café');
codigos.push(40, 50, 60, 70);
meses.push('Mai', 'Jun', 'Ago', '07');

// REMOVER do final pop = estourar
produtos.pop()
codigos.pop()
meses.pop()

// ADICIONAR no início unshift
produtos.unshift('Uva', 'Banana');

// REMOVER do início shift
produtos.shift();

// REMOVER de uma posição específica splice
// splicer = emendar 
// posição inicial, quantos remover
codigos.splice(1, 3);

// COPIAR array slice = fatiar porção
// posição inicial, quantos copiar
let meses1 = meses.slice();
let meses2 = meses.slice(0,3);

// VER TAMANHO DO ARRAY length comprimento
meses.length;
meses1.length;

// spreed operartor ... copiar 
let teste = [...produtos, 'Ovo', 'Carne'];