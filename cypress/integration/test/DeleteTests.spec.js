/// <reference types="Cypress" />
import TodoPage from '../page/TodoPage'

const todoPage = new TodoPage()
const text = require("/home/ehab/Dev/cypress-vuetodo/cypress/fixtures/foreign_text.json")

describe('Delete tests', function() {

    beforeEach(() => {
        todoPage.visit();
        cy.fixture('foreign_text').as('text')
    });

    it('Should delete all todos', function(){
        for (var key in text) {
            if (text.hasOwnProperty(key)) {
                todoPage.enterNewTodo(text[key])
            }
        }
        todoPage.deleteAllTodo()
        cy.get('.li').should('not.exist');
    })
    
})