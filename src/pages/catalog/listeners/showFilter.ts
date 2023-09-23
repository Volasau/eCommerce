export function showFilter(): void {
    const filterBlock = document.getElementById('other-attr-wrap') as HTMLFormElement;
    filterBlock.style.left = filterBlock.style.left === '0px' ? '-300px' : '0px';
}
