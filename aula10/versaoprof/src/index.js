import { novo, salvar, cancelar } from './cadastro.js';
import { listarJogos } from './listagem.js';
import { remover } from './remocao.js';

document.getElementById( 'novo' ).addEventListener( 'click', novo );
document.getElementById( 'salvar' ).addEventListener( 'click', salvar );
document.getElementById( 'cancelar' ).addEventListener( 'click', cancelar );

await listarJogos();

document.querySelectorAll( 'tr button' )
    .forEach( button => button.addEventListener( 'click', remover ) );