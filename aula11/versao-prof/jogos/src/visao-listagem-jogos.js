import { ControladoraListagemJogos } from "./controladora-listagem-jogos.js";

export class VisaoListagemJogos {

    constructor() {
        this.controladora = new ControladoraListagemJogos( this );
    }

    iniciar() {
        this.controladora.listar();

        document.getElementById( 'pesquisar' ).addEventListener( 'click', event => {
            event.preventDefault();
            this.controladora.pesquisar();
        });
    }

    textoPesquisa() {
        return document.getElementById( 'pesquisa' ).value;
    }

    desenharJogos( jogos ) {
        const tbody = document.querySelector( 'tbody' );
        tbody.replaceChildren(); // Remove todos os filhos
        tbody.append( ...jogos.map( this.criarLinha.bind( this ) ) );
    }

    criarLinha( { id, nome, nota, genero } ) {
        const tr = document.createElement( 'tr' );
        tr.append(
            this.criarCelula( id ),
            this.criarCelula( nome ),
            this.criarCelula( nota ),
            this.criarCelula( genero ),
            this.criarCelulaAcoes( id ),
        );
        return tr;
    }

    criarCelula( valor ) {
        const td = document.createElement( 'td' );
        td.textContent = valor;
        return td;
    }

    criarCelulaAcoes( id ) {

        const botaoRemover = document.createElement( 'button' );
        botaoRemover.innerText = '🗑️';
        botaoRemover.setAttribute( 'aria-label', 'Remover' );
        botaoRemover.addEventListener( 'click', event => {
            // button -> td e pega o dataset id dele
            const id = event.target.parentElement.dataset.id;
            this.controladora.remover( id );
        } );

        const td = document.createElement( 'td' ); // <td data-id="1" ></td>
        td.dataset.id = id;
        td.append( botaoRemover );
        return td;
    }


    mostrarErro( erro ) {
        alert( erro.message );
    }

    removerLinhaComId( id ) {
        const tr = document.querySelector( `tbody tr td[data-id=${id}]` )?.parentElement;
        tr?.remove();
    }
}