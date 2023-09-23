export function inputHasError(form: HTMLFormElement): boolean {
    const errorSpans = form.querySelectorAll('.error');
    let hasError = false;
    errorSpans.forEach((errorSpan) => {
        if (errorSpan.textContent) {
            hasError = true;
        }
    });
    return hasError;
}
