const inputDesde = document.getElementById('desde');
const tbody = document.querySelector('tbody');
const output = document.querySelector('output');

function atualizarTabela() {
    const valorNum = Number(inputDesde.value);

    if (Number.isInteger(valorNum) && valorNum >= 1800) {
        fetch('/api/clubes')
            .then(resposta => {
                if (!resposta.ok) {
                    throw new Error('Falha ao consultar os clubes: ' + resposta.status);
                }
                return resposta.json();
            })
            .then(clubes => {
                const filtrados = clubes.filter(clube => clube.fundacao >= valorNum);
                const linhas = filtrados.map(criarLinha);
                tbody.replaceChildren();
                tbody.append(...linhas);
                output.textContent = '';
            })
            .catch(erro => {
                output.textContent = erro.message;
            });
    }
}

function criarLinha(clube) {
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
        fetch(`/api/clubes/${clube.id}`, { method: 'DELETE' })
            .then(resposta => {
                if (!resposta.ok) {
                    throw new Error('Falha ao remover o clube.');
                }
                tr.remove();
                output.textContent = '';
            })
            .catch(erro => {
                output.textContent = erro.message;
            });
    });
    tdAcoes.append(btnRemover);
    
    tr.append(tdId, tdNome, tdFundacao, tdEscudo, tdAcoes);
    return tr;
}

inputDesde.addEventListener('change', atualizarTabela);
atualizarTabela();
