import { IAuthorizationObj } from '../../../../../core/interfaces/authorizationObjInterface';
import { IRegistrationObj } from '../../../../../core/interfaces/registrationObjInterface';
import { constants } from '../../../../../data/constants';

export function saveUsersDataInObj(inputList: NodeList, obj: IAuthorizationObj | IRegistrationObj) {
    inputList.forEach((inp) => {
        const input = inp as HTMLInputElement;
        Object.defineProperty(obj, input.id, { value: input.value });
    });
    if (Object.keys(obj).length > 2) {
        const myObj = obj as IRegistrationObj;
        if (!document.getElementById('shipping')?.innerHTML) {
            myObj.cityShip = myObj.city;
            myObj.countryShip = myObj.country;
            myObj.streetShip = myObj.street;
            myObj.postcodeShip = myObj.postcode;
        }
        myObj.billingDefault = constants.billDefault;
        myObj.shippingDefault = constants.shipDefault;
    }
}
