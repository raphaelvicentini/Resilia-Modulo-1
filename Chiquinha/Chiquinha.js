function Responder() {
  
    while(true) {    
      let option;
      option = prompt("1- Chiquinha tenta fugir para conseguir ir para a ACAPULCO com os amigos da vila. \n 2- Chiquinha fica em casa e obedece as ordens do pai e não vai para ACAPULCO.");
      
      if (option == 1) {
        alert("Muito Bom!! Você passou para a próxima fase!");
        location.replace("../Chiquinha/ChiquinhaFase2.html");
        break;
      } else if (option == 2) {
        alert("(GAME OVER ☠️) (TENTE NOVAMENTE!!!)");
        location.replace("../gameOver/gameover.html");
        break;
      }
      alert ("Responda com 1 ou 2.");
    }
  
  } 
  function ResponderFase2() {
  
    while(true) {    
      let option;
      option = prompt("1- Chiquinha pega a bola quadrada do Kiko para tentar vender. \n 2- Chiquinha chega a conclusão que isso é uma loucura, desiste e volta para casa chorando porque não tem o dinheiro para ACAPULCO.");
      
      if (option == 1) {
        alert("Muito Bom!! Você passou para a próxima fase!");
        location.replace("../Chiquinha/ChiquinhaFase3.html");
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
      option = prompt("1- Chiquinha pega o dinheiro e entrega para o seu pai pagar o aluguel. \n 2- Chiquinha pega o dinheiro e vai para <b>Acapulco</b> com seus amigos.");     
      if (option == 1) {
        alert("(GAME OVER ☠️) (TENTE NOVAMENTE!!!)");
        location.replace("../gameOver/gameover.html");
        break;
      } else if (option == 2) {
        alert("Muito Bom!! Você Venceu 🏆🏅");
        location.replace("../Win/win.html");
        break;
      }
      alert ("Responda com 1 ou 2.");
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