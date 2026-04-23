const tel = {
    ddd: '22',
    numero: '988887777'
};

const tel2 = { ...tel }; // Cópia rasa (shallow)
const tel3 = { ...tel, ddd: '21' }; // Sobrescreve
const tel4 = { ddd: '21', ...tel }; // ddd será sobrescrito

console.log( tel2 );
console.log( tel3 );
console.log( tel4 );

const contato = {
    nome: 'Ana',
    email: 'ana@site.com',
    telefone: { ddd: '22', numero: '988887777' }
};

const contato2 = { ...contato }; // Cópia rasa (shallow)

console.table( contato2 );

contato.telefone.ddd = '25'; // Alterou em contato, não em contato2
contato.nome = 'Bia';

console.table( contato2 );

const contato3 = structuredClone( contato ); // Cópia profunda (deep)

contato.telefone.ddd = '35'; // Alterou em contato, não em contato3

console.table( contato3 );