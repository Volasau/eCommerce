export function copyPromoCode(value: string): void {
    document.addEventListener('click', (event) => {
        const target = event.target as HTMLButtonElement;
        if (target.id === `copyText-${value}`) {
            const inputLap = document.getElementById(`inputText-${value}`) as HTMLInputElement;
            window.navigator.clipboard.writeText(inputLap.value);
        }
    });
}
