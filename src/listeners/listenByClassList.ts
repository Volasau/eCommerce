import { addCategoryLink } from '../pages/catalog/listeners/addCategoryLink';
import { addProductLink } from '../pages/catalog/listeners/addProductLink';
import { addSubLink } from '../pages/catalog/listeners/addSubLink';
import { getModal } from '../pages/catalog/listeners/getModal';
import { switchPageByHashChain } from '../pages/catalog/listeners/switchPageByHashChain';

export function listenByClassList(target: HTMLElement) {
    if (target.classList.contains('main-image')) getModal(target);
    if (target.classList.contains('min')) addProductLink(target);
    if (target.classList.contains('sub-card-dark')) addSubLink(target);
    if (target.classList.contains('cat-card-dark')) addCategoryLink(target);
    if (target.classList.contains('chain')) switchPageByHashChain(target);
}
