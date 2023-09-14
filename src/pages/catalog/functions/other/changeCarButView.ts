import { cartSVG } from '../../../../data/cartSVG';

export function changeCarButView(but: HTMLButtonElement) {
    if (but.innerHTML.includes('BUY')) {
        but.style.backgroundColor = 'orange';
        but.style.color = 'grey';
        but.innerHTML = `${cartSVG} IN CART`;
        but.style.fontSize = '10px';
        but.disabled = true;
    } else {
        but.style.backgroundColor = '';
        but.innerHTML = `${cartSVG} BUY`;
        but.style.fontSize = '';
    }
}
