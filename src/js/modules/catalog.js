const filter_form = document.querySelector('.filter__form');

export function get_current_catalog_url() {
    let link = filter_form.getAttribute('action');
    let filter_request = form_to_get_params(filter_form);

    return `${link}?${filter_request}`;
}

const parser = new DOMParser();
export function text_to_dom(text) {
    return parser.parseFromString(text, "text/html");
}

export function form_to_get_params(query_form) {
    return new URLSearchParams(new FormData(query_form)).toString()
}
