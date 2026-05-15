document.addEventListener("DOMContentLoaded", () => {
    const atletas = JSON.parse(localStorage.getItem("atletas") || "[ ]");

    const atletasFiltrados = atletas.filter(atleta => atleta.altura > 1.90);
    const tbody = document.querySelector("tbody");

    let somaPeso = 0;
    let somaAltura = 0;

    atletasFiltrados.forEach(atleta => {
        const tr = document.createElement("tr");

        const tdNome = document.createElement("td");
        tdNome.textContent = atleta.nome;

        const tdPeso = document.createElement("td");
        tdPeso.textContent = atleta.peso;

        const tdAltura = document.createElement("td");
        tdAltura.textContent = atleta.altura;

        somaPeso += atleta.peso;
        somaAltura += atleta.altura;

        tr.appendChild(tdNome);
        tr.appendChild(tdPeso);
        tr.appendChild(tdAltura);

        tbody.appendChild(tr);

    })
})