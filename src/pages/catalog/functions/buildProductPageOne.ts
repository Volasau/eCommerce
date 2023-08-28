import { cartSVG } from '../../../data/cartSVG';
import { buttonHTML, divHTML, imgHTML } from '../classes/elementBuilder';
import { IProduct } from '../interfaces/productInterface';

export function buildProductPage(prod: IProduct) {
    const id = prod.id;
    const name = prod.name;
    const description = prod.description;
    const allImages = prod.allVariants[0].images;
    const imgURL = prod.allVariants[0].images[0];
    const price = prod.allVariants[0].prices[0].value.centAmount / 100;
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
    const attributtes = divHTML.getElement('', `${id}-attributtes`, 'attributtes') as HTMLDivElement;
    const prices = divHTML.getElement('', `${id}-prices`, 'prices-block') as HTMLDivElement;
    const priceBlock = divHTML.getElement('', `${id}-pric`, 'price-cart') as HTMLDivElement;
    const onlyPrice = divHTML.getElement(`${price} GBP`, `${id}-onlyPrice`, 'only-price') as HTMLDivElement;
    const deliveryBlock = divHTML.getElement('Some Info', `${id}-delivery`, 'delivery-block') as HTMLDivElement;
    const cartButtonBlock = divHTML.getElement('', `${id}-cartButton`, 'cart-button-block') as HTMLDivElement;
    const cartButton = buttonHTML.getElement('', `${id}-cartBut`, 'cart-button');
    const productCount = divHTML.getElement('', `${id}-countBlock`, 'count-block') as HTMLDivElement;
    const count = divHTML.getElement('1', `${id}-count`, 'count') as HTMLDivElement;
    const plusBut = buttonHTML.getElement('+', `${id}-plus`, 'plus-button') as HTMLButtonElement;
    const minusBut = buttonHTML.getElement('-', `${id}-minus`, 'minus-button') as HTMLButtonElement;

    // заполняем блок картинок
    allImages.forEach((imagesURL) => {
        const addIMG = imgHTML.getElement(
            '',
            `${id}-mainIMG`,
            'add-image',
            `${imagesURL}`,
            `${name} image`,
            '70px'
        ) as HTMLImageElement;
        addImages.append(addIMG);
    });
    images.append(mainImage, addImages);

    // заполняем блок атрибутов
    prod.allVariants[0].attributesRaw.forEach((attr) => {
        const attribute = attr.name;
        const value = attr.value[0].label;
        attributtes.innerHTML += `<p>${attribute}: ${value}</p>`;
    });

    // заполняем блок цены
    productCount.append(minusBut, count, plusBut);
    cartButton.innerHTML = `${cartSVG} BUY`;
    cartButtonBlock.append(productCount, cartButton);
    priceBlock.append(onlyPrice, cartButtonBlock);
    prices.append(priceBlock, deliveryBlock);

    //заполняем main блок
    main.append(images, attributtes, prices);

    //заполняем весь блок
    productBlock.append(main, descriptWord, descript);

    //добавляем блок на страницу
    wrapper.append(nameBlock, productBlock);

    return wrapper;
}
