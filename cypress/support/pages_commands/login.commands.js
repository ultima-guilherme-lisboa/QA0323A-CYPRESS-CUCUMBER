Cypress.Commands.add('loginAbrir', () => {
    cy.visit("sign_in");
 })

 Cypress.Commands.add('loginTypeEmail', (email) => {
    cy.loginGetInputEmail()
      .type(email)
 })

 Cypress.Commands.add('loginTypeSenha', (senha) => {
    cy.loginGetInputSenha()
      .type(senha)
 })

 Cypress.Commands.add('loginClicarEntrar', () => {
    cy.loginGetBtnEntrar()
      .click()
 })

 Cypress.Commands.add('loginSignIN', (email, senha) => {
    cy.loginTypeEmail(email)
      .loginTypeSenha(senha)
      .loginClicarEntrar()
 })


 Cypress.Commands.add("loginValidaMessagem", (messagem) => {
   cy.loginTostMessage()
     .should("have.text", messagem)
 })




