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


	const itemService = document.querySelectorAll('.item-service'),
		itemHide = document.querySelector('.item-service__hide');

	// itemService.forEach(item => {
	// 	item.addEventListener('click', () => {
	// 		itemService.classList.add('_active');
	// 	});
	// });

	// itemService.addEventListener('click', () => {
	// 	itemService.classList.toggle('_active');
	// });

	itemService.forEach(items => {
		items.addEventListener('click', () => {
			itemHide.classList.toggle('_active');
		});
	});



});
