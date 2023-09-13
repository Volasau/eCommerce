export function switchPhoto(): void {
    document.addEventListener('click', (event) => {
        const target = event.target as HTMLImageElement;
        const mainImage = document.querySelector('.main-image') as HTMLImageElement;
        if (target.className === 'add-image') {
            const parent = target.parentElement as HTMLDivElement;
            parent.childNodes.forEach((img) => {
                const image = img as HTMLImageElement;
                image.style.border = 'none';
            });
            mainImage.src = target.src;
            target.style.border = '2px solid orange';
            target.style.borderRadius = '5px';
        }
    });
}
