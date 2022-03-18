describe('createorganization',() => {
            
    it('make organization', () => {
            cy.get('.vb-content > div.vs-c-list > .vs-c-list__item > .vs-c-list__btn').click()
            cy.get('.vs-c-list > :nth-child(1) > a').click()
            cy.get('input[type="text"]').type('nova organizacija 3')
            cy.get('[name="next_btn"]').click()
            cy.get('[name="next_btn"]').click()
            cy.get('.vs-c-modal--features-button > .vs-c-btn').click()
        })
        })
    