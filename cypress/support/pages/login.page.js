/// <reference types="cypress" />

class LoginPage{
    get email () { return cy.get('#reg_email') }
    get password () { return cy.get('#reg_password') }
    get register () { return cy.get(':nth-child(4) > .button') }
   
    login(email, password) {
        this.email.type(email)
        this.password.type(password)
        this.register.click()
    }
}

module.exports = new LoginPage()
