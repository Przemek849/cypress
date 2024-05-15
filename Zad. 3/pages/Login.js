
export class Login {

    visit() {
        cy.visit('https://www.edu.goit.global/account/login');
    }

    loggingIn(login, password) {
        cy.visit('https://www.edu.goit.global/account/login');
        cy.get("#user_email").type(login);
        cy.get("#user_password").type(password);
        cy.get('[type="submit"]').should('have.text', 'Log in').click();
    }

}