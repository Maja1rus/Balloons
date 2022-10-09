export function accordion(className) {
    className.addEventListener('click', change);

    function change(event) {
        const target = event.target;
        if (target.classList.contains('accordion__title') === false) return;
        if (target.classList.contains('accordion__select')) {
            hideAll();
        } else {
            hideAll();
            target.classList.add('accordion__select');
            target.classList.remove('hidden');
            showText(target.nextElementSibling);
        }
    }

    function hideAll() {
        const accordionTitle = className.querySelectorAll('.accordion__title');
        const accordionTabs = className.querySelectorAll('.accordion__tab');
        for (let i = 0; i < accordionTitle.length; i++) {
            accordionTitle[i].classList.remove('accordion__select');
            accordionTitle[i].classList.add('hidden');
        }
        for (let i = 0; i < accordionTabs.length; i++) {
            accordionTabs[i].style.height = '0';
        }
    }

    function showText(textEl) {
        textEl.style.height = textEl.scrollHeight + 'px';
    }
}