import { listarVeiculos } from "./listagem.js";

document.addEventListener("DOMContentLoaded", () => {
    const veiculos = capturarVeiculos();
    listarVeiculos(veiculos);
    
    const cadastrarBtn = document.getElementById("cadastrar");
    const fecharBtn = document.getElementById("fechar-modal");
    const modalBackdrop = document.getElementById("modal-content");
    const formCadastro = document.getElementById("form-cadastro");
    const cardContainer = document.getElementById("card-container");

    if (cardContainer) {
        cardContainer.addEventListener("click", (e) => {
            if (e.target.classList.contains("card-btn-remover")) {
                const index = parseInt(e.target.getAttribute("data-index"));
                removerVeiculo(index);
            }

            if (e.target.classList.contains("card-btn-alterar")) {
                const index = parseInt(e.target.getAttribute("data-index"));
                alterarVeiculo(index);
            }
        });
    }

    if (cadastrarBtn) cadastrarBtn.addEventListener("click", abrirModal);
    if (fecharBtn) fecharBtn.addEventListener("click", fecharModal);

    if (modalBackdrop) {
        modalBackdrop.addEventListener("click", (e) => {
            if (e.target === modalBackdrop) fecharModal();
        });
    }

    if (formCadastro) formCadastro.addEventListener("submit", cadastrarVeiculo);
});

function capturarVeiculos(){
    const veiculos = localStorage.getItem("veiculos");
    return veiculos ? JSON.parse(veiculos) : [];
}

function abrirModal(){
    const modal = document.getElementById("modal-cadastro");
    if (modal) modal.style.display = "flex";
}

function fecharModal(){     
    const modal = document.getElementById("modal-cadastro");

    if (modal) {
        modal.style.display = "none";
        const form = document.getElementById("form-cadastro");
        if (form) form.reset();
    }
}

function cadastrarVeiculo(e) {
    if (e) e.preventDefault();

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

    const veiculosAtuais = capturarVeiculos();
    veiculosAtuais.push(veiculo);

    localStorage.setItem("veiculos", JSON.stringify(veiculosAtuais));

    listarVeiculos(veiculosAtuais);
    fecharModal();
}

function removerVeiculo(i){
    const veiculosAtuais = capturarVeiculos();
    const veiculosFiltrados = veiculosAtuais.filter((_, index) => index !== i);
    localStorage.setItem("veiculos", JSON.stringify(veiculosFiltrados));
    listarVeiculos(veiculosFiltrados);
}

function alterarVeiculo(i){
    const veiculosAtuais = capturarVeiculos();
    const veiculo = veiculosAtuais[i];

    abrirModal();

    const form = document.getElementById("form-cadastro");
    if (form) {
        form.nome.value = veiculo.nome_cliente;
        form.telefone.value = veiculo.telefone;
        form.descricao.value = veiculo.descricao_veiculo;
        form.placa.value = veiculo.placa_veiculo;
    }

    form.addEventListener("submit", (e) => {
        if (e) e.preventDefault();
        
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

        veiculosAtuais[i] = veiculo;
        localStorage.setItem("veiculos", JSON.stringify(veiculosAtuais));
        listarVeiculos(veiculosAtuais);
        fecharModal();
    });
}