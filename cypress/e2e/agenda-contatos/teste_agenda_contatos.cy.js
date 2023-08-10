/// <reference types="cypress"/> 

describe("Testando Contatos", () => {
    beforeEach(() => {
        cy.visit('https://agenda-contatos-react.vercel.app/')
    })
    
    it("Adicionar registro", () => {
        cy.get('input[type="text"]').type('Nome1_teste');
        cy.get('input[type="email"]').type('nome1@email.com');
        cy.get('input[type="tel"]').type('34 0 0000-0000'); 
        cy.get('.adicionar').click();
    });

    it("Editar registro", () => {
        cy.get('.contato:nth-child(4)').within(() => { 
            cy.get('.edit').click();
        });
        cy.get('input[type="text"]').type('{selectall}{backspace}').type('Nome1Editado_teste');
        cy.get('input[type="email"]').type('{selectall}{backspace}').type('nome1Editado@email.com');
        cy.get('input[type="tel"]').type('{selectall}{backspace}').type('34 1 1111-1111');
        cy.get('.alterar')
    });
    
    it("Deletar", () => {
        cy.get('.contato:nth-child(4)').within(() => { 
            cy.get('.delete').click();
        });
    });
})