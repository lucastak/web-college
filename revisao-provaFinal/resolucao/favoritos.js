// Questão 5b - favoritos.js
// Exibe filmes do localStorage lançados após 2000, usando DOM sem innerHTML.
// Usa filter() para filtrar e cria elementos manualmente.

const filmesLocais = JSON.parse(localStorage.getItem('filmes-locais') || '[]');

// filter(): mantém apenas filmes com ano > 2000
const filmesApos2000 = filmesLocais.filter(filme => filme.ano > 2000);

const tbody = document.querySelector('tbody');

filmesApos2000.forEach(filme => {
    const tr = document.createElement('tr');

    const tdTitulo = document.createElement('td');
    tdTitulo.textContent = filme.titulo;    // ← sem innerHTML

    const tdAno = document.createElement('td');
    tdAno.textContent = filme.ano;

    tr.append(tdTitulo, tdAno);
    tbody.append(tr);
});

// Rodapé: exibe a quantidade total de filmes exibidos
const tfoot = document.querySelector('tfoot');
const tdTotal = tfoot.querySelector('tr td:last-child');
tdTotal.textContent = filmesApos2000.length;
