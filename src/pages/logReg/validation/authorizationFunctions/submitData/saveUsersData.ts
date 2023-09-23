import { IAuthorization } from '../../../../../core/interfaces/authorization.interfaces';
import { IRegistration } from '../../../../../core/interfaces/registration.interfaces';
import { constants } from '../../../../../data/constants';

export function saveUsersData(inputList: NodeList, regLog: IAuthorization | IRegistration): void {
    inputList.forEach((inp) => {
        const input = inp as HTMLInputElement;
        Object.defineProperty(regLog, input.id, { value: input.value });
    });
    if (Object.keys(regLog).length > 2) {
        const myRegLog = regLog as IRegistration;
        if (!document.getElementById('shipping')?.innerHTML) {
            myRegLog.cityShip = myRegLog.city;
            myRegLog.countryShip = myRegLog.country;
            myRegLog.streetShip = myRegLog.street;
            myRegLog.postcodeShip = myRegLog.postcode;
        }
        myRegLog.billingDefault = constants.billDefault;
        myRegLog.shippingDefault = constants.shipDefault;
    }
}
