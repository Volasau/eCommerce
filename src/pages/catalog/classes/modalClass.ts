import { constants } from '../../../data/constants';
import { IProduct } from '../../../server/products/queryProductProjections';
import { buildModal } from '../functions/product/buildModal';
import { IModal } from '../interfaces/modalInterface';

export class Modal implements IModal {
    modalHTML: HTMLDivElement;

    constructor(product: IProduct) {
        const productName = product.name;
        const url = product.allVariants[0].images[0].url;
        const id = product.id;
        this.modalHTML = buildModal(id, url, productName) as HTMLDivElement;
    }

    startModal(): void {
        document.body.prepend(this.modalHTML);
        const nextButton = document.querySelector('.next') as HTMLButtonElement;
        if (constants.modalImages.length === 1) nextButton.disabled = true;
    }
}
