export function countFn(countItems) {

    countItems.forEach(countItem => {
        const count = countItem.querySelector('.input__count');
        const plus = countItem.querySelector('.btn__plus');
        const minus = countItem.querySelector('.btn__minus');
        let countMax = Number(count.getAttribute("max"));

        function incrementHandler() {
            let val = parseInt(count.value) + 1;
            checkMaxAndMin(val);
        }

        function decrementHandler() {
            let val = parseInt(count.value) - 1;
            checkMaxAndMin(val);
        }

        function countInput() {
            let val = parseInt(count.value);
            checkMaxAndMin(val);
        }

        function checkMaxAndMin(val) {
            if (val >= countMax) {
                count.value = countMax;
            } else if (val <= 0) {
                count.value = 0;
            } else {
                count.value = val;
            }
        }

        // вызов функций для элементов count
        minus.addEventListener('click', decrementHandler);
        plus.addEventListener('click', incrementHandler);
        count.addEventListener('input', countInput);
    });
}