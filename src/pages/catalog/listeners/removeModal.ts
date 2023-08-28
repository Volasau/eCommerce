import { constants } from '../../../data/constants';

export function removeModal() {
    document.addEventListener('click', (event) => {
        const target = event.target as HTMLDivElement;
        if (target.className === 'modal-wrap') {
            const modal = target.parentElement as HTMLDivElement;
            modal.remove();
            constants.modalPage = 1;
        }
    });
}
