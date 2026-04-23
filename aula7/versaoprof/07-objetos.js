const tel = {
    ddd: '22',
    numero: '988887777'
};

const { ddd } = tel;
console.log( ddd );

function imprimirTel( tel ) {
    console.log( tel.ddd, tel.numero );
}

function imprimirTel2( { ddd, numero, bla } ) {
    console.log( ddd, numero, bla );
}


imprimirTel( tel );
imprimirTel2( tel );


const livro = {
    titulo: '1982',
    paginas: 328,
    autor: { nome: 'George', sobrenome: 'Orwell' }
};

const { paginas, ...outrosDados } = livro;
console.log( paginas );
console.log( outrosDados.titulo );
console.log( outrosDados.autor );