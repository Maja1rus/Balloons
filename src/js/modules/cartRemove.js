import {umi_macro} from "./umiMacro.js";

const PARENT_NAME = 'cart-item__parent';
export function cartRemove() {
    const remove_buttons = document.querySelectorAll('.cart-remove');

    remove_buttons.forEach(function(button) {
        button.addEventListener('click', async function () {
            let item_id = button.dataset.id;
            await umi_macro('emarket', 'basket', ['remove', 'item', item_id])

            findParent(button, PARENT_NAME).remove();
        });
    });
}

function findParent(element, class_name) {
    if(element.classList.contains(class_name))
        return element;

    return findParent(element.parentElement, class_name);
}