import { categoryResponse } from '../../../data/categoryResponse';
import { CatalogRender } from '../classes/catalogRenderClass';
import { getSubCategoriesFrom } from '../functions/catalog/getSubCategoriesFrom';

export function openSubCategory() {
    document.addEventListener('click', (event) => {
        const target = event.target as HTMLDivElement;
        if (target.classList.contains('card-dark')) {
            const title = document.querySelector('h1') as HTMLElement;
            console.log(title);
            const categoryId = target.id.split('-').slice(0, -1).join('-');
            const category = categoryResponse.filter((cat) => cat.id === categoryId);

            const subCategory = new CatalogRender(getSubCategoriesFrom(category[0]), title);
            subCategory.renderCatalog();
        }
    });
}
