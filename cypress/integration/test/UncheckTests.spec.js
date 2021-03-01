/// <reference types="Cypress" />
import TodoPage from '../page/TodoPage'

const todoPage = new TodoPage()

describe('Uncheck all tests', function() {

    it('Should uncheck all todos in the page', function(){
        todoPage.visit();
        todoPage.uncheckAll();
    })
    
})