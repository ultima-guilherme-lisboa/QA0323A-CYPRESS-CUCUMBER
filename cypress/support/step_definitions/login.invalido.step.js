import { When, Then } from "@badeball/cypress-cucumber-preprocessor";

// Given("Estou tentando realizar login no sistema", () => {

When("Quando passo um usuario e senha invalido", () => {
    cy.loginSignIN("guilherme.naoexiste@ultima.com", 12345678)
})

Then("O sistema me notifca que as credencias nao sao validas", () => {
    cy.loginValidaMessagem("Email ou senha inválidos.")

})

