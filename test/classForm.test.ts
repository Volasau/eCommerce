import { InnerForm } from '../src/pages/logReg/formClasses/classForm'; 
import { validateThisInput } from '../src/pages/logReg/validation/validateThisInput'; 
jest.mock('../src/pages/logReg/validation/validateThisInput'); 

describe('InnerForm', () => {
    beforeEach(() => {
        jest.clearAllMocks();
    });

    it('should create InnerForm and call validateThisInput', () => {
        const validateThisInputMock = validateThisInput as jest.Mock;
        const form = new InnerForm('Email', 'text', 'email', 'email', 'email-error', 'Enter the e-mail');
        form.create();
        expect(validateThisInputMock).toHaveBeenCalledTimes(1);
    });
});
