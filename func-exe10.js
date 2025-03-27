//váriaveis globais
const descSection = document.getElementById("desc-s")
const imgSection = document.getElementById("img-holder")
const descTitle = document.getElementById("d-title")


//LEMBRETE: pesquisar sobre parâmetros em funções js - evitar redundancias como essa abaixo
function addSin(){
    descTitle.innerHTML = "Quais são os sintomas da dengue?"
}

function addTrans(){
    descTitle.innerHTML = "Formas de Transmissão"
}

function addDiag(){
    descTitle.innerHTML = "Diagnóstico"
}

function addTrat(){
    descTitle.innerHTML = "Tratamento"
}

function addPrev(){
    descTitle.innerHTML = "Como previnir a dengue?";

    //adicionando a lista
    descSection.innerHTML = "<ul><li>Mantenha a caixa d´água fechada </li><li>mantenha tampados tonéis e barris d´água</li><li>lave semanalmente com escova e sabão os tanques utilizados para armazenar água </li><li>encha de areia até a borda os pratos das plantas</li><li>coloque no lixo todo objeto não utilizado que possa acumular água </li><li>coloque o lixo em sacos plásticos e mantenha a lixeira bem fechada </li><li>mantenha as calhas limpas</li><li>não deixe água acumulada sobre a laje</li></ul>";
    imgSection.style.display = "none";

}