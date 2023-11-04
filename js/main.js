$(window).on("load", function () {
  $(".loader")
    .delay(200)
    .fadeOut(2000, function () {
      $("body").css("overflow", "auto");
    });
});

$(document).ready(function () {
    "use strict";
    let isRtl = $('html[lang="ar"]').length > 0;
// when click to responsive btn show ul and overlay
    $(".nav-btn").click(function() {
      $(this).addClass('active');
      $(".nav-links").addClass('active');
      $(".nav-overlay").addClass('show')
    })

    // when i click on overlay remove class show and remove ul

    $(".nav-overlay").click(function() {
      $(".nav-btn").removeClass('active');
      $(".nav-links").removeClass('active');
      $(".nav-overlay").removeClass('show')
    })
    
    // select-2
    $('.select-plugin').select2({
      dir: isRtl ? "rtl" : "ltr"
  });

  $('.select').select2({
      dir: isRtl ? "rtl" : "ltr"
  });

  $(':input[type="number"]').on("input", function() {
    var nonNumReg = /[^0-9]/g
    $(this).val($(this).val().replace(nonNumReg, ''));
  })


      // start to slider-pricing
      $('.slider-pricing').owlCarousel({
        items: 1,
        rtl: isRtl,
        margin: 0,
        autoplaySpeed: 3000,
        autoplayTimeout: 3000,
        smartSpeed: 1000,
        nav: true,
        loop: true,
        dots: false,
        autoplay: true,
        autoplayHoverPause:true,
        navText: [
          "<i class='fas fa-angle-right'></i>",
          "<i class='fas fa-angle-left'></i>",
        ],
    })

  
    
});