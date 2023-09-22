export function switchPhoto(targ: HTMLElement): void {
    const target = targ as HTMLImageElement;
    const mainImage = document.querySelector('.main-image') as HTMLImageElement;
    const parent = target.parentElement as HTMLDivElement;
    parent.childNodes.forEach((img) => {
        const image = img as HTMLImageElement;
        image.style.border = 'none';
    });
    mainImage.src = target.src;
    target.style.border = '2px solid orange';
    target.style.borderRadius = '5px';
}
