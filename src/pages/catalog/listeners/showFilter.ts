export function showFilter(): void {
    document.addEventListener('click', (event) => {
        const target = event.target as HTMLButtonElement;
        const filterBlock = document.getElementById('other-attr-wrap') as HTMLFormElement;
        if (target.id === 'filter-but') {
            filterBlock.style.left = filterBlock.style.left === '0px' ? '-300px' : '0px';
        }
    });
}
