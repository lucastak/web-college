import { consultarContas, desenharContas } from './listagem.js';
import { abrirTelaConta, cancelar, salvar } from './cadastro.js';
import { remover, selecionarLinha } from './remocao.js';
import { alterar } from './alteracao.js';

consultarContas()
    .then( desenharContas )
    .catch( erro => alert( erro.message ) );

document.querySelector( '#nova' ).addEventListener( 'click', abrirTelaConta );
document.querySelector( '#remover' ).addEventListener( 'click', remover );
document.querySelector( '#alterar' ).addEventListener( 'click', alterar );

document.querySelector( '#cancelar' ).addEventListener( 'click', cancelar );
document.querySelector( '#salvar' ).addEventListener( 'click', salvar );

document.querySelector( 'tbody' ).addEventListener( 'click', selecionarLinha );