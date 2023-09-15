import { cartSVG } from '../../../../data/cartSVG';

export function changeCarButView(but: HTMLButtonElement, text: string): void {
    let id = '';
    if (text === 'DELETE') id = but.id.replace('-cartBut', '');
    if (text === 'IN CART') id = but.id.replace('-cart', '');
    if (but.innerHTML.includes('BUY')) {
        but.style.backgroundColor = 'orange';
        if (text === 'IN CART') but.style.color = 'grey';
        but.innerHTML = `${cartSVG} ${text}`;
        but.style.fontSize = '10px';
        if (text === 'IN CART') but.disabled = true;
        console.log(id);
        // Запрос на добавление товара в корзину (id товара вывел в переменную)
    } else {
        but.style.backgroundColor = '';
        but.style.color = '';
        but.innerHTML = `${cartSVG} BUY`;
        but.style.fontSize = '';
        console.log(id);
        // Запрос по удалению товара из корзины (id товара вывел в переменную)
    }
}
