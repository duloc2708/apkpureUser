

//Functions that run when all HTML is loaded
$(document).ready(function() {
  MatchHeight(); 
});

//Match title height
function MatchHeight() {
  $('.match')
    .matchHeight({})
  ;
}

$(".slideVideo").owlCarousel({
  autoplay: true,
  lazyLoad: true,
  loop: true,
  margin: 20,
  animateOut: 'fadeOut',
  animateIn: 'fadeIn',
  responsiveClass: true,
  autoHeight: true,
  autoplayTimeout: 7000,
  smartSpeed: 800,
  nav: true,
  video:true,
  responsive: {
    0: {
      items: 1
    },

    600: {
      items: 2
    },

    1024: {
      items: 2
    },

    1366: {
      items: 2
    }
  }
});

AOS.init({
  duration: 1200,
})

$('.flexslider').flexslider({
  animation: "slide",
  controlNav: false
});

