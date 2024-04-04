/// <reference types="cypress"/>

describe('Funcionalidade: produtos', () => {
    beforeEach(() => {
        cy.visit('produtos')

    });

    it('Deve selecionar um produto da lista', () => {
        cy.get(' .product-block ')
       // .first() primeiro elemento
        //.click()
        //.eq(2) terceiro elemento
        .contains('Abominable Hoodie')
       .click()
       cy.get('#tab-title-description > a').should('contain', 'Descrição')
        
    });

});