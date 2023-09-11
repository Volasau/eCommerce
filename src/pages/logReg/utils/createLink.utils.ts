export function createLink(
    href: string,
    goto: string | null,
    text: string | null,
    customClass: string | null
): HTMLDivElement {
    const linkContainer = document.createElement('div');
    linkContainer.classList.add('links__container');
    const linkText = document.createElement('p');
    linkText.classList.add('text');
    linkText.textContent = goto;

    const link = document.createElement('a');
    link.href = href;
    link.classList.add('link');
    if (customClass) {
        link.classList.add(customClass);
    }
    link.innerHTML = `${text}`;
    linkText.appendChild(link);
    linkContainer.appendChild(linkText);
    return linkContainer;
}
