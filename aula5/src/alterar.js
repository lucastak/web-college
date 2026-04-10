import { obterVeiculos, salvarVeiculos } from "./veiculos.js";
import { listarVeiculos } from "./listagem.js";

export function setupAlterar() {
    const cardContainer = document.getElementById("card-container");
    const formCadastro = document.getElementById("form-cadastro");
    const modal = document.getElementById("modal-cadastro");

    // Event Delegation para escutar os botoes de alterar dentro da lista
    cardContainer.addEventListener("click", (e) => {
        if (e.target.classList.contains("card-btn-alterar")) {
            const index = parseInt(e.target.getAttribute("data-index"));
            
            const veiculos = obterVeiculos();
            const veiculo = veiculos[index];

            document.getElementById("nome").value = veiculo.nome_cliente;
            document.getElementById("telefone").value = veiculo.telefone;
            document.getElementById("descricao").value = veiculo.descricao_veiculo;
            document.getElementById("placa").value = veiculo.placa_veiculo;
            
            document.getElementById("modal-titulo").textContent = "Alterar Veículo";
            formCadastro.setAttribute("data-editing-index", index);

            modal.showModal();
        }
    });

    formCadastro.addEventListener("submit", (e) => {
        // Só executa se for uma edição, marcado pelo atributo
        if (!formCadastro.hasAttribute("data-editing-index")) {
            return;
        }
        
        e.preventDefault();
        const index = parseInt(formCadastro.getAttribute("data-editing-index"));

        const nome = document.getElementById("nome").value;
        const telefone = document.getElementById("telefone").value;
        const descricao = document.getElementById("descricao").value;
        const placa = document.getElementById("placa").value;

        const veiculos = obterVeiculos();
        veiculos[index] = {
            nome_cliente: nome,
            telefone: telefone,
            descricao_veiculo: descricao,
            placa_veiculo: placa
        };

        salvarVeiculos(veiculos);
        listarVeiculos(veiculos);

        modal.close();
        formCadastro.reset();
        formCadastro.removeAttribute("data-editing-index");
    });
}
