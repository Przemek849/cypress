describe("Praca domowa, Test 1", () => {
    it("Pierwszy test", () => {
        cy.visit("https://www.edu.goit.global/account/login");

        cy.login("user888@gmail.com", "1234567890");

        cy.get('[data-element-type="burger-menu"]').click();

        cy.get(':nth-child(12) > .next-bve2vl').click();
    });
});

describe("Praca domowa, Test 2", () => {
    it("Drugi test", () => {
        cy.visit("https://www.edu.goit.global/account/login");

        cy.get("#user_email").type("testowyqa@qa.team");
        cy.get("#user_email").should("have.value", "testowyqa@qa.team")

        cy.get("#user_password").type("QA!automation-1");
        cy.get("#user_password").should("have.value", "QA!automation-1")

        cy.get('[type="submit"]').should('have.text', 'Log in').click();

        cy.get('#open-navigation-menu-mobile').click();

        cy.get(':nth-child(8) > .next-bve2vl').click();
    })
});