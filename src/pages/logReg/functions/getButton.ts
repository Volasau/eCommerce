export function getButton(innerFormList: HTMLElement[]): HTMLButtonElement {
    const button = document.createElement('button') as HTMLButtonElement;
    button.type = 'button';
    if (innerFormList.length <= 2) {
        button.textContent = 'LogIn';
    } else {
        button.textContent = 'Register';
    }
    return button;
}
