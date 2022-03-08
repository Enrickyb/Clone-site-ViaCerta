var ativar = document.getElementById('mde')
var lg = document.getElementById('logo')
var barra = document.querySelector('.one')
var barra2 = document.querySelector('.three')
var show = true

function turnon() {
    ativar.classList.toggle('menu-section-on', show)
    show = !show
}



