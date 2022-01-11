function Responder() {
  while (true) {
    let option;
    option = prompt("1- Ajuda o Kiko a vender os churros e quando terminar, pede dinheiro a ele? \n 2- Chaves deve ignorar o Kiko e continuar chorando?");
    if (option == 1) {
      alert("Muito Bom!! Você passou para a próxima fase!");
      location.replace("../Chaves/ChavesFase2.html");
      break;
    } else if (option == 2) {
      alert("(GAME OVER ☠️) (TENTE NOVAMENTE!!!)");
      location.replace("../gameOver/gameover.html");
      break;
    }
    alert("Responda com 1 ou 2.")
  }
}
function ResponderFase2() {
  while (true) {
    let option;
    option = prompt("1- Fica bravo, grita com o Kiko, e toma o dinheiro dele para ir a ACAPULCO \n 2- Entende, chora e volta para vila sem o dinheiro para viajar com os amigos.");
    if (option == 1) {
      alert("(GAME OVER ☠️) (TENTE NOVAMENTE!!!)");
      location.replace("../gameOver/gameover.html");
      break;
    } else if (option == 2) {
      alert("Muito Bom!! Você passou para a próxima fase!");
      location.replace("../Chaves/ChavesFase3.html");
      break;
    }
    alert("Responda com 1 ou 2.");
    break;
  }
}
function ResponderFase3() {
  while (true) {
    let option;
    option = prompt("1- Entra no seu barril e fica chorando. \n 2- Conta tudo para o Sr.Barriga e pede ajuda para que ele possa ir a ACAPULCO com seus amigos da vila");
    if (option == 1) {
      alert("(GAME OVER ☠️) (TENTE NOVAMENTE!!!)");
      location.replace("../gameOver/gameover.html");
      break;
    } else if (option == 2) {
      alert("Muito Bom!! Você Venceu 🏆🏅");
      location.replace("../Win/win.html");
      break;
    }
    alert("Responda com 1 ou 2.")
  }
}
function Voltar() {
  let confirmou;
  confirmou = confirm("Deseja voltar ao menu inicial?");
  if (confirmou == true) {
    location.assign("../index.html");
  } else {
    location.reload();
  }
}