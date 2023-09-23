export function doNotClearTheCart(): void {
    const modal = document.getElementById('clear-dark') as HTMLDivElement;
    modal.remove();
}
