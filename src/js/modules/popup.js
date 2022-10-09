export function popup(btn, popup) {
    const popupOpen = btn;
    const popupClose = popup.querySelector('.popup__close');
    const continueShopping = popup.querySelector('.continue-shopping');
    const body = document.querySelector('body')

    // scroll
    const documentWidth = parseInt(document.documentElement.clientWidth);
    const windowWidth = parseInt(window.innerWidth);
    const scrollbarWidth = windowWidth - documentWidth;

    function popupOpenHandler() {
        popup.classList.add('active');
        body.style.marginRight = `${scrollbarWidth}px`;
        body.classList.add('modal-open');

        popupOpen.removeEventListener('click', popupOpenHandler);
        popup.addEventListener('click', popupOverlayHandler)
        popupClose.addEventListener('click', popupCloseHandler);
        continueShopping.addEventListener('click', popupCloseHandler);
        window.addEventListener('keydown', escapeHandler);
    }

    function popupCloseHandler() {
        popup.classList.remove('active');
        body.classList.remove('modal-open');
        body.style.removeProperty('margin-right');

        popupOpen.addEventListener('click', popupOpenHandler);
        popup.removeEventListener('click', popupCloseHandler);
        popupClose.removeEventListener('click', popupCloseHandler);
        continueShopping.removeEventListener('click', popupCloseHandler);
        window.removeEventListener('keydown', escapeHandler);
    }

    function popupOverlayHandler(e) {
        if (e.target.classList.contains('popup') === true) {
            popupCloseHandler()
        }
    }

    function escapeHandler(e) {
        if (e.key === 'Escape') {
            popupCloseHandler()
        }
    }

    popupOpenHandler()
}