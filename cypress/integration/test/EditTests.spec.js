/// <reference types="Cypress" />
import TodoPage from '../page/TodoPage'

const todoPage = new TodoPage()
describe('Edit all tests, foreign text', function() {

    beforeEach(() => {
        todoPage.visit();
        cy.fixture('foreign_text').as('text')
        });
    
    it('Should edit all todos in the page with german', function(){        
        todoPage.editAll(this.text.de);
    })

    it('Should edit all todos in the page with english', function(){
        todoPage.editAll(this.text.en);
    })

    it('Should edit all todos in the page with korean', function(){
        todoPage.editAll(this.text.kor);
    })

    it('Should edit all todos in the page with russian', function(){
        todoPage.editAll(this.text.russ);
    })

    it('Should edit all todos in the page with ukrainian', function(){
        todoPage.editAll(this.text.ukra);
    })

    it('Should edit all todos in the page with italian', function(){
        todoPage.editAll(this.text.ital);
    })
})

describe('Edit all tests, numbers&signs', function() {
    beforeEach(() => {
        todoPage.visit();
        cy.fixture('numbers_signs').as('data')
        });

    it('Should edit all todos in the page with signs', function(){        
        todoPage.editAll(this.data.signs);
    })

    it('Should edit all todos in the page with numbers', function(){        
        todoPage.editAll(this.data.numbers);
    })
})

describe('Edit single todo then press enter', function() {
    beforeEach(() => {
        todoPage.visit();
        cy.fixture('foreign_text').as('text')
        });

    it('Should edit one single todo and press enter', function(){        
        todoPage.editFirstTodoThenEnter(this.text.de)
    })
})