/// <reference types="cypress" />


export const dashboardPage = {
    get pageTitle () { return cy.get('#main > header > h1') }
}