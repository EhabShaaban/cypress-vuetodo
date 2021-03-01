/// <reference types="Cypress" />
import TodoPage from '../page/TodoPage'

const todoPage = new TodoPage()

describe('Enter new todos tests', function() {
    
    beforeEach(() => {
        todoPage.visit();
        cy.fixture('foreign_text').as('text')
        });
    
    it('Should add new todo', function(){        
        todoPage.enterNewTodo(this.text.kor);
    })
})