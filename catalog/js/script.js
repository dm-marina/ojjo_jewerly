const openButton = document.querySelector('#menu-open');
const closeButton=document.querySelector('#close');

const menu = document.querySelector('#menu');
openButton.addEventListener('click',()=>{
    menu.classList.add('show-menu');
})
closeButton.addEventListener('click', ()=>{
    menu.classList.remove('show-menu');
})