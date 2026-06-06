const API = 'http://localhost:3000';

export class ServicoJogos { // Model

    async obterJogos( pesquisa ) {
        const response = await fetch( `${API}/jogos?nome:contains=${pesquisa || ''}` ); // GET
        if ( ! response.ok ) {
            throw new Error( 'Erro ao obter os jogos.' );
        }
        return await response.json();
    }

    async removerJogoPeloId( id ) {
        const response = await fetch( `${API}/jogos/${id}`, { method: 'DELETE' } );

        if ( response.status == 404 ) {
            throw new Error( 'Jogo não encontrado para remoção.' );
        }

        if ( ! response.ok ) {
            throw new Error( 'Erro ao remover o jogo.' );
        }
    }
}