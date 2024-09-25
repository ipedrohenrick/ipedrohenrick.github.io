const mainDiv = document.querySelector('main');
const menuLinks = document.querySelectorAll('.menu a');

const getDistanceFromTheTop = (element) => {
    const id = element.getAttribute('href');
    return document.querySelector(id).offsetTop;
}

const scrollToSection = (event) => {
    event.preventDefault();
    mainDiv.scroll({
        top: getDistanceFromTheTop(event.target),
        behavior: 'smooth'
    })
}

menuLinks.forEach(link => {
    link.addEventListener('click', scrollToSection);
})