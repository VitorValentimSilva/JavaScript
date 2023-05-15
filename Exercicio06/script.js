function contar(){
  var ini = document.querySelector("input#iinicio")
  var fim = document.querySelector("input#ifim")
  var passo = document.querySelector("input#ipassos")
  var msg = document.querySelector("p#msg")
  var i = Number(ini.value)
  var f = Number(fim.value)
  var p = Number(passo.value)

  if (ini.value.length == 0 || fim.value.length == 0 || passo.value.length == 0){
    alert("[ERRO] Faltam dados!")
    msg.innerHTML = "Impossivel contar!"
  }
  else{
    msg.innerHTML = "Contando: <br>"

    if (p <= 0){
      alert("Passo invalido! Considerando PASSO 1")
      p = 1
    }
    if (i < f){
      for (var c = i; c <= f; c += p){
        msg.innerHTML += `${c} 👉 `
      }

      msg.innerHTML += '🏁'
    }
    else{
      for (var c = i; c <= f; c -= p){
        msg.innerHTML += `${c} 👉 `
      }

      msg.innerHTML += '🏁'
    }
  }
}