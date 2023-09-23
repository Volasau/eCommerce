export function defineCartBut(target: HTMLElement): HTMLButtonElement {
    let cartBut = document.createElement('button');
    if (target.className === 'cart-but') {
        cartBut = target as HTMLButtonElement;
    } else {
        let elem = target as HTMLElement;
        while (elem.tagName !== 'BUTTON') {
            elem = elem.parentElement as HTMLElement;
        }
        cartBut = elem as HTMLButtonElement;
    }
    return cartBut;
}
