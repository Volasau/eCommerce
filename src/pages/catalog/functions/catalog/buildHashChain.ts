import urlImg from '../../../../assets/icons/arrow.svg';
import { divHTML, spanHTML } from '../../classes/elementBuilder';

export function buildHashChain() {
    const wrapper = divHTML.getElement('', 'chain-wrap', 'catalog') as HTMLDivElement;
    const row = spanHTML.getElement('', 'row-chain', 'row') as HTMLSpanElement;
    const mainLink = spanHTML.getElement('Main', 'main-chain', 'chain') as HTMLSpanElement;
    const catalogLink = spanHTML.getElement('Catalog', 'catalog-chain', 'chain') as HTMLSpanElement;
    const arrow1 = new Image(30, 10);
    arrow1.src = urlImg;
    const arrow2 = new Image(30, 10);
    arrow2.src = urlImg;
    row.append(mainLink, arrow1, catalogLink, arrow2);
    wrapper.append(row);

    return wrapper;
}
