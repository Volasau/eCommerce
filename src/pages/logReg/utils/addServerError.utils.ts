export function addServerError(formHTML: HTMLFormElement): void {
    const serverError = document.createElement('div') as HTMLDivElement;
    serverError.setAttribute('id', 'serv-error');
    formHTML.append(serverError);
}
