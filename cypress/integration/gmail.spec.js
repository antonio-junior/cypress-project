/// <reference types="cypress" />


describe('Gmail', () => {
    beforeEach(() => {
        cy.visit('https://gmail.com')
    })

    it.only('Check Title', () => {
        cy.title()
            .should('be.equal', 'Gmail')
            .should('have.lengthOf', 5)

        const login = 'acsjunior1';
        cy.get('#identifierId')
            .type(login + login)
            .type('{selectall}')
            .clear()
            .type(login + 'a{backspace}', {delay: 100})
            .should('have.value', login);
        
            //cy.contains('Próxima').click()
            cy.contains('Criar conta').click()
            cy.contains('Para mim').click()
            cy.get('type=checkbox')
            .click()
            .should('be.checked');
        
    })

    it('Navigate', () => {
        //cy.pause()

        
        cy.get('#masculino')
            .click()
            .should('be.checked')

        cy.get('#feminino')
            .should('not.be.checked')

        //cy.get('.o6cuMc').should('not.have.text', 'Crie uma conta');
        //cy.reload()
        //cy.get('.o6cuMc').should('have.text', 'Crie uma conta');
        
    })

})