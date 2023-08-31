import { IProduct } from '../../interfaces/productInterface';

export function getImagesFromProduct(product: IProduct) {
    const images: string[] = [];
    product.allVariants.forEach((variant) => {
        variant.images.forEach((image) => {
            images.push(image.url);
        });
    });
    return images;
}
