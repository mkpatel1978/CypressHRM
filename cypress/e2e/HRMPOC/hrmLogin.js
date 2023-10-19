/// <reference types="cypress"/>
import loginPage_PO from "../../support/pageObject/login/loginPage_PO";

// beforeEach(() => {
//   // cy.getCookie("orangehrm").not.ex
//   cy.visit(Cypress.env("url"));

//   cy.getCookie("orangehrm").then((cookie) => {
//     cy.setCookie("orangehrm", cookie.value, {
//       path: cookie.path,
//       domain: cookie.domain.substring(1),
//       expiry: cookie.expiry,
//       secure: cookie.secure,
//       httpOnly: cookie.hostOnly,
//       sameSite: cookie.sameSite,
//     });
//   });
// });

describe("HR Application Successfull Login following Logout.", () => {
  const hrmLoginPage = new loginPage_PO();
  
  beforeEach(function () {
    // executes prior each test within it block
    hrmLoginPage.visitLoginpage();
  });

  it("Verify Login into application followng logout is Successful.", () => {

    hrmLoginPage.hrmLogin();

    cy.url({ timeout: 2000 }).should("include", "/dashboard/index");

    hrmLoginPage.hrmLogout();
  });

  //Login forget password

  
});
