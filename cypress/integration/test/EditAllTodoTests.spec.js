/// <reference types="Cypress" />

import TodoPage from '../page/TodoPage'

describe('Edit All tests', function() {

    it('Should edit all todos in the page', function(){
        const todoPage = new TodoPage()
        todoPage.visit();
        todoPage.editAll();
    })
})