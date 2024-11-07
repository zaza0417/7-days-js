const nome = prompt('Qual o seu nome?');
const idade = prompt('Qual o seu Idade?');
const linguagem = prompt('Qual a linguagem de programação esta aprendendo?');

alert(`Olá ${nome}, você tem ${idade} anos e estuda ${linguagem}.`);

const gosta = prompt("Você gosta de estudar " + linguagem + "? Responda 1 para sim e 2 para não.");

if (gosta == 1){
  alert('Muito bom! Continue estudando e você terá muito sucesso. :)');
} else {
  alert('Ahh que pena... Já tentou aprender outras linguagens? ;) ');
}