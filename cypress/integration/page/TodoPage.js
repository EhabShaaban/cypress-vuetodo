/// <reference types="Cypress" />

class TodoPage {

    todoBtnByClassName(){
        //lst of all todos
        return cy.get('*[class^="btn border-0 flex-grow-1 text-left shadow-none"]')
    }
    editBtnByClassName(){
        //lst of all edit btns
        return cy.get('*[class^="fa fa-edit"]')
    }
    todoAfterEditClickBtnByClass(){
        //appears on edit click
        return cy.get('*[class^="flex-grow-1"]')
    }

    visit() {
        cy.visit(Cypress.config().baseUrl);
        return this
    }

    uncheckAll() {
        this.todoBtnByClassName().each($component => {
            cy.wrap($component)
                .wait(50)
                .click();
        })
    }

    editAll(text) {
        this.editBtnByClassName().each($component => {
            cy.wrap($component)
                .wait(50)
                .click();
            cy.wrap($component).type(" "+text);
        })
    }

    editFirstTodoThenEnter(text){
        this.editBtnByClassName().eq(0).click()
        this.todoAfterEditClickBtnByClass().eq(0).type(text, '{enter}')
    }
}

export default TodoPage