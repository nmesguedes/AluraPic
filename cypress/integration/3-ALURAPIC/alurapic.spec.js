describe('Login e registro de usuarios alura pic', () => {

    beforeEach(() => {
      cy.visit('http://localhost:4200/#/home')

     })

    it('verifica mensagens validacao', () => {
      cy.contains(`a`, `Register now`).click();
      cy.contains(`button`, `Register`).click();
      cy.contains(`ap-vmessage`, `Email is required!`).should(`be.visible`);
      cy.contains(`button`, `Register`).click();
      cy.contains(`ap-vmessage`, `Full name is required!`).should(`be.visible`);
      cy.contains(`ap-vmessage`, `User name is required!`).should(`be.visible`);
      cy.contains(`ap-vmessage`, `Password is required!`).should(`be.visible`);


    })

    it('verifica mensagens de email invalido', () => {
        cy.contains(`a`, `Register now`).click();
        cy.contains(`button`, `Register`).click();
        cy.get(`input[formcontrolname="email"]`).type(`nadja`);
        cy.contains(`ap-vmessage`, `Invalid e-mail`).should(`be.visible`);
       
  
      })

      it('verifica mensagens de senha com menos de 8 caracteres', () => {
        cy.contains(`a`, `Register now`).click();
        cy.contains(`button`, `Register`).click();
        cy.get(`input[formcontrolname="password"]`).type(`1234567`);
        cy.contains(`button`, `Register`).click();
        cy.contains(`ap-vmessage`, `Mininum length is 8`).should(`be.visible`);
       
  
      })

      it('verifica mensagens de user name invalido', () => {
        cy.contains(`a`, `Register now`).click();
        cy.contains(`button`, `Register`).click();
        cy.get(`input[formcontrolname="userName"]`).type(`flavio`);
        cy.contains(`button`, `Register`).click();
        cy.contains(`ap-vmessage`, `Username already taken`).should(`be.visible`);
       
  
      })

      it('verifica mensagens de user name com numero maximo de caracteres', () => {
        cy.contains(`a`, `Register now`).click();
        cy.contains(`button`, `Register`).click();
        cy.get(`input[formcontrolname="userName"]`).type(`nnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnn`);
        cy.contains(`button`, `Register`).click();
        cy.contains(`ap-vmessage`, `Maximun length is 30`).should(`be.visible`);
       
  
      })

      it('verifica mensagens de user name com numero minimo de caracteres', () => {
        cy.contains(`a`, `Register now`).click();
        cy.contains(`button`, `Register`).click();
        cy.get(`input[formcontrolname="userName"]`).type(`n`);
        cy.contains(`button`, `Register`).click();
        cy.contains(`ap-vmessage`, `Mininum length is 2`).should(`be.visible`);
       
  
      })


      it('verifica mensagens de numero maximo de caracteres no nome', () => {
        cy.contains(`a`, `Register now`).click();
        cy.contains(`button`, `Register`).click();
        cy.get(`input[formcontrolname="fullName"]`).type(`nnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnn`);
        cy.contains(`button`, `Register`).click();
        cy.contains(`ap-vmessage`, `Maximun length is 40`).should(`be.visible`);
       
  
      })

      it('verifica mensagens de numero minimo de caracteres no nome', () => {
        cy.contains(`a`, `Register now`).click();
        cy.contains(`button`, `Register`).click();
        cy.get(`input[formcontrolname="fullName"]`).type(`n`);
        cy.contains(`button`, `Register`).click();
        cy.contains(`ap-vmessage`, `Mininum length is 2`).should(`be.visible`);
       
  
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