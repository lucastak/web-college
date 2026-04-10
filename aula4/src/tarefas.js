let tarefas = [
    {
        id: 1,
        descricao: "Estudar",
        feita: false
    },
    {
        id: 2,
        descricao: "Trabalhar",
        feita: true
    },
    {
        id: 3,
        descricao: "Ir à academia",
        feita: true
    }
];
// --------------------------------------------- //
//auxiliares
function desenharTarefas(tarefas){
    const tbody = document.querySelector("tbody");
    tbody.innerHTML = "";

    tarefas.forEach(tarefa => {
        const tr = document.createElement("tr");
        tr.dataset.id = tarefa.id;

        const tdId = document.createElement("td");
        const tdDescricao = document.createElement("td");
        const tdFeita = document.createElement("td");

        tdId.textContent = tarefa.id;
        tdDescricao.textContent = tarefa.descricao;
        tdFeita.textContent = tarefa.feita ? "Sim" : "Não";

        tr.appendChild(tdId);
        tr.appendChild(tdDescricao);
        tr.appendChild(tdFeita);

        tbody.appendChild(tr);
    });
}

function selecionarTarefa(tr){
    if(tr.classList.contains("selecionado")){
        tr.classList.remove("selecionado");
    }else{
        tr.classList.add("selecionado");
    }
}

// --------------------------------------------- //
// --------------------------------------------- //
// Formulário (Adicionar e Editar)
let tarefaAtualId = null;

function mostrarFormulario(id = null){
    tarefaAtualId = id;
    const form = document.getElementById("formTarefa");
    
    if (id) {
        const tarefa = tarefas.find(t => t.id == id);
        document.getElementById("descricao").value = tarefa.descricao;
        document.getElementById("feita").checked = tarefa.feita;
    } else {
        form.reset();
    }

    document.getElementById("dialogTarefa").showModal();
}

function fecharFormulario(){
    document.getElementById("dialogTarefa").close();
    document.getElementById("formTarefa").reset();
    tarefaAtualId = null;
}

function salvarTarefa(event){
    event.preventDefault();

    const descricao = document.getElementById("descricao").value;
    const feita = document.getElementById("feita").checked;

    if(descricao.length < 1){
        alert("Descrição é obrigatória");
        return;
    }

    if (tarefaAtualId) { // Editando
        const tarefa = tarefas.find(t => t.id == tarefaAtualId);
        tarefa.descricao = descricao;
        tarefa.feita = feita;
    } else { // Adicionando
        const novaTarefa = {
            id: tarefas.length > 0 ? Math.max(...tarefas.map(t => t.id)) + 1 : 1,
            descricao: descricao,
            feita: feita
        };
        tarefas.push(novaTarefa);
    }

    desenharTarefas(tarefas);
    fecharFormulario();
}

function handleClickEditar(event){
    event.preventDefault();
    const trSelecionado = document.querySelector(".selecionado");

    if(!trSelecionado){
        alert("Selecione uma tarefa");
        return;
    }

    const id = trSelecionado.dataset.id;
    mostrarFormulario(id);
}

// --------------------------------------------- //
//excluir
function handleClickExcluir(event){
    event.preventDefault();
    const trSelecionado = document.querySelector(".selecionado");
    if(!trSelecionado){
        alert("Selecione uma tarefa");
        return;
    }
    const id = trSelecionado.dataset.id;
    tarefas = tarefas.filter(tarefa => tarefa.id != id);
    desenharTarefas(tarefas);
}


document.addEventListener("DOMContentLoaded", () => {
    desenharTarefas(tarefas);

    document.getElementById("btnAdicionar").addEventListener("click", () => mostrarFormulario());
    document.getElementById("btnCancelar").addEventListener("click", fecharFormulario);
    document.getElementById("btnExcluir").addEventListener("click", handleClickExcluir);
    document.getElementById("formTarefa").addEventListener("submit", salvarTarefa);
    
    document.getElementById("btnEditar").addEventListener("click", handleClickEditar);
    

    document.querySelector("tbody").addEventListener("click", (event) => {
        const tr = event.target.closest("tr");
        if (tr) {
            selecionarTarefa(tr);
        }
    });

    document.querySelector("tbody").addEventListener("dblclick", (event) => {
        const td = event.target.closest("td");
        if (td && td.cellIndex === 2) { // 2 é o index da coluna "Feita"
            const tr = td.parentElement;
            const id = tr.dataset.id;
            const tarefa = tarefas.find(t => t.id == id);
            if (tarefa) {
                tarefa.feita = !tarefa.feita;
                desenharTarefas(tarefas);
            }
        }
    });
});
