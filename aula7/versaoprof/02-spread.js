function somar( ...valores ) {
    let total = 0;
    for ( const a of valores ) {
        total += a;
    }
    return total;
}

console.log(
    somar(),
    somar( 10 ),
    somar( 10, 20 ),
    somar( 10, 20, 30 ),
);