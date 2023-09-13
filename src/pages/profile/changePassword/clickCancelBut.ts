export function clickCancelBut(but: HTMLButtonElement, changeBut: HTMLButtonElement, cont: HTMLDivElement): void {
    but.addEventListener('click', () => {
        changeBut.disabled = false;
        cont.remove();
    });
}
