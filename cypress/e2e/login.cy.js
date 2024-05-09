describe('template spec', () => {
  it('Valite element on Login', () => {
    cy.visit('/')

    cy.get('h2').contains('Login into your account')
    cy.get('[formcontrolname="email"] > .input-wrapper > .input-content > input')
      .should('have.attr','placeholder','cinthia@gmail.com')

    cy.get('[formcontrolname="password"] > .input-wrapper > .input-content > input')
      .should('have.attr','placeholder','Enter your password')
    
    cy.get('.btn-primary').should('have.attr', 'disabled')

  })
  it('Login - Incorrect', () => {
    cy.visit('/')

    cy.get('[formcontrolname="email"] > .input-wrapper > .input-content > input')
      .type('cinthiaaaaaaaaaaaaaa')

    cy.get('[formcontrolname="password"] > .input-wrapper > .input-content > input')
      .type('cinthiaaaaaaaaaaaaaa')
    
    cy.get('.btn-primary').should('have.attr', 'disabled')


  })
  it('Login - Correct', () => {
    cy.visit('/')

    cy.get('[formcontrolname="email"] > .input-wrapper > .input-content > input')
      .type('cinthiabarbosa@gmail.com')

    cy.get('[formcontrolname="password"] > .input-wrapper > .input-content > input')
      .type('teste@teste!')
    
    cy.get('.btn-primary').should('not.be.disabled')
    

  })
})