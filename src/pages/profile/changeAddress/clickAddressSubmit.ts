import { showToastError } from '../../logReg/utils/funcToastify.utils';
import { getISOCodeByCountryName } from '../../logReg/utils/getISOCode.utils';
import { logoutAction } from '../../logReg/utils/logOutFunc.utils';
import { ifFormHasErrors } from '../changePassword/ifFormHasErrors';
import { newAddress } from '../interfaces/dataForUpdate';
import { IForm } from '../interfaces/iFormInterface';
import { changeAddressApi } from './changeAddressApi';

export function clickAddressSubmit(
    but: HTMLButtonElement,
    form: IForm,
    chdxs: HTMLInputElement[],
    cont: HTMLDivElement
): void {
    but.addEventListener('click', async () => {
        if (ifFormHasErrors(form.form)) {
            showToastError('Please fix the errors before saving.');
            return;
        }
        if (
            form.inners[0].inputHTML.value &&
            form.inners[1].inputHTML.value &&
            form.inners[2].inputHTML.value &&
            form.inners[3].inputHTML.value &&
            (chdxs[0].checked || chdxs[1].checked || chdxs[2].checked || chdxs[3].checked)
        ) {
            newAddress.country = form.inners[0].inputHTML.value;
            newAddress.city = form.inners[1].inputHTML.value;
            newAddress.street = form.inners[2].inputHTML.value;
            newAddress.code = form.inners[3].inputHTML.value;
            newAddress.shipping = chdxs[0].checked;
            newAddress.billing = chdxs[1].checked;
            newAddress.shippingDefault = chdxs[2].checked;
            newAddress.billingDefault = chdxs[3].checked;

            const country = await getISOCodeByCountryName(newAddress.country);
            await changeAddressApi(country, chdxs);
            await logoutAction();

            const btnAddAddress = document.querySelector('.btn__add-address') as HTMLButtonElement;
            cont.remove();
            btnAddAddress.disabled = false;
        } else {
            showToastError('Please fill in all fields and select at least one checkbox before submitting.');
        }
    });
}
