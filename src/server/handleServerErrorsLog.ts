export function handleServerErrorsLog(
    status: number,
    serverError: HTMLDivElement,
    email: HTMLInputElement,
    password: HTMLInputElement
): void {
    switch (status) {
        case 400:
        case 401:
            serverError.innerHTML = 'Wrong login or password. Check the correctness of the entered data';
            break;
        case 504:
        case 502:
            serverError.innerHTML = 'There are problems communicating with the server. Try again';
            break;
        default:
            serverError.innerHTML = 'Unforeseen problems arose. Try later';
    }
    serverError.style.color = 'red';
    email.style.border = '2px solid red';
    password.style.border = '2px solid red';
}
