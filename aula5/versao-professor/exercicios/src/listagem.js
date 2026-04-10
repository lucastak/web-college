import { obterVeiculos } from "./veiculos.js";
import { criarCard } from "./card.js";


export function listarVeiculos() {
    const veiculos = obterVeiculos();
    desenharVeiculos( veiculos );
}

// function obterVeiculos() {
//     let veiculos = localStorage.getItem( 'veiculos' );
//     if ( ! veiculos ) {
//         veiculos = [
//             { cliente: 'Ana da Silva', telefone: '(22) 99998888', descricao: 'Monza ...', placa: 'XYZ 1234' },
//             { cliente: 'João de Souza', telefone: '(22) 988887777', descricao: 'Chevette ...', placa: 'ABC 9876' },
//         ];
//     } else {
//         veiculos = JSON.parse( veiculos ); // Transforma pra array
//     }
//     return veiculos;
// }


// function desenharVeiculos( veiculos ) {
//     const divCards = document.querySelector( 'div.card-container' );
//     divCards.innerHTML = ''; // Limpa o conteúdo

//     let html = '';
//     for ( const v of veiculos ) {
//         html += criarCard( v );
//     }
//     divCards.innerHTML = html;
// }

// function criarCard( v ) {
//     return `
//     <div class="card">
//       <h3 class="card-title">${v.cliente}</h3>
//       <p class="card-subtitle">${v.telefone}</p>
//       <p class="card-body">
//         ${v.descricao}
//       </p>
//       <span class="card-badge">${v.placa}</span>
//     </div>
//     `;
// }


function desenharVeiculos( veiculos ) {
    const divCards = document.querySelector( 'div.card-container' );
    divCards.textContent = ''; // Limpa o conteúdo

    const fragmento = document.createDocumentFragment();
    for ( const v of veiculos ) {
        fragmento.append( criarCard( v ) );
    }
    divCards.append( fragmento );
}