note: 
Executa o serviço do Netuno:

`/services/_auth?jwt=true`

Enviando os dados de login utilizador e password:
```
{
    "username": "dev",
    "password": "dev"
}
```
Frontend Externo -> Netuno App: 

note: É retornado o _Token_ e o _Refresh Token_:
```
{
    "access_token": "eyJhbGciOiJIUzU...",
    "result": true,
    "refresh_token": "Tq2ZDI4ngQtZTJ...",
    "token_type": "Bearer",
    "expires_in": 3600000
}
```

Netuno App --> Frontend Externo: 

note:
Agora é possível executar qualquer serviço desenvolvido à medida, como por exemplo:

`/services/meu-servico-programado-a-medida`

Passando o _Access Token_ no Header do HTTP da seguinte forma:

```
Authorization: Bearer eyJhbGciOiJIUzU...
```
Frontend Externo -> Netuno App: 

note: Para o teu serviço desenvolvido à medida se o Token for válido será executado como se o utilizador estivesse autenticado e será retornado o output que foi programado.

Netuno App --> Frontend Externo:
