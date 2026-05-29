import { API } from "./api.js";

export async function remover( event ) {
    const tdAcoes = event.target.parentElement;
    const id = tdAcoes.dataset.id;
    if ( ! confirm( `Deseja mesmo remover o jogo ${id}?` ) ) {
        return;
    }
    try {
        await removerJogoComId( id );
        tdAcoes.parentElement.remove(); // Remove a linha
    } catch ( erro ) {
        alert( erro.message );
    }
}

async function removerJogoComId( id ) {
    const response = await fetch( `${API}/jogos/${id}`, { method: 'DELETE' } );
    if ( ! response.ok ) {
        throw new Error( 'Erro ao remover o jogo.' );
    }
}