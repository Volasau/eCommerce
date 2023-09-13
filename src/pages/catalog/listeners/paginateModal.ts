import { constants } from '../../../data/constants';

export function paginateModal(): void {
    document.addEventListener('click', (event) => {
        const target = event.target as HTMLButtonElement;
        if (target.className === 'next') {
            const prev = document.querySelector('.prev') as HTMLButtonElement;
            const imageBox = target.previousElementSibling as HTMLDivElement;
            const image = imageBox.firstChild as HTMLImageElement;
            prev.disabled = false;
            image.setAttribute('src', `${constants.modalImages[constants.modalPage]}`);
            if (constants.modalPage + 1 === constants.modalImages.length) {
                target.disabled = true;
            } else {
                constants.modalPage += 1;
            }
        } else if (target.className === 'prev') {
            const next = document.querySelector('.next') as HTMLButtonElement;
            const imageBox = target.nextElementSibling as HTMLDivElement;
            const image = imageBox.firstChild as HTMLImageElement;
            next.disabled = false;
            image.setAttribute('src', `${constants.modalImages[constants.modalPage - 1]}`);
            if (constants.modalPage === 1) {
                target.disabled = true;
            } else {
                constants.modalPage -= 1;
            }
        }
    });
}
