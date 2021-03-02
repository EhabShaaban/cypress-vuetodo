/// <reference types="Cypress" />
import TodoPage from '../page/TodoPage'

const todoPage = new TodoPage()

describe('Header tests', function() {

    beforeEach(() => {
        todoPage.visit();
    });

    it('Should have correct page header', function(){
        todoPage.getHeader().should('have.text', 'My to-dos')
    })
    
})