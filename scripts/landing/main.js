let navBTN = document.querySelector('#navBTN');
let sideNav = document.querySelector('nav .links')

navBTN.addEventListener('click', ()=>{
    sideNav.classList.toggle('show')
})