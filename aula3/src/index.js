let animes = [
    {
        nome: "Dragon Ball Z",
        genero: "Ação"
    },
    {
        nome: "Hunter Hunter",
        genero: "Ação/Aventura"
    },
    {
        nome: "Villand Saga",
        genero: "Ação"
    },
    {
        nome: "Death Note",
        genero: "Suspense/Drama"
    },
    {
        nome: "Bleach",
        genero: "Ação"
    }
];
let ordem = "crescente";    

document.addEventListener("DOMContentLoaded", () => {
    function criarAnimes(lista){
        const tbody = document.getElementsByTagName("tbody")[0];
        tbody.innerHTML = "";

        lista.forEach(anime => {
            const tr = document.createElement("tr");
            const tdNome = document.createElement("td");
            const tdGenero = document.createElement("td");

            tdNome.textContent = anime.nome;
            tdGenero.textContent = anime.genero;
            tr.appendChild(tdNome);
            tr.appendChild(tdGenero);
            tbody.appendChild(tr);
        });
    }

    function processarSelecao(){
        const tbody = document.querySelector("tbody");

        tbody.addEventListener("click", (e) => {
            const tr = e.target.closest("tr");
            if (tr) {
                tr.classList.toggle("selecionado");
            }
        });
    }

    function remover(){
        const botao = document.querySelector("#remover")

        botao.addEventListener("click", () => {
            const linhas = document.querySelectorAll(".selecionado");

            linhas.forEach(linha => {
                const nome = linha.firstChild.textContent;
                if(window.confirm("Deseja remover o anime " + nome + "?")){
                    animes = animes.filter(anime => anime.nome !== nome);
                    linha.remove();
                }
            });
        })
    }

    function adicionar(){
        const botao = document.querySelector("#adicionar")
        
        botao.addEventListener("click", () => {
            const conteudo = window.prompt("Digite o nome do anime:")
            const genero = window.prompt("Digite o genero do anime:")

            if(!conteudo || !genero){
                window.alert("Preencha todos os campos!");
                return;
            }

            const novoAnime = {
                nome: conteudo,
                genero: genero
            };
            animes.push(novoAnime);
            criarAnimes(animes);
        })
    }

    function pesquisar(){
        const botao = document.querySelector("#pesquisar")
        
        botao.addEventListener("click", () => {
            const input = document.getElementById("pesquisa");
            const textoPesquisa = input.value.toLowerCase();
            const filtrados = animes.filter(anime => anime.nome.toLowerCase().includes(textoPesquisa));
            
            if(filtrados.length > 0){
                criarAnimes(filtrados);

                setTimeout(() => {
                    input.value = "";
                    criarAnimes(animes);
                }, 2000);

            }else{
                window.alert("Anime nao encontrado");
                input.value = "";
            }
        })
    }

    function alterar(){
        const botao = document.querySelector("#alterar")
      
         botao.addEventListener("click", () => {
            const selecionado = document.querySelector(".selecionado");
            if (selecionado) {
                const nomeOriginal = selecionado.cells[0].textContent;
                const generoOriginal = selecionado.cells[1].textContent;
                
                const conteudoNovo = window.prompt("Digite o nome do anime:", nomeOriginal);
                const generoNovo = window.prompt("Digite o genero do anime:", generoOriginal);

                if (!conteudoNovo || !generoNovo) {
                    window.alert("Preencha todos os campos!");
                    return;
                }

                const animeArray = animes.find(anime => anime.nome === nomeOriginal);
                
                if (animeArray) {
                    animeArray.nome = conteudoNovo;
                    animeArray.genero = generoNovo;
                    
                    selecionado.cells[0].textContent = conteudoNovo;
                    selecionado.cells[1].textContent = generoNovo;
                    
                    selecionado.classList.remove("selecionado");
                    window.alert("Anime alterado com sucesso!");

                    console.log("animes", animes)
                }
            } else {
                window.alert("Selecione um anime para alterar!");
            }
        })
    }

    function ordernarAnimes(){
        const botao = document.querySelector("#ordenar")

        botao.addEventListener("click", () => {
            if(ordem === "crescente"){
                ordem = "decrescente";
                const ordenados = animes.sort(compararAnimes);
                criarAnimes(ordenados);
            }else{
                ordem = "crescente";
                const ordenados = animes.sort(compararAnimes.reverse());
                criarAnimes(ordenados);
            }

        })

        if(ordem === "crescente"){
            ordem = "decrescente";
        }else{
            ordem = "crescente";
        }

        function compararAnimes(a, b){
            const valorA = a.nome.toUpperCase();
            const valorB = b.nome.toUpperCase();

            if(valorA < valorB){
                return -1;
            }
            if(valorA > valorB){
                return 1;
            }
            return 0;
        }
    }

    criarAnimes(animes);
    processarSelecao();
    remover();
    adicionar();
    pesquisar();
    alterar();
    ordernarAnimes();
});

