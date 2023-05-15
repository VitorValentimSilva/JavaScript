function veri(){
  var data = new Date()
  var ano1 = data.getFullYear()
  var msg = document.querySelector("p#msg")
  var ano2 = document.querySelector("input#iano")
  var sexo = document.getElementsByName("sexo")
  var idade = ano1 - Number(ano2.value)
  var genero = ''
  var img = document.createElement("img")
  img.setAttribute('id', 'foto')

  if (sexo[0].checked){
    genero = 'Homem'
    if (idade >= 0 && idade <= 4){
      img.setAttribute('src', 'imagens/bebehm.png')
    }
    else if (idade >= 5 && idade <= 10){
      img.setAttribute('src', 'imagens/criancahm.png')
    }
    else if (idade >= 11 && idade <= 24){
      img.setAttribute('src', 'imagens/adolhm.png')
    }
    else if (idade >= 25 && idade <= 45){
      img.setAttribute('src', 'imagens/adulhm.png')
    }
    else if (idade >= 46){
      img.setAttribute('src', 'imagens/velho.png')
    }
  }
  else{
    genero = 'Mulher'
    if (idade >= 0 && idade <= 4){
      img.setAttribute('src', 'imagens/bebemu.png')
    }
    else if (idade >= 5 && idade <= 10){
      img.setAttribute('src', 'imagens/criancamu.png')
    }
    else if (idade >= 11 && idade <= 24){
      img.setAttribute('src', 'imagens/adomu.png')
    }
    else if (idade >= 25 && idade <= 45){
      img.setAttribute('src', 'imagens/adulmu.png')
    }
    else if (idade >= 46){
      img.setAttribute('src', 'imagens/velha.png')
    }
  }

  msg.innerHTML = `Detectamos ${genero} com ${idade} anos.`
  msg.appendChild(img)

  if (ano2.value.length == 0 || ano2.value > ano1){
    alert("[ERRO] Verifique os dados e tente novamente!")
  }
}