/// <reference types="Cypress" />

class TodoPage {

    todoBtnByClassName(){
        //lst of all todos btns
        return cy.get('*[class^="btn border-0 flex-grow-1 text-left shadow-none"]')
    }
    editBtnByClassName(){
        //lst of all edit btns
        return cy.get('*[class^="fa fa-edit"]')
    }
    todoAfterEditClickBtnByClass(){
        //lst of all todos btns after clicking edit btn
        return cy.get('*[class^="flex-grow-1"]')
    }
    newTodoInput(){
        //input field for new todo inserts
        return cy.get('input')
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
                .click()
            cy.wrap($component)
            .type(" "+text);
        })
    }

    editFirstTodoThenEnter(text){
        this.editBtnByClassName()
        .eq(0)
        .click()
        this.todoAfterEditClickBtnByClass()
        .eq(0)
        .type(text)
        .type('{enter}')
    }
    
    enterNewTodo(text){
        this.newTodoInput()
        .type(text)
        .type('{enter}')
    }
}

export default TodoPage