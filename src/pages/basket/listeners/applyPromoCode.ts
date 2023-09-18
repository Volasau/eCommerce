export function applyPromoCode() {
    document.addEventListener('click', (event) => {
        const target = event.target as HTMLButtonElement;
        if (target.className === 'lap-promo-but') {
            console.log(target);
        }
    });
}
