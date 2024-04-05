describe('Movie List Page', () => {
    beforeEach(() => {
        cy.visit('http://localhost:3000')
    })

    it('successfully loads', () => {
        cy.url().should('include', '/')
    })

    it('genre select works correctly', () => {
        // Select the genre
        cy.get('.genre-select').contains('Comedy').click()

        // Verify the genre is selected
        cy.get('.genre-select')
            .find('.selected-button')
            .should('contain.text', 'Comedy')
    })

    it('sort control works correctly', () => {
        cy.get('.movie-list-page-navbar')
            .find('select')
            .select('release_date')
            .should('have.value', 'release_date')
    })

    it('displays movies', () => {
        cy.get('.movie-list').children().should('have.length.greaterThan', 0)
    })

    it('movie counter displays correct number of movies', () => {
        cy.get('.movie-counter')
            .invoke('text')
            .then(text => {
                const movieCount = parseInt(text.split(' ')[0])
                cy.get('.movie-list')
                    .children()
                    .should('have.length', movieCount)
            })
    })

    it('navigates to movie details page on movie click', () => {
        cy.get('.movie-list')
            .children()
            .first()
            .then($movie => {
                const movieId = $movie.data('id')

                $movie.trigger('click')

                cy.url().should('include', `/${movieId}`)
            })
    })
})
