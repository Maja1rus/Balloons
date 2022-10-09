import { sendForm } from "./send-form.js";

export function formValid(elt) {
    const inputs = elt.querySelectorAll(`.input-check`);

    const name = elt.querySelector('.name-js');
    const nameInput = name.querySelector('input');
    const nameSpan = name.querySelector('.order__name');

    const phone = elt.querySelector('.phone-js');
    const phoneInput = phone.querySelector('input');
    const phoneSpan = phone.querySelector('.order__name');

    // const address = elt.querySelector('.address-js');
    // let addressInput;
    // let addressSpan;

    // console.log(address);

    // if (address !== null) {
    //     addressInput = address.querySelector('textarea');
    //     addressSpan = address.querySelector('.order__name');
    // }


    const btnSubmit = elt.querySelector('.btn-submit');

    function validateEmail(inputCheck) {
        let result = /^[а-яА-Я0-9,\.\s]+$/;
        return result.test(String(inputCheck).toLowerCase());
    }

    function validatePhone(inputCheck) {
        let result = /\D/;
        return result.test(String(inputCheck));
    }

    function nameError() {
        nameSpan.innerText = `Пожалуйста, укажите имя получателя`;
        nameSpan.classList.add('input-error')
    }

    function nameSuccess() {
        nameSpan.innerHTML = `Имя получателя<span class="order__required"></span>`;
        nameSpan.classList.remove('input-error')
    }

    function phoneSuccess() {
        phoneSpan.innerHTML = `Номер телефона<span class="order__required"></span>`;
        phoneSpan.classList.remove('input-error')
    }

    function phoneError() {
        phoneSpan.innerText = `Пожалуйста, укажите номер получателя`;
        phoneSpan.classList.add('input-error')
    }

    // function addressSuccess() {
    //     addressSpan.innerHTML = `Адрес доставки<span class="order__required"></span>`;
    //     addressSpan.classList.remove('input-error')
    // }

    // function addressError() {
    //     addressSpan.innerText = `Пожалуйста, укажите адрес доставки`;
    //     addressSpan.classList.add('input-error')
    // }


    btnSubmit.addEventListener('click', (e) => {
        e.preventDefault()
        let phoneVal = phoneInput.value;
        // let addressVal;
        // if (address !== null) { 
        //     addressVal = addressInput.value;
        // }

        inputs.forEach(function (input) {
            if (input.value === '') {
                nameError();
                phoneError();
                // if (address !== null) { 
                //     addressError();
                // }
            }
        });

        if (nameInput.value === '') {
            console.log('Inputs not filled');
            return false;
        } else {
            nameSuccess()
        }

        if (!validatePhone(phoneVal)) {
            console.log('phone not valid');
            return false;
        } else {
            phoneSuccess()
        }

        // if (address !== null) { 
        //     if (!validateEmail(addressVal)) {
        //         console.log('address not valid');
        //         return false;
        //     } else {
        //         addressSuccess()
        //     }
        // }

        elt.submit();
    });
}