class loginPage_PO {
  visitLoginpage() {
    cy.visit(Cypress.env("url") + "/web/index.php/auth/login");
    // cy.wait(5000);
  }

  elements = {
    loginUserName: () =>
      cy.get(":nth-child(2) > .oxd-input-group > :nth-child(2) > .oxd-input"),

    loginPassword: () =>
      cy.get(":nth-child(3) > .oxd-input-group > :nth-child(2) > .oxd-input"),

    loginBtn: () => cy.get(".oxd-button"),

    logoutMenu: () => cy.get(".oxd-userdropdown-tab > .oxd-icon"),

    logout: () => cy.get(":nth-child(4) > .oxd-userdropdown-link"),
  };

  //Login into HRM Application.
  hrmLogin() {
    this.elements.loginUserName().clear().type(Cypress.env("username"));

    this.elements.loginPassword().clear().type(Cypress.env("password"));

    this.elements.loginBtn().click();

    return this;
  }

  //Logout from HRM Application.
  hrmLogout() {
    this.elements.logoutMenu().click();
    this.elements.logout().click();

    return this;
  }
}

export default loginPage_PO;
