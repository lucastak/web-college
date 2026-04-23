const livro = {
    titulo: '1982',
    autor: { nome: 'George', sobrenome: 'Orwell' }
};

// const livro2 = { ...livro };
const livro2 = structuredClone( livro );

livro.autor.nome = 'Max';


console.log( livro2.autor.nome );
