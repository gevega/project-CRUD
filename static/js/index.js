let cart = document.querySelector('nav')
let log = document.querySelector('#login')
let colapse = document.getElementById('colapse-cart')
let menu = document.getElementById('items')
let log_svg = document.querySelector('.login-svg')

window.addEventListener('load', () => {
    const loader = document.querySelector('.loader')
    loader.style.opacity = 0
    loader.style.visibility = 'hidden'
})

loadEventLis()
function loadEventLis() {
    cart.addEventListener('click', show_cart)
    if (document.querySelector('.register')) {
        let register = document.querySelector('.register')
        register.addEventListener('click', show_register)
    }
    document.addEventListener('DOMContentLoaded', read_account())

}

function show_register(e) {
    window.location.href = "/register"
}

function show_login(e) {
    window.location.href = "/login"
}

function show_cart(e) {
    if (e.target.classList.contains('cart')) {
        colapse.classList.toggle('active-cart')
        items.classList.remove('active-menu')
    }

    if (e.target.classList.contains('svg-icon')) {
        items.classList.toggle('active-menu')
        colapse.classList.remove('active-cart')
    }
}

function read_account(){
    if (document.querySelector('.login-svg')) {
        let login = document.querySelector('.login-svg').getAttribute('id')
        
        if (login == 'TRUE'){
            log_svg.setAttribute('src', '../../static/img/svg/logout.svg')
        }
    }
}