import { IForm } from '../interfaces/iFormInterface';
import { addCheckBox } from './addCheckBox';

export function addCheckboxes(form: IForm): HTMLInputElement[] {
    const shippingCheckbox = addCheckBox('Shipping', form.form);
    const billingCheckbox = addCheckBox('Billing', form.form);
    const shippingDefaultCheckbox = addCheckBox('Billing Default', form.form);
    const billingDefaultCheckbox = addCheckBox('Shipping Default', form.form);

    return [shippingCheckbox, billingCheckbox, shippingDefaultCheckbox, billingDefaultCheckbox];
}
