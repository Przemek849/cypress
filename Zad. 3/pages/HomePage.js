
export class HomePage {

    logOut1() {
        cy.get('#open-navigation-menu-mobile').click();

        cy.get(':nth-child(12) > .next-bve2vl').click();
    }

    logOut2() {
        cy.get('#open-navigation-menu-mobile').click();

        cy.get(':nth-child(8) > .next-bve2vl').click();
    }

}