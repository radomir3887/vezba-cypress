const locators = require('../../fixtures/locators.json')
import {faker} from '@faker-js/faker';

describe('login with valid credentials',() => {
    beforeEach(() => {
        cy.visit("");
      });


    
    it('login with valid credentials', () => {
        cy.get(locators.login.emailInput).type('radomir3887@gmail.com')
        cy.get(locators.login.passwordInput).type('zvezdatelekom')
        cy.get(locators.login.submitBtn).click()
    })

    it('negativ case/login with bad credentials credentials', () => {
        cy.get(locators.login.emailInput).type(faker.internet.email())
        cy.get(locators.login.passwordInput).type(faker.internet.password())
        cy.get(locators.login.submitBtn).click()

    })
    
})
