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
        let produto = 'Zeppelin Yoga Pant'
        produtosPage.buscarProduto(produto)
        cy.get('.product_title').should('contain',  produto )
    });
    it('Deve visitar a página do produto', () => {
        produtosPage.visitarProduto('Zeppelin Yoga Pant')
        cy.get('.product_title').should('contain', 'Zeppelin Yoga Pant')
        
    });
// Ajuste no teste "Deve adicionar produto ao carrinho"
it('Deve adicionar produto ao carrinho', () => {
    let qtd = 6;
    produtosPage.buscarProduto('Zeppelin-Yoga-Pant');
    produtosPage.addProdutoCarrinho ('M', 'Blue', qtd)
    cy.get('.woocommerce-message').should('contain', qtd + ' × “Zeppelin Yoga Pant” foram adicionados no seu carrinho');
});

// Ajuste no teste "Deve adicionar produto ao carrinho buscando da massa de dados"
it('Deve adicionar produto ao carrinho buscando da massa de dados', () => {
    cy.fixture('produtos').then(dados => {
        produtosPage.buscarProduto(dados[1].nomeProduto);
        produtosPage.buscarProduto(
            dados[1].tamanho,
            dados[1].cor,
            dados[1].quantidade)

        cy.get('.woocommerce-message').should('contain', dados[1].nomeProduto);
    });
});
});