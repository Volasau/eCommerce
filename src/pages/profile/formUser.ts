import showChangeInfoUser from './changeUser/changeInfoUser';

export class User {
    container: HTMLDivElement;

    constructor(email: string, firstName: string, lastName: string, dateOfBirth: string) {
        this.container = this.createContainer(email, firstName, lastName, dateOfBirth);
    }

    private createContainer(email: string, firstName: string, lastName: string, dateOfBirth: string): HTMLDivElement {
        const userData = document.createElement('div');
        userData.classList.add('user__container');

        const emails = this.createElementWithSpan('Email', 'user_first', email);
        const userFirstName = this.createElementWithSpan('First name', 'user_first', firstName);
        const userLastName = this.createElementWithSpan('Last name', 'user_first', lastName);
        const userBirthDate = this.createElementWithSpan('Birthday date', 'user_first', dateOfBirth);

        const changeInfoUser = document.createElement('button');
        changeInfoUser.classList.add('btn__change-infouser');

        changeInfoUser.textContent = 'Change Info';
        changeInfoUser.addEventListener('click', () => {
            changeInfoUser.disabled = true;
            showChangeInfoUser(userData);
        });

        userData.append(emails, userFirstName, userLastName, userBirthDate, changeInfoUser);

        return userData;
    }

    createElementWithSpan(title: string, className: string, content: string): HTMLParagraphElement {
        const element = document.createElement('p');
        element.classList.add(className);
        element.innerHTML = `${title}: <span class='${className}'>${content}</span>`;
        return element;
    }
}
