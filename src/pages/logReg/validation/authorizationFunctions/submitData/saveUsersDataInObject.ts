import { IAuthorizationObject } from '../../../../../core/interfaces/authorizationObjectInterface';
import { IRegistrationObject } from '../../../../../core/interfaces/registrationObjectInterface';
import { constants } from '../../../../../data/constants';

export function saveUsersDataInObject(inputList: NodeList, obj: IAuthorizationObject | IRegistrationObject) {
    inputList.forEach((inp) => {
        const input = inp as HTMLInputElement;
        Object.defineProperty(obj, input.id, { value: input.value });
    });
    if (Object.keys(obj).length > 2) {
        const object = obj as IRegistrationObject;
        if (!document.getElementById('shipping')?.innerHTML) {
            object.cityShip = object.city;
            object.countryShip = object.country;
            object.streetShip = object.street;
            object.postcodeShip = object.postcode;
        }
        object.billingDefault = constants.billDefault;
        object.shippingDefault = constants.shipDefault;
    }
}
