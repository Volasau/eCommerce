export function disableMinusButtons() {
    const minusButtons = document.querySelectorAll('.minus-button') as NodeList;
    minusButtons.forEach((but) => {
        const button = but as HTMLButtonElement;
        button.disabled = true;
    });
}
