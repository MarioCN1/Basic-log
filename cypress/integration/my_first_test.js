/// <reference types="cypress" />
it('gis login', function () {
    cy.visit('http://gis-staging.interstellar.prv:3000/account/login')
    cy.get('#email').type('mnavacerrada@pccwglobal.com')
    cy.get ('#password').type('MarioenGIS81!')
    cy.get('#login').click()
   cy.wait(7000)
})