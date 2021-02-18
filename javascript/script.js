$(document).ready(function(){
  $('.carousel').slick({
    speed: 300,
    slidesToShow: 4,
    slidesToScroll: 4,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,

        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1
        }
      }
    ]
  });
});

$('.news-carousel').slick({
  infinite: true,
  slidesToShow: 1,
  slidesToScroll: 1,
  dots: true,
  autoplay: true,
  autoplaySpeed: 4000,
  speed: 700,
  arrows: false,
});

$('.image-slide').slick({
  dots: false,
  slidesToShow: 3,
  centerMode: true,
  infinite: true,
  speed: 500,
  fade: true,
  cssEase: 'linear'
});