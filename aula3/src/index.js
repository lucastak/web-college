const animes = [
    {
        nome: "Dragon Ball Z",
        genero: "Ação"
    },
    {
        nome: "Hunter Hunter",
        genero: "Ação/Aventura"
    },
    {
        nome: "Villand Saga",
        genero: "Ação"
    },
    {
        nome: "Death Note",
        genero: "Suspense/Drama"
    },
    {
        nome: "Bleach",
        genero: "Ação"
    }
];

document.addEventListener("DOMContentLoaded", () => {
    const tbody = document.getElementsByTagName("tbody")[0];
    animes.forEach(anime => {
        const tr = document.createElement("tr");
        const tdNome = document.createElement("td");
        const tdGenero = document.createElement("td");
        tdNome.textContent = anime.nome;
        tdGenero.textContent = anime.genero;
        tr.appendChild(tdNome);
        tr.appendChild(tdGenero);
        tbody.appendChild(tr);
    });
    
    const linhas = document.querySelectorAll("tr");
    linhas.forEach(linha => {
        linha.addEventListener("click", () => {
            alert(linha.textContent);
        });
    });
});

