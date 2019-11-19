$(document).ready(function(){
/* Show Navbar When Click On Icon */

    $('i.icon').click(function(){
        $('.nav-list').slideToggle()
    });

/* When Scroll Body .. Sticky Navbar */

$(window).scroll(function(){
    var sc = $(this).scrollTop();
    if (sc > 50) {                  // Show Sticky Navbar
            $("header").addClass("sticky");
        } else{
            $("header").removeClass("sticky");
        }
/* Count To Plugin */
        if (sc > 1500) {
            $('.time').countTo();       // Run Count To Plugin
            $(window).off('scroll');
        }

/* Scroll Top Button Part 1 */
        if (sc > 500) {
            $(".scroll-top").fadeIn();          // Fade The Scroll Top Btn
        } else {
            $(".scroll-top").fadeOut();
        }
    });

/* Portfolio Buttons Change Background */
    $('.buttons button').click(function(){
        $(this).addClass("active_btn").siblings().removeClass("active_btn");
        var cssFilter = $(this).attr('id');
        // console.log(Filter);
        if (cssFilter === 'all') {
            $('.images > div').fadeIn();
        } else {
            $('.images > div').fadeOut();
            $('.images').contents().filter('.' + cssFilter).fadeIn();
        }
    });

/* Owl Carousel For Team Section */
    $('.owl-carousel').owlCarousel({
        loop: true,
        margin: 10,
        nav: false,
        // dotsEach: true,
        dots: true,
        responsive: {
            0: {
                items: 1
            },
            600: {
                items: 3
            },
            1000: {
                items: 4
            }
        }
    });
/* Choose Panel */
    $('.choose-panel li').click(function(){
        $(this).addClass("active_btn").siblings().removeClass("active_btn");
        var p = $(this).data('role');
        // console.log(p);
        $('.content > div').hide();
        $('.content').contents().filter('#' + p).fadeIn();
    });

/* magnificent popup Video In Choose Section */
    $('.pop').magnificPopup({
        // type: 'image',
        type: 'iframe'
    });

/* slick slider on Pleasure Section */
    $('.slick').slick({
        nextArrow: false,
        prevArrow: false,
    });

/* Scroll Top Button Part 2 */
    $('.scroll-top').click(function(){
        $('body, html').animate({
            scrollTop: 0,
        }, 500);
    });

/* Smooth Scroll */
    $('.list a').click(function(){
        $('body, html').animate({
            scrollTop: $((this).attr('href')).offset().top -100
        });
    });
});