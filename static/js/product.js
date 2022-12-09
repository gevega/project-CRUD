let selProdu = document.querySelector('body')

selProdu.addEventListener('click', eventList)
document.addEventListener('DOMContentLoaded', readLS())

function eventList(e) {
    if (e.target.classList.contains('button')) {
        const divProdu = e.target.parentElement.parentElement.parentElement
        readProdu(divProdu)
    }
}

function readProdu(divProdu) {
    if (divProdu.querySelector('.cant')) {
        cantProdu = divProdu.querySelector('.cant').textContent
    } else { cantProdu = 0 }

    const infoSel = {
        id: divProdu.querySelector('.buy').getAttribute('data-id'),
        imagen: divProdu.querySelector('.produ').src,
        titulo: divProdu.querySelector('h2').textContent,
        precio: divProdu.querySelector('.precio').textContent,
        cantidad: cantProdu
    }
    saveLS(infoSel)
}

function saveLS(infoSel) {
    localStorage.setItem('select', JSON.stringify(infoSel))
    window.location.href = "product.html"
}

function readLS() {
    if (localStorage.getItem('select')) {
        const selectLS = JSON.parse(localStorage.getItem('select'))
        if(document.querySelector('#selProdu')){
            const rowProdu = document.createElement('div')
            rowProdu.classList.add('container')
            rowProdu.setAttribute('id', 'product')
            rowProdu.innerHTML = `
                <div class="grid-item">
                    <div class="grid-img">
                        <img src="${selectLS.imagen}" alt="ALEMANIA 2022" class="produ">
                        <div id="102" class="noDisplay">
                            </div>
                        <div id="${selectLS.id}" class="noDisplay">
                        </div>
                        <div class="pre">
                            <span>$</span>
                            <span class="precio">${selectLS.precio}</span>
                        </div>
                    </div>
                    <div class="info">
                        <h2>${selectLS.titulo}</h2>
                        <p>La camiseta de ${selectLS.titulo} posee una nueva silueta de uniforme de fútbol. Hecha para un mejor desempeño e idéntica a la que usan los jugadores durante los partidos oficiales.</p>
                        <p>El nuevo tejido ultratranspirable con tecnología 3D que repele la humedad y las áreas de enfriamiento mantienen tu piel fresca mientras sube la temperatura en la cancha.</p>
                        <a class="buy" data-id="${selectLS.id}">COMPRAR</a>
                    </div>
                </div>
            `
            const contSel=document.querySelector('#selProdu')
            contSel.appendChild(rowProdu)

            if (document.getElementById(selectLS.id)) {
                let cant = document.getElementById(selectLS.id)
                cant.innerHTML = `<div id="${selectLS.id}" class="cant"><h1>${selectLS.cantidad}</h1></div>`
                if (selectLS.cantidad > 0) {
                    cant.classList.replace('noDisplay', 'cantidad')
                }
            } 
        }
    }
}