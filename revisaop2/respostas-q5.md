# Respostas da Questão 5

### a) Falso (F)
O método `race()` da Promise é finalizado assim que a **primeira** promessa do iterável for resolvida ou rejeitada, não aguardando a execução de "todas" até o fim.

### b) Verdadeiro (V)
Funções ou métodos `async` sempre retornam uma Promise. Se você retornar um valor direto que não for uma Promise (ex: `return 5`), o JavaScript irá encapsulá-lo automaticamente em uma Promise já resolvida com esse valor.

### c) Falso (F)
A função `setTimeout` executa o callback **apenas uma vez** após o tempo decorrido. A função responsável por executar uma função repetidamente a cada intervalo de tempo é o `setInterval`.

### d) Falso (F)
Dados salvos no `sessionStorage` são temporários e são perdidos quando a sessão da página termina, ou seja, ao fechar a aba ou o navegador. Para manter os dados guardados permanentemente (mesmo após fechar o navegador), utiliza-se o `localStorage`.

### e) Verdadeiro (V)
Módulos do EcmaScript (ESM) exportam *bindings* (ligações) que são apenas de leitura (*read-only*) para o arquivo que os importa. Ou seja, você não pode reatribuir um valor importado escrevendo `variavelImportada = 1` no seu código (isso lançaria um erro de TypeError).

### f) Verdadeiro (V)
Com o atributo `async`, os scripts são baixados em paralelo de forma assíncrona com o HTML. No entanto, eles são executados assim que terminam de ser baixados, bloqueando temporariamente a construção (parsing) do DOM durante sua execução. Por baixarem assincronamente, não há garantia de qual script terminará o download e será executado primeiro.

### g) Falso (F)
De forma padrão (fase de *Event Bubbling*, que é a mais conhecida), o evento se propaga **do elemento alvo para cima** até chegar no objeto `document`/`window`. A trajetória contrária (descendo do `window` até o elemento) descreve a fase de **captura** (*capturing*). Como a afirmação diz genericamente "é propagado de `window` até o elemento" sem especificar a fase, ela inverte o comportamento padrão esperado de *bubbling* e por isso é dada como falsa.

### h) Falso (F)
O `this` dentro de uma *Arrow Function* é resolvido de forma **léxica** (ou seja, ele simplesmente herda o contexto e o `this` do escopo exterior onde a função foi criada). Ele não aponta para a própria função, pois a *Arrow Function* sequer possui o seu próprio contexto interno de `this`.

### i) Verdadeiro (V)
O código `x(await y(10))` pausa o contexto local, esperando que a promessa gerada por `y(10)` seja resolvida e, em seguida, extrai seu resultado direto para a função `x()`. Ele é semanticamente equivalente a fazer `y(10).then(x)` na cadeia de promessas.

### j) Falso (F)
A propriedade `sectionRowIndex` retorna o índice posicional da linha (`<tr>`) **apenas em relação à seção em que ela se encontra** (como dentro de um `<tbody>`, `<thead>` ou `<tfoot>`), e não o índice em relação à tabela toda de forma absoluta. Para pegar o índice global na tabela, usa-se a propriedade `rowIndex`.
