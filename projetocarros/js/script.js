
function mudatexto(carro) {

  let texto = document.getElementById('tx');
  document.getElementById("descricao").classList.toggle("escondido");

  if (carro == 'audi') {
    texto.innerHTML = "O Audi Sport Quattro foi um carro icônico desenvolvido pela Audi para competir no Campeonato Mundial de Rally(WRC) na década de 1980, durante a famosa era do Grupo B. Lançado em 1984, o modelo foi criado para enfrentar a feroz concorrência de outras montadoras, como Peugeot, Lancia e Ford. O Audi Sport Quattro se destacou por ser o primeiro carro do WRC a incorporar a tração integral(AWD), uma inovação que revolucionou o desempenho em terrenos difíceis, como os das competições de rally.Além disso, o modelo contava com um motor turboalimentado de 5 cilindros e uma potência impressionante, variando entre 350 e 450 cv, dependendo da versão e da configuração. Sua estreia foi um marco no rally, já que o carro demonstrou um desempenho excepcional, especialmente em pistas rápidas e escorregadias.O piloto principal da Audi, Stig Blomqvist, conquistou o título mundial de pilotos em 1984, e o Audi Sport Quattro se tornou uma das máquinas mais temidas da época. No entanto, o Grupo B foi encerrado em 1986 devido a preocupações com a segurança, depois de Henri Toivonen no Rali de Córsega.Apesar de sua curta participação no WRC, o Audi Sport Quattro deixou um legado duradouro no automobilismo, sendo lembrado como um dos carros mais avançados e emocionantes da história do rally.";
  } else if (carro == 'lancia') {
    texto.innerHTML = "O Audi Sport Quattro foi um carro icônico desenvolvido pela Audi para competir no" +
      " Campeonato Mundial de Rally (WRC) na década de 1980, durante a famosa era do Grupo B." +
      "Lançado em 1984, o modelo foi criado para enfrentar a feroz concorrência de outras" +
      "montadoras, como Peugeot, Lancia e Ford.";
  } else if (carro == 'peugeot') {
    texto.innerHTML = "prrrrrrrrrrrrrrrrrrrr";
  } else if (carro == 'ford') {
    texto.innerHTML = "prrrrrrrrrrrrrrrrrrrr";
  } else if (carro == 'lancia2') {
    texto.innerHTML = "prrrrrrrrrrrrrrrrrrrr";
  } else if (carro == 'MG') {
    texto.innerHTML = "prrrrrrrrrrrrrrrrrrrr";
  } else if (carro == 'opel') {
    texto.innerHTML = "prrrrrrrrrrrrrrrrrrrr";
  }

  if (carro == 'audi') {
    document.getElementById("imagem").src = 'img/audi.png';
  } else if (carro == 'lancia') {
    document.getElementById("imagem").src = 'img/lancia.jpg';
  } else if (carro == 'peugeot') {
    document.getElementById("imagem").src = 'img/peugeot.png';
  } else if (carro == 'ford') {
    document.getElementById("imagem").src = 'img/';
  } else if (carro == 'lancia2') {
    document.getElementById("imagem").src = 'img/';
  } else if (carro == 'MG') {
    document.getElementById("imagem").src = 'img/';
  } else if (carro == 'Opel') {
    document.getElementById("imagem").src = 'img/';
  }

}
