/*==================================================
                    vankine Theme Js
==================================================*/
(function ($) {
    ("use strict");

     
    /*---====================---header drop down button---======================---*/
    if($('.navbar_nav li.dropdown ul').length){
        $('.navbar_nav li.dropdown').append('<div class="dropdown-btn"><span class="fa fa-angle-down"></span></div>');
    }
    if($('.navbar_nav li.mega_menu  ul').length){
        $('.navbar_nav li.mega_menu').append('<div class="dropdown-btn"><span class="fa fa-angle-down"></span></div>');
    }
   
 
  /*---====================---mobile navbar append---======================---*/
    if($('.mobile_menu_box').length){
        //Menu Toggle Btn
        $('.navbar_togglers').on('click', function() {
            $('body').toggleClass('mobile_menu_box-visible');
        });
        //Menu Toggle Btn
        $('.mobile_menu_box .menu-backdrop,.mobile_menu_box .close-btn').on('click', function() {
            $('body').removeClass('mobile_menu_box-visible');
        });
    }
    /*---====================---header drop down toggle---======================---*/
    //Mobile Nav Hide Show
	if($('.mobile_menu_box').length){
		var mobileMenuContent = $('.navbar_nav').html();
		$('.mobile_menu_box .getmobilemenu').append(mobileMenuContent); 
	}

    var $offCanvasNav = $(".mobile_menu_box"),
    $offCanvasNavSubMenu = $offCanvasNav.find(".sub-menu");
    /*Add Toggle Button With Off Canvas Sub Menu*/
    $offCanvasNavSubMenu.parent().prepend('<span class="dropdown-btn"><i class="fi-rs-angle-small-down"></i></span>');
    /*Close Off Canvas Sub Menu*/
    $offCanvasNavSubMenu.slideUp();
    /*Category Sub Menu Toggle*/
    $offCanvasNav.on("click", "li a, li .dropdown-btn", function (e) {
        var $this = $(this);
        if (
            $this
                .parent()
                .attr("class")
                .match(/\b(menu-item-has-children|has-children|has-sub-menu|sub-menu|mega_menu)\b/) &&
            ($this.attr("href") === "#" || $this.hasClass("dropdown-btn"))
        ) {
            e.preventDefault();
            if ($this.siblings("ul:visible").length) {
                $this.parent("li").removeClass("active");
                $this.siblings("ul").slideUp();
            } else {
                $this.parent("li").addClass("active");
                $this.closest("li").siblings("li").removeClass("active").find("li").removeClass("active");
                $this.closest("li").siblings("li").find("ul:visible").slideUp();
                $this.siblings("ul").slideDown();
            }
        }
    });



function onepagemobile_nav() {
    $(document).ready(function() { 
        $('.onepage_header_enable .navigation_menu').on('click', 'li a', function() {
            $('body').removeClass('mobile_menu_box-visible');
        });
    });
}



/*---====================---preloader---======================---*/
if($('.loader-wrap').length){
    $('.loader-wrap').delay(1000).fadeOut(500);
    $(".preloader-close").on("click", function(){
        $('.loader-wrap').delay(200).fadeOut(500);
    })  
}


  /*---====================---back-to-top---======================---*/
if($('.prgoress_indicator path').length){
    var progressPath = document.querySelector('.prgoress_indicator path');
    var pathLength = progressPath.getTotalLength();
    progressPath.style.transition = progressPath.style.WebkitTransition = 'none';
    progressPath.style.strokeDasharray = pathLength + ' ' + pathLength;
    progressPath.style.strokeDashoffset = pathLength;
    progressPath.getBoundingClientRect();
    progressPath.style.transition = progressPath.style.WebkitTransition = 'stroke-dashoffset 10ms linear';
    var updateProgress = function () {
      var scroll = $(window).scrollTop();
      var height = $(document).height() - $(window).height();
      var progress = pathLength - (scroll * pathLength / height);
      progressPath.style.strokeDashoffset = progress;
    }
    updateProgress();
    $(window).on('scroll', updateProgress);
    var offset = 250;
    var duration = 550;
    jQuery(window).on('scroll', function () {
      if (jQuery(this).scrollTop() > offset) {
        jQuery('.prgoress_indicator').addClass('active-progress');
      } else {
        jQuery('.prgoress_indicator').removeClass('active-progress');
      }
    });
    jQuery('.prgoress_indicator').on('click', function (event) {
      event.preventDefault();
      jQuery('html, body').animate({ scrollTop: 0 }, duration);
      return false;
    });
}
/*---====================---search popup---======================---*/
function vankine_search_popup() {
    if($('.search-popup').length){
        //Show Popup
        $('.search-toggler').on('click', function() {
            $('.search-popup').addClass('popup-visible');
        });
        $(document).keydown(function(e){
            if(e.keyCode === 27) {
                $('.search-popup').removeClass('popup-visible');
            }
        });
        //Hide Popup
        $('.close-search , .search-popup .overlay-layer').on('click', function() {
            $('.search-popup').removeClass('popup-visible');
        });
    }
}
/*---====================---option panel---======================---*/
function vankine_option_panel_popup() {
    if($('.option_panel-popup').length){
       //Show Popup
       $('.contact-toggler').on('click', function() {
           $('.option_panel-popup').addClass('popup-visible');
       });
       $(document).keydown(function(e){
           if(e.keyCode === 27) {
               $('.option_panel-popup').removeClass('popup-visible');
           }
       });
       //Hide Popup
       $('.close-option-pan , .option_panel-popup .sdmenu_overlay').on('click', function() {
           $('.option_panel-popup').removeClass('popup-visible');
       });
   }
}


/*-----------------------
    Shop filter active 
------------------------- */
    $(".shop-filter-toogle").on("click", function (e) {
        e.preventDefault();
        $(".shop-product-fillter-header").slideToggle();
    });
    var shopFiltericon = $(".shop-filter-toogle");
    shopFiltericon.on("click", function () {
        $(".shop-filter-toogle").toggleClass("active");
    });


/*-----------------------------
        CounterUp
-----------------------------*/
jQuery(document).ready(function($) {
if($('.count').length){
    $(".count").counterUp({
        delay: 10,
        time: 2000
    });
}
 
});

/*-----------------------------
        Sidebar menu Active
-----------------------------*/

/*-----------------------------
         light box
-----------------------------*/
function vankine_light_box() {
    if ($('.lightbox-image').length) {
        $('.lightbox-image').fancybox({
            openEffect: 'fade',
            closeEffect: 'fade',
            helpers: {
                media: {}
            }
        });
    }
}
/*-----------------------------
         VSticker
-----------------------------*/
 
if($('.side_bar_cart').length){
    //Menu Toggle Btn
    $('.mini_cart_togglers').on('click', function() {
      $('body').toggleClass('side_bar_cart-visible');
    });
    //Menu Toggle Btn
    $('.side_bar_cart  .close_btn_mini , .side_bar_cart .cart_overlay').on('click', function() {
      $('body').removeClass('side_bar_cart-visible');
    });
}

 
function vankine_faqsall() {
    
    //Accordion Box
if ($('.accordion-box').length) {
    $(".accordion-box").on('click', '.question', function () {

        var outerBox = $(this).parents('.accordion-box');
        var target = $(this).parents('.accordion');

        if ($(this).hasClass('active') !== true) {
            $(outerBox).find('.accordion .question').removeClass('active');
        }

        if ($(this).next('.accordion-content').is(':visible')) {
            return false;
        } else {
            $(this).addClass('active');
            $(outerBox).children('.accordion').removeClass('active-block');
            $(outerBox).find('.accordion').children('.accordion-content').slideUp(300);
            target.addClass('active-block');
            $(this).next('.accordion-content').slideDown(300);
        }
    });
}

}
 
/*=================================
        Side Menu Option
=================================*/
      function vankine_side_menu() {
        if($(".menu_open_sidely").length) {
            //adding a new class on button element
            $('.side_navbar_togglers').on('click',function () {
                $('body').addClass('opne_side_menu_v1');   
            });
            //removing a existing class from button element
            $('.side_navbar_togglers_close').on('click',function () {
                $('body').removeClass('opne_side_menu_v1');
            });
        }
}
 
/*=================================
            Menu Stick
==================================*/
    function vankine_headerStyle() {
		if($('.sticky_header_content').length){
			var windowpos = $(window).scrollTop();
			var siteHeader = $('.sticky_header_content');
			var sticky_header = $('.sticky_header_content .sticky_header_default');
			if (windowpos > 500) {
				siteHeader.addClass('fixed-header');
				sticky_header.addClass("wow animate__animated animate__slideInDown");
			} else {
				siteHeader.removeClass('fixed-header');
				sticky_header.removeClass("wow animate__animated animate__slideInDown");
			}
		}
	}
 
function vankine_rangeslider() {
    var selector = 'input[type="range"]';
    var $element = $(selector);
    // Basic rangeslider initialization
    $element.rangeslider({

        // Deactivate the feature detection
        polyfill: false,
 
        // Callback function
        onSlide: function(position, value) {
            console.log('onSlide');
            console.log('position: ' + position, 'value: ' + value);
        },

        // Callback function
        onSlideEnd: function(position, value) {
            console.log('onSlideEnd');
            console.log('position: ' + position, 'value: ' + value);
        }
    });

}

/*-----------------------------
     progress bar
-----------------------------*/
function vankine_progress_bar() {
        // Progress Bar
	if ($('.count-bar').length) {
		$('.count-bar').appear(function(){
			var el = $(this);
			var percent = el.data('percent');
			$(el).css('width',percent).addClass('counted');
		},{accY: -50});

	}
}
/*-----------------------------
     protfolio ajax
-----------------------------*/
function vankine_protfolio_ajax(){
    $('.ajax_protfolio_enabled').on('click', '.pagination .next', function(e) {
        e.preventDefault();
        if ($(this).data('requestRunning')) {
            return;
        }
        $(this).data('requestRunning', true);
        var $protfolio_post_list = $('.portfoliocontainer'),
            $pagination = $(this).parents('.pagination'),
            $parent = $(this).parent();

        $parent.addClass('loader');

        $.get(
            $(this).attr('href'),
            function (response) {
                var $content = $(response).find('.portfoliocontainer').children('.portfolio-wrapper'),
                protfolio_pagination = $(response).find('.pagination').html();
                $pagination.html(protfolio_pagination);
                $protfolio_post_list.append($content);
                $content.imagesLoaded(function () {
                    $protfolio_post_list.isotope( 'appended', $content );
                    $pagination.find('.next').data('requestRunning', false);
                    $parent.removeClass('loader');
                });
            }
        );
    });
}
  /*-----------------------------
     service ajax
-----------------------------*/
function vankine_ser_ajax(){
    $('.ajax_service_enabled').on('click', '.pagination-area .next', function(e) {
        e.preventDefault();
        if ($(this).data('requestRunning')) {
            return;
        }
        $(this).data('requestRunning', true);
        var $ser_post_list = $('.ajaxservicecontainer'),
            $paginationser = $(this).parents('.pagination-area'),
            $parent = $(this).parent();

        $parent.addClass('loader');

        $.get(
            $(this).attr('href'),
            function (response) {
                var $contentser = $(response).find('.ajaxservicecontainer').children('.ajax-service-wrapper'),
                ser_pagination = $(response).find('.pagination-area').html();
                $paginationser.html(ser_pagination);
                $ser_post_list.append($contentser);
                $contentser.imagesLoaded(function () {
                     $contentser;
                    $paginationser.find('.next').data('requestRunning', false);
                    $parent.removeClass('loader');
                });
            }
        );
    });
} 

  /*-----------------------------
     post ajax
-----------------------------*/
function vankine_post_ajax(){
    $('.ajax_posts_enabled').on('click', '.pagination-area .next', function(e) {
        e.preventDefault();
        if ($(this).data('requestRunning')) {
            return;
        }
        $(this).data('requestRunning', true);
        var $ser_post_list = $('.ajaxcontainer'),
            $paginationser = $(this).parents('.pagination-area'),
            $parent = $(this).parent();

        $parent.addClass('loader');

        $.get(
            $(this).attr('href'),
            function (response) {
                var $contentser = $(response).find('.ajaxcontainer').children('.ajax-wrapper'),
                ser_pagination = $(response).find('.pagination-area').html();
                $paginationser.html(ser_pagination);
                $ser_post_list.append($contentser);
                $contentser.imagesLoaded(function () {
                     $contentser;
                    $paginationser.find('.next').data('requestRunning', false);
                    $parent.removeClass('loader');
                });
            }
        );
    });
} 
/*==========================================================================
    select
==========================================================================*/
function vankine_search() {
    $("select").select2();
    $(".wpforms-form select").select2();
}
/*==========================================================================
    slickslider
==========================================================================*/
function vankine_slick_vertical() {
    $(".slickslider").not('.slick-initialized').slick({
        vertical: true,
        verticalSwiping: true,
        slidesToShow: 2,
        slidesToScroll: 1,
        arrows:false, 
        dots:true,
        centerMode:false, 
        adaptiveHeight:true,
        autoplay: true,
        autoplaySpeed: 2000,
    });
} 
function vankine_slick_with_tab() {

$(".tab_content_slick").not('.slick-initialized').slick({
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: true,
    prevArrow : '<button type="button" class="slick-prev"><span class="fi-rs-arrow-small-left"></span></button>' ,
    nextArrow : '<button type="button" class="slick-next"><span class="fi-rs-arrow-small-right"></span></button>' ,
    fade: true,
    asNavFor: '.tab_slick'
  });
  $(".tab_slick").not('.slick-initialized').slick({
    slidesToShow: 4, 
    slidesToScroll: 1,
    asNavFor: '.tab_content_slick',
    dots: false,
    arrows: false,
    centerMode: false,
    focusOnSelect: true
  });
}
/*==========================================================================
   Theme Carousel
==========================================================================*/
 function vankine_theme_owl_carousel() {
    if ($('.theme_carousel').length) {
        $(".theme_carousel").each(function (index) {
            var $owlAttr = {
                thumbs: false, 
                rtl : false ,
                navText: [ '<i class="fi-rs-arrow-small-left"></i>', '<i class="fi-rs-arrow-small-right"></i>' ],
            },
            $extraAttr = $(this).data("options");
            $.extend($owlAttr, $extraAttr);
            $(this).owlCarousel($owlAttr);
        });
    }
}
/*==========================================================================
    Testimonial Carousel
==========================================================================*/
 
 function vankine_vertical_carousel_oneitem() {
    if ($('.vertoneitem').length) {
       $(".vertoneitem").owlCarousel({
     
            loop: true,
            items:1,
            rtl:false,
            autoplay: true,
            autoplayHoverPause: true,
            margin:20,
            dots: true,
            nav:false,  
        });
    }
}
/*==========================================================================
   portfolio
==========================================================================*/
 
function vankine_portfolio() {
    $(document).ready(function() {
        $('.portfoliocontainer').isotope({
            layoutMode: 'masonry',
            itemSelector: '.portfolio-wrapper',
            percentPosition: true,
        });
        // filter items on button click
        $('.portfolio_filter').on('click', 'li', function() {
            var filterValue = $(this).attr('data-filter');
            $('.portfoliocontainer').isotope({ filter: filterValue });
            $('.portfolio_filter li').removeClass('current');
            $(this).addClass('current');
        });
    });
}
 
/*---====================---flexslider ---======================---*/
if ($('.flexsliders').length) {
    $('.flexsliders').flexslider({
      animation: "slide",
      controlNav: "thumbnails"
    });
}
/*---====================---according ---======================---*/
function vankine_accordion() {
    //Accordion Box
    if($('.accordion-box').length){
        $(".accordion-box").on('click', '.acc-btn', function() {
            
            var outerBox = $(this).parents('.accordion-box');
            var target = $(this).parents('.accordion');
            
            if($(this).hasClass('active')!==true){
                $(outerBox).find('.accordion .acc-btn').removeClass('active');
            }
            
            if ($(this).next('.acc-content').is(':visible')){
                return false;
            }else{
                $(this).addClass('active');
                $(outerBox).children('.accordion').removeClass('active-block');
                $(outerBox).find('.accordion').children('.acc-content').slideUp(300);
                target.addClass('active-block');
                $(this).next('.acc-content').slideDown(300);	
            }
        });	
    }
}
/*---====================---active class for header---======================---*/
$(document).ready(function() {
    var CurrentUrl = document.URL;
    var CurrentUrlEnd = CurrentUrl.split('/').filter(Boolean).pop();
    console.log(CurrentUrlEnd);
    $(".navbar_nav li a").each(function() {
        var ThisUrl = $(this).attr('href');
        var ThisUrlEnd = ThisUrl.split('/').filter(Boolean).pop();
  
        if (ThisUrlEnd == CurrentUrlEnd) {
            $(this).closest('.navbar_nav li').addClass('active');
            $(this).parents('.menu-item-has-children').addClass('active');
        }
    });
});

/*==========================================================================
    When document is Scrollig, do
==========================================================================*/
$(window).on('scroll', function() {
    vankine_headerStyle();
});

 
/* ==========================================================================
    When document is Scrollig, do
========================================================================== */
jQuery(window).on('load', function() {
    (function($) {
        // add your functions
        onepagemobile_nav();
        vankine_search_popup();
        vankine_option_panel_popup();
        vankine_accordion();
        vankine_light_box();
        vankine_side_menu();
        vankine_search();
        vankine_rangeslider();
        vankine_faqsall();
        vankine_progress_bar();
        vankine_protfolio_ajax();
        vankine_post_ajax();
        vankine_ser_ajax();
        vankine_slick_vertical();
        vankine_theme_owl_carousel();
        vankine_vertical_carousel_oneitem();
        vankine_portfolio();
        vankine_slick_with_tab();
    })(jQuery);
});   
})(jQuery);

