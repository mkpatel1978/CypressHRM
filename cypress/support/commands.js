// ***********************************************
// This example commands.js shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************
//
//
// -- This is a parent command --
// Cypress.Commands.add('login', (email, password) => { ... })
//
//
// -- This is a child command --
// Cypress.Commands.add('drag', { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add('dismiss', { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This will overwrite an existing command --
// Cypress.Commands.overwrite('visit', (originalFn, url, options) => { ... })

import "cypress-localstorage-commands";

Cypress.Commands.add("login", () => {
  cy.visit(Cypress.env("url") + "/web/index.php/auth/login");

  cy.getCookie("orangehrm").then((cookie) => {
    cy.setCookie("orangehrm", cookie.value, {
      path: cookie.path,
      domain: cookie.domain.substring(1),
      expiry: cookie.expiry,
      secure: cookie.secure,
      httpOnly: cookie.hostOnly,
      sameSite: cookie.sameSite,
    });
  });

  // cy.log(cy.get('[name="_token"]'));
  // cy.get('[name="_token"]')
  //   .invoke("val")
  //   .then((token) => {
  //     cy.log("mk1:", token.trim());

  //     cy.setLocalStorage("_token", token.trim());
  //     cy.saveLocalStorage();

  // cy.getCookie("orangehrm")
  //   .invoke("value")
  //   .then((mkcookie) => {
  //     cy.log("mkcookie", mkcookie);
  //   });

  //   sessionStorage.setItem("_token", token.trim());

  // cy.setSessionStorage("_token", token.trim());
  // cy.sessionStorage("orangehrm", cy.getCookie("orangehrm").value);
  // });

  

  cy.url().should("contain", "/web/index.php/dashboard/index");
});

Cypress.Commands.add("getSessionStorage", (key) => {
  cy.window().then((window) => window.sessionStorage.getItem(key));
});

Cypress.Commands.add("setSessionStorage", (key, value) => {
  cy.window().then((window) => {
    window.sessionStorage.setItem(key, value);
  });
});
