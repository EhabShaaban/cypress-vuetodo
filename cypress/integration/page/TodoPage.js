/// <reference types="Cypress" />

class TodoPage {
    visit() {
        cy.visit(Cypress.config().baseUrl);
        return this
    }

    uncheckAll() {
        cy.get('*[class^="btn border-0 flex-grow-1 text-left shadow-none"]').each($component => {
            cy.wrap($component)
                .wait(50)
                .click();
        })
    }

    editAll() {
        cy.get('*[class^="fa fa-edit"]').each($component => {
            cy.wrap($component)
                .wait(50)
                .click();
            this.uncheckAll;
            cy.wrap($component).type(" und das ist alles für die Banane!");
        })
    }
}

export default TodoPage