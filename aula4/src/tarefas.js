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
//adicionar
function mostrarFormularioAdicionar(){
    document.getElementById("dialog").showModal();
}

function adicionarTarefa(event){
    event.preventDefault();

    const descricao = document.getElementById("descricao").value;
    const feita = document.getElementById("feita").checked;

    if(descricao.length < 1){
        alert("Descrição é obrigatória");
        return;
    }

    const novaTarefa = {
        id: tarefas.length > 0 ? Math.max(...tarefas.map(t => t.id)) + 1 : 1,
        descricao: descricao,
        feita: feita
    };

    tarefas.push(novaTarefa);
    desenharTarefas(tarefas);
    fecharFormularioAdicionar();
}

function fecharFormularioAdicionar(){
    document.getElementById("dialog").close();
    document.getElementById("formAdicionar").reset();
}

// --------------------------------------------- //
//editar
function mostrarFormularioEditar(){
    document.getElementById("dialogEditar").showModal();
}

function handleClickEditar(event){
    event.preventDefault();
    const trSelecionado = document.querySelector(".selecionado");

    if(!trSelecionado){
        alert("Selecione uma tarefa");
        return;
    }

    const id = trSelecionado.dataset.id;
    const tarefa = tarefas.find(t => t.id == id);
    
    document.getElementById("descricaoEditar").value = tarefa.descricao;
    document.getElementById("feitaEditar").checked = tarefa.feita;
    
    mostrarFormularioEditar();
}

function salvarEdicao(event){
    event.preventDefault();
    const trSelecionado = document.querySelector(".selecionado");
    const id = trSelecionado.dataset.id;
    const tarefa = tarefas.find(t => t.id == id);

    const descricao = document.getElementById("descricaoEditar").value;
    const feita = document.getElementById("feitaEditar").checked;

    tarefa.descricao = descricao;
    tarefa.feita = feita;

    desenharTarefas(tarefas);
    fecharFormularioEditar();
}

function fecharFormularioEditar(){
    document.getElementById("dialogEditar").close();
    document.getElementById("formEditar").reset();
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

    document.getElementById("btnAdicionar").addEventListener("click", mostrarFormularioAdicionar);
    document.getElementById("btnCancelar").addEventListener("click", fecharFormularioAdicionar);
    document.getElementById("btnExcluir").addEventListener("click", handleClickExcluir);
    document.getElementById("formAdicionar").addEventListener("submit", adicionarTarefa);
    
    document.getElementById("btnEditar").addEventListener("click", handleClickEditar);
    document.getElementById("btnCancelarEditar").addEventListener("click", fecharFormularioEditar);
    document.getElementById("formEditar").addEventListener("submit", salvarEdicao);
    

    document.querySelector("tbody").addEventListener("click", (event) => {
        const tr = event.target.closest("tr");
        if (tr) {
            selecionarTarefa(tr);
        }
    });
});
