import { getButton } from './getButton';

export function addServErrorAndButton(formHTML: HTMLFormElement, innerFormList: HTMLElement[]) {
    const serverError = document.createElement('div') as HTMLDivElement;
    serverError.setAttribute('id', 'serv-error');
    formHTML.append(serverError, getButton(innerFormList));
}
