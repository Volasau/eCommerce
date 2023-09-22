import { constants } from '../../../data/constants';

export function paginateModalNext(target: HTMLElement): void {
    const prev = document.querySelector('.prev') as HTMLButtonElement;
    const imageBox = target.previousElementSibling as HTMLDivElement;
    const image = imageBox.firstChild as HTMLImageElement;
    prev.disabled = false;
    image.setAttribute('src', `${constants.modalImages[constants.modalPage]}`);
    if (constants.modalPage + 1 === constants.modalImages.length) {
        const targ = target as HTMLButtonElement;
        targ.disabled = true;
    } else {
        constants.modalPage += 1;
    }
}
