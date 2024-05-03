/// <reference types="cypress"/>
import produtosPage from "../../support/Page-objects/produtos.page";
describe('Funcionalidade: Produtos',() => {

    beforeEach(() => {
        produtosPage.visitarUrl()
    });
    it('Deve selecionar um produto da lista', () => {
        produtosPage.buscarProdutoLista('Ariel Roll Sleeve Sweatshirt')
        cy.get('#tab-title-description > a').should ('contain', 'Descrição')
      
    });

    it('Deve buscar um produto com sucesso', () => {
        let produto = 'Aether Gym Pant'
        produtosPage.buscarProduto(produto)
        cy.get('.product_title').should ('contain', produto )
    });
    it('Deve visitar a página do produto', () => {
        produtosPage.visitarProduto('Zeppelin Yoga Pant')
        cy.get('.product_title').should('contain', 'Zeppelin Yoga Pant')
        
    });
it('Deve adicionar produto ao carrinho', () => {
    const qtd = 7;
    const nomeProduto = ('Abominable Hoodie');
    produtosPage.buscarProduto(nomeProduto);
    produtosPage.addProdutoCarrinho('M', 'Green', qtd);
    cy.get('.woocommerce-message').should('contain',  qtd +  ' × “Abominable Hoodie” foram adicionados no seu carrinho.');
});


it.only('Deve adicionar produto ao carrinho buscando da massa de dados', () => {
    cy.fixture ('produtos').then(dados => {
        produtosPage.buscarProduto(dados[4].nomeProduto);
        produtosPage.addProdutoCarrinho(dados[4].tamanho,dados[4].cor, dados[4].quantidade);
        cy.get('.woocommerce-message').should('contain',  dados[4].nomeProduto);

    })
    });
});