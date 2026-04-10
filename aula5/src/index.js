import { listarVeiculos } from "./listagem.js";
import { obterVeiculos } from "./veiculos.js";
import { setupAdicionar } from "./adicionar.js";
import { setupRemover } from "./remover.js";
import { setupAlterar } from "./alterar.js";

document.addEventListener("DOMContentLoaded", () => {
    // Inicialização principal
    const veiculos = obterVeiculos();
    listarVeiculos(veiculos);
    
    // Configuração dos modulos
    setupAdicionar();
    setupRemover();
    setupAlterar();
    
    // Lógica compartilhada do Modal
    const fecharBtn = document.getElementById("fechar-modal");
    const modal = document.getElementById("modal-cadastro");

    if (fecharBtn) {
        fecharBtn.addEventListener("click", () => {
            modal.style.display = "none";
            document.getElementById("form-cadastro").reset();
            document.getElementById("form-cadastro").removeAttribute("data-editing-index");
        });
    }

    if (modal) {
        modal.addEventListener("click", (e) => {
            if (e.target === modal) {
               modal.style.display = "none";
               document.getElementById("form-cadastro").reset();
               document.getElementById("form-cadastro").removeAttribute("data-editing-index");
            }
        });
    }
});