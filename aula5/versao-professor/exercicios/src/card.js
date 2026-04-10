export function criarCard( v ) {
    return tag( 'div', 'card', [
        tag( 'h3', 'card-title', v.cliente ),
        tag( 'p', 'card-subtitle', v.telefone ),
        tag( 'p', 'card-body', v.descricao ),
        tag( 'p', 'card-badge', v.placa )
    ] );
}


function tag( tag, classe, filhos = [] ) {
    const elemento = document.createElement( tag );
    if ( classe ) {
        elemento.classList.add( classe );
    }
    for ( const f of filhos ) {
        elemento.append( f );
    }
    return elemento;
}