export function minusOne(but: HTMLButtonElement, count: number): void {
    const productCounter = but.nextElementSibling as HTMLDivElement;
    count = +productCounter.innerHTML;
    count -= 1;
    productCounter.innerHTML = `${count}`;
    if (count === 1) but.disabled = true;
}
