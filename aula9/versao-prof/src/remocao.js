export function remover( event ) {

    const linha = document.querySelector( 'tr.selecionada' );
    if ( ! linha ) {
        alert( 'Por favor, selecione uma linha.' );
        return;
    }

    const id = linha.dataset.id;

    const ok = confirm( `Deseja mesmo remover a conta ${id}?` );
    if ( ! ok ) {
        return;
    }

    removerConta( id )
        .then( () => linha.remove() )
        // .then( () => console.log( 'Removido') )
        .catch( erro => alert( erro.message ) );
}

export function selecionarLinha( event ) {
    const linha = event.target.parentElement;
    linha.classList.toggle( 'selecionada' );
}

function removerConta( id ) {
    return fetch( `http://localhost:3000/contas/${id}`, { method: 'DELETE' } )
        .then( response => {
            if ( ! response.ok ) {
                throw new Error( `Erro ao remover a conta ${id}.` );
            }
        });
}