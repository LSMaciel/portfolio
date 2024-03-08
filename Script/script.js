const menu = document.querySelector('.navbar');

function activeScroll(){
    menu.classList.toggle('ativo',scrollY>40);
}

window.addEventListener('scroll',activeScroll);


