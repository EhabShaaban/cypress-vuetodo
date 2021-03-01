/// <reference types="Cypress" />
import TodoPage from '../page/TodoPage'

const todoPage = new TodoPage()

const sizes = [
    ['iphone-6', 'landscape'],
    'iphone-6',
    'ipad-2',
    ['ipad-2', 'landscape'],
    [1920, 1080],
];

describe('Visual regression tests', () => {

    sizes.forEach((size) => {

        it(`Should match previous screenshot when '${size}' resolution`, () => {
            cy.setResolution(size);
            todoPage.visit();
            cy.matchImageSnapshot();
        });

    });
    
});