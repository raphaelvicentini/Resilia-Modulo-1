function Responder() { 
    while(true) {    
      let option;
      option = prompt("1-Kiko tenta enganar sua mãe e fala que emprestou sua bola para o filho do Sr.barriga? \n 2-KIko pede desculpas para sua mãe e promete ter mais atenção com seus briquedos?");      
      if (option == 1) {
        alert("GAME OVER ☠️) (TENTE NOVAMENTE!!!)");
        location.replace("../gameOver/gameover.html");
        break;  
      } else if (option == 2) {
        alert("Muito Bom!! Você passou para a próxima fase!");
        location.replace("../Kiko/KikoFase2.html");
        break;
      }
      alert ("Responda com 1 ou 2.")
    }  
  } 
  function ResponderFase2() { 
    while(true) {    
      let option;
      option = prompt("1- Kiko pede para chiquinha e para o chaves convencerem sua mãe a deixar ele ir para Acapulco com eles? \n 2- Kiko desobedece sua mãe e pega sua mesada que ele ajuntava a meses e foje para viajar com seus amigos?");     
      if (option == 1) {
        alert("Muito Bom!! Você passou para a próxima fase!");
        location.replace("../Kiko/KikoFase3.html");
        break;
      } else if (option == 2) {
        alert("(GAME OVER ☠️) (TENTE NOVAMENTE!!!)");
        location.replace("../gameOver/gameover.html");
        break;
      }
      alert ("Responda com 1 ou 2.");
    }
  } 
  function ResponderFase3() {
    while(true) {    
      let option;
      option = prompt("1- Kiko foge com seus amigos e vai para ACAPULCO. \n 2- Kiko finge estar doente para causar remorso em sua mãe, acabar com o castigo e ir para ACAPULCO.");     
      if (option == 1) {
        alert("(GAME OVER ☠️) (TENTE NOVAMENTE!!!)");
        location.replace("../gameOver/gameover.html");
        break;
      } else if (option == 2) {
        alert("Muito Bom!! Você Venceu 🏆🏅");
        location.replace("../Win/win.html");
        break;
      }
      alert ("Responda com 1 ou 2.")
    }
  } 
  function Voltar() {
    let confirmou;
    confirmou = confirm("Deseja voltar ao menu inicial?");  
    if(confirmou == true) {
      location.assign("../index.html");
    }else {
      location.reload();
    }  
  }