$('#owl-1').owlCarousel({
  loop: true,
  margin: 30,
  dots: true,
  nav: true,
  navText: ["<div class='nav-button owl-prev'>‹</div>", "<div class='nav-button owl-next'>›</div>"],
  responsive:{
                0:{
                    items:1
                },
                600:{
                    items:1
                },
                1000:{
                    items:3
                }
            }
})

$('#owl-2').owlCarousel({
  loop: true,
  margin: 30,
  dots: true,
  responsive:{
                0:{
                    items:1
                },
                600:{
                    items:1
                },
                1000:{
                    items:3
                }
            }
})

