const tabs = document.querySelectorAll('[data-tab-target]');
const tabContents = document.querySelectorAll('[data-tab-content]');

tabs.forEach((tab) => {
	tab.addEventListener('click', () => {
		const target = document.querySelector(tab.dataset.tabTarget);
		tabContents.forEach((tabContent) => {
			tabContent.classList.remove('active');
		});
		tabs.forEach((tab) => {
			tab.classList.remove('active');
		});
		tab.classList.add('active');
		target.classList.add('active');
	});
});
const india = document.querySelector('.nav-ribbon-first-child-child');
const dropDown = document.querySelector('.drop-down');

let isDropDownOpen = false;

india.addEventListener('click', () => {
	if (isDropDownOpen) {

		dropDown.style.border = '1px solid #d1d1d1';
		dropDown.style.height = '7em';
	} else {
		dropDown.style.border = '0';
		dropDown.style.height = '0';
	}
	isDropDownOpen = !isDropDownOpen;
});

