import {hide_loader, request, show_loader} from "./umiMacro.js";
import {text_to_dom} from "./catalog.js";


const POPUP_DATA = '.popup-cart__body';
export function cartAddButton(btn) {
    btn.addEventListener('click', async function (e) {
        e.preventDefault();

        let item_id = btn.dataset.id;
        let amount = document.querySelector('.input__count').value;

        show_loader();

        let form_data = new FormData();
        form_data.append('amount', amount);
        await request(`/udata/emarket/basket/put/element/${item_id}.json`, 'POST', form_data);

        let new_popup_data = await request('/', 'GET', null, false);
        let new_popup_dom = text_to_dom(new_popup_data);
        document.querySelector(POPUP_DATA).innerHTML = new_popup_dom.querySelector(POPUP_DATA).innerHTML;

        hide_loader();
        document.querySelector('.header__cart').click();
    });
}