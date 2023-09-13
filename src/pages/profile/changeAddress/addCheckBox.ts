export function addCheckBox(name: string, form: HTMLFormElement): HTMLInputElement {
    const checkBox = document.createElement('input') as HTMLInputElement;
    const id = `${name[0]}${name.slice(1).replace(' ', '')}`;
    checkBox.type = 'checkbox';
    checkBox.id = id;
    form.appendChild(checkBox);

    const shippingLabel = document.createElement('label');
    shippingLabel.htmlFor = id;
    shippingLabel.textContent = name;
    form.appendChild(shippingLabel);

    return checkBox;
}
