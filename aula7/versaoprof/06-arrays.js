const numeros = [ 1, 2, 3, 4, 5 ];
const [ n1, , n3 ] = numeros;
console.log( n1, n3 );

const [ m1, ...outros ] = numeros;
console.log( m1, outros );