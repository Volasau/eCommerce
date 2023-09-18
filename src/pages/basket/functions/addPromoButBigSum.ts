import { divHTML } from '../../catalog/classes/elementBuilder';

export function addPromoButBigSum(row: HTMLDivElement) {
    const promoSum = divHTML.getElement('', 'promo-total-sum', 'promo-total-sum') as HTMLDivElement;
    promoSum.innerHTML += `<div id="sum-promo">
                              <input id="sum-promo-input" type="text" placeholder="PROMO">
                              <button id="sum-but" class="sum-promo-but">Apply</button>
                            </div>`;
    row.prepend(promoSum);
}
