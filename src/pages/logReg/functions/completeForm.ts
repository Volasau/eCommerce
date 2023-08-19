import { makeVisiblePassword } from '../validation/makeVisiblePassword';
import { addCheckboxToInput } from './addCheckboxToInput';

export function completeForm(formHTML: HTMLFormElement, innerFormList: HTMLElement[]) {
    innerFormList.forEach((innerForm) => {
        addCheckboxToInput('password', 'Show password', innerForm, makeVisiblePassword);
        formHTML.append(innerForm);
    });
}
