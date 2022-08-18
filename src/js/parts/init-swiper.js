var swiper = new Swiper(".publications__list", { 
    slidesPerView: 1,
    spaceBetween: 10,
    loop: true,
    navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
    },
    breakpoints: { 
        "560": {
            slidesPerView: 2,
            spaceBetween: 10,            
        },
        "1024": {
            slidesPerView: 3,
            spaceBetween: 30,            
        }
    }
});

var swiper = new Swiper(".footer__pay-list", { 
    slidesPerView: 'auto',
    spaceBetween: 16, 
});