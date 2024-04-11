/// <reference types="cypress"/>
const perfil = require('../../fixtures/perfil.json')

describe('Funcionalidade : Login', () => {
    beforeEach(() => {
        cy.visit('minha-conta')
    });
    afterEach(() => {
        cy.screenshot()
    });
    it('Deve fazer login com sucesso', () => {
        cy.get('#username').type('ivpmn@lojaebac.com')
        cy.get('#password').type('Pir234!mn')
        cy.get('.woocommerce-form > .button').click()
        cy.get('.woocommerce-MyAccount-content > :nth-child(2)').should('contain', 'Olá, ivpmn (não é ivpmn? Sair)')
        
    });
     it('Deve exibir uma mensagem de erro ao inserir usuário invalido', () => {
        cy.get('#username').type('num@lojaebac.com')
        cy.get('#password').type('Pir234!mn')
        cy.get('.woocommerce-form > .button').click()
        cy.get('.woocommerce-error').should('exist')
       
     });

      it('Deve exibir mensagem de erro ao inserir senha inválida', () => {
        cy.get('#username').type('ivpmn@lojaebac.com')
        cy.get('#password').type('23mnhbjm')
        cy.get('.woocommerce-form > .button').click()
        cy.get('.woocommerce-error > li').should('contain', 'Erro: A senha fornecida para o e-mail ivpmn@lojaebac.com está incorreta. Perdeu a senha?')
        cy.get('.woocommerce-error').should('exist')
      });

      it('Deve fazer login com sucesso - usando massa de dados', () => {
        cy.get('#username').type(perfil.usuario)
        cy.get('#password').type(perfil.senha)
        cy.get('.woocommerce-form > .button').click()
        cy.get('.woocommerce-MyAccount-content > :nth-child(2)').should('contain', 'Olá, ivpmn (não é ivpmn? Sair)')
});

it('Deve fazer login com sucesso - Usando Fixture', () => {
    cy.fixture('perfil').then( dados =>{
        cy.get('#username').type(dados.usuario, {log: false})
        cy.get('#password').type(dados.senha, {log: false})
        cy.get('.woocommerce-form > .button').click()
        cy.get('.woocommerce-MyAccount-content > :nth-child(2)').should('contain', 'Olá, ivpmn (não é ivpmn? Sair)')
    })

});

it.only('Deve fazer login com sucesso - Usando comandos customizados', () => {
    cy.login ('ivpmn@lojaebac.com', 'Pir234!mn')
    cy.get('.woocommerce-MyAccount-content > :nth-child(2)').should('contain', 'Olá, ivpmn (não é ivpmn? Sair)')

});
});
