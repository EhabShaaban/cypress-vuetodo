/// <reference types="Cypress" />
import TodoPage from '../page/TodoPage'

const todoPage = new TodoPage()
const title = require("/home/ehab/Dev/cypress-vuetodo/cypress/fixtures/title.json")


describe('Navigation tests', function() {

    it('Should validate you are on the correct page', function(){
        todoPage.visit();
        cy.title().should('be.equal', title.vue_title)
    })
    
})