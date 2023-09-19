import {When, Then } from "@badeball/cypress-cucumber-preprocessor";

let usuarioValido = {
    email: "guilherme.lisboa+qa0223A-cypress@ultima.com",
    senha: "123456",
    message: "Logado com sucesso.",
}

// Given("Estou tentando realizar login no sistema", () => {

When("Quando passo um usuario valido", () => {
    cy.loginSignIN(usuarioValido.email, usuarioValido.senha)
})

Then("O sistema me autentica com sucesso", () => {
    cy.loginValidaMessagem(usuarioValido.message)

})

