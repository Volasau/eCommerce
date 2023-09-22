export function copyPromoCode(): void {
    const inputLap = document.getElementById('inputText-lap') as HTMLInputElement;
    window.navigator.clipboard.writeText(inputLap.value);
}
