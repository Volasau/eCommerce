export function clickCancelBut(but: HTMLButtonElement, changeBut: HTMLButtonElement, cont: HTMLElement): void {
    but.addEventListener('click', () => {
        changeBut.disabled = false;
        cont.remove();
    });
}
