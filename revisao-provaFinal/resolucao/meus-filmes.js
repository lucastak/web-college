// Questão 5c - meus-filmes.js
// Renderiza lista com map() e interpolação.
// Duplo clique remove o item da lista e do localStorage.

let filmesLocais = JSON.parse(localStorage.getItem('filmes-locais') || '[]');

const ul = document.getElementById('lista-filmes');

// map(): transforma cada filme em um <li> do DOM
const itens = filmesLocais.map((filme, index) => {
    const li = document.createElement('li');

    // Interpolação com template literal para gerar a frase
    li.textContent = `${filme.titulo} foi lançado em ${filme.ano}.`;

    // dataset para guardar o índice original do filme no array
    li.dataset.index = index;

    // Duplo clique: remove da lista e do localStorage
    li.addEventListener('dblclick', () => {
        // Obtém o índice guardado no dataset
        const idx = Number(li.dataset.index);

        // Remove do array
        filmesLocais = filmesLocais.filter((_, i) => i !== idx);

        // Persiste a nova lista no localStorage
        localStorage.setItem('filmes-locais', JSON.stringify(filmesLocais));

        // Remove o elemento da lista visível
        li.remove();
    });

    return li;
});

// Adiciona todos os <li> de uma vez
ul.append(...itens);
