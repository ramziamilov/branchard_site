dropdownBtn = document.querySelectorAll(".header__btn_styles");
dropdownItem = document.querySelectorAll(".styles");
dropdownSvg = document.querySelectorAll(".header__styles_svg");
dropdownLink = document.querySelectorAll(".styles__link");


dropdownBtn.forEach(function(el) {
  el.addEventListener('click', function(e) {
    const path = e.currentTarget.dataset.path;

      if(document.querySelector(`[data-target="${path}"]`).classList.contains('style--open')) {
        document.querySelector(`[data-target="${path}"]`).classList.remove('style--open');
        document.querySelector(`[data-targetsvg="${path}"]`).classList.remove('header__styles_svg--open');
      }

      else {
      dropdownItem.forEach(function(el) {el.classList.remove('style--open')});
      document.querySelector(`[data-target="${path}"]`).classList.add('style--open')

      dropdownSvg.forEach(function(el) {el.classList.remove('header__styles_svg--open')});
      document.querySelector(`[data-targetsvg="${path}"]`).classList.add('header__styles_svg--open');}
  });
});

dropdownLink.forEach(function(el) {
  el.addEventListener('click', () => {
    dropdownItem.forEach(function(el) {el.classList.remove('style--open')});
    dropdownSvg.forEach(function(el) {el.classList.remove('header__styles_svg--open')});
  })
});

const heroSwiper = new Swiper('.hero-swiper', {
  direction: 'horizontal',
  loop: true,
  autoplay: {
    delay: 3000,
  },
 });

 const gallarySwiper = new Swiper('.gallary__swiper', {
  direction: 'horizontal',
  slidesPerView: 3,
  spaceBetween: 37,
  slidesPerGroup: 3,

  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev'},

    pagination: {
      el: '.swiper-pagination',
      type: 'custom',
    },
 });


 const element = document.querySelector('.gallary__select');
 const choices = new Choices(element, {
  position: 'bottom',
  searchEnabled: false,
  itemSelectText: "",
 });


 new Accordion ('.catalog__list', {
  elementClass: 'catalog__item_top',
  triggerClass: 'catalog__btn',
  panelClass: 'catalog__item_bot',
  activeClass: 'catalog__item_top--active'
});
