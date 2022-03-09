var ativar = document.getElementById('mde')
var lg = document.getElementById('logo')
var barra = document.querySelector('.one')
var barra2 = document.querySelector('.three')
var show = true
//menu hamburger
function turnon() {
    ativar.classList.toggle('menu-section-on', show)
    show = !show
}

//carrossel
const imgs = document.getElementById('img')
const img = document.querySelectorAll('#img img')

let idx = 0

function carrossel() {
    idx++
    if(idx > img.length - 1) { //retorna pra primeira imagem
        idx = 0
    }
    imgs.style.transform = `translateX(${-idx * 500}px)`
}
setInterval(carrossel, 3000)



