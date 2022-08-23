// menu show
const showMenu = (toggleId, navId) =>{
    const toggle = document.getElementById(toggleId),
    nav = document.getElementById(navId)

    if(toggle && nav){
        toggle.addEventListener('click', ()=>{
            nav.classList.toggle('show')
        })
    }
}
showMenu('nav-toggle', 'nav-menu')

// active and remove menu
const navLink = document.querySelectorAll('.nav__link')

function linkAction(){
    // active link
    navLink.forEach(n => n.classList.remove('active'))
    this.classList.add('active')

    // remove menu mobile
    const navMenu = document.getElementById('nav-menu')
    navMenu.classList.remove('show')
}

navLink.forEach(n => n.addEventListener('click', linkAction))

// const header = document.querySelector("heaader");

// window.addEventListener ("scroll", function() {
//     header.classList.toggle ("sticky", window.scrollY > 0);
// });


// let menu = document.querySelector('#menu-icon');
// let navbar = document.querySelector('.navbar');

// menu.onclick = () => {
//     menu.classList.toggle('bx-x');
//     navbar.classList.toggle('active');
// }; 

// window.onscroll = () => {
//     menu.classList.remove('bx-x');
//     navbar.classList.remove('active');
// };