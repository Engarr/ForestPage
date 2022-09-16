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
const handleScrollSpy = () => {
	if (document.body.classList.contains('main-page')) {
		const sections = [];

		allSections.forEach((section) => {
			if (window.scrollY <= section.offsetTop + section.offsetHeight - 80) {
				sections.push(section);
				console.log(sections);
				const activeSection = document.querySelector(`${sections[0].id}`);
				console.log(activeSection);
			}
		});
	}
};

const handleCurrentYear = () => {
	const year = new Date().getFullYear();
	footerYear.innerText = year;
};

handleCurrentYear();
burgerBtn.addEventListener('click', showMenu);
window.addEventListener('scroll', handleScrollSpy);
