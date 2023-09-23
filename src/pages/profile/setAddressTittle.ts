export function setAddressTitle(isBill: boolean, isShip: boolean, addWord: string): string {
    let title = '';
    if (isBill && isShip) {
        title += `${addWord}BILLING and SHIPPING ADDRESS`;
    } else if (isBill) {
        title += `${addWord}BILLING ADDRESS`;
    } else if (isShip) {
        title += `${addWord}SHIPPING ADDRESS`;
    }
    return title;
}
