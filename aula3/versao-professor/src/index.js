const animes = [
    { nome: "Dragon Ball Z", genero: "Ação" },
    { nome: "Hunter Hunter", genero: "Ação/Aventura" },
    { nome: "Villand Saga",  genero: "Ação" },
    { nome: "Death Note",    genero: "Suspense/Drama" },
    { nome: "Bleach",        genero: "Ação" },
];

let ordem; // Por default, não ordenado

window.onload = iniciar;

function iniciar() {
    desenharAnimes( animes );

    const botaoRemover = document.querySelector( '#remover' );
    botaoRemover.onclick = remover;

    const botaoAdicionar = document.querySelector( '#adicionar' );
    botaoAdicionar.onclick = adicionar;

    const botaoPesquisar = document.querySelector( '#pesquisar' );
    botaoPesquisar.onclick = pesquisar;

    const botaoAlterar = document.querySelector( '#alterar' );
    botaoAlterar.onclick = alterar;

    const colunaNome = document.querySelector( 'thead th' );
    colunaNome.onclick = ordenar;
}

function desenharAnimes( animes ) {
    const tbody = document.getElementsByTagName( 'tbody' )[ 0 ];

    tbody.innerHTML = '';
    for ( const anime of animes ) {
        const html = `<tr>
            <td>${anime.nome}</td>
            <td>${anime.genero}</td>
        </tr>`;
        tbody.innerHTML += html;
    }

    const linhas = document.querySelectorAll( 'tbody tr' );
    for ( const linha of linhas ) {
        linha.onclick = processarSelecao;
    }
}

/**
 * Processa a seleção de uma linha.
 * @param {Event} event
 */
function processarSelecao( event ) {
    // console.log( event.target );

    /** @type {HTMLTableRowElement} */
    const tr = event.target.parentElement; // tr é o pai do td
    console.log( tr );
    // if ( tr.classList.contains( 'selecionada' ) ) {
    //     tr.classList.remove( 'selecionada' );
    // } else {
    //     tr.classList.add( 'selecionada' );
    // }
    tr.classList.toggle( 'selecionada' );
}

function remover() {
    const selecionadas = document.querySelectorAll( 'tr.selecionada' );
    for ( const tr of selecionadas ) {
        const indice = tr.sectionRowIndex; // Índice da linha na seção (tbody)

        // Pega o nome para exibir uma pergunta ao usuário
        // const nome = tr.firstChild.textContent;
        const nome = tr.querySelector( 'td' ).textContent;

        const ok = window.confirm( `Deseja remover "${nome}"?` );
        if ( ok ) {
            animes.splice( indice, 1 ); // Remove do array
            console.log( animes );
            tr.remove(); // Faz o elemento se remover
        }
    }
}

function textoParaAnime( conteudo ) {
    const partes = conteudo.split( '/' );
    const nome = partes[ 0 ];
    const genero = partes.length >= 2 ? partes[ 1 ] : '';
    const anime = { nome: nome, genero: genero };
    return anime;
}

function adicionar() {
    const conteudo = window.prompt( 'Anime (nome/gênero):' );
    if ( ! conteudo ) {
        return;
    }
    const anime = textoParaAnime( conteudo );

    animes.push( anime );

    desenharAnimes( animes );
}

function pesquisar( event ) {
    event.preventDefault(); // Previne o comportamento padrão do formulário

    const texto = document.getElementById( 'pesquisa' ).value.toLowerCase();
    const animesFiltrados = [];
    for ( const a of animes ) {
        if ( a.nome.toLowerCase().includes( texto ) ||
            a.genero.toLowerCase().includes( texto ) ) {
            animesFiltrados.push( a );
        }
    }
    desenharAnimes( animesFiltrados );
}

function alterar() {
    const tr = document.querySelector( 'tr.selecionada' );
    if ( ! tr ) {
        window.alert( 'Por favor, selecione uma linha.' );
        return;
    }
    const indice = tr.sectionRowIndex;
    const anime = animes[ indice ];
    const conteudo = window.prompt( 'Alteração (nome/gênero):',
        `${anime.nome}/${anime.genero}`
    );
    if ( ! conteudo ) {
        return;
    }
    const animeAlterado = textoParaAnime( conteudo );
    animes[ indice ] = animeAlterado; // Sobrescreve o elemento na posição

    // Modifica os dados da linha da tabela
    const dados = tr.querySelectorAll( 'td' );
    dados[ 0 ].textContent = animeAlterado.nome;
    dados[ 1 ].textContent = animeAlterado.genero;
}


function ordenar() {
    if ( ordem === undefined || ordem == 'D' ) {
        animes.sort( compararAnimes );
        ordem = 'C';
    } else {
        animes.sort( compararAnimesDecrescentemente );
        ordem = 'D';
    }
    desenharAnimes( animes );
}


function compararAnimes( a1, a2 ) {
    // -1 -> a1 < a2
    //  0 -> a1 == a2
    //  1 -> a1 > a2
    if ( a1.nome == a2.nome ) {
        return 0;
    } else if ( a1.nome > a2.nome ) {
        return 1;
    }
    return -1;
}

function compararAnimesDecrescentemente( a1, a2 ) {
    // -1 -> a1 < a2
    //  0 -> a1 == a2
    //  1 -> a1 > a2
    if ( a1.nome == a2.nome ) {
        return 0;
    } else if ( a2.nome > a1.nome ) {
        return 1;
    }
    return -1;
}


// EXERCÍCIOS
//
// 1) Crie um botão Alterar que permita alterar a primeira linha selecionada,
// modificando o Anime no array e na tabela. Use prompt() para solicitar
// os dados.
//
// 2) Implemente a ordenação crescente pelo nome, ao clicar na coluna "Nome"
//    dos animes. DICA: A função sort() recebe uma função de comparação
//    que retorna um inteiro que indica o resultado da comparação de dois
//    valores:
//      -1 (ou abaixo) se o primeiro é menor.
//       0 se iguais;
//       1 (ou acima) se o primeiro é maior;
//
// 3) Faça com que o clique na coluna "Nome" alterne entre ordenação
//    crescente e ordenação decrescente.
