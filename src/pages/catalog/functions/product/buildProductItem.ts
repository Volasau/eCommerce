import { cartSVG } from '../../../../data/cartSVG';
import { buttonHTML, divHTML, imgHTML } from '../../classes/elementBuilder';
import { IProduct } from '../../interfaces/productInterface';

export function buildProductItem(prod: IProduct): HTMLDivElement {
    const id = prod.id;
    const prodName = prod.name;
    const firstIMG = prod.allVariants[0].images[0].url;
    const prodPrice = prod.allVariants[0].prices[0].value.centAmount / 100;
    const descript = prod.description;
    const product = divHTML.getElement('', `${id}`, 'product min') as HTMLDivElement;
    const imgBlock = divHTML.getElement('', `${id}-imgBlock`, 'imgBlock') as HTMLDivElement;
    const img = imgHTML.getElement('', `${id}-img`, 'product-img min', `${firstIMG}`, `${prodName} image`, '130px');
    const name = divHTML.getElement(`${prodName}`, `${id}-name`, 'name min');
    const price = divHTML.getElement(`${prodPrice} GBP`, `${id}-price`, 'price min');
    const description = divHTML.getElement(`${descript}`, `${id}-description`, 'description min');
    const cartButton = buttonHTML.getElement('', `${id}-cart`, 'cart-but');
    cartButton.innerHTML = `${cartSVG} BUY`;
    imgBlock.append(img);
    product.append(imgBlock, name, price, description, cartButton);

    return product;
}
