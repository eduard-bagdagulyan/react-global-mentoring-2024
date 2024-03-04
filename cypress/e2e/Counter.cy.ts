describe('Counter', () => {
    it('should increment the counter', () => {
        cy.visit('http://localhost:3000')
        cy.get('button').contains('+').click()
        cy.get('p').should('have.text', '1')
    })

    it('should decrement the counter', () => {
        cy.visit('http://localhost:3000')
        cy.get('button').contains('-').click()
        cy.get('p').should('have.text', '-1')
    })
})
