/*jslint browser: true*/
/*global $, console*/

//
// Function For Changing The Navbar's Background-color (Light / Transparent Style)
//
// Change Color Of Brand
function changeBgNavbar() {
	'use strict';
	let nav = $('.navbar');

	if($(document).scrollTop() > 10){
		nav.addClass('onScroll');
		//For Change Brand Image of Black Color If the Background Of Navbar is White
		$(" .navbar .logo img").attr('src', "images/brand_black.png");
	}else{
		nav.removeClass('onScroll');
		//For Change Brand Image of White Color If the Background Of Navbar is Transparent
		$(" .navbar .logo img").attr('src', "images/brand_white.png");
	}
}
//
// Two Functions For The Text Auto Type Effect In Section Header
//
function initHeaders(){

	let elms = $(".home .item h1 span.special-word");

	for(let i = 0; i < elms.length; i++)
		elms.eq(i).text(elms.eq(i).data('words').split(',')[0]);
}

//
// This For Write Text Of Header element Automatic
//
function autoWrite(){
	"use strict";
	let elm 	= $(".home .item.swiper-slide-active h1 span.special-word"),
		words  	= elm.data('words').split(','),
		index	= words.indexOf(elm.text()),
		sign 	= -1;
		index = index === words.length-1 ? 0 : index+1;

	let length = 1;
	let intv 	= setInterval(function(){
		if(elm.text().length === 0)
			sign = 1;

		if(sign === -1)

			elm.text(elm.text().substring(0, elm.text().length-1));

		else{

			elm.text(words[index].substring(0, length));
			length++;
			if(length > words[index].length){
				clearInterval(intv);
				return;
			}

		}
	}, 100);

}

//
// Function For Trigger Counter Of Section Facts 
// 
function counterup(elm, startVal, endVal){
    
	var numAnim = new CountUp(elm, startVal, endVal, 0, 4);
	 
	if (!numAnim.error) {
		numAnim.start();
	} else {
		console.error(numAnim.error);
	}
}

//
// When Document On preload 
//
//Window On load
$(window).on('load', function(){

	$('.sk-cube-grid').delay(0).fadeOut(1000, function(){

		$('body').css({overflow : 'auto'});
		$('.preload').slideUp(1000);
	});	

});

//var niceScroll = $('html').niceScroll();


/**-------------------------------------------------------------------------
***
***							When Document Is Ready
***
***-------------------------------------------------------------------------*/

