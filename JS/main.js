window.addEventListener('DOMContentLoaded', function () {

  // hero-СЛАЙДЕР ======================================================================================================================================================

  const swiper = new Swiper('.swiper', {
    slidesPerView: 1,
    loop: true,
    pagination: {
      el: '.swiper-pagination',
    },
    autoplay: {
      delay: 3500,
      disableOnInteraction: false,
    },
    mouseTouch: true,
  })

  // МЕНЮ ======================================================================================================================================================

  document.querySelector('#burger').addEventListener('click', function () {
    document.querySelector('#burger').classList.toggle('is-active');
    document.querySelector('#nav').classList.toggle('is-active');
  })

  //при клике на бургер-меню закрывает открытый поиск
  document.querySelector('#burger').addEventListener('click', function () {
    document.querySelector('#search').classList.remove('search-active');
    document.querySelector('.nav-search-form').classList.remove('search-active');
    document.querySelector('.search-input').classList.remove('search-active');
    document.querySelector('#search-close').classList.remove('search-active');
  })

  // ПОИСК ======================================================================================================================================================

  //лупа открывает поиск
  document.querySelector('#search').addEventListener('click', function () {
    document.querySelector('#search').classList.add('search-active');
    document.querySelector('.nav-search-form').classList.add('search-active');
    document.querySelector('.search-input').classList.add('search-active');
    document.querySelector('#search-close').classList.add('search-active')
  })

  //крестик закрывает поиск
  document.querySelector('#search-close').addEventListener('click', function () {
    document.querySelector('#search').classList.remove('search-active');
    document.querySelector('.nav-search-form').classList.remove('search-active');
    document.querySelector('.search-input').classList.remove('search-active');
    document.querySelector('#search-close').classList.remove('search-active');
  })

  //при клике на поиск заврывается открытый бургер-меню
  document.querySelector('.header__nav-search').addEventListener('click', function () {
    document.querySelector('#burger').classList.remove('is-active');
    document.querySelector('#nav').classList.remove('is-active');
  })

})

// ТАБЫ ======================================================================================================================================================

//активный таб
function slidesPlugin(activeSlide = 0) {
  const slides = document.querySelectorAll('.working__day-link');

  slides[activeSlide].classList.add('active');

  for (const slide of slides) {
    slide.addEventListener('click', () => {
      clearActiveClasses();
      slide.classList.add('active');
    });
  }

  function clearActiveClasses() {
    slides.forEach((slide) => {
      slide.classList.remove('active');
    });
  }
}

slidesPlugin();

document.querySelectorAll('.tabs__btn').forEach(function (tabsBtn) {
  tabsBtn.addEventListener('click', function (event) {
    const path = event.currentTarget.dataset.path

    document.querySelectorAll('.tab-content').forEach(function (tabContent) {
      tabContent.classList.remove('tab-content-active')
    });
    document.querySelector(`[data-target="${path}"]`).classList.add('tab-content-active');
  })
})

// faq-АККОРДЕОН

$(".js-accordion").accordion({
  collapsible: true,
  active: false,
  icons: false,
  heightStyle: 'content'
});

// КНОПКА НАВЕРХ ======================================================================================================================================================

jQuery(document).ready(function () {
  var btn = $('#button');
  $(window).scroll(function () {
    if ($(window).scrollTop() > 300) {
      btn.addClass('show');
    } else {
      btn.removeClass('show');
    }
  });
  btn.on('click', function (e) {
    e.preventDefault();
    $('html, body').animate({ scrollTop: 0 }, '300');
  });
});
