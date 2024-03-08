//Scroll do menu
const menu = document.querySelector('.navbar');

function activeScroll(){
    menu.classList.toggle('ativo',scrollY>40);
}

window.addEventListener('scroll',activeScroll);


//Acorcdeon

const acordeonItem =document.querySelector('.accordion li')

function openAcordeon(){
    acordeonItem.forEach(item =>{
        item.addEventListener('click',()=>{
            acordeonItem.forEach(item =>{
                item.classList.remove('opened')
            })
            item.classList.remove('opened')
        })
    })
}


