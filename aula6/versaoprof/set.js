const set = new Set( [ 1, 2, 2, 3, 4, 5, 5 ] );
console.log( set );

set.add( 6 );
set.add( 6 ); // Não irá adicionar outro
console.log( set );