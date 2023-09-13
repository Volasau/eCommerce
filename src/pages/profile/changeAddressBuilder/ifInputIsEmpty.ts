import { IInnerForm } from '../../../core/interfaces/innerFormInterface';

export function ifInputIsEmpty(inputs: IInnerForm[]) {
    return (
        !inputs[0].inputHTML.value ||
        !inputs[1].inputHTML.value ||
        !inputs[2].inputHTML.value ||
        !inputs[3].inputHTML.value
    );
}
