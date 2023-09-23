import { constants } from '../../../data/constants';

export function removeModal(target: HTMLElement): void {
    const modal = target.parentElement as HTMLDivElement;
    modal.remove();
    constants.modalPage = 1;
}
