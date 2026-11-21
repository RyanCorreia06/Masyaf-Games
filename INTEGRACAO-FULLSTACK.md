# Masyaf Games — integração Full Stack

O frontend Angular original foi preservado visualmente. Agora a vitrine, detalhes, pesquisa e categorias consultam a API; cadastro e login consultam o backend; a finalização grava o pedido no PostgreSQL. A cesta continua no navegador (localStorage) até o envio do pedido.

## Ordem de inicialização
1. Instale Java 17+, Maven e PostgreSQL 15+.
2. No PostgreSQL, crie `CREATE DATABASE masyaf_games;`.
3. Ajuste `backend/src/main/resources/application.properties` para usuário e senha do seu PostgreSQL.
4. Terminal 1: `cd backend` e `mvn spring-boot:run`. Aguarde a mensagem de inicialização concluída. Na primeira execução o catálogo original é inserido em `jogos`.
5. Terminal 2, na raiz do Angular: `npm install` e `npm start`.
6. Abra `http://localhost:4200`.

## Como os dados percorrem a aplicação
- Componentes Angular chamam `ApiService` (`src/app/core/api.ts`).
- `HttpClient` envia HTTP/JSON para `http://localhost:8080/api`.
- Controllers recebem as requisições e delegam a persistência ao Spring Data JPA.
- Repositories acessam PostgreSQL; entidades representam as tabelas.
- Pedido: Angular envia apenas IDs e quantidades; o backend recupera os preços atuais no banco e calcula o total no servidor (não confia no preço enviado pelo navegador).

## Funcionalidades e rotas
- Catálogo: `GET /api/jogos`; detalhe `GET /api/jogos/{id}`; busca `GET /api/jogos?nome=...`; plataforma `GET /api/jogos?plataforma=...`.
- Cadastro `POST /api/usuarios/cadastro`; login `POST /api/auth/login`.
- Pedido `POST /api/pedidos`; histórico `GET /api/pedidos/usuario/{usuarioId}`.
- Administração de jogos: POST/PUT/DELETE `/api/jogos`.

## Limitações de segurança desta entrega
Este é um ambiente didático/local. Senhas usam BCrypt, mas login ainda não emite JWT e endpoints de administração/pedidos ainda não possuem autorização por usuário. A cesta persiste no localStorage, não em tabela. Antes de publicar na internet, adicionar Spring Security + JWT, autorização por proprietário/admin, validação robusta de CPF e rate limiting. Recuperação de senha não está ligada a serviço de e-mail.
