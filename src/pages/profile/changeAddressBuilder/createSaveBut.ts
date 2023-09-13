export function createSaveBut(id: string): HTMLButtonElement {
    const saveButton = document.createElement('button');
    saveButton.type = 'button';
    saveButton.classList.add('btn_adress-card');
    saveButton.textContent = 'Save';
    saveButton.id = `save-${id}`;

    return saveButton;
}
