export function switchPageByHashChain() {
    document.addEventListener('click', (event) => {
        const target = event.target as HTMLSpanElement;
        if (target.classList.contains('chain')) {
            if (target.id.includes('main-chain')) {
                window.location.hash = '#/main';
            } else if (target.id.includes('catalog')) {
                window.location.hash = '#/catalog';
            } else if (target.id.includes('cat-chain')) {
                window.location.hash = `#/catalog/${target.textContent?.toLocaleLowerCase()}`;
            } else if (target.id.includes('sub-chain')) {
                const arrow = target.previousElementSibling as HTMLImageElement;
                const catChain = arrow.previousElementSibling as HTMLSpanElement;
                const catName = catChain.textContent?.toLocaleLowerCase().replace(/ /g, '_');
                const subName = target.textContent?.toLocaleLowerCase().replace(/ /g, '_');
                window.location.hash = `#/catalog/${catName}/${subName}`;
            }
        }
    });
}
