import { DiscountCode } from '@commercetools/platform-sdk';
import { PromoCodes } from '../../../server/promo/getPromoCodes';
import { divHTML } from '../../catalog/classes/elementBuilder';

export async function createPromoWindow(): Promise<HTMLDivElement> {
    const wrapper = divHTML.getElement('', 'promo-wrap', 'promo-wrap') as HTMLDivElement;
    const promo = new PromoCodes();
    const promoCodes = (await promo.getPromoCodes()) as DiscountCode[];
    let firstPromo = '';
    if (Array.isArray(promoCodes)) firstPromo = promoCodes[1].code;
    wrapper.innerHTML = `!!!Don't miss the chance!!!
                        <div id="lap-text">PROMO CODE FOR BUYING THE LAPTOP</div>
                        <div id="laptop">
                            <input id="inputText-lap" class="inputText" type="text" value=${firstPromo}>
                            <button id="copyText-lap" class="copyText">Copy</button>
                        </div>`;
    return wrapper;
}
