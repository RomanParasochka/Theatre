$(document).ready(function () {
  $(".header-burger").click(function (event) {
    $(".header-wrapper, .header-nav").addClass("active");
    $(".header-burger").addClass("header-burger-hide");
  });

  $(".header-burger-close").click(function (event) {
    $(".header-nav").removeClass("active");

    setTimeout(function () {
      $(".header-wrapper").removeClass("active");
      $(".header-burger").removeClass("header-burger-hide");
    }, 300);
  });

  const prevBtn = '<img src="img/arrow-prev.svg" /><span>пред</span>';
  const nextBtn = '<span>след</span><img src="img/arrow-next.svg" />';

  $(".owl-poster").owlCarousel({
    items: 1,
    autoplay: false,
    autoplaySpeed: 1000,     
    loop: true,
    autoWidth: true,
    margin: 21,
    nav: true,
    smartSpeed:1000,
    dots: false,
    navText: [prevBtn, nextBtn],
  });

  $(".owl-projects").owlCarousel({
    loop: true,
    nav: false,
    dots: false,
    responsive: {
      0: {
        items: 1.2,
      },
      576: {
        items: 1.5,
      },
    },
  });

  $(".owl-partners").owlCarousel({
    items: 2,
    loop: false,
    nav: false,
    dots: false,
    responsive: {
      0: {
        items: 2,
      },
      600: {
        items: 2,
      },
    },
  });
  
});
