export interface IBuilder {
    tag: string;
    getElement(text: string, id: string, klass: string, tag?: string): HTMLElement;
}
