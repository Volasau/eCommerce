export function createFormGroup(
    labelText: string,
    inputType: string,
    inputId: string,
    inputName: string,
    errorId: string
) {
    const formGroup = document.createElement('div');
    formGroup.classList.add('form-group');

    const label = document.createElement('label');
    label.textContent = labelText + ':';
    label.setAttribute('for', inputId);

    const input = document.createElement('input');
    input.type = inputType;
    input.id = inputId;
    input.name = inputName;
    input.required = true;
    input.setAttribute('autocomplete', 'off');

    const error = document.createElement('span');
    error.classList.add('error');
    error.id = errorId;

    formGroup.append(label, input, error);

    return { formGroup, input, error };
}
