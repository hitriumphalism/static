var swiper = new Swiper('.js-swiper-world', {
    // effect: 'cube',
    grabCursor: true,
    onInit: function(swiper) {
        // slides.removeClass('cactive').eq(swiper.snapIndex).addClass('cactive');
    },
    onSlideChangeEnd: function() {
        // slides.removeClass('cactive').eq(swiper.snapIndex).addClass('cactive');

    },
    direction: 'vertical',
    lazyLoading: true,
    lazyLoadingInPrevNext: true,
    lazyLoadingInPrevNextAmount: 2,
    // cube: {
    //     shadow: true,
    //     slideShadows: true,
    //     shadowOffset: 20,
    //     shadowScale: 0.94
    // }
});
var swiper2 = new Swiper('.js-fl', {
    // effect: 'cube',
    grabCursor: true,
    onInit: function(swiper) {
        // slides.removeClass('cactive').eq(swiper.snapIndex).addClass('cactive');
    },
    onSlideChangeEnd: function() {
        // slides.removeClass('cactive').eq(swiper.snapIndex).addClass('cactive');

    },
    lazyLoading: true,
    lazyLoadingInPrevNext: true,
    lazyLoadingInPrevNextAmount: 2,
    // cube: {
    //     shadow: true,
    //     slideShadows: true,
    //     shadowOffset: 20,
    //     shadowScale: 0.94
    // }
});