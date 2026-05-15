import { consultarContas, criarConta, alterarConta, removerConta } from './listagem.js';

let contaSelecionadaId = null;
let contasAtuais = [];

const dialog = document.getElementById('conta-dialog');
const form = document.getElementById('conta-form');
const btnNova = document.getElementById('nova');
const btnAlterar = document.getElementById('alterar');
const btnRemover = document.getElementById('remover');
const btnCancelar = document.getElementById('btn-cancelar');
const dialogTitle = document.getElementById('dialog-title');

function atualizarTabela() {
    consultarContas()
        .then(contas => {
            contasAtuais = contas;
            const tbody = document.getElementById('contas');
            tbody.innerHTML = '';
            
            let saldo = 0;
            contas.forEach(conta => {
                const row = document.createElement('tr');
                row.dataset.id = conta.id;
                
                // Formatação do valor
                const valorFormatado = Number(conta.valor).toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' });

                row.innerHTML = `
                    <td>${conta.id}</td>
                    <td>${conta.nome}</td>
                    <td style="text-transform: capitalize;">${conta.tipo}</td>
                    <td class="${conta.tipo === 'receber' ? 'saldo-positivo' : 'saldo-negativo'}">${valorFormatado}</td>
                `;
                
                // Seleção da linha
                row.addEventListener('click', () => selecionarLinha(row, conta.id));
                
                tbody.appendChild(row);
                
                // Cálculo do saldo
                if (conta.tipo === 'receber') {
                    saldo += Number(conta.valor);
                } else {
                    saldo -= Number(conta.valor);
                }
            });
            
            const saldoEl = document.getElementById('saldo');
            saldoEl.textContent = saldo.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' });
            saldoEl.className = 'saldo-value ' + (saldo >= 0 ? 'saldo-positivo' : 'saldo-negativo');
            
            // Limpa a seleção após atualizar a tabela
            limparSelecao();
        })
        .catch(error => console.error('Erro ao listar contas:', error));
}

function selecionarLinha(row, id) {
    // Remove classe selected de todas as linhas
    const rows = document.querySelectorAll('#contas tr');
    rows.forEach(r => r.classList.remove('selected'));
    
    // Adiciona na linha clicada
    row.classList.add('selected');
    contaSelecionadaId = id;
    
    // Habilita os botões de alterar e remover
    btnAlterar.disabled = false;
    btnRemover.disabled = false;
}

function limparSelecao() {
    contaSelecionadaId = null;
    btnAlterar.disabled = true;
    btnRemover.disabled = true;
}

// Event listeners de botões do menu
btnNova.addEventListener('click', () => {
    form.reset();
    document.getElementById('conta-id').value = '';
    dialogTitle.textContent = 'Nova Conta';
    dialog.showModal();
});

btnAlterar.addEventListener('click', () => {
    if (!contaSelecionadaId) return;
    
    const conta = contasAtuais.find(c => String(c.id) === String(contaSelecionadaId));
    if (conta) {
        document.getElementById('conta-id').value = conta.id;
        document.getElementById('nome').value = conta.nome;
        document.getElementById('tipo').value = conta.tipo;
        document.getElementById('valor').value = conta.valor;
        dialogTitle.textContent = 'Alterar Conta';
        dialog.showModal();
    }
});

btnRemover.addEventListener('click', () => {
    if (!contaSelecionadaId) return;
    
    if (confirm('Tem certeza que deseja remover esta conta?')) {
        removerConta(contaSelecionadaId)
            .then(() => atualizarTabela())
            .catch(error => alert('Erro ao remover: ' + error.message));
    }
});

// Cancelar modal
btnCancelar.addEventListener('click', () => {
    dialog.close();
});

// Submissão do formulário
form.addEventListener('submit', (e) => {
    e.preventDefault();
    
    const id = document.getElementById('conta-id').value;
    const conta = {
        nome: document.getElementById('nome').value,
        tipo: document.getElementById('tipo').value,
        valor: Number(document.getElementById('valor').value)
    };
    
    if (id) {
        // Alterar
        alterarConta(id, conta)
            .then(() => {
                dialog.close();
                atualizarTabela();
            })
            .catch(error => alert('Erro ao alterar: ' + error.message));
    } else {
        // Criar
        criarConta(conta)
            .then(() => {
                dialog.close();
                atualizarTabela();
            })
            .catch(error => alert('Erro ao criar: ' + error.message));
    }
});

document.addEventListener('DOMContentLoaded', atualizarTabela);
