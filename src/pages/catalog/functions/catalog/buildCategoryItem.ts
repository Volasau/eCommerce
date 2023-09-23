import { divHTML } from '../../classes/elementBuilder';
import { ICategory } from '../../interfaces/category.interfaces';

export default function buildCategoryItem(category: ICategory): HTMLDivElement {
    const wrapper = divHTML.getElement('', 'category-item', 'cards') as HTMLDivElement;
    const darkner = divHTML.getElement(
        category.catName,
        `${category.catId}-darkner`,
        'cat-card-dark'
    ) as HTMLDivElement;
    wrapper.style.backgroundImage = `url('${category.imageURL}')`;
    wrapper.append(darkner);

    return wrapper;
}
