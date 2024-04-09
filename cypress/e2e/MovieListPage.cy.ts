describe('Movie List Page', () => {
    beforeEach(() => {
        cy.visit(`http://localhost:${process.env.APP_PORT || 3000}`)
    })

    it('performs a complete user flow', () => {
        cy.get('.search-input').type('Comedy{enter}')

        cy.get('.genre-select').contains('Comedy').click()

        cy.get('.genre-select')
            .find('.selected-button')
            .should('contain.text', 'Comedy')

        cy.get('.movie-list-page-navbar')
            .find('select')
            .select('release_date')
            .should('have.value', 'release_date')

        cy.get('.movie-list').children().should('have.length.greaterThan', 0)

        cy.get('.movie-counter')
            .invoke('text')
            .then(text => {
                const movieCount = parseInt(text.split(' ')[0])
                cy.get('.movie-list')
                    .children()
                    .should('have.length', movieCount)
            })

        cy.get('.movie-list')
            .children()
            .first()
            .then($movie => {
                const movieId = $movie.data('id')

                $movie.trigger('click')

                cy.url().should('include', `/${movieId}`)
            })

        cy.go('back')
        cy.url().should('include', '/')
    })
})
