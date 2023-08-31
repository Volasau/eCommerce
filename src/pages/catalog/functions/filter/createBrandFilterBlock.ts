import { ICategory } from '../../interfaces/categoryInterface';
import { createBrandFilterHTML } from './createBrandFilterHTML';

export function createBrandFilterBlock(categories: ICategory[]) {
    let brands: string[] = [];
    categories.forEach((cat) => {
        cat.attributes.forEach((attr) => {
            if (attr.attribute.toLowerCase() === 'brand') {
                brands = [...brands, ...attr.values];
            }
        });
    });

    const brandFilter = createBrandFilterHTML(Array.from(new Set(brands)));

    return brandFilter;
}
