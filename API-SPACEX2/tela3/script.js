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
  
        let textnode = document.createTextNode(`${elemento.name} 
        , ${new Date(elemento.date_local).toLocaleString()} , ${elemento.flight_number}`);
        document.body.appendChild(textnode);
        document.body.appendChild(document.createElement("HR"));
      })
    })
  
  }