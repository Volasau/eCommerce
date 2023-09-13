export function addCredentialsAndPersData(formHTML: HTMLFormElement, innerFormList: HTMLElement[]): void {
    innerFormList.forEach((innerForm) => {
        if (
            innerForm.children[1].id !== 'country' &&
            innerForm.children[1].id !== 'city' &&
            innerForm.children[1].id !== 'street' &&
            innerForm.children[1].id !== 'postcode'
        ) {
            formHTML.append(innerForm);
        }
    });
}
