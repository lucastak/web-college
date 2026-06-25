# PROGRAMAÇÃO DE CLIENTES WEB – PROVA FINAL SIMULADA

> **Regras:**
> 1. Questões entregues a lápis não têm direito à revisão.
> 2. Ao usar caneta esferográfica, usar tinta azul ou preta.
> 3. Usar EcmaScript 6 ou superior e EcmaScript Modules (ESM).
> 4. Não utilizar frameworks ou bibliotecas de código externas.

---

Para as questões a seguir, considere o site `https://filmes.io`, com uma API RESTful em `/api` que trabalha com o formato JSON.

---

### 1) [3,5] Considere:

* O recurso `/filmes`, na API do site acima, cujo método `GET` retorne um array de objetos. Cada objeto possui `id` (number), `titulo` (string), `ano` (number, que é o ano de lançamento) e `poster` (string). O poster é uma URL para a imagem do poster do filme, tal como `/img/posters/matrix.webp`;
* A existência de um arquivo `lista-filmes.html`, cujo conteúdo da tag `body` é exibido abaixo:

```html
<script src="lista-filmes.js" type="module"></script>
<h1>Catálogo de Filmes</h1>
<label for="desde">Lançados a partir de:</label>
<input id="desde" type="range" value="2000" step="5" min="1900" max="2025" />
<output></output>
<table>
    <thead>
        <tr><th>Id</th><th>Título</th><th>Ano</th><th>Poster</th><th>Ações</th></tr>
    </thead>
    <tbody></tbody>
</table>
```

Crie o arquivo `lista-filmes.js`, para consultar os filmes **[0,6]** e preencher o corpo da tabela **[0,4]** acima com os filmes lançados a partir do ano indicado no input `desde`.
**[0,4]** Para o Poster de cada filme, uma imagem deve ser exibida na tabela, com largura e altura de 60 pixels e texto alternativo com o título do filme. Nas linhas da coluna "Ações", deve-se criar, para cada filme, um botão com o texto "Remover" **[0,2]** que permita remover o filme do recurso `/filmes` da API **[0,6]**, pelo seu `id`, e da tabela **[0,3]**.
**[0,4]** Se um usuário mudar (`change`) o valor do input `desde`, e o valor for um inteiro válido maior ou igual a 1900, a tabela deve ser atualizada de acordo. Do contrário, não deve ser atualizada.
**[0,3]** O valor atual do input `desde` deve ser exibido no elemento `<output>` sempre que a tabela for atualizada. Erros devem **também** ser exibidos no elemento `<output>`.

**A solução:**
* Deve utilizar `fetch` e promessas **sem usar `async` e `await`**, sempre verificando o `status` da resposta.
* Deve utilizar apropriadamente os métodos de Array `filter()` e `map()`, para, respectivamente, filtrar os filmes e transformar os filmes em linhas da tabela.
* Não deve criar elementos do DOM usando tags como string. Crie apenas objetos.
* Não deve invocar métodos que recarreguem a página.

> **Dica:** O método `replaceChildren()`, invocado sem parâmetros, permite remover todos os filhos de um elemento do DOM.

---

### 2) [1,7] Crie uma classe exportável `Filme`

Crie em `filme.js`, que represente um filme, contendo `titulo` (string), `ano` (number, que é o ano de lançamento) e `poster` (string).
**[0,3]** A classe deve conter atributos privados e propriedades públicas somente-leitura, correspondentes aos atributos.
**[0,3]** Seu construtor deve receber um objeto desestruturado com os dados do filme e deve validar os dados antes da atribuição, através de um método privado `validar()` que lance exceções para sinalizar um dado inválido.

Para ser válido:
1. **[0,2]** o título deve ter de 1 a 100 caracteres;
2. **[0,2]** o ano deve ser um valor numérico inteiro e ir de 1888 ao ano atual — que pode ser obtido com `(new Date()).getFullYear()`;
3. **[0,3]** o poster deve conter até 30 caracteres, não deve conter `/` e deve terminar com `.webp`.

**[0,2]** Ao realizar a atribuição do valor do poster, deve-se adicionar o prefixo `/img/posters/` ao argumento recebido, usando template literals.
**[0,2]** A classe também deve conter um método `toJson()`, que retorne uma string com os dados atuais do filme em formato JSON.

---

### 3) [1,0] Crie uma classe exportável `ServicoCadastroFilme`

Crie em `servico-cadastro-filme.js`, que contenha o método estático `cadastrar()` para cadastrar um `Filme` no recurso `/filmes` da API. Esse método deve receber um objeto desestruturado com os dados de um `Filme` indicados na questão 2, utilizar a classe `Filme` para validar os dados e usar `fetch` para realizar o cadastro, apenas usando promessas **sem `async` e `await`**.

