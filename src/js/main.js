const burgerBtn = document.querySelector('.burger-btn');
const navList = document.querySelector('.navbar__list');
const footerYear = document.querySelector('.footer__year');
const navbarItems = document.querySelectorAll('.navbar__item');

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

const addPosition = () => {


};



handleCurrentYear();
burgerBtn.addEventListener('click', showMenu);
// navbarItems.addEventListener('click', moveTo);
window.addEventListener('scroll', Position);
