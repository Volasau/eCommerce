export function plusOne(but: HTMLButtonElement): void {
    const productCounter = but.previousElementSibling as HTMLDivElement;
    const minusBut = productCounter.previousElementSibling as HTMLButtonElement;
    minusBut.disabled = false;
    productCounter.innerHTML = `${+productCounter.innerHTML + 1}`;
}
