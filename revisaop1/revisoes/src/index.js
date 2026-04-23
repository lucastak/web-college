let animes = [];
let funcaoModal = "salvar";

document.addEventListener("DOMContentLoaded", () => {
    animes = carregarAnimes();
    renderizarAnimes(animes);
    
    const botaoAbrirModal = document.querySelector("#adicionar");
    botaoAbrirModal.addEventListener("click", () => {
        document.querySelector( 'dialog' ).showModal();
    });

    const form = document.querySelector("dialog form");
    form.addEventListener("submit", salvarAnimes);

    const 
})

function carregarAnimes() {
    return JSON.parse(localStorage.getItem("animes") || "[ ]");
}

function salvarAnimes(){
    const nome = document.querySelector("#anime-name").value;
    const categoria = document.querySelector("#anime-categorie").value;

    animes.push({
        nome,
        categoria
    });

    localStorage.setItem("animes", JSON.stringify(animes));
    renderizarAnimes(animes);
}

removerAnimes(){

}

function renderizarAnimes(animes){
    const animesContainer = document.querySelector("#animes");
    animesContainer.innerHTML = animes.map((element, index) => (
        `<tr data-index="${index}">
            <td>${element.nome}</td>
            <td>${element.categoria}</td>
            <td>
                <button class="btn-alterar" data-index="${index}">Alterar</button>
                <button class="btn-remover" data-index="${index}">Remover</button>
            </td>
        </tr>`
    )).join("");
}