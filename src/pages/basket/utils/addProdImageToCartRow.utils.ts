import { LineItem } from '../interfaces/lineItem.interfaces';

export function addProdImageToCartRow(prod: LineItem, prodImage: HTMLDivElement, id: string): void {
    const img = new Image();
    img.src = prod.variant.images[0].url;
    img.id = `${id}-cart-prod-image`;
    img.width = 100;
    prodImage.append(img);
}
