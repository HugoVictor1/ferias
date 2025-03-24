var texto = document.getElementById('texto');
//var texto2 = document.getElementById('texto2');

function teste(){

  var data    = new Date();
  var ano     = data.getFullYear();   // ano inteiro
  var mes     = data.getMonth();      // mês do ano
  var hora    = data.getHours();      // horas do dia
  var minutos = data.getMinutes()     // minutos das horas 
  var dia     = data.getDate();       // dia do mês
  var d1      = '2025-04-20';
  var d2      = `${ano}-${mes}-${dia}`;
  var difM    = new Date(d1) - new Date(d2)
  var difD    = Math.floor(difM / (1000 * 60 * 60 * 24));

  mes ++

  var mFim = 5 - mes 

  if (mes == 0){
    total = 31 + 29 + 31 + 30 + 17 - dia
    fal = 31 - dia + 29 - 11
    res = 3
  }

  if (mes == 1){
    total = 29 + 31 + 30 + 17 -dia
    res = 3
      if(dia <= 17){  
        fal = 17 - dia
      }else{
        fal = 29 - dia + 17
        res = 2
      }
  }

  if (mes == 2){
    total = 31 + 30 + 17 - dia
    res = 2
      if(dia <= 17){
        fal = 17 - dia
      } else {
        fal = 31 - dia + 17
        res = 2
      }
  }

  if (mes == 3){
    total = 30 + 17 - dia
    res = 1
      if(dia <= 17){
        fal = 17 - dia
      } else {
        fal = 30 - dia + 17
        res = 1
      }
  }

  if (mes == 4){
    total = 17 - dia
    fal = 17 - dia
    res = 0
      
  }

  if (res == 1 ){
    texto.innerHTML = `<h1>Falta ${res} mês e ${fal} dias,  <br> Total de ${ difD} dias!</h1>` 
  Else
    texto.innerHTML = `<h1>Faltam ${res} meses,  <br> Total de ${ difD} dias!</h1>` 
  }

  texto2.innerHTML = `<h2>${23 - hora} Horas e ${60 - minutos} Minutos</h2>`

};

const fx=setTimeout(teste, 10);
const inter=setInterval(teste, 1000)