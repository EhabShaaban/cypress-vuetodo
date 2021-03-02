/// <reference types="Cypress" />
import TodoPage from '../page/TodoPage'

const todoPage = new TodoPage()

describe('Header tests', function() {

    beforeEach(() => {
        todoPage.visit();
    });

    it('test', function(){
        todoPage.getHeader().should('have.text', 'My to-dos')
    })
    
})