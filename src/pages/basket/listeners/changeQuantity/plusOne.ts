export function plusOne(but: HTMLButtonElement): void {
    const productCounter = but.previousElementSibling as HTMLDivElement;
    const minusBut = productCounter.previousElementSibling as HTMLButtonElement;
    minusBut.disabled = false;
    productCounter.innerHTML = String(+productCounter.innerHTML + 1);
}
