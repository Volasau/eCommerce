import { IAuthorisObj } from '../../../../../core/interfaces/aythorisObjInterface';
import { IRegObj } from '../../../../../core/interfaces/regObjInterface';
import { constants } from '../../../../../data/constants';

export function saveUsersDataInObject(inputList: NodeList, obj: IAuthorisObj | IRegObj) {
    inputList.forEach((inp) => {
        const input = inp as HTMLInputElement;
        Object.defineProperty(obj, input.id, { value: input.value });
    });
    if (Object.keys(obj).length > 2) {
        const object = obj as IRegObj;
        object.billingDefault = constants.billDefault;
        object.shippingDefault = constants.shipDefault;
    }
}
