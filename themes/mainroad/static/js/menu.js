'use strict';

(function iifeMenu(document, window, undefined) {
	var menuBtn = document.querySelector('.menu__btn');
	var	menu = document.querySelector('.menu__list');

	function toggleMenu() {
		menu.classList.toggle('menu__list--active');
		menu.classList.toggle('menu__list--transition');
		this.classList.toggle('menu__btn--active');
		this.setAttribute(
			'aria-expanded',
			this.getAttribute('aria-expanded') === 'true' ? 'false' : 'true'
		);
	}

	function removeMenuTransition() {
		this.classList.remove('menu__list--transition');
	}

	if (menuBtn && menu) {
		menuBtn.addEventListener('click', toggleMenu, false);
		menu.addEventListener('transitionend', removeMenuTransition, false);
	}
}(document, window));

// Convert numbers of Jalali month to name of it
function jDateToName(date)
{
	// date format => YYYY-MM-DD
	var months=[
		"فروردین",
		"اردیبهشت",
		"خرداد",
		"تیر",
		"مرداد",
		"شهریور",
		"مهر",
		"آبان",
		"آذر",
		"دی",
		"بهمن",
		"اسفند"];
	// return format => "۲۱ اردیبهشت ۹۹" rtl
	return date[2] + months[parseInt(date[1]) - 1] + date[0];
}

// change all dates on page to Jalali
var tags = document.querySelectorAll("time");
if (tags.length != 0)
{
	tags.forEach(function (tag) {
		var jDate = moment(tag.innerText, 'YYYY-M-D').locale('fa').format('YYYY-M-D');
		jDate = jDate.split("-");
		tag.innerText = jDateToName(jDate);
	})
}

