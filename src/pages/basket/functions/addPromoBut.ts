import { LineItem } from '../interfaces/lineItem.interfaces';

export function addPromoBut(prod: LineItem, prodName: HTMLDivElement): void {
    if (prod.productType.id === '64bd85fb-bf4c-4916-bd82-e067776f1574') {
        prodName.innerHTML += `<div id="lap-promo">
                                  <input id="${prod.id}-promo-input" type="text" placeholder="PROMO">
                                  <button id="${prod.id}-lap-but" class="lap-promo-but">Apply</button>
                                </div>`;
    }
}
