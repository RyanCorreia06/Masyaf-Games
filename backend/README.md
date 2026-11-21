# Masyaf Games API (Spring Boot + PostgreSQL)

## Requisitos
- Java 17 ou superior
- Maven 3.9+
- PostgreSQL 15+

## Banco
Crie o banco: `CREATE DATABASE masyaf_games;`

Configure usuário/senha no `src/main/resources/application.properties` ou nas variáveis `DB_URL`, `DB_USER`, `DB_PASSWORD`.

## Executar
Na pasta `backend`: `mvn spring-boot:run`
A API ficará em `http://localhost:8080`. Na primeira execução, Hibernate cria as tabelas e `data.sql` importa o catálogo atual da vitrine.

## Endpoints
- `GET /api/jogos`, `GET /api/jogos/{id}`
- `GET /api/jogos?nome=batman` ou `GET /api/jogos?plataforma=PS4`
- `POST /api/jogos`, `PUT /api/jogos/{id}`, `DELETE /api/jogos/{id}` (administração; proteger antes de publicar)
- `POST /api/usuarios/cadastro`, `POST /api/auth/login`, `GET /api/usuarios/{id}`
- `POST /api/pedidos`, `GET /api/pedidos/usuario/{usuarioId}`, `GET /api/pedidos/{id}`

## Observações importantes
Senhas são armazenadas com BCrypt. O login deste primeiro incremento retorna a identidade do usuário, mas ainda não emite token JWT nem protege endpoints por sessão; não publique em produção sem adicionar Spring Security/JWT, autorização administrativa e validações de negócio adicionais. A recuperação de senha atual do frontend é apenas uma tela demonstrativa e não envia e-mail.
