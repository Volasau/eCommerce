import urlImg from '../../../../assets/icons/magnifying.svg';
import { divHTML, inpHTML } from '../../classes/elementBuilder';

export function createSearchingWindow() {
    const wrapper = divHTML.getElement('', 'search-wrap', 'search') as HTMLDivElement;
    const iconPart = divHTML.getElement('', 'icon-part', 'icon') as HTMLDivElement;
    const searchPart = divHTML.getElement('', 'search-part', 'search-part') as HTMLDivElement;
    const search = inpHTML.getElement('', 'search-input', 'search-input') as HTMLInputElement;
    search.placeholder = 'Search products';
    const magnifying = new Image();
    magnifying.src = urlImg;
    magnifying.id = 'search-button';
    iconPart.append(magnifying);
    searchPart.append(search);
    wrapper.append(iconPart, searchPart);

    return wrapper;
}
