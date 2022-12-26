let welcome = 'NULL'
let account = 'NULL'

if (document.querySelector('.welcome')) {
    welcome = document.querySelector('.welcome')
    account = document.querySelector('#account')
    welcome.addEventListener('click', close_welcome)
    let dataold = (account.getAttribute('value')).split('-', 2)
    let data = 'NULL'

    if(dataold == ''){
        data = JSON.parse(localStorage.getItem('account'))
        if (data == '') {
            welcome.style.opacity = 0
        } else {
            welcome.querySelector('h2').innerHTML = '¡Bienvenido ' + data[0] + ' ' + data[1] + '!'
            localStorage.setItem('account', JSON.stringify(data))
        }
    }
}

function close_welcome(e) {
    if (e.target.classList.contains('remove')) {
        let wel_text = document.querySelector('.wel-text')
        let wel_remove = document.querySelector('.wel-remove')

        welcome.classList.toggle('welcome-remove')
        wel_text.classList.toggle('wel-text-rem')
        wel_remove.classList.toggle('wel-remove-rem')
    }
}