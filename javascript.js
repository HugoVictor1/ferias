var texto = document.getElementById('texto');
//var texto2 = document.getElementById('texto2');

/*var semanas = ['Domingo', 'Segunda', 'Terça', 'Quarta', 'Quinta', 'Sexta', 'Sábado']
var meses = ['Jan', 'Fev', 'Mar', 'Abr', 'Mai', 'Jun', 'Jul', 'Ago', 'Set', 'Out', 'Nov', 'Dez'] */

function teste(){
  var data = new Date();
  var ano = data.getFullYear(); // ano inteiro
  var semana = data.getDay(); // dia da semana 
  var mes = data.getMonth(); // mês do ano
  var hora = data.getHours(); // horas do dia
  var minutos = data.getMinutes() // minutos das horas 
  var dia = data.getDate(); // dia do mês
  var d1 = '2025-04-17';
  var d2 = `${ano}-${mes}-${dia}`;
  var difM = new Date(d1) - new Date(d2)
  var difD = Math.floor(difM / (1000 * 60 * 60 * 24));

  mes ++

  var mFim = 5 - mes 
  
  texto.innerHTML = `<h1>Faltam ${mFim} meses,  <br> ${ difD} Dias,</h1>` 
  texto2.innerHTML = `<h2>${23 - hora} Horas e ${60 - minutos} Minutos</h2>`

};

const fx=setTimeout(teste, 10);
const inter=setInterval(teste, 1000);



