# PROGRAMAÇÃO DE CLIENTES WEB – PROVA 2 – 2025-2

---

Para as questões a seguir, considere o site `https://p2.io`, com uma API RESTful em `/api` que contenha recursos que trabalham com o formato JSON.

### 1) [3,7] Considere:

* O recurso `/clubes`, na API do site acima, com clubes de futebol, cujo método `GET` retorne um array de objetos. Cada objeto possui `id` (number), `nome` (string), `fundacao` (number, que é o ano de fundação) e `escudo` (string). O escudo é uma URL para a imagem do escudo do clube, tal como `/img/escudos/barcelona.webp`;
* A existência de um arquivo `clubes.html`, cujo conteúdo da tag `body` é exibido abaixo:

```html
<script src="lista-clubes.js" type="module"></script>
<h1>Clubes de Futebol</h1>
<label for="desde">Fundados desde:</label>
<input id="desde" type="range" value="1900" step="10" min="1800" max="2025" />
<output></output>
<table>
    <thead>
        <tr><th>Id</th><th>Nome</th><th>Fundação</th><th>Escudo</th><th>Ações</th></tr>
    </thead>
    <tbody></tbody>
</table>
```

Crie o arquivo `lista-clubes.js`, para consultar os clubes **[0,6]** e preencher o corpo da tabela **[0,4]** acima com os clubes fundados desde o ano indicado no input `desde`. 
**[0,4]** Para o Escudo de cada clube, uma imagem deve ser exibida na tabela, com largura e altura de 50 pixels e texto alternativo com o nome do clube. Nas linhas da coluna “Ações”, deve-se criar, para cada clube, um botão com o texto “Remover” **[0,2]** que permita remover o clube do recurso `/clubes` da API **[0,6]**, pelo seu `id`, e da tabela **[0,3]**. 
**[0,4]** Se um usuário mudar (`change`) o valor do input `desde` para um número inteiro válido e acima de 1800, a tabela deve ser atualizada de acordo. Do contrário, não deve ser atualizada. 
**[0,2]** Erros devem ser exibidos no elemento `<output>`.

**A solução:**
* Deve utilizar `fetch` e promessas sem usar `async` e `await`, sempre verificando o `status` da resposta.
* Deve utilizar apropriadamente os métodos de Array `filter()` e `map()`, para, respectivamente, filtrar os clubes **[0,3]** e transformar os clubes em linhas da tabela **[0,3]**.
* Não deve criar elementos do DOM usando tags como string. Crie apenas objetos.
* Não deve invocar métodos que recarreguem a página.

> **Dicas:** 
> 1. O método `replaceChildren()`, invocado sem parâmetros, permite remover todos os filhos de um elemento do DOM. 
> 2. Estruture o problema antes de começar e crie funções para facilitar a implementação e reutilizar código.

---

### 2) [1,7] Crie uma classe exportável `Clube`

**[0,1]** Crie em `clube.js`, que represente um clube de futebol, contendo `nome` (string), `fundacao` (number, que é o ano de fundação) e `escudo` (string). 
**[0,3]** A classe deve conter atributos privados e propriedades públicas somente-leitura, correspondentes aos atributos. 
**[0,3]** Seu construtor deve receber um objeto desestruturado com atributos públicos semelhantes aos da classe e deve validar os dados antes da atribuição, através de um método privado `validar()` que lance exceções para sinalizar um dado inválido. 

Para ser válido: 
1. **[0,1]** o nome deve ter de 3 a 60 caracteres; e 
2. **[0,2]** a fundação deve ser um valor numérico inteiro e ir de 1800 ao ano atual — que pode ser obtido com `(new Date()).getFullYear()`; 
3. **[0,3]** o escudo deve conter até 20 caracteres, não deve conter `/` e deve terminar com `.webp`. 

**[0,2]** Ao realizar a atribuição do valor do escudo, deve-se adicionar o prefixo `/img/escudos/` ao argumento recebido, usando template literals (\`). 
**[0,2]** A classe também deve conter um método `toJson()`, que retorne uma string com os dados atuais do clube em formato JSON.

---

### 3) [1,0] Crie uma classe exportável `ServicoCadastroClube`

Crie em `servico-cadastro-clube.js`, que contenha o método estático `cadastrar()` para cadastrar um `Clube`, no recurso `/clubes` da API. Esse método deve receber um objeto desestruturado com os dados de um `Clube` indicados na questão 2, utilizar a classe `Clube` para validar os dados e usar `fetch` para realizar o cadastro, apenas usando promessas sem `async` e `await`. 

Certifique-se de verificar o status da resposta e tratá-la adequadamente em caso de insucessos. A classe não deve fazer interface com o usuário.

---

### 4) [1,0] Considere o corpo do arquivo "cadastro-clube.html" abaixo:

```html
<script src="cadastro-clube.js" type="module"></script>
<h1>Cadastro de Clube</h1>
<div></div><div class="erro"></div>
<form>
    <label for="nome">Nome:</label><input type="text" name="nome" id="nome" />
    <label for="fundacao">Fundação:</label><input name="fundacao" id="fundacao" />
    <label for="escudo">Escudo (.webp):</label><input name="escudo" id="escudo" />
    <button>Salvar</button>
</form>
```

Crie o arquivo `cadastro-clube.js` para cadastrar um clube quando o botão "Salvar" for disparado. Para isso, utilize a classe `ServicoCadastroClube` da questão anterior. Quaisquer erros ao disparar o salvamento, como aqueles encontrados ao validar o clube ou oriundos do envio para o servidor, devem ser exibidos na tag `div` com a classe `erro`. 
> **Observação:** `script` com `type="module"` já faz `defer`.

---

### 5) [2,6] Marque as alternativas a seguir com “V” para Verdadeiro ou “F” para Falso.

**a) [0,2]** ( ) O método `race(...promessas)`, de `Promise`, executa todas as promessas recebidas até o fim.

**b) [0,3]** ( ) Qualquer valor retornado por um método `async` é encapsulado em uma promessa resolvida.

**c) [0,3]** ( ) A função `setTimeout(função, tempo)` executa a função fornecida a cada intervalo de tempo, em milissegundos.

**d) [0,3]** ( ) Dados salvos em `sessionStorage` ficam guardados após fechar o navegador.

**e) [0,2]** ( ) Variáveis exportadas por um arquivo que é um EcmaScript Module (ESM) não podem ser modificadas diretamente por quem as importa.

**f) [0,3]** ( ) Tags script com atributo `async` executam os scripts dos arquivos declarados em `src` em ordem indeterminada e podem bloquear o DOM ao executar.

**g) [0,3]** ( ) No DOM, um evento é propagado do objeto `window` até o elemento em que ele ocorreu.

**h) [0,2]** ( ) Em uma arrow function, `this` é uma referência para a própria função.

**i) [0,3]** ( ) Executar `x(await y(10));` equivale a executar `y(10).then(x);`

**j) [0,2]** ( ) A propriedade `sectionRowIndex`, de uma linha de tabela (`tr`), obtém o índice da linha em relação à tabela.

> **Boa prova!**