export function updateElementClasses(): void {
    const btnLogin: Element | null = document.querySelector('.login__page');
    btnLogin?.classList.toggle('none');
    const btnRegistr: Element | null = document.querySelector('.registr__page');
    btnRegistr?.classList.toggle('none');
}
