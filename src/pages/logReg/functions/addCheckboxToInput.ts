import { IFunc } from '../validation/makeVisiblePassword';

export function addCheckboxToInput(formId: string, labelText: string, innerForm: HTMLElement, func: IFunc) {
    if (innerForm.children[1].id === formId) {
        const checkId = labelText.toLowerCase().split(' ').join('-');
        const checkbox = document.createElement('input') as HTMLInputElement;
        checkbox.type = 'checkbox';
        checkbox.id = checkId;
        checkbox.className = 'checkbox';

        const checkboxLabel = document.createElement('label') as HTMLLabelElement;
        checkboxLabel.textContent = labelText;
        checkboxLabel.setAttribute('for', checkId);
        innerForm.append(checkbox, checkboxLabel);
        const inputHTML = innerForm.children[1] as HTMLInputElement;
        let cheBox = innerForm.children[3] as HTMLInputElement;
        if (innerForm.children.length === 7) cheBox = innerForm.children[5] as HTMLInputElement;
        func(cheBox, inputHTML);
    }
}
