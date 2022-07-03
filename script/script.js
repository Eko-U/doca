const navMenu = document.querySelector('.nav__logo-icon');
const sideBar = document.querySelector('.sidebar');
const closeBar = document.querySelector('.icon__close');
const inputName = document.querySelector('.newsletter__input')
const btn = document.querySelector('.btn-form')
const nameError = document.querySelector('.nameError');
const emailError = document.querySelector('.emailError')
const email = document.querySelector('.email');
const message = document.querySelector('.message');
const messageError = document.querySelector('.messageError');

navMenu.addEventListener('click', function(){
	sideBar.classList.toggle('hidden');
	console.log('sidebar is click');
});


// HOME FORM BUTTON

console.log(btn);
btn.addEventListener('click', (e) => {
	if (inputName.value === '' || inputName.value === null) {
		e.preventDefault();
		nameError.textContent = 'Please Enter Your Username 😊';
	}else if(inputName.value.length > 20){
		e.preventDefault();
		nameError.textContent = 'Name too long 🙂🙂'
	}else if(inputName.value.length > 0) {
		nameError.style.display = 'none';
	}
	
	if(email.value === '' || email.value === null) {
		e.preventDefault();
		emailError.textContent = 'Please Enter Your email 😊';
	}else if (email.value.length > 0) {
		emailError.style.display = 'none';
	}
});


message.addEventListener('input', function(e){
});

if (message.value < 6) {
		messageError.textContent = 'Message is too short. Please try send us more messages';
}