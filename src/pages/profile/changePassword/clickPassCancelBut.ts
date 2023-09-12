export function clickPassCancelBut(but: HTMLButtonElement, cont: HTMLDivElement): void {
    but.addEventListener('click', () => {
        const changePasswordButton = document.querySelector('.btn__change-pass') as HTMLButtonElement;
        changePasswordButton.disabled = false;
        cont.remove();
    });
}
