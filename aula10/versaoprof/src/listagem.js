import { API } from "./api.js";

export async function listarJogos() {
    try {
        const jogos = await consultarJogos();
        desenharJogos( jogos );
    } catch ( erro ) {
        alert( erro.message );
    }
}

async function consultarJogos() {
    const response = await fetch( `${API}/jogos` );
    if ( ! response.ok ) {
        throw new Error( 'Erro consultando os jogos' );
    }
    return await response.json();
}

function desenharJogos( jogos ) {
    const tbody = document.querySelector( 'tbody' );
    tbody.replaceChildren(); // Remove as linhas
    tbody.append( ...jogos.map( criarLinhaJogo ) );
}

const template = document.querySelector( 'template' );

function criarLinhaJogo( { id, nome, nota, genero } ) {
    const conteudo = template.content.cloneNode( true );
    const [ tdId, tdNome, tdNota, tdGenero, tdAcoes ] = Array.from( conteudo.querySelectorAll( 'td' ) );
    tdId.textContent = id;
    tdNome.textContent = nome;
    tdNota.textContent = '⭐'.repeat( nota );
    tdGenero.textContent = genero;
    tdAcoes.dataset.id = id; // Guarda o id do jogo pra usar
    return conteudo;
}