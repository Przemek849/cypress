import { Login } from '../../pages/Login';
import { HomePage } from '../../pages/HomePage';

const Loging = new Login();

const Home = new HomePage();

describe("Praca domowa, Test 1", () => {
    it("Pierwszy test", () => {
        Loging.visit();
        Loging.loggingIn("user888@gmail.com", "1234567890");
        Home.logOut1();
    });
});

describe("Test 2", () => {
    it("Logowanie i wylogowywanie", () => {
        Loging.visit();
        Loging.loggingIn("testowyqa@qa.team", "QA!automation-1");
        Home.logOut2();
    });
});


// describe("Praca domowa, Test 1", () => {
//     it("Pierwszy test", () => {
//         cy.visit('https://www.edu.goit.global/account/login');
//     });
// });