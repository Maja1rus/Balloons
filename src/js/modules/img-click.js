export function imgClick(className) {
    const bigImg = className.querySelector('.product-img__big img')
    const miniatures = className.querySelectorAll('.product-img__item');

    className.addEventListener('click', openimgHandler)

    function openimgHandler(e) {
        const target = e.target;
        if (target.closest('.product-img__item')) {
            const img = target.closest('.product-img__item')
            bigImg.src = img.dataset.img

            for (var item of miniatures) {
                item.classList.remove('product-img__item--border');
            }
            img.classList.add('product-img__item--border');
        }
    }
}