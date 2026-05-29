
export async function novo() {
    try {
        const generos = await obterGeneros();
        preencherSelectComGeneros( generos );
    } catch ( erro ) {
        alert( erro.message );
        return; // Sai sem mostrar o form
    }

    document.querySelector( 'dialog' ).showModal();
}

async function obterGeneros() {
    const response = await fetch( 'http://localhost:3000/generos' );
    if ( ! response.ok ) {
        throw new Error( 'Erro ao obter os gêneros.' );
    }
    return await response.json();
}

function preencherSelectComGeneros( generos ) {
    const select = document.getElementById( 'genero' );
    select.replaceChildren(); // Remove todos os filhos, quando executado sem nada
    for ( const g of generos ) {
        const option = document.createElement( 'option' );
        option.textContent = g.nome;
        select.append( option );
    }
}


export function cancelar( event ) {
    event.preventDefault(); // Evita a validação
    document.querySelector( 'dialog' ).close();
}

export async function salvar( event ) {
    event.preventDefault(); // Evita a validação
    const form = document.querySelector( 'form' );
    const ok = form.reportValidity();
    if ( ! ok ) {
        return; // Sai se não estiver válido
    }

    const generos = Array.from( document.getElementById( 'genero' ).selectedOptions )
        .map( option => option.value )
        .join( ', ' );

    const jogo = {
        nome: document.getElementById( 'nome' ).value,
        nota: Number( document.getElementById( 'nota' ).value ),
        genero: generos
    };

    try {
        await cadastrarJogo( jogo );
    } catch ( erro ) {
        alert( erro.message );
    }
}


async function cadastrarJogo( jogo ) {
    const headers = new Headers();
    headers.append( 'Content-Type', 'application/json' );

    const options = {
        headers, // mesmo que headers: headers,
        method: 'POST',
        body: JSON.stringify( jogo )
    };
    const response = await fetch( 'http://localhost:3000/jogos', options );
    if ( ! response.ok ) {
        throw new Error( 'Erro ao cadastrar o jogo.' );
    }
    return await response.json(); // O json-server retorna o jogo criado, que tem o id gerado
}