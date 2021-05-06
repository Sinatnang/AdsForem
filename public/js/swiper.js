
            var swiper = new Swiper('.wb-finance-cube', {
            effect: 'cube',
            grabCursor: true,
            loop: true,
            speed: 2000,
            mousewheel: true,
            direction: 'horizontal',
            cubeEffect: {
               shadow: false,
               slideShadows: true,
               shadowOffset: 20,
               shadowScale: 0.94,
            },
            autoplay: {
               delay: 2000,
               disableOnInteraction: false,
            },
            });
            var mhSwiper = new Swiper('.masthead-left-right', {
            effect: 'cube',
            grabCursor: true,
            loop: true,
            speed: 2000,
            mousewheel: true,
            direction: 'horizontal',
            cubeEffect: {
               shadow: false,
               slideShadows: true,
               shadowOffset: 20,
               shadowScale: 0.94,
            },
            autoplay: {
               delay: 2000,
               disableOnInteraction: false,
            },
            });
            var preswiper = new Swiper('.wb-finance-cube-pre-banner', {
               effect: 'cube',
               grabCursor: true,
               loop: true,
               speed: 2000,
               mousewheel: true,
               direction: 'vertical',
               cubeEffect: {
                  shadow: false,
                  slideShadows: true,
                  shadowOffset: 20,
                  shadowScale: 0.94,
               },
               autoplay: {
                  delay: 2000,
                  disableOnInteraction: false,
               },
               });
            //testing