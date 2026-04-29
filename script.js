// funcao para pegar o que foi digitado no site e criar uma checkbox com isso
function addAtividade() {
    let campo = document.getElementById("campo-atividade")
    let atividade = campo.value
    
    let item = document.createElement("li")
    item.innerHTML = `
    <input type="checkbox" id="${atividade}">
    <label for="${atividade}">${atividade}</label>
    `
    let lista = document.getElementById("lista-atividades")
    lista.appendChild(item)

    campo.value = ""
}