Certifique-se de verificar o status da resposta e tratá-la adequadamente em caso de insucessos. A classe não deve fazer interface com o usuário.

---

### 4) [1,0] Considere o corpo do arquivo `cadastro-filme.html` abaixo:

```html
<script src="cadastro-filme.js" type="module"></script>
<h1>Cadastro de Filme</h1>
<output></output>
<form>
    <label for="titulo">Título:</label><input type="text" name="titulo" id="titulo" />
    <label for="ano">Ano:</label><input type="number" name="ano" id="ano" />
    <label for="poster">Poster (.webp):</label><input name="poster" id="poster" />
    <button>Salvar</button>
</form>
```

Crie o arquivo `cadastro-filme.js` para cadastrar um filme quando o formulário for submetido. Para isso, utilize a classe `ServicoCadastroFilme` da questão anterior. Quaisquer erros ao disparar o salvamento, como aqueles encontrados ao validar o filme ou oriundos do envio para o servidor, devem ser exibidos no elemento `<output>`. Ao salvar com sucesso, limpe o formulário e exiba uma mensagem de sucesso também no `<output>`.

> **Observação:** `script` com `type="module"` já faz `defer`.

---

### 5) [1,8] Considere:

* A existência do arquivo `cadastro-local.html`, cujo conteúdo da tag `body` é exibido abaixo:

```html
<script src="cadastro-local.js" type="module"></script>
<h1>Cadastro Local de Filmes</h1>
<form>
    <label for="titulo-l">Título:</label><input type="text" id="titulo-l" />
    <label for="ano-l">Ano:</label><input type="number" id="ano-l" />
    <button type="button" id="salvar-local">Salvar</button>
</form>
```

Implemente o arquivo `cadastro-local.js` de forma que, quando o botão "Salvar" for acionado, os dados do formulário sejam obtidos, **validados** e, se válidos, salvos em um array de objetos em `localStorage`, a ser mantido na chave `"filmes-locais"`. Caso haja algum dado inválido, exibir no console uma mensagem detalhando o problema.

**[0,5]** As validações devem ser feitas por uma função no arquivo `validacao-filme.js` — a ser criado por você —, que deve ser importado por `cadastro-local.js`. As seguintes validações devem ocorrer: o título deve ter entre 1 e 100 caracteres; o ano não deve ser anterior a 1888 e não deve ser superior ao ano atual.

**[0,5]** A existência do arquivo `favoritos.html`, cujo conteúdo da tag `body` é exibido abaixo:

```html
<script src="favoritos.js" type="module"></script>
<h1>Filmes Favoritos (Após 2000)</h1>
<table>
    <thead><tr><th>Título</th><th>Ano</th></tr></thead>
    <tbody></tbody>
    <tfoot><tr><td>Total:</td><td></td></tr></tfoot>
</table>
```

Utilizando objetos do DOM, **sem utilizar innerHTML**, preencha o corpo da tabela com os dados dos filmes salvos no `localStorage` que tenham sido lançados **após o ano 2000**. Utilize `filter()` para filtrar os filmes. No rodapé da tabela, exiba a **quantidade** de filmes exibidos.

**[0,4]** A existência do arquivo `meus-filmes.html`, cujo conteúdo da tag `body` é exibido abaixo:

```html
<script src="meus-filmes.js" type="module"></script>
<h1>Meus Filmes</h1>
<ul id="lista-filmes"></ul>
```

Produza uma lista não ordenada (`<ul>`) de filmes, em que cada item deve ser exibido como na frase `"Matrix foi lançado em 1999."`. Use interpolação para gerar as frases, que devem ser produzidas com o método `map()` sobre os filmes do `localStorage`.
**[0,4]** Faça com que o duplo clique sobre um item da lista o remova da lista e do array de filmes no `localStorage`.

---

### 6) [1,0] Marque as alternativas a seguir com "V" para Verdadeiro ou "F" para Falso.

**a) [0,2]** ( ) O método `Promise.all(...promessas)` só resolve quando **todas** as promessas do array são resolvidas; se qualquer uma rejeitar, ele rejeita imediatamente.

**b) [0,2]** ( ) O elemento `<output>` é um elemento semântico do HTML5 destinado a exibir o resultado de um cálculo ou ação do usuário, e seu conteúdo pode ser definido com a propriedade `textContent` em JavaScript.

**c) [0,2]** ( ) A propriedade `rowIndex`, de uma linha de tabela (`<tr>`), obtém o índice da linha em relação à **tabela inteira** (incluindo thead, tbody e tfoot).

**d) [0,2]** ( ) O método `setInterval(função, tempo)` executa a função fornecida apenas uma vez após o intervalo de tempo especificado.

**e) [0,2]** ( ) Em um módulo ESM, ao exportar uma variável com `export`, quem a importa pode reatribuir seu valor diretamente.

> **Boa prova!**
