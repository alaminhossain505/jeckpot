$(function () {
  $(window).scroll(function () {
    var scrolling = $(this).scrollTop();

    // back-to-top btn hide show js 
    if (scrolling > 500) {
        $('.back-to-top i').fadeIn();
    } else {
        $('.back-to-top i').fadeOut();
    };

    // nav-fix
    if (scrolling > 300) {
        $('nav').addClass('nav-fix');
    } else {
        $('nav').removeClass('nav-fix');
    };
});

// back-to-top
$('.back-to-top i').click(function () {
  $('html,.banner-bg').animate({
      scrollTop: 0,
  }, 1000);
});


  //  js for navber
  $('.accordion-item').on('click',function(){
    $(this).addClass('border').siblings().removeClass('border');
  })

  // js for countdown 
    $('.count-1').countdown('2040/01/01', function(event) {
        $(this).html(event.strftime('%H'));
      });
      $('.count-2').countdown('2040/01/01', function(event) {
        $(this).html(event.strftime('%M'));
      });
      $('.count-3').countdown('2040/01/01', function(event) {
        $(this).html(event.strftime('%S'));
      });

    // nicescroll js
    $(function() {  
        $(".scrol-part").niceScroll({
            cursorcolor: "#1f004f",
            cursorwidth: "10px",
            cursorborder: "transparent",
            background: "#000",
            autohidemode: false,
            smoothscroll: true,
        });
    });
});