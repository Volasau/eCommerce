export function disableMinusButtons(): void {
    const minusButtons = document.querySelectorAll('.minus-button') as NodeList;
    minusButtons.forEach((but) => {
        const button = but as HTMLButtonElement;
        const quantity = but.nextSibling as HTMLDivElement;
        if (quantity.innerHTML === '1') button.disabled = true;
    });
}
