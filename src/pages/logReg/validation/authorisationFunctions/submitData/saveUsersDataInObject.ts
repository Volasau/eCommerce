import { IAuthorisObj } from '../../../../../core/interfaces/aythorisObjInterface';
import { IRegObj } from '../../../../../core/interfaces/regObjInterface';

export function saveUsersDataInObject(inputList: NodeList, obj: IAuthorisObj | IRegObj) {
    inputList.forEach((inp) => {
        const input = inp as HTMLInputElement;
        Object.defineProperty(obj, input.id, { value: input.value });
    });
}
