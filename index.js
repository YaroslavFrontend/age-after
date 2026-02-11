(function () {
  "use strict";

  // Slider: main + thumbs synced
  var sliderThumbs = document.querySelector(".slider-thumbs");
  var sliderMain = document.querySelector(".slider-main");

  if (sliderThumbs && sliderMain) {
    var thumbsSwiper = new Swiper(".slider-thumbs", {
      spaceBetween: 7,
      slidesPerView: 6,
      freeMode: true,
      watchSlidesProgress: true,
      watchOverflow: true,
      centeredSlides: true,
      breakpoints: {
        320: { slidesPerView: 3 },
        640: { slidesPerView: 4 },
        960: { slidesPerView: 5 },
        1280: { slidesPerView: 6 },
      },
    });

    var mainSwiper = new Swiper(".slider-main", {
      slidesPerView: 1.4,
      centeredSlides: true,
      spaceBetween: 20,
      thumbs: {
        swiper: thumbsSwiper,
      },
      navigation: {
        nextEl: ".slider-main__arrow--next",
        prevEl: ".slider-main__arrow--prev",
      },
      autoplay: {
        delay: 1500,
        disableOnInteraction: false,
      },
      loop: true,
      breakpoints: {
        320: { slidesPerView: 1, spaceBetween: 0 },
        480: { slidesPerView: 1.05, spaceBetween: 10 },
        768: { slidesPerView: 1.15, spaceBetween: 15 },
        1100: { slidesPerView: 1.25, spaceBetween: 18 },
        1400: { slidesPerView: 1.4, spaceBetween: 20 },
        1600: { slidesPerView: 1.5, spaceBetween: 25 },
      },
    });

    // Sync thumb active state when main changes (e.g. by loop)
    mainSwiper.on("slideChange", function () {
      var realIndex = mainSwiper.realIndex;
      thumbsSwiper.slides.forEach(function (slide, i) {
        slide.classList.toggle("swiper-slide-thumb-active", i === realIndex);
      });
    });
  }

  // Footer accordion (mobile)
  var accordionBtns = document.querySelectorAll(".footer__accordion-btn");
  accordionBtns.forEach(function (btn) {
    btn.addEventListener("click", function () {
      var accordion = btn.parentElement;
      accordion.classList.toggle("is-open");
    });
  });
})();
