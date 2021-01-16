new Swiper('.image-slider', {
    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev'
    },
    speed: 800,
    loop: true,
    keyboard: {
        enabled: true,
        padeUpDowm: true
    },
    mousewheel: {
        sensivity: 1,
        eventsTarget: '.image-slider'
    },
    autoHeight: true,
    breakpoints: {
        320: {
            slidesPerView: 1,
            slidesPerGroup: 1,
            spaceBetween: 70,
            centeredSlides: true,

        },
        480: {
            slidesPerView: 2,
            slidesPerGroup: 2,
            spaceBetween: 50,
            pagination: {
                el: '.swiper-pagination',
                type: 'bullets'
            }
        },
        568: {
            slidesPerView: 3,
            slidesPerGroup: 3,
            spaceBetween: 34,
        },
        992: {
            slidesPerView: 4,
            slidesPerGroup: 4,
            spaceBetween: 27,
        }
    }
});

