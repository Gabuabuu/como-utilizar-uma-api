//fetch é metodo que usamos para requisitar ao servidor a api que iremos usar
fetch('https://economia.awesomeapi.com.br/json/last/USD-BRL').then(resposta => {
  return resposta.json() //irá retornar as informações com um formato json
}).then(corpo => {
  let teste = document.getElementById('span').innerHTML = corpo.USDBRL.ask;
  console.log(corpo)
}) //para obter os objetos de dentro da resposta.json enviadas pelo servidor da api