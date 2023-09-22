export function minusOne(but: HTMLElement): void {
    const quantityBlock = but.nextElementSibling as HTMLDivElement;
    const quantity = quantityBlock.innerHTML;
    const productCounter = but.nextElementSibling as HTMLDivElement;
    productCounter.innerHTML = `${+productCounter.innerHTML - 1}`;
    if (quantity === '2') {
        const button = but as HTMLButtonElement;
        button.disabled = true;
    }
}
