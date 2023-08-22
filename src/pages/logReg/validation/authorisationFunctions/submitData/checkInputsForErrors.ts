export function checkInputsForErrors(errorList: NodeList, inputList: NodeList): boolean {
    let flag = false;
    inputList.forEach((input) => {
        const inp = input as HTMLInputElement;
        if (inp.value === '') {
            const error = inp.nextElementSibling as HTMLSpanElement;
            error.innerHTML = '*field must not be empty';
        }
    });
    errorList.forEach((error) => {
        const errorHTML = error as HTMLSpanElement;
        if (errorHTML.textContent !== '') flag = true;
    });
    return flag;
}
