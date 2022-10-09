import { accordion } from "./accordion.js";

export function footerAccordion(className) {
    const titles = className.querySelectorAll('.contacts__title');
    const infoList = className.querySelector('.footer-info__list');
    const catalogList = className.querySelector('.footer-catalog__list')

    actualResizeHandler()
    window.addEventListener("resize", resizeThrottler, false);
    let resizeTimeout;

    function resizeThrottler() {
        if (!resizeTimeout) {
            resizeTimeout = setTimeout(function () {
                resizeTimeout = null;
                actualResizeHandler();
            }, 46);
        }
    }

    function actualResizeHandler() {
        if (window.innerWidth <= 768) {
            className.classList.add('accordion');
            titles.forEach(title => {
                title.classList.add('accordion__title');
            })
            infoList.classList.add('accordion__tab');
            catalogList.classList.add('accordion__tab');
            accordion(className)
        } else {
            className.classList.remove('accordion');
            titles.forEach(title => {
                title.classList.remove('accordion__title');
            })
            infoList.classList.remove('accordion__tab');
            infoList.style.removeProperty('height');
            catalogList.classList.remove('accordion__tab');
            catalogList.style.removeProperty('height');
        }
    }
}