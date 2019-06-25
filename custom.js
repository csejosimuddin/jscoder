// Custom js INDEX Table

// 01.loading setting a timeout
// 02.Closes responsive menu when a scroll link is clicked
// 03.venobox js
// 04.top header dropdown
// 05.filter items on button click
// 06.for menu active class
// 07.START Pricing JS
// 08.swiper Slider
// 09.team slider
// 10.testmonial slider
// 11.counter up js
// 12.sticky nav
// 13.animation scroll js click a smoth scroll button a click a
// 14.back to top section



(function ($) {

    'use strict';
    var windo = $(window);

    // loading setting a timeout
    setTimeout(function () {
        $('body').addClass('loaded');
    }, 3500);

    // Closes responsive menu when a scroll link is clicked
    $('.nav-link').on('click', function () {
        $('.navbar-collapse').collapse('hide');
    });

    $('.slider-banner').slick({
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: false,
        dots: true,
        arrows: true,
        prevArrow: '.angle-left',
        nextArrow: '.angle-right',
        autoplaySpeed: 2000,
    });

    $('.testimonial-slider').slick({
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: false,
        dots: true,
        arrows: true,
        prevArrow: '.angle-left-test',
        nextArrow: '.angle-right-test',
        autoplaySpeed: 2000,
    });

    //venobox js
    $('.venobox').venobox();

    // top header dropdown
    $(document).ready(function () {
        $('#polyglotLanguageSwitcher').polyglotLanguageSwitcher({
            effect: 'fade',
            testMode: true,
            onChange: function (evt) {
                // alert("The selected language is: "+evt.selectedItem);
            }
        });
    });
    var $grid = $('.grid').isotope({
        // options
    });

    // filter items on button click
    $('.portfolio_btn').on('click', 'button', function () {
        var filterValue = $(this).attr('data-filter');
        $grid.isotope({
            filter: filterValue
        });
    });

    //for menu active class
    $('.portfolio_btn > button').on('click', function (event) {
        $(this).siblings('.active').removeClass('active');
        $(this).addClass('active');
        event.preventDefault();
    });

    /*START Pricing JS*/
    $('.pricing-tab-switcher').on('click', function () {
        $(this).toggleClass('active');

        $('.pricing-amount').toggleClass('change-subs-duration');
    });
    /*END Pricing JS */

    // swiper Slider
    var swiper = new Swiper('.swiper-container', {
        effect: 'coverflow',
        loop: !0,
        mode: 'horizontal',
        grabCursor: true,
        centeredSlides: !0,
        parallax: !0,
        grabCursor: true,
        spaceBetween: 0,
        effect: 'coverflow',
        slidesPerView: 'auto',
        coverflowEffect: {
            rotate: 5,
            stretch: 0,
            depth: 98,
            modifier: 1,
            slideShadows: !1,
        },
        pagination: {
            el: '.swiper-pagination',
            clickable: !0
        },
        navigation: {
            nextEl: '.swiper-control-left',
            prevEl: '.swiper-control-right',
        },

    });

    //team slider    
    $('.team-slider').slick({
        slidesToShow: 3,
        slidesToScroll: 1,
        infinite: false,
        autoplay: false,
        dots: true,
        arrows: true,
        prevArrow: '.left',
        nextArrow: '.right',
        speed: 1000,
        autoplaySpeed: 500,
        responsive: [
            {
                breakpoint: 992,
                settings: {
                    slidesToShow: 2,
                }
            },
            {
                breakpoint: 768,
                settings: {
                    slidesToShow: 1,
                }
            },
            {
                breakpoint: 767.99,
                settings: {
                    slidesToShow: 1,
                }
            }
        ]
    });






    //testmonial slider 

    $('.testmonial-slider ').slick({
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: false,
        infinite: false,
        dots: true,
        arrows: true,
        prevArrow: '.feature-left',
        nextArrow: '.feature-right',
        speed: 1000,
        autoplaySpeed: 500,
        responsive: [
            {
                breakpoint: 992,
                settings: {
                    slidesToShow: 1,
                }
            },
            {
                breakpoint: 768,
                settings: {
                    slidesToShow: 1,
                }
            },
            {
                breakpoint: 575.99,
                settings: {
                    slidesToShow: 1,
                }
            }
        ]
    });




    // counter up js
    $('.counter').each(function () {
        $(this).prop('Counter', 0).animate({
            Counter: $(this).text()
        }, {
            duration: 4000,
            easing: 'swing',
            step: function (now) {
                $(this).text(Math.ceil(now));
            }
        });
    });




    // sticky nav
    /*----------------------------
       START - Menubar scroll animation
       ------------------------------ */

    $(window).scroll(function () {
        var scrolling = $(this).scrollTop();
        if (scrolling > 500) {
            $(".header-bottom").addClass("sticky");
        } else {
            $(".header-bottom").removeClass("sticky");
        }
        if (scrolling > 400) {
            back2top.fadeIn(800);
        } else {
            back2top.fadeOut(800);
        }


    });



    //animation scroll js click a smoth scroll button a click a
    var html_body = $('html, body');
    $('.navbar a').on('click', function () {
        if (location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') && location.hostname == this.hostname) {
            var target = $(this.hash);
            target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
            if (target.length) {
                html_body.animate({
                    scrollTop: target.offset().top - 90
                }, 1500);
                return false;
            }
        }
    });

    //    back to top jquery section

    var html_body = $('html, body');
    var back2top = $(".back-to-top");
    back2top.click(function () {
        html_body.animate({
            scrollTop: 0
        }, 1000);
    });





})(jQuery);