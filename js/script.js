let dropdownItem = document.querySelectorAll(".styles");
let dropdownBtn = document.querySelectorAll(".header__btn-styles");
let dropdownSvg = document.querySelectorAll(".header__styles-svg");
let dropdownLink = document.querySelectorAll(".styles__link");
let tabsLink = document.querySelectorAll(".link-painters");
let tabsItem = document.querySelectorAll(".catalog__content-tabs");
let catalogBtn = document.querySelectorAll(".catalog__btn");
let burger = document.querySelector(".header__btn-burger");
let menu = document.querySelector(".header__nav");
let menuLink = document.querySelectorAll(".nav__link");
let searchBtn = document.querySelector(".header__btn-search-top");
let closeBtn = document.querySelector(".header__btn-search-close");

burger.addEventListener('click', () => {
  burger.classList.toggle('burger--active');
  menu.classList.toggle('header__nav--active');
  document.body.classList.toggle('stop-scroll');
});

menuLink.forEach(function(el) {
  el.addEventListener('click', () => {
    burger.classList.remove('burger--active');
    menu.classList.remove('header__nav--active');
    document.body.classList.remove('stop-scroll');
  });
});

searchBtn.addEventListener('click', () => {
  searchBtn.classList.add("header__btn-search-top--disable");
  closeBtn.classList.add("header__btn-search-close--active");
  document.querySelector(".header__form-top").classList.add("header__form-top--active")
});

closeBtn.addEventListener("click", () => {
  searchBtn.classList.remove("header__btn-search-top--disable");
  closeBtn.classList.remove("header__btn-search-close--active");
  document.querySelector(".header__form-top").classList.remove("header__form-top--active");
  document.querySelector(".search").value = "";
});



dropdownBtn.forEach(function(el) {
  el.addEventListener('click', function(e) {
    const path = e.currentTarget.dataset.path;

      if(document.querySelector(`[data-target="${path}"]`).classList.contains('style--open'))
      {
        document.querySelector(`[data-target="${path}"]`).classList.remove('style--open');
        document.querySelector(`[data-targetsvg="${path}"]`).classList.remove('header__styles-svg--open');
      }

      else {
      dropdownItem.forEach(function(el) {el.classList.remove('style--open')});
      document.querySelector(`[data-target="${path}"]`).classList.add('style--open')

      dropdownSvg.forEach(function(el) {el.classList.remove('header__styles-svg--open')});
      document.querySelector(`[data-targetsvg="${path}"]`).classList.add('header__styles-svg--open');}
  });
});

dropdownLink.forEach(function(el) {
  el.addEventListener('click', () => {
    dropdownItem.forEach(function(el) {el.classList.remove('style--open')});
    dropdownSvg.forEach(function(el) {el.classList.remove('header__styles-svg--open')});
  });
});


document.addEventListener("click", function(e) {
  let target = e.target;
  if (!target.closest(".nav__list")) {
    dropdownItem.forEach(el => {
        el.classList.remove("style--open");
    })
     dropdownSvg.forEach(el => {
        el.classList.remove("header__styles-svg--open");
    });
  }
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

  breakpoints: {
    // when window width is >= 320px
    320: {
      slidesPerView: 1,
      spaceBetween: 37,
      slidesPerGroup: 1,
    },

    // when window width is >= 768
    767: {
      slidesPerView: 2,
      spaceBetween: 34,
    },

    // when window width is >= 992px
    992: {
      slidesPerView: 2,
      spaceBetween: 34
    },

    1200: {
      slidesPerView: 3,
      spaceBetween: 37,
      slidesPerGroup: 3,
    }
  },

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
  renderSelectedChoices: "auto",
 });


 new Accordion ('.catalog__list', {
  elementClass: 'catalog__item-top',
  triggerClass: 'catalog__btn',
  panelClass: 'catalog__item-bot',
  activeClass: 'catalog__item-top--active'
});


