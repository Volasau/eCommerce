import { divHTML } from '../../catalog/classes/elementBuilder';

export function createPromoWindow(): HTMLDivElement {
    const wrapper = divHTML.getElement('', 'promo-wrap', 'promo-wrap') as HTMLDivElement;
    wrapper.innerHTML = `!!!Don't miss the chance!!!
                        <div id="lap-text">PROMO CODE FOR BUYING THE LAPTOP</div>
                        <div id="laptop">
                            <input id="inputText-lap" class="inputText" type="text" value="Your laptop">
                            <button id="copyText-lap" class="copyText">Copy</button>
                        </div>
                        <div id="sum-text">PROMO CODE FOR A LARGE PURCHASE (more than 200 GBP)</div>
                        <div id="big-sum">
                            <input id="inputText-sum" class="inputText" type="text" value="Buy more">
                            <button id="copyText-sum" class="copyText">Copy</button>
                        </div>`;
    return wrapper;
}
