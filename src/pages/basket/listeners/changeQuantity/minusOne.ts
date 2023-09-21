export function minusOne(but: HTMLButtonElement, count: number): void {
    const productCounter = but.nextElementSibling as HTMLDivElement;
    productCounter.innerHTML = String(+productCounter.innerHTML - 1);
    if (count === 1) but.disabled = true;
}
