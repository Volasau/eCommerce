export function addCheckboxToInput(formId: string, labelText: string, innerForm: HTMLElement) {
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
    }
}
