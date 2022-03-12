var ativar = document.getElementById('mde')
var lg = document.getElementById('logo')
var show = true
//menu hamburger
function turnon() {
    ativar.classList.toggle('menu-section-on', show)
    show = !show
}


//slide 
const imgs = document.getElementById('img')
const img = document.querySelectorAll('#img img')

let idx = 0

function carrossel() {
    idx++
    if(idx > img.length - 4) { //retorna pra primeira imagem
        idx = 0
    }
    imgs.style.transform = `translateX(${-idx * 200}px)`
}
setInterval(carrossel, 3000)






//animação scroll

const debounce = function(func, wait, immediate) {
    let timeout;
    return function(...args) {
        const context = this;
        const later = function() {
            timeout = null;
            if(!immediate) func.apply(context, args)
        };
        const callNow = immediate && !timeout;
        clearTimeout(timeout);
        timeout = setTimeout(later, wait);
        if(callNow) func.apply(context, args);
    };
};

///


const target = document.querySelectorAll('[data-anime]')

const animationClass = 'animate'


function animeScroll() {

    const windowTop = window.scrollY + ((window.innerHeight * 3)/ 3) 

    
    target.forEach(function(element){
       
      
        if(windowTop > element.offsetTop){ 
            
            element.classList.add(animationClass)
        } else {
            
            element.classList.remove(animationClass)
        }
    console.log(element.offsetTop)
    })
}

animeScroll() 
if(target.length) { 

window.addEventListener('scroll', debounce(function(){
    animeScroll()
    console.log("")
},100))
}
