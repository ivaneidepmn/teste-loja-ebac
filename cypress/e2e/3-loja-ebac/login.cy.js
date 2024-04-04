/// <reference types="cypress"/>

describe('Funcionalidade : Login', () => {
    it('Deve fazer login com sucesso', () => {
        cy.visit('http://lojaebac.ebaconline.art.br/minha-conta/')
        cy.get('#username').type('ivpmn@lojaebac.com')
        cy.get('#password').type('Pir234!mn')
        cy.get('.woocommerce-form > .button').click()

        cy.get('.woocommerce-MyAccount-content > :nth-child(2)').should('contain', 'Olá, ivpmn (não é ivpmn? Sair)')
        
    });
    
});
