$(document).ready(function () {
  /*datetimepicker*/
  if ($('.datepicker-inner').length > 0) {
    $('.datepicker-inner').datetimepicker({
     timepicker:false,
     todayButton: false,
     format:'d.m.Y',
     defaultTime:'00:00'
    });
    jQuery.datetimepicker.setLocale('ru');
  }
  /*close*/

  /*scroll*/
  if ($('.scroll__wrap').length > 0) {
    $('.scroll__wrap').jScrollPane();
  }
  /*close*/

   var windowWidth = $(window).width();

    $(".header__menu--button").click(function () {
        $(".sandwich").toggleClass("active");
    });

    if (windowWidth < 769) {
        $(".header__menu ul a").click(function () {
            $(".header__menu").fadeOut(600);
            $(".sandwich").toggleClass("active").append("<span>");
        });

        $(".header__menu--button").click(function () {
            if ($(".header__menu").is(":visible")) {
                $(".header__menu").fadeOut(600);
                $(".header__menu li a").removeClass("fadeInUp animated");
            } else {
                $(".header__menu").fadeIn(600);
                $(".header__menu li a").addClass("fadeInUp animated");
            }
        });
    }


  if ($('.calendar__wrap').length > 0) {
    $(".calendar__wrap").owlCarousel({
    loop: true,
    margin: 1,
    nav : true,
    // autoplay: true,
    navText: true,
    navigation:true,
    pagination : true,
    items: 1,
    dots: true,
    singleItem:false,
    mouseDrag: false,
    responsiveClass:true,
    responsive: {
      0: {
        items: 1,
        nav: true,
      },
      600: {
        items: 1,
        nav: true,
      },
      1000: {
        items: 1,
        nav: true,
        loop: true,
      },
      1200: {
        items: 1,
        nav: true,
        loop: true,
      }
    }
  });
  }


  $(".month-list--item").click(function (e) {
   $(".month-list--item").removeClass("active");
    $(this).addClass("active");
    $('.sales-plan__wrap--item').removeClass('current');

     e.preventDefault();
     var t = $(this).attr('data-tab');

     $(".sales-plan__wrap--item").fadeOut(500), $("#" + t).addClass('current').fadeIn(500);

  });
  if ($('.progress-circle').length > 0) {
       $(".progress-circle").percircle({
         progressBarColor: "#1fb5ac",
       });
  }
});
