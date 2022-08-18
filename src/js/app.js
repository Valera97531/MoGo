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


	const itemServiceButton = document.querySelectorAll('.item-service__inner'),
		itemHide = document.querySelectorAll('.item-service__hide'),
		itemArrow = document.querySelectorAll('.item-service__arrow');

	let intervalId;

	itemServiceButton.forEach(items => {
		items.addEventListener('click', items => {
			const menu = items.currentTarget.dataset.path;
			itemHide.forEach(item => {
				if (!document.querySelector(`[data-target=${menu}]`).classList.contains('open')) {
					item.classList.remove('_active');
					item.classList.remove('open');
					document.querySelector(`[data-target=${menu}]`).classList.add('_active');
					intervalId = setTimeout(() => {
						document.querySelector(`[data-target=${menu}]`).classList.add('open');
					}, 0);
				}
				if (document.querySelector(`[data-target=${menu}]`).classList.contains('open')) {
					clearTimeout(intervalId);
					document.querySelector(`[data-target=${menu}]`).classList.remove('_active');
					intervalId = setTimeout(() => {
						document.querySelector(`[data-target=${menu}]`).classList.remove('open');
					}, 0);
				}
			});
		});
	});


});
