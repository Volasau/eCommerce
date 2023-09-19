export function recalculatePromo(id: string) {
    const sumBlock = document.getElementById(`${id}-cart-prod-sum`) as HTMLDivElement;
    const priceBlock = document.getElementById(`${id}-cart-prod-price`) as HTMLDivElement;
    const totalSumBlock = document.getElementById('cart-sum') as HTMLDivElement;
    const quantityBlock = document.getElementById(`${id}-count`) as HTMLDivElement;
    const allSums = document.querySelectorAll('.sum') as NodeList;
    let totalSum = 0;
    const sum = +quantityBlock.innerHTML * +priceBlock.innerHTML;
    sumBlock.innerHTML = String(sum.toFixed(2));
    allSums.forEach((sum) => {
        const summa = sum as HTMLDivElement;
        totalSum += +summa.innerHTML;
    });
    totalSumBlock.innerHTML = String(totalSum.toFixed(2));
}
