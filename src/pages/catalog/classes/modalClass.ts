import { constants } from '../../../data/constants';
import { buildModal } from '../functions/buildModal';
import { IModal } from '../interfaces/modalInterface';
// import { IPrice } from '../interfaces/priceInterface';
import { IProduct } from '../interfaces/productInterface';
// import { IAttribute } from '../interfaces/variantInterface';

export class Modal implements IModal {
    modalHTML: HTMLDivElement;
    // images: IImg[];
    // attributes: IAttribute[];
    // prices: IPrice[];
    constructor(product: IProduct) {
        const productName = product.name;
        const url = product.allVariants[0].images[0];
        const id = product.id;
        this.modalHTML = buildModal(id, url, productName) as HTMLDivElement;

        //     const attributeList: IAttribute[] = [];
        //     product.allVariants.forEach((variant) => {
        //         variant.attributesRaw.forEach((attribute) => {
        //             attributeList.push(attribute);
        //         });
        //     });
        //     this.attributes = attributeList;

        //     const imageList: IImg[] = [];
        //     product.allVariants.forEach((variant) => {
        //         variant.images.forEach((image) => {
        //             imageList.push(image);
        //         });
        //     });
        //     this.images = imageList;

        //     const priceList: IPrice[] = [];
        //     product.allVariants.forEach((variant) => {
        //         variant.prices.forEach((price) => {
        //             priceList.push(price);
        //         });
        //     });
        //     this.prices = priceList;
    }

    startModal() {
        document.body.prepend(this.modalHTML);
        const nextButton = document.querySelector('.next') as HTMLButtonElement;
        if (constants.modalImages.length === 1) nextButton.disabled = true;
    }
}
