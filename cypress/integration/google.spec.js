/// <reference types="cypress" />


describe('Google', () => {

    it('Use Fixture', function() {
        cy.visit('https://www.google.com/?gws_rd=ssl');

        cy.fixture('userData').as('usuario').then(() => {
            cy.get('input[role=\'combobox\']').type(this.usuario.nome);
            cy.get("#gb").click();
            cy.get(".FPdoLc center [type='submit'][value='Pesquisa Google']").click();
        })

        cy.get("input[type=text][title='Pesquisar']")
            .clear()
            .type('carlos');
        cy.get('button[type="submit"][aria-label="Pesquisa Google"]').click()
    });

    it('Use xpath', () => {
        cy.xpath("//div[@class='ellip']//span[@class='hl'][contains(., 'YouTube')]")
        .should('have.length', 2)
    })

    // arquivo support/commands.js
    // Cypress.Commands.add('comando', (param) => {});
    // uso: cy.comando(param)


    // setar a data do sistema: cy.clock(date.getTime())

    // cy.tick(MILISECONDS) adianta as horas sem precisar esperar o tempo (wait)
})