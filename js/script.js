const mainDiv = document.querySelector('main');
const menuLinks = document.querySelectorAll('.menu a');
const toTopButton = document.querySelector('.to-top')

const getDistanceFromTheTop = (el) => {
    const id = el.getAttribute('href');
    return document.querySelector(id).offsetTop;
}

const scrollToSection = (e) => {
    e.preventDefault();
    mainDiv.scroll({
        top: getDistanceFromTheTop(e.target),
        behavior: 'smooth'
    })
}

menuLinks.forEach(link => {
    link.addEventListener('click', scrollToSection);
})

toTopButton.addEventListener('click', (e) => {
    e.preventDefault();
    mainDiv.scroll({
        top: 0,
        behavior: 'smooth'
    })
})

mainDiv.addEventListener('scroll', (e) => {
    e.preventDefault();
    const heroDiv = document.querySelector('.hero');
    const heroDistanceFromTheTop = heroDiv.getBoundingClientRect()['top'];

    if (heroDistanceFromTheTop > (window.innerHeight - 1) * -1) {
        toTopButton.classList.add('to-top-hidden');
        return;
    }

    if (heroDistanceFromTheTop < 0) {
        toTopButton.classList.remove('to-top-hidden');
    }
});