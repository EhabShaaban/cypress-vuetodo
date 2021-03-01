/// <reference types="Cypress" />

import TodoPage from '../page/TodoPage'

describe('Uncheck All tests', function() {

    it('Should uncheck all todos in the page', function(){
        const todoPage = new TodoPage()
        todoPage.visit();
        todoPage.uncheckAll();
    })
})