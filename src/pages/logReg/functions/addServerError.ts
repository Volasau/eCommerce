export function addServerError(formHTML: HTMLFormElement) {
    const serverError = document.createElement('div') as HTMLDivElement;
    serverError.setAttribute('id', 'serv-error');
    formHTML.append(serverError);
}
