/// <reference types="Cypress" />
import TodoPage from '../page/TodoPage'

const todoPage = new TodoPage()
const text = require("/home/ehab/Dev/cypress-vuetodo/cypress/fixtures/foreign_text.json")

describe('Add new todos tests', function () {

    beforeEach(() => {
        todoPage.visit();
    });

    it('Should add new todos', function () {
        for (var key in text) {
            if (text.hasOwnProperty(key)) {
                todoPage.enterNewTodo(text[key])
            }
        }
    })
    
})