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

const swiper = new Swiper('.hero-swiper', {
  direction: 'horizontal',
  loop: true,
  autoplay: {
    delay: 3000,
  },
 });




