export function doNotClearTheCart(): void {
    document.addEventListener('click', (event) => {
        const target = event.target as HTMLButtonElement;
        if (target.id === 'no-but') {
            const modal = document.getElementById('clear-dark') as HTMLDivElement;
            modal.remove();
        }
    });
}
