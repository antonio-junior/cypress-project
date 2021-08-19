/// <reference types="cypress" />


describe('jsonplaceholder', () => {
    // beforeEach(() => {
    //     cy.visit('https://www.apple.com/')
    // })

    //baseUrl -> cypress.json

    it('User id', () => {
        cy.request({
            url: "/todos/1"
        }).then(({body}) => expect(body.userId).eql(1))
    })

    it('Company name', () => {
        cy.request({
            url: "/users/1"
        }).its('body.company.name').should("exist")
            .then(company => expect(company).equal("Romaguera-Crona"))
    })

    it('Comments', () => {
        cy.request({
            url: "/todos/1/comments"
        }).as('response');

        cy.get('@response').its('status').should('be.equal', 200);

        cy.get('@response').then(res => {
            expect(res.body[0].email).to.be.equal('Eliseo@gardner.biz')
        })
    })
})