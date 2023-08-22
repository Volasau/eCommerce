export function addButton(formHTML: HTMLFormElement, innerFormList: HTMLElement[]) {
    const button = document.createElement('button') as HTMLButtonElement;
    button.type = 'button';
    if (innerFormList.length <= 2) {
        button.textContent = 'LogIn';
    } else {
        button.textContent = 'Register';
    }
    formHTML.append(button);
}
