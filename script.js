/* Exercício 1 - Alterando o texto */

function alterarTexto(texto) {
  document.getElementsByTagName('p')[1].innerHTML = texto;
}

alterarTexto('Quero estar trabalhando com Full Stack.');

/* Exercício 2 - Alterando a cor - elemento amarelo */

function mudarCor(elemento) {
  elemento.style.backgroundColor = 'rgb(76, 164, 109)';
}

mudarCor(document.getElementsByClassName('main-content')[0]);

/* Exercício 3 - Alterando a cor - elemento vermelho */

function corBranca(elemento) {
  elemento.style.backgroundColor = 'white';
}

corBranca(document.getElementsByClassName('center-content')[0]);

/* Exercício 4 - Corrigindo o título */

function corrigirTitulo(texto) {
  document.querySelector('h1').innerText = texto;
}
corrigirTitulo('Desafio - JavaScript');

/* Exercício 5 - Letras maiúsculas */

function paraMaiuscula() {
  const paragrafo = document.querySelector('p');
  // <p>string</p>

  const maiusculo = paragrafo.innerHTML.toUpperCase();
  // 'STRING'

  paragrafo.innerHTML = maiusculo;
}

paraMaiuscula();

/* Exercício 6 - Exibindo tags */

function exibindoTags() {
  const todosParagrafos = document.querySelectorAll('p');

  const paragrafoUm = todosParagrafos[0].innerHTML;
  const paragrafoDois = todosParagrafos[1].innerHTML;
  const paragrafoTres = todosParagrafos[2].innerHTML;

  const rodape = todosParagrafos[3];

  rodape.innerHTML = `${paragrafoUm} ${paragrafoDois} ${paragrafoTres}`;
}
exibindoTags();
