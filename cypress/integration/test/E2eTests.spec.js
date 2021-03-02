/// <reference types="Cypress" />
import TodoPage from '../page/TodoPage'

const todoPage = new TodoPage()
const text = require("/home/ehab/Dev/cypress-vuetodo/cypress/fixtures/foreign_text.json")
const standard = require("/home/ehab/Dev/cypress-vuetodo/cypress/fixtures/standard_todos.json")


describe('E2e tests', function() {

    beforeEach(() => {
        todoPage.visit();
        cy.fixture('foreign_text').as('text')
    });

    it('Add todos, keep editing recursively', function(){
        for (var key in text) {
            if (text.hasOwnProperty(key)) {
                todoPage.enterNewTodo(text[key])
            }
        }
        for (var stanKey in standard) {
            if (standard.hasOwnProperty(stanKey)) {
                todoPage.editAll(standard[stanKey])
            }
        }
        todoPage.getTodoLi().should('have.css', 'box-sizing', 'border-box')
    })
    
})