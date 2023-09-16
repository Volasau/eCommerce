import { addUpAllTheSums } from './addUpAllTheSums';

export function recalculateValues(id: string): void {
    const sumBlock = document.getElementById(`${id}-cart-prod-sum`) as HTMLDivElement;
    const priceBlock = document.getElementById(`${id}-cart-prod-price`) as HTMLDivElement;
    const totalSumBlock = document.getElementById('cart-sum') as HTMLDivElement;
    const quantityBlock = document.getElementById(`${id}-count`) as HTMLDivElement;
    const sum = +quantityBlock.innerHTML * +priceBlock.innerHTML;
    sumBlock.innerHTML = String(sum);

    totalSumBlock.innerHTML = String(addUpAllTheSums());
}
