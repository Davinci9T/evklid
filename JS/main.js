// МЕНЮ

window.addEventListener('DOMContentLoaded', function () {
  // const burger = document.querySelector('#burger');
  // const nav = document.querySelector('#nav');

  // document.body.addEventListener("click", function (evt) {
  //   if (evt.target.closest('#burger')) {
  //     burger.classList.add('is-active');
  //     nav.classList.add('is-active');
  //   }
  //   else if (!evt.target.closest('.header__nav')) {
  //     burger.classList.remove('is-active');
  //     nav.classList.remove('is-active');
  //   }
  // })

  document.querySelector('#burger').addEventListener('click', function () {
    document.querySelector('#burger').classList.toggle('is-active');
    document.querySelector('#nav').classList.toggle('is-active');
    document.querySelector('body').classList.toggle('lock');
  })

  document.querySelector('main').addEventListener('click', function () {
    document.querySelector('#burger').classList.remove('is-active');
    document.querySelector('#nav').classList.remove('is-active');
    document.querySelector('body').classList.remove('lock');
  })

  document.querySelector('.header__nav-search').addEventListener('click', function () {
    document.querySelector('#burger').classList.remove('is-active');
    document.querySelector('#nav').classList.remove('is-active');
    document.querySelector('body').classList.remove('lock');
  })

  // ПОИСК

  document.querySelector('#search').addEventListener('click', function () {
    document.querySelector('#search').classList.add('search-active');
    document.querySelector('.nav-search-form').classList.add('search-active');
    document.querySelector('.search-input').classList.add('search-active');
    document.querySelector('#search-close').classList.add('search-active')
  })

  document.querySelector('#search-close').addEventListener('click', function () {
    document.querySelector('#search').classList.remove('search-active');
    document.querySelector('.nav-search-form').classList.remove('search-active');
    document.querySelector('.search-input').classList.remove('search-active');
    document.querySelector('#search-close').classList.remove('search-active');
  })

  document.querySelector('#burger').addEventListener('click', function () {
    document.querySelector('#search').classList.remove('search-active');
    document.querySelector('.nav-search-form').classList.remove('search-active');
    document.querySelector('.search-input').classList.remove('search-active');
    document.querySelector('#search-close').classList.remove('search-active');
  })

  document.querySelector('.header__nav-link').addEventListener('click', function () {
    document.querySelector('#search').classList.remove('search-active');
    document.querySelector('.nav-search-form').classList.remove('search-active');
    document.querySelector('.search-input').classList.remove('search-active');
    document.querySelector('#search-close').classList.remove('search-active');
  })

  // СЛАЙДЕР

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
  })
})

// ТАБЫ

document.addEventListener('DOMContentLoaded', function () {
  document.querySelectorAll('.tabs__btn').forEach(function (tabsBtn) {
    tabsBtn.addEventListener('click', function (event) {
      const path = event.currentTarget.dataset.path

      document.querySelectorAll('.tab-content').forEach(function (tabContent) {
        tabContent.classList.remove('tab-content-active')
      });
      document.querySelector(`[data-target="${path}"]`).classList.add('tab-content-active');
    })
  })
})

// АККОРДЕОН

document.addEventListener('DOMContentLoaded', function () {
  $(".js-accordion").accordion({
    collapsible: true,
    active: false,
    icons: false,
    heightStyle: 'content'
  });


});

// КНОПКА НАВЕРХ

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
