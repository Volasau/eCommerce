export function removeProductFromCart() {
    document.addEventListener('click', (event) => {
        const target = event.target as HTMLButtonElement;
        const hashChain = document.getElementById('row-chain') as Node;
        const hashLength = hashChain.childNodes.length;
        if ((target.className === 'cart-button' || target.id.includes('cart-but')) && hashLength === 9) {
            console.log(target);
        }
    });
}
