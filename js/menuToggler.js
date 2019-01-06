const toggleMenu = () => {
    const menuToggler = document.querySelector('.menuToggler');
    menuToggler.classList.toggle('menuToggler--clicked');

    const nav = document.querySelector('.nav');
    nav.classList.toggle('nav--hidden');

    const cover = document.querySelector('.cover');
    cover.classList.toggle('cover--hidden');
}

const goTo = (element) => {
    toggleMenu();
    element.scrollIntoView({behavior: 'smooth', block: 'start'});
}

const navItems = document.querySelectorAll('.nav__item')
navItems.forEach(item => {
    let targetElement = document.querySelector('.'+item.dataset.target);
    if(item.dataset.target === 'facebook') {
        item.addEventListener('click', ()=> window.open('https://www.facebook.com/WoloveBurgersMistrzejowiceNH/', '_blank'));
    } else {
        item.addEventListener('click', ()=>goTo(targetElement))
    }
})
