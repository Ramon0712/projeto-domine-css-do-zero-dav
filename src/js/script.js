const menuto = document.querySelector('.nav__menu');
const menutoLista = document.querySelector('.nav__list');
const links = document.querySelectorAll('.nav__link');



menuto.addEventListener("click", () => {
    // menuto.addEventListener("click",function() {

    menutoLista.classList.toggle('nav__list--show');

});

links.forEach(function (link) {


    link.addEventListener("click", () => {
        //   link.addEventListener("click",function() {

        menutoLista.classList.remove('nav__list--show');

    })

});

