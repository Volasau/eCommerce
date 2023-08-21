import { startBirthDateValidation } from "../src/pages/logReg/validation/validationFunction/startBirthDateValidation";

describe('startBirthDateValidation', () => {
    let errorElement: HTMLDivElement;

    beforeEach(() => {
        // Создаем пустой элемент для вывода ошибки перед каждым тестом
        errorElement = document.createElement('div');
    });

    it('should display error for users under 13 years old', () => {
        const thirteenYearsAgo = new Date();
        thirteenYearsAgo.setFullYear(thirteenYearsAgo.getFullYear() - 13);

        startBirthDateValidation(thirteenYearsAgo.toISOString(), errorElement);

        expect(errorElement.style.display).toBe('block');
        expect(errorElement.textContent).toBe('*authorization is available only to persons over 13 years of age');
    });

    it('should clear error for users over 13 years old', () => {
        const fourteenYearsAgo = new Date();
        fourteenYearsAgo.setFullYear(fourteenYearsAgo.getFullYear() - 14);

        startBirthDateValidation(fourteenYearsAgo.toISOString(), errorElement);

        expect(errorElement.innerHTML).toBe('');
    });
});
