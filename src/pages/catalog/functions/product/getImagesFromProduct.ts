import { IProduct } from '../../../../server/products/queryProductProjections';

export function getImagesFromProduct(product: IProduct): string[] {
    const images: string[] = [];
    product.allVariants.forEach((variant) => {
        variant.images.forEach((image) => {
            images.push(image.url);
        });
    });
    return images;
}
