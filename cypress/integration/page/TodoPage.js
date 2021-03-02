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
    deleteBtnByClassName(){
        //lst of all delete btns
        return cy.get('*[class^="fa fa-trash"]')
    }
    todoAfterEditClickBtnByClass(){
        //lst of all todos btns after clicking edit btn
        return cy.get('*[class^="flex-grow-1"]')
    }
    newTodoInput(){
        //input field for new todo inserts
        return cy.get('input')
    }
    todoBtnAfterUncheckByClassName(){
        //lst of all todos btns after check
        return cy.get('*[class^="btn border-0 flex-grow-1 text-left shadow-none completed"]')
    }
    getTodoLi(){
        return cy.get('*[class^="d-flex align-items-center list-group-item"]')
    }
    getHeader(){
        return cy.get('h1')
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
            .type(" "+text)
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
    
    deleteTodo(){
        this.deleteBtnByClassName()
        .eq(1)
        .click()
    }

}

export default TodoPage