import { addClearModal } from '../../functions/addClearModal';

export function clearTheCart(): void {
    document.addEventListener('click', (event) => {
        const target = event.target as HTMLButtonElement;
        if (target.id === 'cart-cleaner') {
            addClearModal();
        }
    });
}
