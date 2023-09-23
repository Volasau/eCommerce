import { listenByClassList } from './listenByClassList';
import { listenByClassName } from './listenByClassName';
import { listenById } from './listenById';
import { listenByIdIncludes } from './listenByIdIncludes';

export function clickListener() {
    document.addEventListener('click', (event) => {
        const target = event.target as HTMLElement;
        listenById(target);
        listenByIdIncludes(target);
        listenByClassName(target);
        listenByClassList(target);
    });
}
