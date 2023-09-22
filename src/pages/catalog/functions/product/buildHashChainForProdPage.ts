import urlImg from '../../../../assets/icons/arrow.svg';
import { IProduct } from '../../../../server/products/queryProductProjections';
import { spanHTML } from '../../classes/elementBuilder';
import { ICategoryResp, ISubCategoryResp } from '../../interfaces/categoryResponse/categoryResponse.interfaces';

export function buildHashChainForProdPage(cat: ICategoryResp, sub: ISubCategoryResp, prod: IProduct): void {
    const hash = document.getElementById('row-chain') as HTMLSpanElement;
    const subCategoryName = spanHTML.getElement(sub.name.en, `${sub.id}-sub-chain`, 'chain') as HTMLSpanElement;
    const arrow1 = new Image(30, 10);
    arrow1.src = urlImg;

    const categoryName = spanHTML.getElement(cat.name.en, `${cat.id}-cat-chain`, 'chain') as HTMLSpanElement;
    const arrow2 = new Image(30, 10);
    arrow2.src = urlImg;

    const productName = spanHTML.getElement(prod.name, `${prod.id}-prod-chain`, 'chain') as HTMLSpanElement;

    hash.append(categoryName, arrow2, subCategoryName, arrow1, productName);
}
