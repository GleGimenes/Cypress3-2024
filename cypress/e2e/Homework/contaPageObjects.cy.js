/// <reference types="cypress" />
/*
const LoginPage = require ('../../support/pages/login.page')
const {dashboardPage } = require ('../../support/pages/dashboard')
*/const data = require ('../../fixtures/data.json')
const {LoginPage, dashboardPage} = require ('../../support/pages/index')


describe('Fluxo de criaçao de conta', () => {
    beforeEach(() => {
        cy.visit('minha-conta/')
    });

    it('Deve criar uma conta na Loja Ebac - Utilizando Page Objects', () => {
        LoginPage.login(data.email, data.senha)
        //dashboardPage.pageTitle.should('have.text', 'Minha conta')
        dashboardPage.pageTitle.should("be.visible")
        
    });
});