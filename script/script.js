const navMenu = document.querySelector('.nav__logo-icon');
const sideBar = document.querySelector('.sidebar');
const closeBar = document.querySelector('.icon__close');

navMenu.addEventListener('click', function(){
	sideBar.classList.remove('hidden');
	console.log('sidebar is click');
});

closeBar.addEventListener('click', function(){
	sideBar.classList.add('hidden');
});
