$(document).ready(function(){
  $('.carousel').slick({
    speed: 300,
    slidesToShow: 4,
    slidesToScroll: 1,
    responsive: [
        {
      breakpoint: 800,
      settings: "unslick"
    },  {
      breakpoint: 480,
      settings: "unslick"
    }]
  });
});
