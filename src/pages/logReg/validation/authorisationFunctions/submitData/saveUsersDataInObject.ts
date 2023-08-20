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
        if (!document.getElementById('shipping')) {
            object.cityShip = object.city;
            object.countryShip = object.country;
            object.streetShip = object.street;
            object.postcodeShip = object.postcode;
            constants.shipDefault = false;
        }
        object.billingDefault = constants.billDefault;
        object.shippingDefault = constants.shipDefault;
    }
}
