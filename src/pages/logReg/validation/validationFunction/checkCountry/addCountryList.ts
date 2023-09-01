export function addCountryList(
    inputId: string,
    label: HTMLElement,
    inputHTML: HTMLInputElement,
    error: HTMLElement,
    form: HTMLElement
) {
    const formGroup = form;
    const list = document.createElement('div');
    list.setAttribute('id', inputId.replace('country', 'country-list'));
    formGroup.append(label, inputHTML, error, list);
}
