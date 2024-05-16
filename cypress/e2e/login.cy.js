describe('Login', () => {

  beforeEach(()=> {
    cy.visit('/')
  })
  
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
  it('Login - Correct with email  and passwprd incorret', () => {
    cy.visit('/')

    cy.get('[formcontrolname="email"] > .input-wrapper > .input-content > input')
      .type('cinthiabarbosa@gmail.com')

    cy.get('[formcontrolname="password"] > .input-wrapper > .input-content > input')
      .type('teste@teste!')
    
    cy.get('.btn-primary').should('not.be.disabled')
    cy.get('.btn-primary').click()
    cy.get('.ng-trigger').should('contain','Falha no login. Por favor, verifique seu email e senha.')
    

  })
  
  it('Login - Correct', () => {
    cy.visit('/')

    cy.get('[formcontrolname="email"] > .input-wrapper > .input-content > input')
      .type('maria@gmail.com')

    cy.get('[formcontrolname="password"] > .input-wrapper > .input-content > input')
      .type('teste123')
    
    cy.get('.btn-primary').should('not.be.disabled')
    cy.get('.btn-primary').click()
    cy.get('.ng-trigger').should('contain','Login feito com sucesso!')
  })
})

describe('Signup', () => {
  it.only('Valite element on Signup', () => {

      cy.get('.btn-secondary').click()
     
      cy.get('h2').contains('Sign in and start today!')
      cy.get('[formcontrolname="name"] > .input-wrapper > .input-content > input')
      .should('have.attr','placeholder','Cinthia')

      cy.get('[formcontrolname="email"] > .input-wrapper > .input-content > input')
        .should('have.attr','placeholder','cinthia@gmail.com')
  
      cy.get('[formcontrolname="password"] > .input-wrapper > .input-content > input')
        .should('have.attr','placeholder','Password')

      cy.get('[formcontrolname="passwordConfirm"] > .input-wrapper > .input-content > input')
        .should('have.attr','placeholder','Password')
      
      cy.get('.btn-primary').should('have.attr', 'disabled')
      cy.get('.btn-primary').contains('Signup Now')
      cy.get('.btn-secondary').contains('Login Now')
  
  
    })


})