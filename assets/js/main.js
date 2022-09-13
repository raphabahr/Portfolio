// Hamburger button

const botaoMenu = document.querySelector('.cabecalho__menu');
const menu = document.querySelector('.menu-lateral');

if (botaoMenu) {
    botaoMenu.addEventListener('click', () => {
        menu.classList.toggle('menu-lateral--ativo');
    });
}

// Year
document.getElementById("year").innerHTML = new Date().getFullYear();