export function minusOne(but: HTMLButtonElement, count: number): void {
    const productCounter = but.nextElementSibling as HTMLDivElement;
    productCounter.innerHTML = `${+productCounter.innerHTML - 1}`;
    if (count === 1) but.disabled = true;
}
