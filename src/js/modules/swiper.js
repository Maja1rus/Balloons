import Swiper, { Grid, Autoplay, Pagination } from "swiper";
Swiper.use([Autoplay, Pagination])
export function sliderSwiper() {
    var swiper = new Swiper(".top-category__swiper", {
        modules: [Grid],
        autoHeight: false,
        speed: 500,
        slidesPerView: 4.5,
        spaceBetween: 5,
        pagination: {
            el: ".swiper-pagination",
            clickable: true,
        },

        breakpoints: {
            425: {
                slidesPerView: 5.5,
                spaceBetween: 20,
            },
            640: {
                slidesPerView: 7.5,
                spaceBetween: 20,
            },
            768: {
                slidesPerView: 8,
                spaceBetween: 40,
            },
            1024: {
                slidesPerView: 10,
                spaceBetween: 50,
            },
            1440: {
                slidesPerView: 13,
                spaceBetween: 50,
            },
            "@0.00": {
                grid: {
                    rows: 2
                },
            },
            "@0.30": {
                grid: {
                    rows: 2
                },
            },
            "@0.40": {
                grid: {
                    rows: 2
                },
            },
            "@0.45": {
                grid: {
                    rows: 2
                },
            },
            "@0.50": {
                grid: {
                    rows: 2
                },
            },
            "@0.55": {
                grid: {
                    rows: 2
                },
            },
            "@0.60": {
                grid: {
                    rows: 2
                },
            },
            "@0.65": {
                grid: {
                    rows: 2
                },
            },
            "@0.70": {
                grid: {
                    rows: 2
                },
            },
            "@0.75": {
                grid: {
                    rows: 2
                },
            },
        },
    });


    var swiper = new Swiper(".relevant-category__swiper", {
        slidesPerView: 1.5,
        spaceBetween: 10,
        speed: 1000,
        breakpoints: {
            640: {
                slidesPerView: 2,
                spaceBetween: 10,
            },
            768: {
                slidesPerView: 3,
                spaceBetween: 20,
            },
            1024: {
                slidesPerView: 4,
                spaceBetween: 30,
            },
            1440: {
                slidesPerView: 5
            },
        },
    });

    var swiper = new Swiper(".product-set__swiper", {
        slidesPerView: 1.5,
        spaceBetween: 10,
        speed: 1000,
        breakpoints: {
            640: {
                slidesPerView: 2,
                spaceBetween: 10,
            },
            768: {
                slidesPerView: 3,
                spaceBetween: 20,
            },
            1024: {
                slidesPerView: 4,
                spaceBetween: 30,
            },
            1440: {
                slidesPerView: 5
            },
        },
    });
    const posterSwiper = new Swiper(".poster", {
        modules: [Pagination],
        slidesPerView: 1,
        loop: true,
        autoplay: {
            delay: 4000
        },
        pagination: {
            el: '.swiper-pagination',
            clickable: true,
        }
    })
}