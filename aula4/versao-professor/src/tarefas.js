document.addEventListener( "DOMContentLoaded", iniciar );

// const tarefas = [
//     { id: 1, descricao: 'Pagar Internet',   feita: false },
//     { id: 2, descricao: 'Estudar PCW',      feita: true  },
//     { id: 3, descricao: 'Cozinhar marmita', feita: false },
// ];

let conteudo = localStorage.getItem( 'tarefas' );
if ( ! conteudo ) {
    conteudo = [
        { id: 1, descricao: 'Pagar Internet',   feita: false },
        { id: 2, descricao: 'Estudar PCW',      feita: true  },
        { id: 3, descricao: 'Cozinhar marmita', feita: false },
    ];
} else {
    conteudo = JSON.parse( conteudo ); // string p/ array
}

const tarefas = conteudo;



function iniciar() {
    desenharTarefas( tarefas );

    // Menu

    document.getElementById( 'adicionar' ).addEventListener( 'click',
        mostrarFormulario );

    document.getElementById( 'remover' ).addEventListener( 'click', remover );

    // Form

    document.getElementById( 'salvar' ).addEventListener( 'click',
        adicionarTarefa );
}

function desenharTarefas( tarefas ) {
    const frag = document.createDocumentFragment();
    for ( const t of tarefas ) {
        const tr = criarLinhaParaTarefa( t );
        frag.appendChild( tr );
    }
    const tbody = document.querySelector( 'tbody' );
    tbody.appendChild( frag );
}

function criarLinhaParaTarefa( t ) {
    const tdId = document.createElement( 'td' );
    tdId.innerText = t.id;

    const tdDescricao = document.createElement( 'td' );
    tdDescricao.innerText = t.descricao;

    const tdFeita = document.createElement( 'td' );
    tdFeita.innerText = t.feita ? '✔️' : '';
    tdFeita.addEventListener( 'dblclick', trocarFeita );

    const tr = document.createElement( 'tr' );
    tr.append( tdId, tdDescricao, tdFeita );
    tr.addEventListener( 'click', selecionarLinha );

    return tr;
}


function trocarFeita( event ) {
    const td = event.target;
    const tr = td.parentElement;
    const tarefa = tarefas[ tr.sectionRowIndex ]; // Pega a tarefa no array
    tarefa.feita = ! tarefa.feita; // Atualiza no objeto
    td.innerText = tarefa.feita ? '✔️' : ''; // Atualiza na tabela

    // Salva no storage
    localStorage.setItem( 'tarefas', JSON.stringify( tarefas ) );
}

function selecionarLinha( event ) {
    const tr = event.target.parentElement; // O pai do td, que é a tr
    tr.classList.toggle( 'selecionada' );
}

function mostrarFormulario() {
    const dialog = document.querySelector( 'dialog' );
    dialog.showModal();
}

function adicionarTarefa( event ) {
    event.preventDefault(); // Previne o fechamento do dialog

    // Pega os dados do formulário
    const descricao = document.getElementById( 'descricao' ).value;
    const feita = document.getElementById( 'feita' ).checked;

    // Valida os dados
    if ( descricao.length < 1 ) {
        alert( 'Por favor, informe a descrição.' );
        return;
    }

    // Cria a tarefa e adiciona no array
    const t = { id: tarefas.length + 1, descricao: descricao, feita: feita };
    tarefas.push( t );

    // Salva no storage
    localStorage.setItem( 'tarefas', JSON.stringify( tarefas ) );

    // Cria a linha e adiciona na tabela
    const tr = criarLinhaParaTarefa( t );
    document.querySelector( 'tbody' ).appendChild( tr );

    // Fecha o dialog (modal)
    document.querySelector( 'dialog' ).close();
}


function remover() {
    const tr = document.querySelector( '.selecionada' );
    if ( ! tr ) {
        alert( 'Por favor, selecione uma tarefa.' );
        return;
    }

    if ( ! confirm( 'Deseja mesmo remover a tarefa?' ) ) {
        return;
    }

    // Remove do array
    tarefas.splice( tr.sectionRowIndex, 1 );

    // Remove a linha da tabela
    tr.remove();

    // Salva no storage
    localStorage.setItem( 'tarefas', JSON.stringify( tarefas ) );
}
