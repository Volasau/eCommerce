import { minusOne } from './minusOne';
import { plusOne } from './plusOne';
import { recalculateValues } from './recalculateValues';

export function plusMinusOneProduct(): void {
    const count = 1;
    document.addEventListener('click', (event) => {
        const target = event.target as HTMLButtonElement;
        if (target.className === 'plus-button') {
            const id = target.id.replace('-cart-prod-plus', '');
            plusOne(target, count);
            recalculateValues(id);
        } else if (target.className === 'minus-button') {
            const id = target.id.replace('-cart-prod-minus', '');
            minusOne(target, count);
            recalculateValues(id);
        }
    });
}
