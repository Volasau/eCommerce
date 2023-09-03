export interface IInnerForm {
    labelText: string;
    inputType: string;
    inputId: string;
    inputName: string;
    formGroup: HTMLElement;
    label: HTMLElement;
    inputHTML: HTMLInputElement;
    error: HTMLElement;
    create(): HTMLElement;
}
