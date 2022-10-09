import { umi_macro } from "./umiMacro.js";

export function likeBtn(btns) {
    const like = document.querySelector('.header__like .header__btn-text');
    let likeNumber = Number(like.innerText)

    btns.forEach(btn => {
        btn.addEventListener('click', likeHandler);
    });

    async function likeHandler(e) {
        e.preventDefault();
        const btn = e.target.closest('.item__like');

        let item_id = btn.dataset.id;
        let active = btn.classList.contains('active') === true;
        let method = active ? 'deleteFavouriteItem' : 'addFavouriteItem';

        await umi_macro('users', method, [item_id]);
        like.innerText = likeNumber += (active ? -1 : 1);
        btn.classList.toggle('active');
    }
}