catalogBtn.forEach(function(el) {
  el.addEventListener('click', function(e) {

    const path = e.currentTarget.dataset.path;

    if(path==="no_info")
      {
        tabsItem.forEach(function(el){el.classList.remove('catalog__content-tabs--active')});
        document.querySelector(`[data-target="no_info"]`).classList.add('catalog__content-tabs--active');
      }

    else
      {
        tabsItem.forEach(function(el){el.classList.remove('catalog__content-tabs--active')});
        document.querySelector(`[data-target="${path}"]`).classList.add('catalog__content-tabs--active');
      }
  });

});


tabsLink.forEach(function(el) {
  el.addEventListener('click', function(e) {
    const path = e.currentTarget.dataset.path;

    tabsLink.forEach(function(btn){btn.classList.remove('link-painters--active')});
    e.currentTarget.classList.add('link-painters--active');

    tabsItem.forEach(function(el){el.classList.remove('catalog__content-tabs--active')});
    document.querySelector(`[data-target="${path}"]`).classList.add('catalog__content-tabs--active');

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

document.querySelectorAll('a[data-path]').forEach(link => {

  link.addEventListener('click', function(e) {
      e.preventDefault();

      let path = this.getAttribute('data-path').substring(0);
      const scrollTarget = document.querySelector(`[data-target="${path}"`);
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
  slidesPerGroup: 3,

  breakpoints: {
   // when window width is >= 320px
    320: {
      slidesPerView: 1,
      spaceBetween: 55,
      slidesPerGroup: 1,

    },

    575: {
      slidesPerView: 1,
      spaceBetween: 60,
      slidesPerGroup: 1,
    },

    // when window width is >= 640px
    768: {
      slidesPerView: 2,
      spaceBetween: 55,
      slidesPerGroup: 2,
    },

    // when window width is >= 992px
    992: {
      slidesPerView: 3,
      spaceBetween: 43,
      slidesPerGroup: 3,
    },

    1024: {
      slidesPerView: 3,
      spaceBetween: 55,
      slidesPerGroup: 3,
    },

    1200: {
      slidesPerView: 3,
      spaceBetween: 55,
      slidesPerGroup:3,
    },
  },

  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev'},

    pagination: {
      el: '.swiper-pagination',
      type: 'bullets',
      clickable: true,
    },
 });



 const projectsSwiper = new Swiper('.projects__swiper', {
  direction: 'horizontal',
  slidesPerView: 3,
  slidesPerGroup: 3,
  spaceBetween: 50,

  breakpoints: {
    // when window width is >= 320px
     320: {
       slidesPerView: 1,
       spaceBetween: 50,
       slidesPerGroup: 1,
     },

     // when window width is >= 640px
     768: {
       slidesPerView: 2,
       spaceBetween: 50,
     },

     // when window width is >= 992px
     992: {
       slidesPerView: 2,
       spaceBetween: 50,
     },

     1200: {
      slidesPerView: 2,
      spaceBetween: 50,
    },

    1360: {
      slidesPerView: 3,
      spaceBetween: 50,
    },

    },

  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev'},
 });


 var selector = document.querySelector("input[type='tel']");
 var im = new Inputmask("+7 (999) 999-99-99");
 im.mask(selector);



 const validation = new JustValidate('#contacts__form-input',

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


const gallaryModalWindow = new HystModal({
      linkAttributeName: "data-hystmodal",
      closeOnOverlay: false,
      catchFocus: true,
  });

  tippy('#tultipone', {
    content: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Explicabo repudiandae doloremque architecto eligendi ipsam totam. Deserunt, sed? Ex veniam veritatis corrupti nemo facere illum laboriosam beatae odio, itaque, perferendis vitae?',
    duration: 500,
    theme: 'custom',
  });
  tippy('#tultiptwo', {
    content: 'My tooltip!',
    duration: 500,
    theme: 'custom',
  });
  tippy('#tultipthree', {
    content: 'My tooltip!',
    duration: 500,
    theme: 'custom',
  });
