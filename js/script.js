// Slik slider initialization
$(document).ready(function(){
    $('.banner-body').slick({
        infinite: true,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 2000,
        arrows: true,
        nextArrow:'<button type="button" class="next">></button>',
        prevArrow:'<button type="button" class="prev"><</button>',

      });
  });