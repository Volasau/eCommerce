export interface IFormBuilder {
    formHTML: HTMLFormElement;
    formId: string;
    innerFormList: HTMLElement[];
    build(): HTMLFormElement;
}
