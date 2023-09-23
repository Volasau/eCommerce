import { buttonHTML, divHTML } from '../../catalog/classes/elementBuilder';

export function addClearModal(): void {
    const darkBack = divHTML.getElement('', 'clear-dark', 'clear-dark') as HTMLDivElement;

    const wrapper = divHTML.getElement('', 'clear-wrap', 'clear-wrap') as HTMLDivElement;
    const question = divHTML.getElement('Really clear the cart?', 'clear-q', 'clear-q') as HTMLDivElement;
    const buttons = divHTML.getElement('', 'clear-btns', 'clear-btns') as HTMLDivElement;
    const yes = buttonHTML.getElement('YES', 'yes-but', 'yes-but') as HTMLButtonElement;
    const no = buttonHTML.getElement('NO', 'no-but', 'no-but') as HTMLButtonElement;
    buttons.append(yes, no);
    wrapper.append(question, buttons);
    darkBack.append(wrapper);

    document.body.append(darkBack);
}
