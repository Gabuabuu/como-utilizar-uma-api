
## Como utilizar uma API com Javascript puro (vanilla js)

Recentemente me surgiu uma dúvida de como eu faço para utilizar uma API (`Application Programming Interface`), então foi aí que achei um vídeo de [como consumir uma api em 20 minutos](https://youtu.be/IDG6EOXYAq8) ensinando de forma prática e com uma boa didática como utilizar apis com Javascript (vanilla).
A api em questão é uma de cotação de moedas.


## Como utilizar

Para utilizar a API em questão devemos fazer uma requisição no nosso arquivo javascript 

`fetch('https://economia.awesomeapi.com.br/json').then(resposta=> {
return resposta.json() 
}).then(corpo => {
  let teste = document.getElementById('span').innerHTML = corpo.USDBRL.ask;
  console.log(corpo)
})`.

O `return` irá retornar as informações com um formato json.
Após isso utilizamos outro `then` com uma arrow function chamada `corpo` para obter os objetos de dentro da resposta.json enviadas pelo servidor da api.

Depois de setar o id `span` para a tag `SPAN` no html, nós usamos o
 `document.getElementById('span').innerHTML.corpo.USDBRL.ask;`

Assim pegando as informações enviadas através do servidor da api e mostrando no nosso body.

(`USDBRL.ask`) equivale para o nome da moeda a ser convertida e o tipo de ação que iremos realizar, nesse caso o `ask` estará nos retornando o valor de **Venda** do dólar.



## API de Cotações de Moedas

#### Retorna moedas selecionadas (atualizado a cada 30 segundos)


```http
  GET /last/:moedas
```

| Parâmetro   | Tipo       | Descrição                           |
| :---------- | :--------- | :---------------------------------- |
| `ask` | `string` | Venda |
| `bid` | `string` | Compra |
| `varBid` | `string` | Variação |
|`pctChange` | `string`| Porcentagem de Variação |
|`high` |`string`| Máximo |
|`low` | `string` | Mínimo|

## Aprendizados

Aprendi como utilizar uma API com JS vanilla, assim somando aos meus conhecimentos e me preparando para por em prática o conhecimento adquirido e assim por em prática o uso da api em um futuro projeto.

