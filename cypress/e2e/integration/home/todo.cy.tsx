/// <reference types="cypress" />

describe("When plage is displayed", () => {
  beforeEach(() => {
    cy.visit(Cypress.env("BASE_URL"));
  });

  it("should have page displayed", () => {
    cy.get('[data-cy="header"]').should("have.attr");
  });
});
