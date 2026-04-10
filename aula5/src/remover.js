import { obterVeiculos, salvarVeiculos } from "./veiculos.js";
import { listarVeiculos } from "./listagem.js";

export function setupRemover() {
    const cardContainer = document.getElementById("card-container");

    cardContainer.addEventListener("click", (e) => {
        if (e.target.classList.contains("card-btn-remover")) {
            const confirmacao = confirm("Deseja realmente remover este veículo?");
            if (confirmacao) {
                const index = parseInt(e.target.getAttribute("data-index"));
                const veiculos = obterVeiculos();
                
                veiculos.splice(index, 1);
                
                salvarVeiculos(veiculos);
                listarVeiculos(veiculos);
            }
        }
    });
}
