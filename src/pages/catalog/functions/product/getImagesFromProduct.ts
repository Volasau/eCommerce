import { IProductResp } from '../../interfaces/categoryResponse/categoryResponseInterface';

export function getImagesFromProduct(product: IProductResp) {
    const images: string[] = [];
    product.allVariants.forEach((variant) => {
        variant.images.forEach((image) => {
            images.push(image.url);
        });
    });
    return images;
}
