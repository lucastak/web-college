// Questão 1 - lista-filmes.js
// Consulta filmes na API, filtra pelo ano do range input,
// e exibe o valor atual no elemento <output>.
// Demonstra: fetch+promessas, filter(), map(), createElement, output.textContent

const inputDesde = document.getElementById('desde');
const tbody = document.querySelector('tbody');
const output = document.querySelector('output'); // ← ponto importante: output é um elemento como qualquer outro

function atualizarTabela() {
    const valorNum = Number(inputDesde.value);

    // Valida: deve ser inteiro e >= 1900
    if (Number.isInteger(valorNum) && valorNum >= 1900) {
        fetch('/api/filmes')
            .then(resposta => {
                if (!resposta.ok) {
                    throw new Error('Falha ao consultar os filmes: ' + resposta.status);
                }
                return resposta.json();
            })
            .then(filmes => {
                // filter(): mantém só os filmes do ano correto
                const filtrados = filmes.filter(filme => filme.ano >= valorNum);

                // map(): transforma cada filme em uma <tr> do DOM
                const linhas = filtrados.map(criarLinha);

                tbody.replaceChildren(); // remove todas as linhas antigas
                tbody.append(...linhas);

                // ← PONTO CHAVE: colocar texto no <output> com textContent
                output.textContent = `Exibindo filmes a partir de ${valorNum}`;
            })
            .catch(erro => {
                // Erros também vão para o <output>
                output.textContent = 'Erro: ' + erro.message;
            });
    }
    // Se inválido: não atualiza nada (conforme o enunciado)
}

function criarLinha(filme) {
    const tr = document.createElement('tr');

    // Coluna Id
    const tdId = document.createElement('td');
    tdId.textContent = filme.id;

    // Coluna Título
    const tdTitulo = document.createElement('td');
    tdTitulo.textContent = filme.titulo;

    // Coluna Ano
    const tdAno = document.createElement('td');
    tdAno.textContent = filme.ano;

    // Coluna Poster (imagem)
    const tdPoster = document.createElement('td');
    const img = document.createElement('img');
    img.src = filme.poster;
    img.width = 60;
    img.height = 60;
    img.alt = filme.titulo;
    tdPoster.append(img);

    // Coluna Ações (botão Remover)
    const tdAcoes = document.createElement('td');
    const btnRemover = document.createElement('button');
    btnRemover.textContent = 'Remover';
    btnRemover.addEventListener('click', () => {
        // DELETE na API pelo id do filme
        fetch(`/api/filmes/${filme.id}`, { method: 'DELETE' })
            .then(resposta => {
                if (!resposta.ok) {
                    throw new Error('Falha ao remover o filme.');
                }
                tr.remove(); // remove a linha da tabela
                output.textContent = `Filme "${filme.titulo}" removido com sucesso.`;
            })
            .catch(erro => {
                output.textContent = 'Erro: ' + erro.message;
            });
    });
    tdAcoes.append(btnRemover);

    tr.append(tdId, tdTitulo, tdAno, tdPoster, tdAcoes);
    return tr;
}

// Ouve o evento 'change' do range input
inputDesde.addEventListener('change', atualizarTabela);

// Carrega a tabela ao inicializar a página
atualizarTabela();
