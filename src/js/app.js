import * as flsFunctions from "./modules/function.js";
flsFunctions.isWebp();

document.addEventListener('DOMContentLoaded', () => {
	const menu = document.querySelector('.header__menu'),
		burger = document.querySelector('.header__burger'),
		menuClose = document.querySelector('.header__menu-close'),
		menuLink = document.querySelectorAll('.header__link');

	burger.addEventListener('click', () => {
		menu.classList.toggle('_active');
	});

	menuClose.addEventListener('click', () => {
		menu.classList.remove('_active');
	});

	menuLink.forEach(item => {
		item.addEventListener('click', () => {
			menu.classList.remove('_active');
		});
	});

});