//
//When Page is Ready
//
$(document).ready(function(){ 
	'use strict';
	
	//
	//Initialize Text Of Main Header
	//
	initHeaders();
	
	//
	// Trigger Trick Auto Write Main Header
	//
	setInterval(autoWrite, 10000);
	
	//
	// Called Function For Change Background-color Of Navbar(Light / Dark Style)
    //
	changeBgNavbar(); 
    
	//
    // Smoothscroll to anchor
	//
    $('.nav-link').click(function (e){
		e.preventDefault();
         var elm = $(this).attr("href").substr(1);
            let dist = elm === 'main' ? 0 : 1;
         $('html,body').animate({
            scrollTop: ($("#" + elm).offset().top + dist ) + "px"
         },1000);
    });
    
	//  when page scrolled
  	// Also add smart scroll
	 var status = true;
    $(window).on("scroll", function(){
		
       	changeBgNavbar();  // Called Function For Change Background-color Of Navbar(Light / Transparent Style)
		
		//
		// Show Or hide Button (Back to top)
		//
		if($(this).scrollTop() >1000 && $(window).width() > 768) {
			$('.btn-toUp').fadeIn(500);
		}else {
			$('.btn-toUp').fadeOut(500);
		}
        //
        //run counterTo fact
		//
        if(status && ($(this).scrollTop() + ($(window).height()/2)) > $('.facts').offset().top){
            
             status = false;
			let elements = document.getElementsByClassName("SomeElementYouWantToAnimate");
			
            for(let i = 0; i < elements.length; i++){
				
            counterup(elements[i], elements[i].getAttribute("data-startval"), elements[i].getAttribute("data-endval"));
            }
           
           }
    });
	
	//
    // Button For Show / Hide Navbar In Mobile Screen And Small Screen
	//
    $('.btn-nav').click(function(){
		let secondNavBar = $('.second-navbar');
		$('.btn-nav').toggleClass("show");
		let offsetRight = secondNavBar.is('.show') ? -(secondNavBar.innerWidth()+65) : 0;
		secondNavBar.animate({
			right:offsetRight +'px'
		},400);
		secondNavBar.toggleClass("show");
    });
    
	//
    // Initialize Swiper When Document Ready (Home Section)
	//
    var mySwiper = new Swiper ('.swiper-container', {
		
      	// Optional parameters
		
      	direction: 'horizontal',
//      	loop: true,
      	speed: 1200,
      	effect: "fade",
		// simulateTouch:true,
      	autoplay: {
				delay: 10000,
			},
		parallax:true,
      	  
      	pagination: {
			  
      	  	el: '.swiper-pagination',
      	  	type: 'bullets',
      	  	clickable: true,
      	  	bulletElement:"div"
      	},
			
      	navigation: {
      	    nextEl: '.swiper-button-next',
      	    prevEl: '.swiper-button-prev'
      	}
			
    });
	
	
	
	//
	// Initialize Swiper When Document Ready (Team Section)
	//
		var mySwiperTeam = new Swiper ('.swiper-container2', {

			// Optional parameters
			effect : 'slide',
//			loop: true,
			speed: 600,
			autoplay: {
				delay: 5000,
			},
			spaceBetween: 15,
			// Default parameters
			slidesPerView: 4,
			// Responsive breakpoints
			breakpoints: {
			// when window width is <= 576px
			576: {
				slidesPerView: 1
			},
			// when window width is <= 768px
			768: {
				slidesPerView: 2
			},
			// when window width is <= 992px
			992: {
				slidesPerView: 3
			}
			},
			pagination: {
				el: '.swiper-pagination',
				clickable: true
			}

	});
    
	//
	// Initialize Swiper When Document Ready (Blogs Section)
	//
		var mySwiperBlogs = new Swiper ('.swiper-container-blogs', {

			// Optional parameters
			effect : 'slide',
//			loop: true,
			speed: 600,
			autoplay: {
				delay: 5000,
			},
			spaceBetween: 30,
			// Default parameters
			slidesPerView: 3,
			// Responsive breakpoints
			breakpoints: {
			// when window width is <= 576px
			576: {
				slidesPerView: 1
			},
			// when window width is <= 768px
			768: {
				slidesPerView: 1
			},
			// when window width is <= 992px
			992: {
				slidesPerView: 2
			}
			}

	});	
    
	//
	// Initialize Swiper When Document Ready (testimonial Section)
	//
		var mySwiperTestim = new Swiper ('.swiper-container-testimonial', {

			// Optional parameters
			effect : 'slide',
//			loop: true,
			speed: 600,
			autoplay: {
				delay: 5000,
			},
			spaceBetween: 30,
			// Default parameters
			slidesPerView: 3,
			// Responsive breakpoints
			breakpoints: {
                // when window width is <= 576px
                576: {
                    slidesPerView: 1
                },
                // when window width is <= 768px
                768: {
                    slidesPerView: 2
                },
                // when window width is <= 992px
                992: {
                    slidesPerView: 2
                }
			},pagination: {
			  
      	  	el: '.swiper-pagination',
      	  	type: 'bullets',
      	  	clickable: true,
      	  	bulletElement:"span"
      	}

	});	
	
	//
	// Initialize Swiper When Document Ready (Work With Section)
	//
	var mySwiperWorkWhith = new Swiper ('.swiper-container3', {
						
    	  	// Optional parameters
            effect : 'slide',
			loop: true,
      		speed: 1200,
      		autoplay: {
    			delay: 5000
  	  		},
			spaceBetween: 0,
			// Default parameters
			slidesPerView: 6,
			// Responsive breakpoints
			breakpoints: {
				// when window width is <= 576px
				576: {
					slidesPerView: 3
				},
				// when window width is <= 768px
				768: {
					slidesPerView: 4
				}
			}
	
	});
	
    //
    // Trigger The Blugin Wow
	//
    if($(window).width() > 768){
	   new WOW().init();
    }
	
	//
	// Trigger Nice Scrool Blugin
	//
	var niceScroll = $('html').niceScroll({
		
		cursorcolor : '#777',
		cursorwidth : '10px',
		cursorminheight:  150,
		cursorborder: '1px solid #777',
		smoothscroll: true,
		scrollspeed : 80
        
	});
	
    //
    //Hide niceScroll for small dvices
    //
    if($(window).width() < 768){
       $('html').getNiceScroll().remove();
    }
    
	//
	// Trigger The Mixitup Plugin
	//
    var mixer = mixitup('.gallery-box');
	
	//
	// Changing The Works Button
	//
    $(".works .btns button").click(function (){
		
        $(this).addClass("selected").siblings().removeClass("selected");

    });
	
	//
	// Back To Top
	//
	$('.btn-toUp').on('click', function(){
		$('body, html').animate({scrollTop : 0}, 1500);
	});
    
	//
	// Animate Placeholder Of Contact Inputs To Above (Focus)
	//
    $('.custom-input').focus(function(){
		
		$(this).siblings('label').animate({
			top : '-12px'
		}, 300);
         $(this).siblings('label').animate({
			         left: 40
		  }, 300);
	});
	
	//
    // Animate Placeholder Of Contact Inputs To Down (Blur)
	//
    $('.custom-input').blur(function(){
		
         if($(this).val() === ""){
			 
             $(this).siblings('label').animate({
			         left: 48
		  }, 300);
              $(this).siblings('label').animate({
                    top : '22px'
              }, 300,function(){
                  
              }); 
            
         }
	});
    
    
    
    //
    // Show Image in The ImgReader In Event Click
    //
	var workItems = $('.works .work-item');
    workItems.click(function(){
        let srcCur = $(this).find('img').attr('src');
        let img;
        
        $('.works .img-reader').find('.img-box img').attr('src', srcCur).end().fadeIn(200);
        
         $('.img-reader .imgs').children().remove();
        let selected = '';
        for(let i = 0; i < workItems.length; i++ )
        {
            img = $('<img class="img-fluid mb-2" src="' + $(workItems[i]).find('img').attr('src') + '" alt="">');
            
            if(img.attr('src') === srcCur)
                img.addClass('selected');
            
            img.click(ChangePreviewImg);
            $('.img-reader .imgs').append(img);
            
        }
        
    });
    
    
    //
    // Change the Preview Img in img-reader 
    //
    function ChangePreviewImg(e){
        $('.img-reader .img-box img').attr('src', $(this).attr('src'));
        $(this).addClass('selected').siblings().removeClass('selected');
    }
    //
    // navigation between all imgs 
    //
    
    $('.img-reader .aside .btn-next, .img-reader .aside .btn-prev').click(function(){
        let currentIndex = $('.img-reader .imgs .selected').index();
        let nextIndex;
        let imgs = $('.img-reader .imgs img');
        
        if($(this).hasClass('btn-next')){
            nextIndex = currentIndex === imgs.length - 1 ? 0 : ++currentIndex;
       }else{
            nextIndex = currentIndex === 0 ? imgs.length - 1 : --currentIndex;
       }
        $('.img-reader .img-box img').attr('src', $(imgs[nextIndex]).attr('src'));
        $(imgs[nextIndex]).addClass('selected').siblings().removeClass('selected');
    });
    //
    // Close the ImgReader
    //
    $('.img-reader .btn-close,.img-reader .img-box').click(function(){
       $(this).parents('.img-reader').fadeOut(200); 
    
    });
    
    //Add Effect For IE Navigator
    if(navigator.userAgent.indexOf('Chrome') == -1 && navigator.userAgent.indexOf('Firefox') == -1){
        $('.team').addClass('isIE');
    }
	
});























