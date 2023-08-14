
  $(function () {
    'use strict'

    // MENU
    $('.navbar .nav-link').on('click',function(){
        $(".navbar-collapse").collapse('hide');
    });

    $(window).on('scroll', function() {     
                                
        /*----------------------------------------------------*/
        /*  Navigtion Menu Scroll
        /*----------------------------------------------------*/    
        
        var b = $(window).scrollTop();
        
        if( b > 72 ){       
            $(".navbar").addClass("scroll");
        } else {
            $(".navbar").removeClass("scroll");
        }               
    });

    // TESTIMONIALS CAROUSEL
    $('#testimonials-carousel').owlCarousel({
        loop:true,
        margin:10,
        responsiveClass:true,
        responsive:{
            0:{
                items:1,
            },
            900:{
                items:2,
            },
            1200:{
                items:3,
                loop:false
            }
        }
    })

    // SMOOTHSCROLL
    $(function() {
      $('.navbar .nav-link').on('click', function(event) {
        var $anchor = $(this);
        $('html, body').stop().animate({
            scrollTop: $($anchor.attr('href')).offset().top - 49
        }, 1000);
        event.preventDefault();
      });
    });   
     
  });


  const zoomableImages = document.querySelectorAll(".card-body img");

  for (let i of zoomableImages) {
    i.addEventListener('mouseover', () => {
      i.classList.add('clicked'); // Add 'clicked' class when mouseover
    });
  
    i.addEventListener('mouseout', () => {
      i.classList.remove('clicked'); // Remove 'clicked' class when mouseout
    });
  }
  
const toggleButtons = document.querySelectorAll('.btn-link');
// in the function, loop through all the togglebuttons
for (let butn of toggleButtons) {
  butn.addEventListener('click', function() {
    for (let button of toggleButtons) {
      const icon = button.querySelector('i');
      if (button.getAttribute("aria-expanded") === "true") {
        console.log(button, "expanded")
        icon.classList.add("fa-chevron-down");
        icon.classList.remove("fa-chevron-up")
      } else {
        console.log("collapsed")
        icon.classList.add("fa-chevron-up");
        icon.classList.remove("fa-chevron-down")
      }
    }
  });
}