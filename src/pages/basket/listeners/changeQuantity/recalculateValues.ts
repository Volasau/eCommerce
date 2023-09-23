export function recalculateValues(id: string, totalSum: number | undefined): void {
    const sumBlock = document.getElementById(`${id}-cart-prod-sum`) as HTMLDivElement;
    const priceBlock = document.getElementById(`${id}-cart-prod-price`) as HTMLDivElement;
    const totalSumBlock = document.getElementById('cart-sum') as HTMLDivElement;
    const quantityBlock = document.getElementById(`${id}-count`) as HTMLDivElement;
    const sum = +quantityBlock.innerHTML * +priceBlock.innerHTML;
    sumBlock.innerHTML = String(sum.toFixed(2));

    totalSumBlock.innerHTML = String((totalSum ? totalSum : 0) / 100);
}
