const numeros = [ 1, 2, 3, 4, 5 ];
for ( const n of numeros ) {
    console.log( n );
}

// forEach

numeros.forEach( function( valor, indice ) {
    console.log( indice, 'tem', valor );
} );

numeros.forEach( valor => console.log( valor ) );

// findIndex

let indice = numeros.findIndex( valor => valor == 4 );
console.log( 'Achei em', indice );

const nomes = [ 'Ana', 'Bia', 'Carla', 'Dara', 'Eva' ];

indice = nomes.findIndex( valor => valor.includes( 'r' ) );
console.log( indice );

// filter

console.log(
    nomes.filter( valor => valor.includes( 'r' ) )
);

// find

console.log(
    nomes.find( valor => valor.includes( 'r' ) )
);

// map

console.log(
    nomes.map( valor => valor + ' Silva' )
);

console.log( nomes );

// join

console.log( nomes.join( ' - ' ) );