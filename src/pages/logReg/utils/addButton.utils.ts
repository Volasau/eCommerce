export function addButton(formHTML: HTMLFormElement, innerFormList: HTMLElement[]): void {
    const button = document.createElement('button') as HTMLButtonElement;
    button.type = 'button';
    if (innerFormList.length <= 2) {
        button.setAttribute('id', 'login-submit');
        button.textContent = 'LogIn';
    } else {
        button.textContent = 'Register';
        button.setAttribute('id', 'registr-submit');
    }
    formHTML.append(button);
}
