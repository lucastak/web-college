import { criarLinha } from "./linha.js";

export function abrirTelaConta( event ) {
    document.getElementById( 'id' ).value = "0";
    document.querySelector( 'dialog' ).showModal();
}

export function salvar( event ) {
    event.preventDefault();
    const form = document.querySelector( 'dialog form' );
    const ok = form.reportValidity();
    if ( ! ok ) {
        return;
    }
    const conta = {
        id: document.getElementById( 'id' ).value,
        descricao: document.getElementById( 'descricao' ).value,
        tipo: document.getElementById( 'pagar' ).checked ? 'P' : 'R',
        valor: Number( document.getElementById( 'valor' ).value )
    };

    salvarConta( conta )
        .then( novaConta => {
            const linha = criarLinha( novaConta );
            document.querySelector( 'tbody' ).append( linha );
            document.querySelector( 'dialog' ).close();
        } )
        .catch( erro => alert( erro.message ) );
}

export function cancelar( event ) {
    event.preventDefault();
    document.querySelector( 'dialog' ).close();
}

function salvarConta( conta ) {

    const ehNovo = conta.id == '0';

    const opcoes = {
        method: ehNovo ? 'POST' : 'PUT',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify( conta )
    };
    const url = ehNovo
        ? 'http://localhost:3000/contas'
        : `http://localhost:3000/contas/${conta.id}`;

    return fetch( url, opcoes )
        .then( response => {
            if ( ! response.ok ) {
                throw new Error( 'Erro ao salvar a conta. Status: ' + response.status );
            }
            return response.json(); // Obtém o objeto gerado pelo Json-Server
        } )
}