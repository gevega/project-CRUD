let produ = document.querySelector('body')
let productos = []
let container = document.querySelector('.cart-items')
let buyitems = document.querySelector('#buyitems')
let total = document.querySelector('.total')
let totalcart = 0

loadEventList()
function loadEventList() {
    produ.addEventListener('click', addPro)
    container.addEventListener('click', remove)
    document.addEventListener('DOMContentLoaded', readLocalStorage())
}

function addPro(e) {
    if (e.target.classList.contains('buy')) {
        const selectPro = e.target.parentElement.parentElement
        readContent(selectPro)
    }
    cart_logo(productos)
}

function remove(e) {
    if (e.target.classList.contains('remove')) {
        const idProdu = e.target.getAttribute('data-id')
        productos.forEach(value => {
            if (value.id == idProdu) {
                let removePre = parseFloat(value.precio) * parseFloat(value.cantidad)
                totalcart = totalcart - removePre
                totalcart = totalcart.toFixed(0)
                if (value.cantidad > 0) {
                    let cant = document.getElementById(idProdu)
                    if(document.getElementById(idProdu)){
                        cant.classList.replace('cantidad', 'noDisplay')
                        cant.innerHTML = ''
                    }
                }
                removeProdu(idProdu)
            }
        })
        productos = productos.filter(productos => productos.id != idProdu)
    }

    if (productos.length == 0) {
        total.innerHTML = 'Total: $0'
        totalcart = 0
        localStorage.setItem('productos', '')
        localStorage.setItem('total', 0)
    }
    loadHTML()
}

function readContent(product) {
    const infoProduct = {
        id: product.querySelector('.buy').getAttribute('data-id'),
        imagen: product.querySelector('.produ').src,
        titulo: product.querySelector('h2').textContent,
        precio: product.querySelector('.precio').textContent,
        cantidad: 1
    }

    totalcart = parseFloat(totalcart) + parseFloat(infoProduct.precio)

    const repeat = productos.some(product => product.id == infoProduct.id)
    if (repeat) {
        const list = productos.map(product => {
            if (product.id == infoProduct.id) {
                product.cantidad++
                return product
            } else {
                return product
            }
        })
        productos = [...list]
    } else {
        productos = [...productos, infoProduct]
    }
    loadHTML()
}

function loadHTML() {
    clearhtml()
    productos.forEach(product => {
        const { id, imagen, titulo, precio, cantidad } = product
        const fila = document.createElement('div')
        fila.classList.add('item')
        fila.innerHTML = `
            <div class="logo-item">
                <img src="${imagen}" alt="">
            </div>
            <div class="info-item">
                <h4>${titulo}</h4>
                <h5>Precio: ${precio}</h3>
                <h5>Cantidad: ${cantidad}</h3>
            </div>
            <div class="remove">
                <img src="../../static/img/svg/remove.svg" class="remove" data-id="${id}" alt="">
            </div>
            `;
        container.appendChild(fila)
        if (document.getElementById(id)) {
            let cant = document.getElementById(id)
            cant.classList.replace('noDisplay', 'cantidad');
            const cant_row = document.createElement('div')
            cant_row.innerHTML = `<div id="${id}" class="cant"><h1>${cantidad}</h1></div>`

            if (cant.getAttribute('id') == id) {
                cant.innerHTML = ''
                cant.appendChild(cant_row)
            }
        }

        total.innerHTML = 'Total: $' + totalcart
        this.save_localstorage(productos)
    })
    localStorage.setItem('total', totalcart)
}

function clearhtml() {
    container.innerHTML = ''
}

function cart_logo(productos) {
    total.innerHTML = 'Total: $' + totalcart
    let cart = document.querySelector(".cart").parentElement.parentElement
    if (productos.length != 0) {
        cart.innerHTML = `
        <a>
            <img src="../../static/img/svg/cart-add.svg" alt="Logo" class="cart">
        </a>
        `
    } else {
        cart.innerHTML = `
        <a>
            <img src="" alt="" class="cart">
        </a>
        `
        colapse.classList.remove('active-cart')
    }
}

function save_localstorage(producto) {
    let productos = []
    productos.push(producto)
    localStorage.setItem('productos', JSON.stringify(productos))
}

function removeProdu(idProdu) {
    let produLocal = JSON.parse(localStorage.getItem('productos'))
    produLocal.forEach(function (produLocal, index) {
        if (produLocal.id == idProdu) {
            produLocal.splice(index, 1)
        }
    })
    localStorage.setItem('productos', JSON.stringify(produLocal))
}

function readLocalStorage() {
    if (localStorage.getItem('productos')) {
        const produLocal = JSON.parse(localStorage.getItem('productos'))
        const total = JSON.parse(localStorage.getItem('total'))
        totalcart = totalcart + total

        produLocal[0].forEach(producto => {
            productos = [...productos, producto]
            const fila = document.createElement('div')
            fila.classList.add('item')
            fila.innerHTML = `
            <div class="logo-item">
                <img src="${producto.imagen}" alt="">
            </div>
            <div class="info-item">
                <h4>${producto.titulo}</h4>
                <h5>Precio: ${producto.precio}</h3>
                <h5>Cantidad: ${producto.cantidad}</h3>
            </div>
            <div class="remove">
                <img src="../../static/img/svg/remove.svg" class="remove" data-id="${producto.id}" alt="">
            </div>
            `

            if (document.getElementById(producto.id)) {
                let cant = document.getElementById(producto.id)
                cant.innerHTML = `<div id="${producto.id}" class="cant"><h1>${producto.cantidad}</h1></div>`
                if (producto.cantidad > 0) {
                    cant.classList.replace('noDisplay', 'cantidad')
                }
            }

            const produ = document.createElement('div')
            produ.classList.add('grid-item')
            produ.innerHTML = `
                <div class="grid-img">
                    <img src="${producto.imagen}" alt="" class="produ">
                    <div id="200" class="cantidad">
                    <div id="${producto.id}" class="cant"><h1>${producto.cantidad}</h1></div>
                </div>
            `
            container.appendChild(fila)

            if (buyitems) {
                buyitems.appendChild(produ)
            }
        })
        cart_logo(productos)
    }
}