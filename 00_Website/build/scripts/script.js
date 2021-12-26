//navbar => sticky
let last_scroll;

let navbar = document.querySelector('body > header > nav');

let prevScrollpos = window.scrollY;

let scrollFlag = true;

//nav sticking to the top

window.addEventListener('scroll', function () {
	last_scroll = window.scrollY;

	if (scrollFlag) {
		if (window.scrollY > 20) {
			navbar.classList.add('nav__stick');
			//console.log(window.scrollY)
			//=> jak daleko je od vršku
		} else {
			navbar.classList.remove('nav__stick');
		}
		//nav hiding when scrolling
		let currentScrollPos = window.scrollY;

		if (currentScrollPos < 200) {
		} else if (prevScrollpos > currentScrollPos) {
			document.getElementById('navBar').style.top = '0';
		} else {
			document.getElementById('navBar').style.top = '-64px';
		}
		prevScrollpos = currentScrollPos;
	}
});

// Hamburger Menu
const hamburger = document.querySelector('.body__header__nav__container__hamburger');
const slideMenu = document.querySelector('.body__header__extendable_nav');
hamburger.addEventListener('click', e => {
	hamburger.classList.toggle('hamburger_active');
	slideMenu.classList.toggle('body__header__extendable_nav--closed');
	if (scrollFlag) {
		navbar.classList.remove('nav__stick');
		scrollFlag = false;
		document.body.style.overflowY = 'hidden';
	} else {
		document.body.style.overflowY = 'scroll';
		if (!(window.scrollY <= 20)) {
			navbar.classList.add('nav__stick');
		}
		scrollFlag = true;
	}
});

const slideMenuLinks = document.querySelectorAll('.body__header__extendable_nav__button_container > a');

for (link of slideMenuLinks) {
	link.addEventListener('click', e => {
		hamburger.classList.toggle('hamburger_active');
		slideMenu.classList.toggle('body__header__extendable_nav--closed');

		document.body.style.overflowY = 'scroll';
		if (!(window.scrollY <= 20)) {
			navbar.classList.add('nav__stick');
		}
		scrollFlag = true;
	});
}
