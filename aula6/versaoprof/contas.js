const contas = [
    { descricao: 'Aluguel',  valor: 1500.00 },
    { descricao: 'Água',     valor:   70.00 },
    { descricao: 'Luz',      valor:  120.00 },
    { descricao: 'Internet', valor:  100.00 },
];

const reais = valor => 'R$ ' + valor.toFixed( 2 ).replace( '.', ',' );

function desenharContas( contas ) {
    document.querySelector( 'ul' ).innerHTML =
        contas.map( c => `<li>${c.descricao} - ${reais(c.valor)}</li>` )
        .join( '\n' );

    let soma = 0, media = 0;
    contas.forEach( c => soma += c.valor );
    media = soma / contas.length;

    document.getElementById( 'totalizacao' ).textContent =
        `Soma: ${reais(soma)} - Média: ${reais(media)}`;
}

desenharContas( contas );


const pesquisar = event => {
    event.preventDefault();
    const texto = document.getElementById( 'pesquisa' ).value.toLowerCase();
    const filtradas = contas.filter( c => c.descricao.toLowerCase().includes( texto ) || c.valor == texto );
    desenharContas( filtradas );
};

const abrirCadastro = event => {
    document.querySelector( 'dialog' ).showModal();
};

const salvar = event => {
    event.preventDefault();
    const form = document.querySelector( 'dialog form' );
    if ( ! form.reportValidity() ) {
        return;
    }
    const conta = {
        descricao: document.getElementById( 'descricao' ).value,
        valor: parseFloat( document.getElementById( 'valor' ).value ),
    };

    if ( contas.find( c => c.descricao == conta.descricao ) ) {
        alert( 'Conta já existe.' );
        return;
    }

    contas.push( conta );
    desenharContas( contas );

    document.querySelector( 'dialog' ).close();
};

document.getElementById( 'pesquisar' ).addEventListener( 'click', pesquisar );
document.getElementById( 'novo' ).addEventListener( 'click', abrirCadastro );
document.getElementById( 'salvar' ).addEventListener( 'click', salvar );