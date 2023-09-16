export function plusOne(but: HTMLButtonElement, count: number): void {
    const productCounter = but.previousElementSibling as HTMLDivElement;
    const minusBut = productCounter.previousElementSibling as HTMLButtonElement;
    minusBut.disabled = false;
    count = +productCounter.innerHTML;
    count += 1;
    productCounter.innerHTML = `${count}`;
}
