export function addShowPassCheckbox(form: HTMLFormElement): HTMLInputElement {
    const showPasswordCheckbox = document.createElement('input') as HTMLInputElement;
    showPasswordCheckbox.type = 'checkbox';
    const showPasswordLabel = document.createElement('label');
    showPasswordLabel.textContent = 'Show Passwords';
    showPasswordLabel.appendChild(showPasswordCheckbox);
    form.appendChild(showPasswordLabel);

    return showPasswordCheckbox;
}
