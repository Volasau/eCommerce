export function plusMinusOneProduct() {
    let count = 1;
    document.addEventListener('click', (event) => {
        const target = event.target as HTMLButtonElement;
        if (target.className === 'plus-button') {
            const productCounter = target.previousElementSibling as HTMLDivElement;
            const minusBut = productCounter.previousElementSibling as HTMLButtonElement;
            minusBut.disabled = false;
            count = +productCounter.innerHTML;
            count += 1;
            productCounter.innerHTML = `${count}`;
        } else if (target.className === 'minus-button') {
            const productCounter = target.nextElementSibling as HTMLDivElement;
            count = +productCounter.innerHTML;
            count -= 1;
            productCounter.innerHTML = `${count}`;
            if (count === 1) target.disabled = true;
        }
    });
}
