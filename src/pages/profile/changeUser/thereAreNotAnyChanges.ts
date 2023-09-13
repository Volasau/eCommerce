import { dataCustomer } from '../../../server/customer/customerLogin';

export function thereAreNoAnyChanges(inputsVal: string[]): boolean {
    return (
        inputsVal[0] === dataCustomer.email &&
        inputsVal[1] === dataCustomer.firstName &&
        inputsVal[2] === dataCustomer.lastName &&
        inputsVal[3] === dataCustomer.dateOfBirth
    );
}
