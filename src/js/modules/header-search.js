export function headerSearch(className) {

    const search = className.querySelector('.header-search');
    const btnOpen = search.querySelector('.header-search__btn');
    const headerClose = search.querySelector('.header-search__close')

    btnOpen.addEventListener('click', searchShow)

    function searchShow() {
        className.classList.add('active');
        search.classList.add('active');

        headerClose.addEventListener('click', searchClose);
        btnOpen.removeEventListener('click', searchShow);
        btnOpen.addEventListener('click', searchClose);
    }

    function searchClose() {
        className.classList.remove('active');
        search.classList.remove('active');

        btnOpen.removeEventListener('click', searchClose);
        headerClose.removeEventListener('click', searchClose);
        btnOpen.addEventListener('click', searchShow)
    }
}