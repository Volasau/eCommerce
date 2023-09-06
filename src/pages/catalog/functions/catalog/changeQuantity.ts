export function changeQuantity() {
    const quantity = document.querySelector('.quantity') as HTMLSpanElement;
    const productList = document.getElementById('product-view') as HTMLDivElement;
    const products = productList.childNodes as NodeList;
    let count = 0;
    products.forEach(() => {
        count += 1;
    });
    quantity.textContent = `${count}`;
}
