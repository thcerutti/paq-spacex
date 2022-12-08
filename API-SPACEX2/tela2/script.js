function carregarDados() {
  console.log('funcionou')
  var endereço = "https://api.spacexdata.com/v5/launches/past";
  fetch(endereço).then(function (respostaDaApi) {
    return respostaDaApi.json(); 
  })
  .then(function (dadosEmFormatoJson) {
    console.log(dadosEmFormatoJson)
    dadosEmFormatoJson.forEach(function (elemento){
      console.log('para cada elemento', elemento.links.webcast)

      let textnode = document.createTextNode(`${elemento.name} , ${new Date(elemento.date_local).toLocaleString()} , ${elemento.links.webcast} `);
      document.body.appendChild(textnode);
      document.body.appendChild(document.createElement("HR"));
    })
  })

}
