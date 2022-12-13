function criarCampoComTexto(descricao, texto) {
  const paragrafo = document.createElement('p')
  const strong = document.createElement('strong')
  strong.textContent = `${descricao}: `
  paragrafo.appendChild(strong)
  paragrafo.appendChild(document.createTextNode(texto))
  document.body.appendChild(paragrafo)
}

function carregarDados() {
    console.log('funcionou')
    var endereço = "https://api.spacexdata.com/v5/launches/upcoming";
    fetch(endereço).then(function (respostaDaApi) {
      return respostaDaApi.json(); 
    })
  
    .then(function (dadosEmFormatoJson) {
      console.log(dadosEmFormatoJson)
      dadosEmFormatoJson.forEach(function (elemento){
        console.log('para cada elemento', elemento)

        criarCampoComTexto('Data', new Date(elemento.date_local).toLocaleString())
        criarCampoComTexto('Numero De Voo', elemento.flight_number)
        criarCampoComTexto('Foguete', elemento.name)

        document.body.appendChild(document.createElement("HR"));
      })
    })
  
  }