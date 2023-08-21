import Toastify from 'toastify-js';
import 'toastify-js/src/toastify.css';

export function showToast(message: string) {
    Toastify({
        text: message,
        duration: 3000,
        close: true,
        offset: {
            x: 150,
            y: 150,
        },
    }).showToast();
}
