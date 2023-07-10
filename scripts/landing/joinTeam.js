let form = document.querySelector('.cvForm')
let overlay = document.querySelector('.cvForm .overlay')
let BTN = document.querySelector('.join .connection button')

function hide(){
    form.classList.toggle('hidden')
}

console.log(form);

overlay.addEventListener('click', hide)
BTN.addEventListener('click', hide)