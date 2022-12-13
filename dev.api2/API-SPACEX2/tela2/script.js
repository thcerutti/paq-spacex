function criarLink(url, texto) {
  const linkDoYoutube = document.createElement('a')
  linkDoYoutube.href = url
  linkDoYoutube.textContent = texto
  document.body.appendChild(linkDoYoutube);
}

function criarCampoComTexto(descricao, texto) {
  const paragrafo = document.createElement('p')
  const strong = document.createElement('strong')
  strong.textContent = `${descricao}: `
  paragrafo.appendChild(strong)
  paragrafo.appendChild(document.createTextNode(texto))
  document.body.appendChild(paragrafo)
}

function criarImagemSelo(enderecoDaImagem) {
  const img = document.createElement('img')
  img.src = enderecoDaImagem
  document.body.appendChild(img)
}

function carregarDados() {

  console.log('funcionou')
  var endereço = "https://api.spacexdata.com/v5/launches/past";
  fetch(endereço).then(function (respostaDaApi) {
    return respostaDaApi.json(); 
  })
  .then(function (dadosEmFormatoJson) {
    console.log(dadosEmFormatoJson)
    dadosEmFormatoJson.forEach(function (elemento) {
      criarImagemSelo(elemento.links.patch.small)
      criarCampoComTexto('Foguete', elemento.name)
      criarCampoComTexto('Lançamento', new Date(elemento.date_local).toLocaleString())
      criarLink(elemento.links.webcast, 'YouTube')
      document.body.appendChild(document.createElement("HR"));
    })
  })
}
