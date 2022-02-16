$(window).on("load",function() {
    $(".loader").fadeOut(500,function() {
        $(".loader").remove();
    });
});

new WOW().init();


$(document).ready(function() {

    var waypoints = $('#home').waypoint(function(direction) {
        $(".side-link").removeClass("add-color");
        $(".side-link[href='#home']").addClass("add-color");
    },{
        offset: -10
    });

    var waypoints = $('#about').waypoint(function(direction) {
        $(".side-link").removeClass("add-color");
        $(".side-link[href='#about']").addClass("add-color");
    },{
        offset: -10
    });

    var waypoints = $('#skills').waypoint(function(direction) {
        $(".side-link").removeClass("add-color");
        $(".side-link[href='#skills']").addClass("add-color");
    },{
        offset: -10
    });

    var waypoints = $('#services').waypoint(function(direction) {
        $(".side-link").removeClass("add-color");
        $(".side-link[href='#services']").addClass("add-color");
    },{
        offset: -10
    });

    var waypoints = $('#projects').waypoint(function(direction) {
        $(".side-link").removeClass("add-color");
        $(".side-link[href='#projects']").addClass("add-color");
    },{
        offset: -10
    });

    var waypoints = $('#contact').waypoint(function(direction) {
        $(".side-link").removeClass("add-color");
        $(".side-link[href='#contact']").addClass("add-color");
    },{
        offset: -10
    });

    $("#mobile-menu").click(function() {
        $(".navbar-nav").slideToggle();
    });
    
    $('.slick').slick({
        dots: true,
        infinite: false,
        speed: 300,
        slidesToShow: 1,
        slidesToScroll: 1,
        responsive: [
          {
            breakpoint: 1024,
            settings: {
              slidesToShow: 1,
              slidesToScroll: 1,
              infinite: true,
              dots: true
            }
          },
          {
            breakpoint: 600,
            settings: {
              slidesToShow: 1,
              slidesToScroll: 1
            }
          },
          {
            breakpoint: 480,
            settings: {
              slidesToShow: 1,
              slidesToScroll: 1
            }
          }
          // You can unslick at a given breakpoint now by adding:
          // settings: "unslick"
          // instead of a settings object
        ]
      });
});


// let screenHeight = window.innerHeight;

// $(window).scroll(function() {
//     let currentHeight = $(window).scrollTop();
//     console.log(currentHeight);

//     if(currentHeight >= screenHeight) {
//         $(".navigation").addClass("sticky-mobile");
//     }else{
//         $(".navigation").removeClass("sticky-mobile");
//     }
// });

window.onload = function () {
    lax.init();

    lax.addDriver('scrollY', function () {
        return window.scrollY
      })
};

VanillaTilt.init(document.querySelectorAll(".tilt"), {
    max: 25,
    speed: 400,
    glare: true
});