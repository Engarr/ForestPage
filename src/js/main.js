const burgerBtn = document.querySelector('.burger-btn');
const navList = document.querySelector('.navbar__list');
const footerYear = document.querySelector('.footer__year');
const navbarItems = document.querySelectorAll('.navbar__item');
const allSections = document.querySelectorAll('.section');

const showMenu = () => {
	navList.classList.toggle('active');
	navbarItems.forEach((item) => {
		item.addEventListener('click', () => {
			navList.classList.remove('active');
		});
	});
};
const handleCurrentYear = () => {
	const year = new Date().getFullYear();
	footerYear.innerText = year;
};

const addPosition = (id) => {
	const position = window.scrollY;
	allSections.forEach((section) => {
		if (
			section.classList.contains('about-us') &&
			section.offsetTop <= position + 80
		) {
			console.log(navbarItems);
		} else if (
			!section.classList.contains('about-us') &&
			section.offsetTop <= position + 80
		) {
			console.log(`zle`);
		}
	});
};

handleCurrentYear();
burgerBtn.addEventListener('click', showMenu);
window.addEventListener('scroll', addPosition);
