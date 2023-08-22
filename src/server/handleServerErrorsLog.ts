export function handleServerErrorsLog(
    status: number,
    servError: HTMLDivElement,
    email: HTMLInputElement,
    password: HTMLInputElement
): void {
    if (status === 400 || status === 401) {
        servError.innerHTML = 'Wrong login or password. Check the correctness of the entered data';
    } else if (status === 504 || status === 502) {
        servError.innerHTML = 'There are problems communicating with the server. Try again';
    } else {
        servError.innerHTML = 'Unforeseen problems arose. Try later';
    }
    servError.style.color = 'red';
    email.style.border = '2px solid red';
    password.style.border = '2px solid red';
}
