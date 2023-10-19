class adminPage_PO {
  elements = {
    clickAdminSection: () => cy.get(":nth-child(1) > .oxd-main-menu-item"),
  };

  //Go to Admin Section.
  gotoAdminSection() {
    this.elements.clickAdminSection().should("be.visible").click();
    return;
  }
}

export default adminPage_PO;
