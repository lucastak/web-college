export function alterar( event ) {
    const linha = document.querySelector( 'tr.selecionada' );
    if ( ! linha ) {
        alert( 'Por favor, selecione uma linha.' );
        return;
    }

    const id = linha.dataset.id;
    obterContaComId( id )
        .then( conta => { // .then( exibirTelaConta )
            exibirTelaConta( conta );
        } )
        .catch( erro => alert( erro.message ) );
}

function obterContaComId( id ) {
    return fetch( `http://localhost:3000/contas/${id}` )
        .then( response => {
            if ( ! response.ok ) {
                throw new Error( `Erro ao obter a conta com id ${id}.` );
            }
            return response.json();
        })
}


function exibirTelaConta( conta ) {
    document.getElementById( 'id' ).value = conta.id;
    document.getElementById( 'descricao' ).value = conta.descricao;
    document.getElementById( 'pagar' ).checked = conta.tipo === 'P';
    document.getElementById( 'valor' ).value = conta.valor;
    document.querySelector( 'dialog' ).showModal();
}

function alterarConta() {

}