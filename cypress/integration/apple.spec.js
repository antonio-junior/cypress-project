/// <reference types="cypress" />


describe('Apple', () => {
    beforeEach(() => {
        cy.visit('https://www.apple.com/')
    })

    it.only('Find', () => {

        cy.title().then(title => {
            expect(title).to.equal('Apple')
        })
      
        cy.get(".ac-gn-list li a span:contains('iPad')")
            .should('exist')
            .click({force: true});
        
        // cy.get(".chapternav-items li")
        //     .find('span:first')
        //     .each(($span) => {
        //         expect($span.text()).contains('iPad')
        //     });
       
        // cy.get(".chapternav-items li")
        //     .find('span:first')
        //     .each(function() {
        //         expect(this.innerHTML).contains('iPad')
        //     });
        
        // cy.get(".chapternav-items li")
        //     .find('span:first').then(el => {
        //         el.each(function() {
        //             expect(this.innerHTML).contains('iPad')
        //         })
        //     })

        cy.contains('Compare').then($x => {
            console.log($x)
            console.log($x.prop('href'));
            console.log($x.attr('href'));
            $x.removeProp('href')
            console.log($x.prop('href'));
            console.log($x.attr('href'));
            $x.removeAttr('href')
            console.log($x.prop('href'));
            console.log($x.attr('href'));
        })

        


        // cy.contains('Compare').invoke('removeAttr', 'aria-label').then($x => {
        //     console.log($x.prop('aria-label'));
        // })
    })
})