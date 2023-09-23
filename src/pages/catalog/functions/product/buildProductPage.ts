import urlImg from '../../../../assets/icons/discount.svg';
import { cartSVG } from '../../../../data/cartSVG';
import { IProduct } from '../../../../server/products/queryProductProjections';
import { buttonHTML, divHTML, imgHTML } from '../../classes/elementBuilder';

export function buildProductPage(prod: IProduct, cartStatus: string): HTMLDivElement {
    const id = prod.id;
    const name = prod.name;
    const description = prod.description;
    const allImages = prod.allVariants[0].images;
    const imgURL = prod.allVariants[0].images[0].url;
    const price = prod.allVariants[0].prices[0].value.centAmount / 100;
    let prodDiscount = 0;
    if (prod.allVariants[0].prices[0].discounted) {
        prodDiscount = prod.allVariants[0].prices[0].discounted.value.centAmount / 100;
    }
    const wrapper = divHTML.getElement('', `${id}-wrapper`, 'product-wrapper') as HTMLDivElement;
    const nameBlock = divHTML.getElement(`${name}`, `${id}-prodName`, 'product-name') as HTMLDivElement;
    const productBlock = divHTML.getElement('', `${id}-block`, 'product-block') as HTMLDivElement;
    const main = divHTML.getElement('', `${id}-main`, 'main-block') as HTMLDivElement;
    const descriptWord = divHTML.getElement('description', `${id}-word`, 'descript-word') as HTMLDivElement;
    const descript = divHTML.getElement(`${description}`, `${id}-descri`, 'descript-block') as HTMLDivElement;
    const images = divHTML.getElement('', `${id}-prodIMG`, 'prod-images') as HTMLDivElement;
    const mainImage = imgHTML.getElement(
        '',
        `${id}-mainIMG`,
        'main-image',
        `${imgURL}`,
        `${name} image`
    ) as HTMLImageElement;
    const addImages = divHTML.getElement('', `${id}-addIMG`, 'add-images') as HTMLDivElement;
    const attributes = divHTML.getElement('', `${id}-attributes`, 'attributes') as HTMLDivElement;
    const prices = divHTML.getElement('', `${id}-prices`, 'prices-block') as HTMLDivElement;
    const priceBlock = divHTML.getElement('', `${id}-pric`, 'price-cart') as HTMLDivElement;
    const oldPrice = divHTML.getElement('', 'discount-price', 'dis-price') as HTMLDivElement;
    const realPrice = divHTML.getElement('', `${id}-onlyPrice`, 'only-price') as HTMLDivElement;
    const deliveryBlock = divHTML.getElement('Some Info', `${id}-delivery`, 'delivery-block') as HTMLDivElement;
    const cartButtonBlock = divHTML.getElement('', `${id}-cartButton`, 'cart-button-block') as HTMLDivElement;
    const cartButton = buttonHTML.getElement('', `${id}-cartBut`, 'cart-button');

    allImages.forEach((imagesURL) => {
        const addIMG = imgHTML.getElement(
            '',
            `${id}-addIMG`,
            'add-image',
            `${imagesURL.url}`,
            `${name} image`,
            '70px'
        ) as HTMLImageElement;
        addImages.append(addIMG);
    });
    images.append(mainImage);
    if (allImages.length > 1) images.append(addImages);

    prod.allVariants[0].attributesRaw.forEach((attr) => {
        const attribute: string = attr.name;
        const value = (
            Array.isArray(attr.value) ? attr.value[0].label : (attr.value as { label: string }).label
        ) as string;
        attributes.innerHTML += `<p>${attribute}: ${value}</p>`;
    });

    realPrice.textContent = prodDiscount ? `${prodDiscount}` : `${price}`;
    oldPrice.textContent = prodDiscount ? `${price}` : '';
    cartButton.innerHTML = `${cartSVG} ${cartStatus === 'CART' ? 'DELETE' : 'BUY'}`;
    if (cartStatus === 'CART') {
        cartButton.style.backgroundColor = 'orange';
        cartButton.style.fontSize = '10px';
    }
    cartButtonBlock.append(cartButton);
    priceBlock.append(realPrice, oldPrice, cartButtonBlock);
    prices.append(priceBlock, deliveryBlock);

    main.append(images, attributes, prices);

    productBlock.append(main, descriptWord, descript);

    wrapper.append(nameBlock, productBlock);

    const discountLabel = new Image();
    discountLabel.src = urlImg;
    discountLabel.id = 'page-discount-label';
    if (prodDiscount) images.append(discountLabel);

    if (addImages) {
        const firstAddImage = addImages.firstElementChild as HTMLImageElement;
        firstAddImage.style.border = '2px solid orange';
        firstAddImage.style.borderRadius = '5px';
    }

    return wrapper;
}
