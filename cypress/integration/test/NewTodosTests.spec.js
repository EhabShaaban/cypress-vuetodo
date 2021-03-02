/// <reference types="Cypress" />
import TodoPage from '../page/TodoPage'

const todoPage = new TodoPage()
const text = require("/home/ehab/Dev/cypress-vuetodo/cypress/fixtures/foreign_text.json")
const standard = require("/home/ehab/Dev/cypress-vuetodo/cypress/fixtures/standard_todos.json") 

describe('Add new todos tests', function () {

    beforeEach(() => {
        todoPage.visit();
    });

    it('Should add new todos', function () {
        for (var key in text) {
            if (text.hasOwnProperty(key)) {
                todoPage.enterNewTodo(text[key])
            }
        }
        //asserts
        todoPage.todoBtnByClassName().eq(0).should(($btn) => {
            expect($btn).to.contain.text(standard.first)
        })
        todoPage.todoBtnByClassName().eq(1).should(($btn) => {
            expect($btn).to.contain.text(standard.second)
        })
        todoPage.todoBtnByClassName().eq(2).should(($btn) => {
            expect($btn).to.contain.text(standard.third)
        })
        todoPage.todoBtnByClassName().eq(3).should(($btn) => {
            expect($btn).to.contain.text(text.de)
        })
        todoPage.todoBtnByClassName().eq(4).should(($btn) => {
            expect($btn).to.contain.text(text.en)
        })
        todoPage.todoBtnByClassName().eq(5).should(($btn) => {
            expect($btn).to.contain.text(text.kor)
        })
        todoPage.todoBtnByClassName().eq(6).should(($btn) => {
            expect($btn).to.contain.text(text.russ)
        })
        todoPage.todoBtnByClassName().eq(7).should(($btn) => {
            expect($btn).to.contain.text(text.ukra)
        })
        todoPage.todoBtnByClassName().eq(8).should(($btn) => {
            expect($btn).to.contain.text(text.ital)
        })
    })
    
})