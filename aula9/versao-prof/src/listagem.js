import { criarLinha } from "./linha.js";

export function consultarContas() {
    return fetch( 'http://localhost:3000/contas' )
        .then( response => {
            if ( ! response.ok ) {
                throw new Error( 'Erro ao consultar as contas.' );
            }
            return response.json();
        } );

    // const p1 = fetch('...');
    // const p2 = p1.then();
    // return p2;
}

export function desenharContas( contas ) {
    const fragmento = document.createDocumentFragment();
    let saldo = 0;
    for ( const conta of contas ) {
        const linha = criarLinha( conta );
        fragmento.append( linha );
        // Calcula o saldo
        saldo += conta.tipo === 'P' ? ( conta.valor * -1 ) : conta.valor;
    }
    document.querySelector( 'tbody' ).append( fragmento );
    document.getElementById( 'saldo' ).textContent = 'R$ ' + saldo.toFixed( 2 );
}