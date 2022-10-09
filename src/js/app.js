import { accordion } from "./modules/accordion.js";
import { likeBtn } from "./modules/btn-like.js";
import { countFn } from "./modules/count.js";
import { footerAccordion } from "./modules/footer-accordion.js";
import { formValid } from "./modules/form-valid.js";
import { headerSearch } from "./modules/header-search.js";
import { imgClick } from "./modules/img-click.js";
import { phoneMask } from "./modules/phone-mask.js";
import { popup } from "./modules/popup.js";
import { rangeInputFn } from "./modules/range.js";
import { sliderSwiper } from "./modules/swiper.js";
import { showMore } from "./modules/show-more.js";
import { YandexMaps } from './modules/map.js';
import { cartRemove } from "./modules/cartRemove.js";
import { cartAddButton } from "./modules/cartAdd.js";
import { promocode } from "./modules/promocode.js";
import { handleModal } from './modules/modal.js'

//=== CART ADD ===//
let button = document.querySelector('.product-info__btn-buy');
if(button) {
    cartAddButton(button);
}

//=== CART REMOVE ===//
cartRemove();

// promocode
promocode()

//=== SHOW MORE BUTTON ===//
const show_more = document.querySelector('.show-more');
if(show_more) {
    showMore(show_more);
}


// modal promo

try {
    const modal = document.querySelector('.modal')
    if (modal) {
        handleModal(modal)
    }
} catch (error) {
    console.log(error)
}

//=== HEADER MENU ===///
try {
    const navBtn = document.querySelector('.nav-menu__btn')
    if (navBtn) {
        navBtn.addEventListener('click', () => {
            const popupNav = document.querySelector('.header-nav')
            popup(navBtn, popupNav)
        })
    } 
} catch (error) {
    console.log(error);
}

//=== HEDAER SEARCH ===///
try {
    const headerInfo = document.querySelector('.header__info')
    headerSearch(headerInfo)
} catch (error) {
    console.log(error);
}

//=== ACCORDION ===///
try {
    const accordionBlocks = document.querySelectorAll('.accordion')
    if (accordionBlocks.length > 0) {
        accordionBlocks.forEach(accordionBlock => {
            accordion(accordionBlock)
        })
    }
} catch (error) {
    console.log(error);
}

//=== SWIPER ===///
try {
    const topCategory = document.querySelector('.top-category__swiper');
    if (topCategory) {
        sliderSwiper()
    }
} catch (error) {
    console.log(error);
}

try {
    const relevantCategoty = document.querySelector('.relevant-category')
    if (relevantCategoty) {
        sliderSwiper()
    }
} catch (error) {
    console.log(error);
}

try {
    const productSet = document.querySelector('.product-set')
    if (productSet) {
        sliderSwiper()
    }
} catch (error) {
    console.log(error);
}

//=== LIKE ITEM ===///

try {
    const likeBtns = document.querySelectorAll('.item__like');
    if (likeBtns.length > 0) {
        likeBtn(likeBtns)
    }
} catch (error) {
    console.log(error);
}

//=== FOTER ACCORDION ===//
try {
    const footerNav = document.querySelector('.footer__nav');
    footerAccordion(footerNav)
} catch (error) {
    console.log(error);
}

//=== MINIATURES ===// 
try {
    const productImg = document.querySelector('.product-img')
    if (productImg) {
        imgClick(productImg)
    }
} catch (error) {
    console.log(error);
}

//=== COUNT ===//
try {
    const counts = document.querySelectorAll('.count');
    if (counts.length > 0) {
            countFn(counts)
    }
} catch (error) {
    console.log(error);
}

//=== CART-POPUP ===//
try {
    const cartBtn = document.querySelector('.header__cart')
    if (cartBtn) {
        cartBtn.addEventListener('click', () => {
            const popupCart = document.querySelector('.popup-cart')
            popup(cartBtn, popupCart)
        })
    } 
} catch (error) {
    console.log(error);
}

//=== FILTER-POPUP ===//
try {
    const filterBtn = document.querySelector('.catalog-filter__btn')
    if (filterBtn) {
        filterBtn.addEventListener('click', () => {
            const popupFilter = document.querySelector('.popup-filter')
            popup(filterBtn, popupFilter)
        })
    } 
} catch (error) {
    console.log(error);
}

//=== FILTER-RANGE ===//
try {
    const filterRanges = document.querySelectorAll('.filter-range');
    if (filterRanges.length > 0) {
        filterRanges.forEach(filterRange => {
            rangeInputFn(filterRange)
        })
    }
} catch (error) {
    console.log(error);
}

//=== FORM VALID ===//
try {
    const forms = document.querySelectorAll('.form');
    if (forms.length > 0) {
        forms.forEach(form => {
            formValid(form);
            phoneMask(form)
        })
    }
} catch (error) {
    console.log(error);
}

// === MAP === //
try {
    const mapContainer = document.querySelector('.map');
    if (mapContainer) {
        console.log();
        const obj = {
            containerId: 'map', // контейнер, куда загружается карта
            coords: '', // список адресов, которые выводим на карты
            // url: URL, // адрес апи
            center: JSON.parse(mapContainer.dataset.center), // центр карты
            zoom: 16, // величина зума
            find: false, // возможность открытия бабла по клику вне карты
            coordsMarker: JSON.parse(mapContainer.dataset.coordinates)
        };
        const mapInit = new YandexMaps(obj);
    }
} catch (error) {
    console.log(error);
}