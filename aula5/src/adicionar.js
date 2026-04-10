import { obterVeiculos, salvarVeiculos } from "./veiculos.js";
import { listarVeiculos } from "./listagem.js";

export function setupAdicionar() {
    const cadastrarBtn = document.getElementById("cadastrar");
    const modal = document.getElementById("modal-cadastro");
    const formCadastro = document.getElementById("form-cadastro");

    cadastrarBtn.addEventListener("click", () => {
        formCadastro.reset();
        formCadastro.removeAttribute("data-editing-index");
        document.getElementById("modal-titulo").textContent = "Cadastrar Veículo";
        modal.style.display = "flex";
    });

    formCadastro.addEventListener("submit", (e) => {
        // Se estiver editando, não faz nada aqui
        if (formCadastro.hasAttribute("data-editing-index")) {
            return;
        }
        
        e.preventDefault();

        const nome = document.getElementById("nome").value;
        const telefone = document.getElementById("telefone").value;
        const descricao = document.getElementById("descricao").value;
        const placa = document.getElementById("placa").value;

        const veiculo = {
            nome_cliente: nome,
            telefone: telefone,
            descricao_veiculo: descricao,
            placa_veiculo: placa
        };

        const veiculosAtuais = obterVeiculos();
        veiculosAtuais.push(veiculo);

        salvarVeiculos(veiculosAtuais);
        listarVeiculos(veiculosAtuais);

        modal.style.display = "none";
        formCadastro.reset();
    });
}
