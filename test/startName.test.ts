import { startNameValidation } from '../src/pages/logReg/validation/validationFunction/startNameValidation';

describe('startNameValidation', () => {
    let errorElement: HTMLDivElement;

    beforeEach(() => {
        // Подготовка: Создаем пустой элемент для вывода ошибки перед каждым тестом
        errorElement = document.createElement('div');
    });

    it('should clear error for empty name', () => {
        startNameValidation('', errorElement);
        expect(errorElement.textContent).toBe('');
    });

    it('should display error for name with special characters', () => {
        startNameValidation('John@Doe', errorElement);
        expect(errorElement.textContent).toBe('*the field must not contain special characters');
    });

    it('should display error for name with digits', () => {
        startNameValidation('Jane123', errorElement);
        expect(errorElement.textContent).toBe('*the field must not contain digits');
    });

    it('should clear error for valid name', () => {
        startNameValidation('John Doe', errorElement);
        expect(errorElement.innerHTML).toBe('');
    });
});
