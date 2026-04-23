function somar( n1, n2, ...valores ) {
    let total = n1 + n2;
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