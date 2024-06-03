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


//menu hamburger
const hamburger = document.querySelector(".hamburger");
const ul = document.querySelector(".menu");

hamburger.addEventListener("click", () => {
    hamburger.classList.toggle("active");
    ul.classList.toggle("active");

})


//formulario carregar na p´rpia página
class FormSubmit {
	constructor(settings) {
	  this.settings = settings;
	  this.form = document.querySelector(settings.form);
	  this.formButton = document.querySelector(settings.button);
	  if (this.form) {
		this.url = this.form.getAttribute("action");
	  }
	  this.sendForm = this.sendForm.bind(this);
	}
  
	displaySuccess() {
	  this.form.innerHTML = this.settings.success;
	}
  
	displayError() {
	  this.form.innerHTML = this.settings.error;
	}
  
	getFormObject() {
	  const formObject = {};
	  const fields = this.form.querySelectorAll("[name]");
	  fields.forEach((field) => {
		formObject[field.getAttribute("name")] = field.value;
	  });
	  return formObject;
	}
  
	onSubmission(event) {
	  event.preventDefault();
	  event.target.disabled = true;
	  event.target.innerText = "Enviando...";
	}
  
	async sendForm(event) {
	  try {
		this.onSubmission(event);
		await fetch(this.url, {
		  method: "POST",
		  headers: {
			"Content-Type": "application/json",
			Accept: "application/json",
		  },
		  body: JSON.stringify(this.getFormObject()),
		});
		this.displaySuccess();
	  } catch (error) {
		this.displayError();
		throw new Error(error);
	  }
	}
  
	init() {
	  if (this.form) this.formButton.addEventListener("click", this.sendForm);
	  return this;
	}
  }
  
  const formSubmit = new FormSubmit({
	form: "[data-form]",
	button: "[data-button]",
	success: "<h1 class='success'>Mensagem enviada!</h1>",
	error: "<h1 class='error'>Não foi possível enviar sua mensagem.</h1>",
  });
  formSubmit.init();