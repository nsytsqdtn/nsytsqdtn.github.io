;(function ($) {
    "use strict";
    $(document).on('ready', function () {        
        /*--Primary-Menu-Dropdown-Plus-Icon--*/
        $('.primary-menu .sub-menu').parent('li').children('a').append('<i class="plus"></i>');
        $('.testimonial-slider').slick({
            dots: true,
            arrows: false,
            prevArrow: '<button class="slick-prev"  type="button"><i class="fa fa-angle-left"></i></button>',
            nextArrow: '<button class="slick-next" type="button"><i class="fa fa-angle-right"></i></button>',
            infinite: true,
            centerMode: false,
            autoplay: true,
            autoplaySpeed: 2000,
            vertical: false,
            verticalSwiping: false,
            speed: 1000,
            slidesToShow: 2,
            slidesToScroll: 1,
            responsive: [
                {
                    breakpoint: 1170,
                    settings: {
                        slidesToShow: 2,
                        slidesToScroll: 1,
                    }
                },
                {
                    breakpoint: 992,
                    settings: {
                        slidesToShow: 2,
                        slidesToScroll: 1
                    }
                },
                {
                    breakpoint: 768,
                    settings: {
                        slidesToShow: 1,
                        slidesToScroll: 1
                    }
                }
            ]
        });
        $('.blog-slider').slick({
            dots: true,
            arrows: false,
            prevArrow: '<button class="slick-prev"  type="button"><i class="fa fa-angle-left"></i></button>',
            nextArrow: '<button class="slick-next" type="button"><i class="fa fa-angle-right"></i></button>',
            infinite: true,
            centerMode: false,
            autoplay: true,
            autoplaySpeed: 2000,
            vertical: false,
            verticalSwiping: false,
            speed: 1000,
            slidesToShow: 3,
            slidesToScroll: 1,
            responsive: [
                {
                    breakpoint: 1170,
                    settings: {
                        slidesToShow: 3,
                        slidesToScroll: 1,
                    }
                },
                {
                    breakpoint: 992,
                    settings: {
                        slidesToShow: 2,
                        slidesToScroll: 1
                    }
                },
                {
                    breakpoint: 768,
                    settings: {
                        slidesToShow: 1,
                        slidesToScroll: 1
                    }
                }
            ]
        });
        $('.sponser-slider').slick({
            dots: false,
            arrows: false,
            prevArrow: '<button class="slick-prev"  type="button"><i class="fa fa-angle-left"></i></button>',
            nextArrow: '<button class="slick-next" type="button"><i class="fa fa-angle-right"></i></button>',
            infinite: true,
            centerMode: false,
            autoplay: true,
            autoplaySpeed: 2000,
            vertical: false,
            verticalSwiping: false,
            speed: 1000,
            slidesToShow: 5,
            slidesToScroll: 1,
            responsive: [
                {
                    breakpoint: 1170,
                    settings: {
                        slidesToShow: 5,
                        slidesToScroll: 1,
                    }
                },
                {
                    breakpoint: 992,
                    settings: {
                        slidesToShow: 3,
                        slidesToScroll: 1
                    }
                },
                {
                    breakpoint: 768,
                    settings: {
                        slidesToShow: 2,
                        slidesToScroll: 1
                    }
                }
            ]
        });
        /*-- Mobile-Menu-Active --*/
        $('.primary-menu').slicknav({
            label: '',
            duration: 500,
            prependTo: '',
            closedSymbol: '<i class="fa fa-angle-right"></i>',
            openedSymbol: '<i class="fa fa-angle-right"></i>',
            appendTo: '.mainmenu-area',
            menuButton: '.navi-trigger',
            closeOnClick: 'true' // Close menu when a link is clicked.
        });
        /*-- Click-Smoth-Scroll-Script --*/
        $('.mainmenu-area a[href*="#"]')
        .not('[href="#"]')
        .not('[href="#0"]')
        .on('click', function (event) {
            if (
                location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') && location.hostname == this.hostname) {
                // Figure out element to scroll to
                var target = $(this.hash);
                target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
                // Does a scroll target exist?
                if (target.length) {
                    // Only prevent default if animation is actually gonna happen
                    event.preventDefault();
                    $('html, body').animate({
                        scrollTop: target.offset().top
                    }, 1000, function () {
                        // Callback after animation
                        // Must change focus!
                        var $target = $(target);
                        $target.focus();
                        if ($target.is(":focus")) { // Checking if the target was focused
                            return false;
                        } else {
                            $target.attr('tabindex', '-1'); // Adding tabindex for elements not focusable
                            $target.focus(); // Set focus again
                        };
                    });
                }
            }
        });
        /*-- Tigger-Search-Form --*/
        $('.toggle-search-button').on('click',function(){
            $('body').addClass('search-form-active');
        });
        $('.toggle-search-close').on('click',function(){
            $('body').removeClass('search-form-active');
        });
    });
    $(window).on("load", function () {
        /*-- Preloader-Fade-Out-After-Load-Window --*/
        $('.preloader').fadeOut(500);
        $('body').append('<a href="#" id="scrollUp"><i class="fal fa-long-arrow-up"></i></a>');
        $('#scrollUp').on('click',function() {
            $('body,html').animate({
                scrollTop : 0
            }, 500);
            return false;
        });
        /*-- WoW-Animation-JS --
        new WOW().init({
            mobile: false,
        });
        */
        $('.navi-trigger').on('click',function(){
            $(this).toggleClass('active');
        }); 
        $('body').on('click', '.accordion-item .title', function(e) {
            $('.accordion-item').find('.content').stop().slideUp();
            $(this).closest('.accordion-item').find('.content').stop().slideToggle();
        });
        /*---------------------------
        MICHIMP INTEGRATION
        -----------------------------*/
        $('#mc-form').ajaxChimp({
            url: 'http://www.devitfamily.us14.list-manage.com/subscribe/post?u=b2a3f199e321346f8785d48fb&amp;id=d0323b0697', //Set Your Mailchamp URL
            callback: function (resp) {
                if (resp.result === 'success') {
                    $('.subscrie-form input, .subscrie-form button').fadeOut();
                }
            }
        });
        $('.box-effect').on('mouseenter',function(){
            $('.box-effect').removeClass('active');
            $(this).addClass('active');
        });
        $('.icon-effect').on('mouseenter',function(){
            $(this).find('.icon').addClass('animated');                
            $('.icon-effect').find('.icon').removeClass('shake');
            $(this).find('.icon').addClass('shake');
        });
    });
    /*-- Scroll-To-Top --*/
    $(window).scroll(function() {
        if ($(this).scrollTop() >= 100) {
            $('#scrollUp').addClass('active');
            $('.mainmenu-area').addClass('affix');
        } else {
            $('#scrollUp').removeClass('active');
            $('.mainmenu-area').removeClass('affix');
        }
    });
    var $el = $('.parallax-bg');
    $(window).on('scroll', function () {
        var scroll = $(document).scrollTop();
        $el.css({
            'background-position':'50% '+(+.4*scroll)+'px'
        });
    });
})(jQuery);