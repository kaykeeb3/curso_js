/*   Comandos básicos   */
//; não é mais obgigatoruo 
// Alerta uma mensagem na tela
//window.alert('Hello Word!'); obrigatório 

// Confirma uma mensagem na tela
//window.confirm('Está gostando?');

// Exibe uma caixa de dialógo
//window.prompt('Qual seu nome?');

/*  Variável  */ 

let mensagem = "Minha mensagem"; /* String valor entre "" ou '' */
let mensagem2 = 'Outra mensagem'; /* String valor entre "'' ou "" */
let meuPeso = 69.5; /* Number valor númerico | float */
let minhaAltura = 1.80; /* Number valor númerico | float */
let minhaIdade = 18; /* Number valor inteiro  */ 
let ehDoador = false;  /* Boolean valor lógico true | false */
let teste = null /* Valor nulo null | undefined */ 

// Variável composta 
/*  let meu_Peso = 69.5;  */ 
// Poder ser desta forma também

/* CRIAR CONSTANTES e atribuir valor */
const PI = 3.1415;
const TAXA = 0.7;

teste = "Algum conteúdo"; /* PODE RECEBER algum valor*/ 

/* ESCREVER O CONTEÚDO DE VARIAVEIS E CONSTANTES */ 

/* Concatenação +, "" inserir tag HTML */
document.write("<h1> Mensagem " + mensagem + "</h1>"); 

/* Template string, ``, ${nome_da_variável}  */
document.write(`Mensagem2: ${mensagem2}`); //

document.write("<h1>Peso " + meuPeso + "Kg </h1>");

document.write(`Altura: ${minhaAltura} m`);//

document.write("<h1>Minha Idade" + minhaIdade + " anos </h1>");

document.write("<h1>Doador? " + ehDoador + "</h1>");

document.write("<h1>Teste: " + teste + "</h1>");

document.write("<h1>Número PI: " + PI + "</h1>");

document.write("<h1>Taxa" + TAXA + "</h1>");
