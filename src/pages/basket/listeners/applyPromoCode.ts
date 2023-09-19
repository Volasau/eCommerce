import { recalculatePromo } from './changeQuantity/recalculatePromo';

export function applyPromoCode() {
    document.addEventListener('click', async (event) => {
        const target = event.target as HTMLButtonElement;
        if (target.id.includes('-lap-but')) {
            const id = target.id.replace('-lap-but', '');
            const input = document.getElementById(`${id}-promo-input`) as HTMLInputElement;
            const price = document.getElementById(`${id}-cart-prod-price`) as HTMLDivElement;
            const prodName = document.querySelector(`#${id}-cart-prod-name`) as HTMLDivElement;
            if (target.innerHTML === 'Apply') {
                if (input.value === 'promo-laptop') {
                    input.remove();
                    target.innerHTML = 'Special price DELETE';
                    target.style.backgroundColor = 'rgb(248, 75, 153)';
                    if (!sessionStorage.id) {
                        sessionStorage.setItem(id, price.innerHTML);
                        price.innerHTML = ((+price.innerHTML / 100) * 95).toFixed(2);
                    }
                    recalculatePromo(id);
                }
            } else {
                if (target.parentElement) target.parentElement.remove();
                prodName.innerHTML += `<div id="lap-promo">
                                        <input id="${id}-promo-input" type="text" placeholder="PROMO">
                                        <button id="${id}-lap-but" class="lap-promo-but">Apply</button>
                                    </div>`;
                price.innerHTML = sessionStorage.getItem(id) as string;
                sessionStorage.removeItem(id);
                recalculatePromo(id);
            }
        }
    });
}
