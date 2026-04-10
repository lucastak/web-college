import { obterVeiculos, salvarVeiculos } from "./veiculos.js";
import { criarCard } from "./card.js";

export function prepararParaAdicionar() {
    document.getElementById( 'adicionar' ).addEventListener( 'click', adicionar );
    document.getElementById( 'salvar' ).addEventListener( 'click', salvar );
}

function adicionar() {
    document.querySelector( 'dialog' ).showModal();
}

function salvar( event ) {
    event.preventDefault();

    const cliente = document.getElementById( 'cliente' ).value;
    const telefone = document.getElementById( 'telefone' ).value;
    const descricao = document.getElementById( 'descricao' ).value;
    const placa = document.getElementById( 'placa' ).value;

    const veiculo = { cliente: cliente, telefone: telefone, descricao: descricao, placa: placa };
    // const v2 = { cliente, telefone, descricao, placa };

    const veiculos = obterVeiculos();
    veiculos.push( veiculo );

    salvarVeiculos( veiculos );

    const card = criarCard( veiculo );

    const divCards = document.querySelector( 'div.card-container' );
    divCards.append( card );

    document.querySelector( 'dialog' ).close();
}