export function createButton(butName: string): HTMLButtonElement {
    const button = document.createElement('button');
    button.type = 'button';
    button.textContent = butName;
    return button;
}
