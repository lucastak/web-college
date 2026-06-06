const template = document.querySelector( 'template' );

export function criarLinha( conta ) {
    // content é um fragmento
    const linha = template.content.cloneNode(true).querySelector('tr');
    linha.dataset.id = conta.id;
    const celulas = Array.from( linha.querySelectorAll( 'td' ) );
    celulas[ 0 ].textContent = conta.id;
    celulas[ 1 ].textContent = conta.descricao;
    celulas[ 2 ].textContent = conta.tipo == 'P' ? 'Pagar' : 'Receber';
    celulas[ 3 ].textContent = Number( conta.valor ).toFixed( 2 );
    return linha;
}