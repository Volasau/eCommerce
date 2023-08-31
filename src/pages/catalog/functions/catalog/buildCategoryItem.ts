import { divHTML } from '../../classes/elementBuilder';
import { ICategory } from '../../interfaces/categoryInterface';

export default function buildCategoryItem(category: ICategory) {
    const wrapper = divHTML.getElement('', 'category-item', 'cards') as HTMLDivElement;
    const darkner = divHTML.getElement(category.catName, `${category.catId}-darkner`, 'card-dark') as HTMLDivElement;
    wrapper.style.backgroundImage = `url('${category.imageURL}')`;
    wrapper.append(darkner);

    return wrapper;
}
