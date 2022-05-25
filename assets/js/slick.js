$('.slide__container').slick({
  infinite: true,
  slidesToShow: 1,
  slidesToScroll: 1,
  autoplay: 5000,
  dots: true,
  prevArrow: "<img class='a-left control-c prev slick-prev' src='./assets/images/arrow_prev.svg'>",
  nextArrow: "<img class='a-right control-c next slick-next' src='./assets/images/arrow_next.svg'>",
})
$('.testimonial__slides').slick({
  infinite: true,
  slidesToShow: 1,
  slidesToScroll: 1,
  autoplay: 5000,
  prevArrow: "<img class='a-left control-c prev slick-prev testimonial__prev' src='./assets/images/arrow_prev.svg'>",
  nextArrow: "<img class='a-right control-c next slick-next testimonial__prev' src='./assets/images/arrow_next.svg'>",
  dots: true,
})
