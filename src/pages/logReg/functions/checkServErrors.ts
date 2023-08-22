export function checkServErrors(formHTML: HTMLFormElement) {
    const inputs = formHTML.querySelectorAll('.input') as NodeList;
    inputs.forEach((input) => {
        const inp = input as HTMLInputElement;
        inp.addEventListener('click', () => {
            const serverError = document.querySelector('#serv-error') as HTMLDivElement;
            serverError.innerHTML = '';
            inputs.forEach((elem) => {
                const inp = elem as HTMLInputElement;
                inp.style.border = '';
            });
        });
    });
}
