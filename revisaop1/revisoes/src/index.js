let animes = [];
let indexEdicao = -1;

document.addEventListener("DOMContentLoaded", () => {
    animes = carregarAnimes();
    renderizarAnimes(animes);
    
    const dialog = document.querySelector('dialog');
    const form = document.querySelector("dialog form");
    const botaoAbrirModal = document.querySelector("#adicionar");
    const botaoCancelar = document.querySelector("#cancel-button");
    const botaoBusca = document.querySelector("#btn-busca");
    const tabelaAnimes = document.querySelector("#animes");

    botaoAbrirModal.addEventListener("click", () => {
        indexEdicao = -1;
        form.reset();
        dialog.showModal();
    });

    botaoCancelar.addEventListener("click", () => {
        dialog.close();
    });

    form.addEventListener("submit", (e) => {
        e.preventDefault();
        salvarAnimes();
        dialog.close();
    });

    botaoBusca.addEventListener("click", realizarBusca);

    tabelaAnimes.addEventListener("click", (e) => {
        const index = e.target.dataset.index;
        if (e.target.classList.contains("btn-remover")) {
            removerAnime(index);
        } else if (e.target.classList.contains("btn-alterar")) {
            prepararEdicao(index);
        }
    });
});

function carregarAnimes() {
    return JSON.parse(localStorage.getItem("animes") || "[]");
}

function salvarAnimes() {
    const nome = document.querySelector("#anime-name").value;
    const categoria = document.querySelector("#anime-categorie").value;

    if (indexEdicao === -1) {
        animes.push({ nome, categoria });
    } else {
        animes[indexEdicao] = { nome, categoria };
    }

    persistirAnimes();
    renderizarAnimes(animes);
}

function removerAnime(index) {
    if (confirm("Deseja realmente remover este anime?")) {
        animes = animes.filter((_, i) => i !== Number(index));
        persistirAnimes();
        renderizarAnimes(animes);
    }
}

function prepararEdicao(index) {
    indexEdicao = index;
    const anime = animes[index];
    document.querySelector("#anime-name").value = anime.nome;
    document.querySelector("#anime-categorie").value = anime.categoria;
    document.querySelector('dialog').showModal();
}

function realizarBusca() {
    const termo = document.querySelector("#busca-anime").value.toLowerCase();
    const filtrados = animes.filter(anime => 
        anime.nome.toLowerCase().includes(termo) || 
        anime.categoria.toLowerCase().includes(termo)
    );
    renderizarAnimes(filtrados);
}

function persistirAnimes() {
    localStorage.setItem("animes", JSON.stringify(animes));
}

function renderizarAnimes(lista) {
    const animesContainer = document.querySelector("#animes");
    animesContainer.innerHTML = lista.map((element, index) => {
        // Find the actual index in the original 'animes' array for action buttons
        // to ensure edit/delete work correctly even after filtering
        const realIndex = animes.indexOf(element);
        return `
        <tr data-index="${realIndex}">
            <td>${element.nome}</td>
            <td>${element.categoria}</td>
            <td>
                <button class="btn-alterar" data-index="${realIndex}">Alterar</button>
                <button class="btn-remover" data-index="${realIndex}">Remover</button>
            </td>
        </tr>`;
    }).join("");
}