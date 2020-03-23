(function($) {
  ("use strict");

  $.fn.andSelf = function() {
    return this.addBack.apply(this, arguments);
  };

  /* Loader Code Start */
  $(window).on("load", function() {
    $(".section-loader").fadeOut("slow");

    var $container = $(".portfolioContainer");
    $container.isotope({
      filter: "*",
      animationOptions: {
        queue: true
      }
    });

    $(".portfolio-nav li").click(function() {
      $(".portfolio-nav .current").removeClass("current");
      $(this).addClass("current");

      var selector = $(this).attr("data-filter");
      $container.isotope({
        filter: selector,
        animationOptions: {
          queue: true
        }
      });
      return false;
    });
  });
  /*
    |====================
    | Mobile NAv trigger
    |=====================
    */

  var trigger = $(".navbar-toggler"),
    overlay = $(".overlay"),
    navc = $(".navbar-collapse"),
    active = false;

  $(".navbar-toggler, .navbar-nav li a, .overlay").on("click", function() {
    $(".navbar-toggler").toggleClass("active");
    overlay.toggleClass("active");
    navc.toggleClass("active");
  });

  // Navbar Active change

  $("#rt-header").onePageNav({
    currentClass: "active",
    changeHash: false,
    scrollSpeed: 750,
    scrollThreshold: 0.5
  });

  // FancyBox
  $("[data-fancybox]").fancybox({});

  // Animations
  var wow = new WOW({
    mobile: true
  });
  wow.init();

  //NAV FIXED ON SCROLL
  $(window).on("scroll", function() {
    var scroll = $(window).scrollTop();
    if (scroll >= 50) {
      $(".nav-scroll").addClass("nav-strict");
    } else {
      $(".nav-scroll").removeClass("nav-strict");
    }
  });
  //Portfolio mixin

  $("#portfolio-item").mixItUp();

  // Client review

  $("#rt-client-review").owlCarousel({
    loop: false,
    responsiveClass: true,
    nav: true,
    autoplay: false,
    smartSpeed: 450,
    stopOnHover: true,
    animateIn: "slideInRight",
    animateOut: "slideOutLeft",
    autoplayHoverPause: true,
    responsive: {
      0: {
        items: 1
      },
      768: {
        items: 2
      },
      1170: {
        items: 3
      }
    }
  });
  // sINGLE project
  $("#single-project").owlCarousel({
    loop: false,
    responsiveClass: true,
    nav: false,
    dots: true,
    autoplay: false,
    smartSpeed: 450,
    stopOnHover: true,
    animateIn: "slideInRight",
    animateOut: "slideOutLeft",
    autoplayHoverPause: true,
    pagination: false,
    responsive: {
      0: {
        items: 1
      },
      768: {
        items: 1
      },
      1170: {
        items: 1
      }
    }
  });

  /*
    |=================
    | Project review slide
    |================
    */

  $(".rt-single-project-slide-by-side").owlCarousel({
    loop: false,
    responsiveClass: true,
    nav: true,
    navText: [
      "<i class='fa fa-angle-left'></i>",
      "<i class='fa fa-angle-right'></i>"
    ],
    dots: false,
    autoplay: false,
    smartSpeed: 450,
    stopOnHover: true,
    animateIn: "slideInRight",
    animateOut: "slideOutLeft",
    autoplayHoverPause: true,
    pagination: false,
    responsive: {
      0: {
        items: 1
      },
      768: {
        items: 1
      },
      1170: {
        items: 1
      }
    }
  });

  // Smooth Scroll
  $(function() {
    $("a[href*=#]:not([href=#])").click(function() {
      if (
        location.pathname.replace(/^\//, "") ==
          this.pathname.replace(/^\//, "") &&
        location.hostname == this.hostname
      ) {
        var target = $(this.hash);
        target = target.length
          ? target
          : $("[name=" + this.hash.slice(1) + "]");
        if (target.length) {
          $("html,body").animate(
            {
              scrollTop: target.offset().top
            },
            600
          );
          return false;
        }
      }
    });
  });
})(jQuery);
