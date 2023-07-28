describe('Login de usuarios alura pic', () => {

    beforeEach(() => {
      cy.visit('/')

     })
     it('login com usuario valido', () => {
        cy.login(`flavio`, `123`)
        cy.contains(`a`, `(Logout)`).should(`be.visible`);
        
  
      })

      it('login com usuario invalido', () => {
        cy.login(`nadja` , `1234`)
        cy.contains(`ap-vmessage`, `User name is required!`).should(`be.visible`);
        cy.contains(`ap-vmessage`, `Password is required!`).should(`be.visible`);

        
  
      })

    })