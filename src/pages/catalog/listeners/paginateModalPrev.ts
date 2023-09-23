import { constants } from '../../../data/constants';

export function paginateModalPrev(target: HTMLElement): void {
    const next = document.querySelector('.next') as HTMLButtonElement;
    const imageBox = target.nextElementSibling as HTMLDivElement;
    const image = imageBox.firstChild as HTMLImageElement;
    next.disabled = false;
    image.setAttribute('src', `${constants.modalImages[constants.modalPage - 1]}`);
    if (constants.modalPage === 1) {
        const targ = target as HTMLButtonElement;
        targ.disabled = true;
    } else {
        constants.modalPage -= 1;
    }
}
