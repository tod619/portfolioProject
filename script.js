// Add sticky to navbar whne user scolls to navbar
const navbar = document.querySelector('.navbar');
const navbarOffSet = navbar.offsetTop;

window.addEventListener('scroll', () => {
    if(window.pageYOffset >= navbarOffSet){
        navbar.classList.add('sticky');
    } else {
        navbar.classList.remove('sticky');
    }
})