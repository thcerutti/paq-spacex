function fazGet(url) {
    let request = new XMLHttpRequest()
    request.open("GET", url, false)
    request.send()
    return request.responseText

}

function criaLinha(usuario) {
    linha = document.createElement("tr");
    tdId = document.createElement("td");
    tdNome = document.createElement("td");
    tdId.innerHTML = usuario.id
    tdNome.innerHTML = usuario.name

    linha.appendChild(tdId);
    linha.appendChild(tdNome);

    return linha;
}

function main() {
    let data = fazGet("https://api.spacexdata.com/v5/launches/past")
    let usuarios = JSON.parse(data);
    let tabela = document.getElementById("tabela")
    usuarios.forEach(element => {
        let linha = criaLinha(element);
        tabela.appendChild(linha);
        
    });
    // para cada usuario
    // criar uma linha
    // adicionar na tabela

}
main()

