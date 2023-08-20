import { validateThisInput } from '../validateThisInput';

export function validateShipping(formHTML: HTMLFormElement) {
    const shippingBlock = formHTML.querySelector('#shipping') as Node;
    const shipChilds = shippingBlock.childNodes as NodeList;
    shipChilds.forEach((inner) => {
        const innerForm = inner as HTMLElement;
        if (innerForm.className === 'form-group') {
            const input = innerForm.querySelector('input') as HTMLInputElement;
            const error = innerForm.querySelector('span') as HTMLSpanElement;
            validateThisInput(input, error);
        }
    });
}
