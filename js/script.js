const menuBtn =document.querySelector('.menu-icon')
const menu =document.querySelector('.menu-list')

if (menuBtn && menu) {
    menuBtn.addEventListener('click',() => {
        menuBtn.classList.toggle('active')
        menu.classList.toggle('active')
    })
}