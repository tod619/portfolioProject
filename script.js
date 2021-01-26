// Add sticky to navbar whne user scolls to navbar
const navbar = document.querySelector('.navbar');
const navbarOffSet = navbar.offsetTop;

const sections = document.querySelectorAll('section')
const navbarLinks = document.querySelectorAll('.navbar-link')

const progress = document.querySelector('.progress-bars-wrapper')
const progressBarsPercent = [97,90,82,75,80,70,55]


window.addEventListener('scroll', () => {
    mainFn()
})

const mainFn = () => {
    if(window.pageYOffset >= navbarOffSet){
        navbar.classList.add('sticky');
    } else {
        navbar.classList.remove('sticky');
    }

    sections.forEach((section, i) => {
        if(window.pageYOffset >= section.offsetTop - 10) {
            navbarLinks.forEach(navbarLink => {
                navbarLink.classList.remove('change');
            })

            navbarLinks[i].classList.add('change');
        }
    })

    if(window.pageYOffset + window.innerHeight >= progress.offsetTop) {
        document.querySelectorAll('.progress-percent').forEach((el,i) => {
            el.style.width = `${progressBarsPercent[i]}%`

            el.previousElementSibling.firstElementChild.textContent = progressBarsPercent[i];
        })
    }
}

mainFn()

window.addEventListener('resize',() => {
    window.location.reload();
})