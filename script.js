function now() {
  var nowHour = new Date()
  var hora = nowHour.getHours()
  var nowMinutes = new Date()
  var minutes = nowMinutes.getMinutes()
  var msg = document.getElementById('msgHora')
  msg.innerText = `No momento são ${hora}:${minutes} horas`

  if (hora >= 6 && hora < 12) {
    var imageSrc = document.getElementById('imagem')
    imageSrc.src = './images/manha.jpg'
    document.body.style.background = '#f7ec96'

  } else if (hora >= 12 && hora <= 18) {
    var imageSrc = document.getElementById('imagem')
    imageSrc.src = './images/tarde.jpg'
    document.body.style.background = '#E4A84E'

  } else if (hora > 18){
    var imageSrc = document.getElementById('imagem')
    imageSrc.src = './images/noite.jpg'
    document.body.style.background = '#052036'
  }
}