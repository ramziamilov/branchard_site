let dropdownItem = document.querySelectorAll(".styles");
let dropdownBtn = document.querySelectorAll(".header__btn_styles");
let dropdownSvg = document.querySelectorAll(".header__styles_svg");
let dropdownLink = document.querySelectorAll(".styles__link");
let tabsLink = document.querySelectorAll(".link_painters");
let tabsItem = document.querySelectorAll(".catalog__content_tabs");
let catalogBtn = document.querySelectorAll(".catalog__btn");




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
      type: 'fraction',
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


catalogBtn.forEach(function(el) {
  el.addEventListener('click', function(e) {

    const path = e.currentTarget.dataset.path;

    if(path==="no_info")
      {
        tabsItem.forEach(function(el){el.classList.remove('catalog__content_tabs--active')});
        document.querySelector(`[data-target="no_info"]`).classList.add('catalog__content_tabs--active');
      }

    else
      {
        tabsItem.forEach(function(el){el.classList.remove('catalog__content_tabs--active')});
        document.querySelector(`[data-target="${path}"]`).classList.add('catalog__content_tabs--active');
      }
  });

});


tabsLink.forEach(function(el) {
  el.addEventListener('click', function(e) {
    const path = e.currentTarget.dataset.path;

    tabsLink.forEach(function(btn){btn.classList.remove('link_painters--active')});
    e.currentTarget.classList.add('link_painters--active');

    tabsItem.forEach(function(el){el.classList.remove('catalog__content_tabs--active')});
    document.querySelector(`[data-target="${path}"]`).classList.add('catalog__content_tabs--active');

  });
});


document.querySelectorAll('a[href^="#"').forEach(link => {

  link.addEventListener('click', function(e) {
      e.preventDefault();

      let href = this.getAttribute('href').substring(1);
      const scrollTarget = document.getElementById(href);
      const topOffset = 0;
      const elementPosition = scrollTarget.getBoundingClientRect().top;
      const offsetPosition = elementPosition - topOffset;

      window.scrollBy({
          top: offsetPosition,
          behavior: 'smooth'
      });
  });
});

const newsSwiper = new Swiper('.news__swiper', {
  direction: 'horizontal',
  slidesPerView: 3,
  spaceBetween: 35,
  slidesPerGroup: 2,

  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev'},

    pagination: {
      el: '.swiper-pagination',
      type: 'custom',
    },
 });

 const projectsSwiper = new Swiper('.projects__swiper', {
  direction: 'horizontal',
  slidesPerView: 1,
  spaceBetween: 150,
  /*slidesOffsetAfter: 75,
  slidesOffsetBefore:75,*/
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev'},
 });


 var selector = document.querySelector("input[type='tel']");
 var im = new Inputmask("+7 (999) 999-99-99");
 im.mask(selector);



 const validation = new JustValidate('#contacts__form_input',

 {
  errorLabelCssClass: 'is-label-invalid',
  errorLabelStyle: {
    position: 'top',
    color: '#D11616',
    fontWeight: '400',
    fontSize: '12px',
    lineHeight: '16px',
  },

  focusInvalidField: true,
  lockForm: true,
  validateBeforeSubmitting: true,

});

validation
  .addField('#name', [
    {
      rule: 'required',
      errorMessage: 'Вы не ввели имя',
    },

    {
      rule: 'minLength',
      value: 3,
      errorMessage: 'Имя должно содержать более 2 символов',
    },
    {
      rule: 'maxLength',
      value: 30,
      errorMessage: 'Имя не может содержать более 30 символов',
    },
  ])

  .addField('#tel', [
    {
      rule: 'required',
      errorMessage: 'Вы не ввели телефон',
    },
    {
      validator: (name, value) => {
      const phone = selector.inputmask.unmaskedvalue()
      return Number(phone) && phone.length === 10},

      errorMessage: 'Недопустимый формат',
    },
  ]);

   // Функция ymaps.ready() будет вызвана, когда
    // загрузятся все компоненты API, а также когда будет готово DOM-дерево.
    ymaps.ready(init);
    function init(){
        // Создание карты.
        var myMap = new ymaps.Map("map", {
            // Координаты центра карты.
            // Порядок по умолчанию: «широта, долгота».
            // Чтобы не определять координаты центра карты вручную,
            // воспользуйтесь инструментом Определение координат.
            center: [55.75846806898367,37.60108849999989],
            // Уровень масштабирования. Допустимые значения:
            // от 0 (весь мир) до 19.
            zoom: 15});

            var myPlacemark = new ymaps.Placemark([55.75846806898367,37.60108849999989], {}, {
            iconLayout: 'default#imageWithContent',
            iconImageHref: "/img/map_loc.svg",
            iconImageSize: [20, 20]
        });

          // Размещение геообъекта на карте.
          myMap.geoObjects.add(myPlacemark);

    }
