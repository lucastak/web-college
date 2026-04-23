function concatenar( ...arrays ) {
    let novo = [];
    for ( const a of arrays ) {
        novo.push( ...a );
    }
    return novo;
}

console.log( concatenar( [ 1, 2 ], [ 3, 4, 5 ] ) );