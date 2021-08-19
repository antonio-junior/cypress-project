/// <reference types="cypress" />


describe('bairesdev', () => {
    
    it('landing', () => {
        cy.visit('https://testing.bairesdev.com/landing/java')

        cy.get('#modalForm').then($modal => $modal.remove());
        
        // Step 1
        cy.get('#name').type('Name5');
        cy.get('#email').type('email5@mail.com');
        cy.get('#staffAugmentation').then($radio => cy.wrap($radio.parent()).click());
        cy.get('#textComments').type('Lorem ipsum', );
        cy.get('#landing_long .text-center button[type=submit]').click();

        // Step 2
        cy.get('label:contains(\'Company Name\')')
            .then($label => cy.wrap($label.parent().find('input')).clear().type('It is my CompanyName'));
        cy.get('label:contains(\'Phone Number\')')
            .then($label => cy.wrap($label.parent().find('input')).clear().type('55555555'));
        cy.get('button[class*=\'v-btn\']').click();

        // Step 3
        cy.get('input[value=1]').click({force:true});
        cy.get('button[class*=\'v-btn\']').click();

        // Step 4
        cy.get('input[value=\'A few hours a week\']').click({force:true});
        cy.get('button[class*=\'v-btn\']').click();

        // Step 5
        cy.get('input[value=\'Ongoing\']').click({force:true});
        cy.get('button[class*=\'v-btn\']').click();

         // Step 6
        cy.get('input[value=\'Under $10k\']').click({force:true});
        cy.get('button[class*=\'v-btn\']').click();

        // Step 7
        cy.get('input[value=\'Immediately\']').click({force:true});
        cy.get('button[class*=\'v-btn\']').click();

        // Step 8
        cy.get('div[role=combobox] input[type=text]').click({force: true});
        cy.get('.v-list-item__title:contains(\'ABAP\')')
            .then($div => cy.wrap($div.parent().parent().find('.v-simple-checkbox')).click());
        cy.get('button[class*=\'v-btn\']').click({force:true});
        
        // Step 9
        cy.get('label:contains(\'Directory\')')
            .then($label => cy.wrap($label.parent()).click());
        cy.get('input[type=radio][value=\'Directly for me\']').click({force:true})
        cy.get('button[class*=\'v-btn\']:contains(\'Next\')').click();

        // Final Step
        cy.get('body h2').should('have.text', 'Thank you! We’ll be in contact soon.');
    })
})