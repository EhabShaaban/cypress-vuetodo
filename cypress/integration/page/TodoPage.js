/// <reference types="Cypress" />

class TodoPage
{
    visit()
    {
        cy.visit(Cypress.config().baseUrl);
        return this
    }
}

export default TodoPage
// cy.get('*[class^="fa fa-edit"]') > edit btns