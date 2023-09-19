Feature: Login

Scenario: Login com usuario invalido
  Given Estou tentando realizar login no sistema
   When Quando passo um usuario e senha invalido
   Then O sistema me notifca que as credencias nao sao validas

Scenario: Login com usuario valido
  Given Estou tentando realizar login no sistema
   When Quando passo um usuario valido
   Then O sistema me autentica com sucesso