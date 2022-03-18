var carta1 = {
  nome: "Charizard",
  imagem:
    "https://ovicio.com.br/wp-content/uploads/2021/11/20211101-ovicio-pokemon-charizard.png",
  atributos: {
    ataque: 7,
    defesa: 8,
    magia: 6
  }
};

var carta2 = {
  nome: "Neo",
  imagem:
    "https://s2.glbimg.com/fP0UcztEtzUGXiUYJv-103-NurU=/512x320/smart/e.glbimg.com/og/ed/f/original/2021/02/01/matrix.jpg",
  atributos: {
    ataque: 9,
    defesa: 9,
    magia: 5
  }
};

var carta3 = {
  nome: "Saitama",
  imagem: "https://tm.ibxk.com.br/2020/09/16/16180310869653.jpg",
  atributos: {
    ataque: 10,
    defesa: 10,
    magia: 1
  }
};

var listaCartas = [carta1, carta2, carta3];

var cartaMaquina;
var cartaJogador;

function sortearCarta() {
  var numeroCartaMaquina = parseInt(Math.random() * 3);
  cartaMaquina = listaCartas[numeroCartaMaquina];
  console.log(cartaMaquina);

  var numeroCartaJogador = parseInt(Math.random() * 3);
  while (numeroCartaJogador == numeroCartaMaquina) {
    numeroCartaJogador = parseInt(Math.random() * 3);
  }
  cartaJogador = listaCartas[numeroCartaJogador];
  console.log(cartaJogador);

  document.getElementById("btnSortear").disabled = true;
  document.getElementById("btnJogar").disabled = false;
  exibirCartaJogador();
}

function obtemAtributoSelecionado() {
  var radioAtributos = document.getElementsByName("atributo");

  for (var i = 0; i < radioAtributos.length; i++) {
    if (radioAtributos[i].checked == true) {
      return radioAtributos[i].value;
    }
  }
}

function jogar() {
  var atributoSelecionado = obtemAtributoSelecionado();
  var elementoResultado = document.getElementById("resultado");
  //ATENÇÃO!! Forma diferente de escrever o codigo abaixo
  //var valorCartaJogador = cartaJogador.atributos[atributoSelecionado];
  //var valorCartaMaquina = cartaMaquina.atributos[atributoSelecionado];
  // if (valorCartaJogador > valorCartaMaquina) {
  // elementoResultado.innerHTML = "Você venceu!!!!";
  // } else if (valorCartaJogador < valorCartaMaquina) {
  // elementoResultado.innerHTML =
  // "Voce perdeu!!! o valor da carta do jogador é maior";
  // } else {
  // elementoResultado.innerHTML = "Empatou";
  // }

  if (
    cartaJogador.atributos[atributoSelecionado] >
    cartaMaquina.atributos[atributoSelecionado]
  ) {
    htmlResultado =
      "<p class='resultado-final'>Você venceu!! Aperte F5 para recomeçar</p>";
  } else if (
    cartaJogador.atributos[atributoSelecionado] <
    cartaMaquina.atributos[atributoSelecionado]
  ) {
    htmlResultado =
      "<p class='resultado-final'>Voce perdeu!!! o valor da carta do jogador é maior.Aperte F5 para recomeçar</p>";
  } else {
    htmlResultado = "<p class='resultado-final'> Empatou</p>";
  }
  elementoResultado.innerHTML = htmlResultado;

  document.getElementById("btnJogar").disabled = true;
  exibirCartaMaquina();
}

function exibirCartaJogador() {
  var divCartaJogador = document.getElementById("carta-jogador");
  divCartaJogador.style.backgroundImage = `url(${cartaJogador.imagem})`;
  // divCartaJogador.style.backgroundImage = "url(" + cartaJogador.imagem + ")"
  var moldura =
    '<img src="https://www.alura.com.br/assets/img/imersoes/dev-2021/card-super-trunfo-transparent-ajustado.png" style=" width: inherit; height: inherit; position: absolute;">';
  var tagHTML = "<div id='opcoes' class ='carta-status'>";

  var opcoesTexto = "";
  for (var atributo in cartaJogador.atributos) {
    opcoesTexto +=
      "<input type='radio' name='atributo' value='" +
      atributo +
      "'>" +
      atributo +
      " " +
      cartaJogador.atributos[atributo] +
      "<br>";
  }
  var nome = `<p class="carta-subtitle">${cartaJogador.nome}</p>`;

  divCartaJogador.innerHTML = moldura + nome + tagHTML + opcoesTexto + "</div>";
}

function exibirCartaMaquina() {
  var divCartaMaquina = document.getElementById("carta-maquina");
  divCartaMaquina.style.backgroundImage = `url(${cartaMaquina.imagem})`;
  // divCartaJogador.style.backgroundImage = "url(" + cartaJogador.imagem + ")"
  var moldura =
    '<img src="https://www.alura.com.br/assets/img/imersoes/dev-2021/card-super-trunfo-transparent-ajustado.png" style=" width: inherit; height: inherit; position: absolute;">';
  var tagHTML = "<div id='opcoes' class ='carta-status'>";

  var opcoesTexto = "";
  for (var atributo in cartaMaquina.atributos) {
    opcoesTexto +=
      "<p type='text' name='atributo' value='" +
      atributo +
      "'>" +
      atributo +
      " " +
      cartaMaquina.atributos[atributo] +
      "</p>";
  }
  var nome = `<p class="carta-subtitle">${cartaMaquina.nome}</p>`;
  divCartaMaquina.innerHTML = moldura + nome + tagHTML + opcoesTexto + "</div>";
}