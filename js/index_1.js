/* Comandos básicos */

// Alerta uma mensagem na tela
// window.alert('Hello Word!'); // Obrigatório

// Confirma uma mensagem na tela
// window.confirm('Está gostando?');

// Exibe uma caixa de diálogo
// window.prompt('Qual é o seu nome?');

/* Variáveis */

let mensagem = "Minha mensagem"; // String (valor entre "" ou '')
let mensagem2 = 'Outra mensagem'; // String (valor entre '' ou "")
let meuPeso = 69.5; // Number (valor numérico float)
let minhaAltura = 1.80; // Number (valor numérico float)
let minhaIdade = 18; // Number (valor inteiro)
let ehDoador = false; // Boolean (valor lógico true ou false)
let teste = null; // Valor nulo (null ou undefined)

// Variável composta
// let meu_Peso = 69.5; // Pode ser definida desta forma também

/* Criar constantes e atribuir valor */
const PI = 3.1415;
const TAXA = 0.7;

teste = "Algum conteúdo"; // Pode receber algum valor

/* Escrever o conteúdo de variáveis e constantes */

/* Concatenação + e inserção de tags HTML */
document.write(`<h1>Mensagem ${mensagem}</h1>`);

/* Template string, ``, ${nome_da_variável} */
document.write(`<h1>Mensagem2: ${mensagem2}</h1>`);

document.write(`<h1>Peso ${meuPeso} Kg</h1>`);

document.write(`<h1>Altura: ${minhaAltura} m</h1>`);

document.write(`<h1>Minha Idade: ${minhaIdade} anos</h1>`);

document.write(`<h1>Doador? ${ehDoador}</h1>`);

document.write(`<h1>Teste: ${teste}</h1>`);

document.write(`<h1>Número PI: ${PI}</h1>`);

document.write(`<h1>Taxa: ${TAXA}</h1>`);
