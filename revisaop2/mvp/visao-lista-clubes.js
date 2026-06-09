import { ControladoraListaClubes } from './controladora-lista-clubes.js';

export class VisaoListaClubes {
    constructor() {
        this.controladora = new ControladoraListaClubes(this);
    }

    obterFiltroDesde() {
        return Number(document.getElementById('desde').value);
    }

    limparTabela() {
        document.querySelector('tbody').replaceChildren();
    }

    adicionarClubeNaTabela(clube) {
        const tr = document.createElement('tr');
        
        const tdId = document.createElement('td');
        tdId.textContent = clube.id;
        
        const tdNome = document.createElement('td');
        tdNome.textContent = clube.nome;
        
        const tdFundacao = document.createElement('td');
        tdFundacao.textContent = clube.fundacao;
        
        const tdEscudo = document.createElement('td');
        const img = document.createElement('img');
        img.src = clube.escudo;
        img.width = 50;
        img.height = 50;
        img.alt = clube.nome;
        tdEscudo.append(img);
        
        const tdAcoes = document.createElement('td');
        const btnRemover = document.createElement('button');
        btnRemover.textContent = 'Remover';
        btnRemover.addEventListener('click', () => {
            this.controladora.removerClube(clube.id, tr);
        });
        tdAcoes.append(btnRemover);
        
        tr.append(tdId, tdNome, tdFundacao, tdEscudo, tdAcoes);
        document.querySelector('tbody').append(tr);
    }

    removerLinha(tr) {
        tr.remove();
    }

    mostrarErro(mensagem) {
        document.querySelector('output').textContent = mensagem;
    }

    limparErro() {
        document.querySelector('output').textContent = '';
    }

    iniciar() {
        document.getElementById('desde').addEventListener('change', () => {
            this.controladora.atualizarTabela();
        });
        this.controladora.atualizarTabela();
    }
}
