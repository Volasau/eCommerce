import urlImg from '../../../../assets/icons/discount.svg';
import { cartSVG } from '../../../../data/cartSVG';
import { IProduct } from '../../../../server/products/queryProductProjections';
import { buttonHTML, divHTML, imgHTML } from '../../classes/elementBuilder';

export function buildProductItem(prod: IProduct): HTMLDivElement {
    const id = prod.id;
    const prodName = prod.name;
    const firstIMG = prod.allVariants[0].images[0].url;
    const prodPrice = prod.allVariants[0].prices[0].value.centAmount / 100;
    let prodDiscount = 0;
    if (prod.allVariants[0].prices[0].discounted) {
        prodDiscount = prod.allVariants[0].prices[0].discounted.value.centAmount / 100;
    }
    const descript = prod.description;
    const product = divHTML.getElement('', `${id}`, 'product min') as HTMLDivElement;
    const imgBlock = divHTML.getElement('', `${id}-imgBlock`, 'imgBlock') as HTMLDivElement;
    const img = imgHTML.getElement('', `${id}-img`, 'product-img min', `${firstIMG}`, `${prodName} image`, '130px');
    const name = divHTML.getElement(`${prodName}`, `${id}-name`, 'name min');
    const priceBlock = divHTML.getElement('', 'price-bl', 'price min');
    const oldPrice = divHTML.getElement('', 'discount-price', 'dis-price');
    const realPrice = divHTML.getElement(`${prodPrice} GBP`, `${id}-price`, 'fact-price');
    const description = divHTML.getElement(`${descript}`, `${id}-description`, 'description min');
    const cartButton = buttonHTML.getElement('', `${id}-cart`, 'cart-but');
    const discountLabel = new Image();
    discountLabel.src = urlImg;
    discountLabel.id = 'discount-label';
    cartButton.innerHTML = `${cartSVG} BUY`;
    imgBlock.append(img);

    realPrice.textContent = prodDiscount ? String(prodDiscount) : String(prodPrice);
    oldPrice.textContent = prodDiscount ? String(prodPrice) : '';
    priceBlock.append(realPrice, oldPrice);
    product.append(imgBlock, name, priceBlock, description, cartButton);

    if (prodDiscount) product.append(discountLabel);

    return product;
}
