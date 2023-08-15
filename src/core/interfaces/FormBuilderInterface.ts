export interface IFormBuilder {
    formHTML: HTMLFormElement;
    formId: string;
    innerFormList: HTMLElement[];
    button: HTMLButtonElement;
    buttonText: string;
    checkbox: HTMLInputElement;
    checkboxLabel: HTMLLabelElement;
    build(): HTMLFormElement;
}
