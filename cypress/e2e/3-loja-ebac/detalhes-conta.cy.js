/// <reference types="cypress" />

describe('Funcionalidade: Detalhes da conta', () => {
    beforeEach(() => {
        cy.visit('minha-conta/edit-account');
        cy.login('ivpmn@lojaebac.com', 'Pir234!mn');
    });

    it('Deve completar detalhes da conta com sucesso', () => {
        cy.detalhesConta('Ivaneide', 'Nascimento', 'Ivaneide.qa');
        
    });
});
