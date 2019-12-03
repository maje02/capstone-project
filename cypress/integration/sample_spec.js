describe('Home', () => {
  beforeEach(() => {
    cy.visit('http://localhost:3000')
  })

  it('has the correct title', () => {
    // https://on.cypress.io/title
    cy.title().should('equal', 'React App')
  })
  describe('Place', () => {
    it('has a button', () => {
      // https://on.cypress.io/title
      cy.get('[alt="arrow"]')
        .first()
        .click()
    })
  })
})
