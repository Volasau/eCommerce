import { fireEvent } from '@testing-library/dom';
import { applyPromoCode } from '../../src/pages/basket/listeners/applyPromoCode';

describe('applyPromoCode', () => {
    beforeEach(() => {
        const button = document.createElement('button');
        button.className = 'lap-promo-but';
        button.textContent = 'Apply';
        document.body.appendChild(button);
    });

    afterEach(() => {
        const button = document.querySelector('.lap-promo-but');
        if (button) {
            document.body.removeChild(button);
        }
    });

    it('should log the clicked button when lap-promo-but is clicked', () => {
        const consoleLogSpy = jest.spyOn(console, 'log');

        applyPromoCode();

        const button = document.querySelector('.lap-promo-but');
        if (button) {
            fireEvent.click(button);
            expect(consoleLogSpy).toHaveBeenCalledWith(button);
        } else {
            fail('Button not found');
        }
    });
});
