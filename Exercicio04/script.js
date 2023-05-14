function carregar(){
  var dia = new Date()
  var hora = dia.getHours()
  var msg = document.querySelector("div#msg")
  var img = document.querySelector("img#img")
  
  msg.innerHTML = `Agora sao ${hora} horas.`

  if (hora >= 5 && hora <= 12){
    img.src = 'imagens/manha.png'
    document.body.style.background = '#caba8d'
  }
  else if (hora >= 13 && hora < 18){
    img.src = 'imagens/tarde.png'
    document.body.style.background = '#a77861'
  }
  else{
    img.src = 'imagens/noite.png'
    document.body.style.background = '#474a49'
  }
}