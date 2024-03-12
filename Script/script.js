//Scroll do menu
const menu = document.querySelector('.navbar');

function activeScroll(){
    menu.classList.toggle('ativo',scrollY>40);
}

window.addEventListener('scroll',activeScroll);


//Acorcdeon

let accordionsItems = document.querySelectorAll('.accordion li')

		accordionsItems.forEach(item => {
			item.addEventListener('click', () => {
				accordionsItems.forEach(item => {
					item.classList.remove('opened')
				})

				item.classList.add('opened')
			})
		})
