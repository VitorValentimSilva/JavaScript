function gerar(){
  var numero = document.querySelector("input#inumero")
  var tab = document.querySelector("select#itab")
  var n = Number(numero.value)

  if (n == 0){
    alert("[ERRO] Digite um numero!")
  }
  if (n != 0){
    tab.innerHTML = '' 
    for (var c = 1; c <= 10; c++){
      var item = document.createElement('option')
      item.text = `${n} x ${c} = ${n*c}`
      tab.appendChild(item)
    }
  }
}