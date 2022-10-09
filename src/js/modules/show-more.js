import { get_current_catalog_url, text_to_dom } from "./catalog.js";
import { request } from "./umiMacro.js";

export function showMore(show_more) {
    let current_page = 1;

    show_more.addEventListener('click', async function() {
        let url = get_current_catalog_url() + '&p=' + current_page++;
        let result = await request(url, 'GET', null, false);

        var result_dom = text_to_dom(result);

        let catalog = result_dom.querySelector('.catalog-items__wrap');
        if(!catalog) return;

        let items_amount = catalog.querySelectorAll('.item').length;
        console.log(items_amount);
        if(items_amount > 0) {
            document.querySelector('.catalog-items__wrap').innerHTML += catalog.innerHTML;
            // history.pushState(null, null, url);
        }

        if(items_amount < 20) {
            show_more.style.display = 'none';
        }
    });
}