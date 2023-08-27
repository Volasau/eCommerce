export interface IBuilder {
    tag: string;
    getElement(text: string, id: string, klass: string, url?: string, alt?: string, tag?: string): HTMLElement;
}
