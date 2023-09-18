import urlImg from '../../../assets/images/basket.svg';
import { divHTML } from '../../catalog/classes/elementBuilder';

export function addEmptyInfo(): HTMLDivElement {
    const wrapper = divHTML.getElement('', 'empty-wrap', 'row-wrapper') as HTMLDivElement;
    const imageBlock = divHTML.getElement('', 'empty-image', 'empty-image') as HTMLDivElement;
    const row1 = divHTML.getElement('The cart is empty', 'row1', 'row1') as HTMLDivElement;
    const row2 = divHTML.getElement('', 'row2', 'row2') as HTMLDivElement;
    row2.innerHTML = 'Please, choose a product in the <a id ="cat-link" href="#/catalog">CATALOG</a>';
    const img = new Image(50, 50);
    img.src = urlImg;
    imageBlock.append(img);
    wrapper.append(imageBlock, row1, row2);

    return wrapper;
}
