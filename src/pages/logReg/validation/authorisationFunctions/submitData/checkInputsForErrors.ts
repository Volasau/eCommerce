export function checkInputsForErrors(errorList: NodeList): boolean {
    let flag = false;
    errorList.forEach((error) => {
        const errorHTML = error as HTMLSpanElement;
        if (errorHTML.textContent !== '') flag = true;
    });
    return flag;
}
