/// <reference types="cypress"/>
import loginPage_PO from "../../support/pageObject/login/loginPage_PO";
import adminPage_PO from "../../support/pageObject/admin/adminPage_PO";

describe("Verify Admin Section allow to browse.", () => {
  const hrmLoginPage = new loginPage_PO();
  const adminSection = new adminPage_PO();
  
  it("Go to Admin Section.", () => {
    hrmLoginPage.visitLoginpage();

    hrmLoginPage.hrmLogin();

    adminSection.gotoAdminSection();
    cy.url({ timeout: 2000 }).should("include", "/admin/viewSystemUsers");

    hrmLoginPage.hrmLogout();
  });
});
