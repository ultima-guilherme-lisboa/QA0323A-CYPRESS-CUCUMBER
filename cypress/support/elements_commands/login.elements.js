Cypress.Commands.add('loginGetInputEmail', () => {
    cy.get('#user_email')
      .should("be.visible")
})

Cypress.Commands.add('loginGetInputSenha', () => {
    cy.get('#user_password')
      .should("be.visible")
})

Cypress.Commands.add('loginGetBtnEntrar', () => {
    cy.get('input[type="submit"][value="Entrar"]')
      .should("be.visible")
})

Cypress.Commands.add("loginTostMessage", () => {
    cy.get("#toast-container .toast .toast-message ")
      .should("be.visible")
})
