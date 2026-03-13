document.addEventListener('DOMContentLoaded', () => {
    const botao = document.getElementById('adicionar');
    botao.onclick = adicionar;

    const botaoLimpar = document.getElementById('limpar');
    botaoLimpar.onclick = limpar;

    function adicionar(event){
        event.preventDefault();
        const tarefaInput = document.querySelector('#tarefa');
        const tarefa = tarefaInput.value;

        const li = document.createElement('li');
        li.textContent = tarefa;
        document.querySelector('#lista-tarefas').appendChild(li);
        tarefaInput.value = '';
        tarefaInput.focus();
    }

    function limpar(event){
        event.preventDefault();
        document.querySelector('#lista-tarefas').innerHTML = '';
    }
});