const toggleMenu = () => {
    const menuToggler = document.querySelector('.menuToggler');
    menuToggler.classList.toggle('menuToggler--clicked');

    const nav = document.querySelector('.nav');
    nav.classList.toggle('nav--hidden');

    const cover = document.querySelector('.cover');
    cover.classList.toggle('cover--hidden');

    const logoCaption = document.querySelector('.logoCaption');
    logoCaption.classList.toggle('logoCaption--hidden');
    logoCaption.style.animationDelay = '0s';
    logoCaption.style.animationDuration = '0.5s';

    const mobileSocialIcons = document.querySelector('.navbar__icons--mobile');
    mobileSocialIcons.classList.toggle('navbar__icons--hidden');
}
