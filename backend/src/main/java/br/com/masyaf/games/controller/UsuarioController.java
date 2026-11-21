package br.com.masyaf.games.controller;
import br.com.masyaf.games.dto.*; import br.com.masyaf.games.repository.UsuarioRepository; import br.com.masyaf.games.service.UsuarioService; import org.springframework.http.HttpStatus; import org.springframework.web.bind.annotation.*; import org.springframework.web.server.ResponseStatusException;
@RestController @RequestMapping("/api") public class UsuarioController {
 private final UsuarioService service; private final UsuarioRepository repo; public UsuarioController(UsuarioService s,UsuarioRepository r){service=s;repo=r;}
 @PostMapping("/usuarios/cadastro") @ResponseStatus(HttpStatus.CREATED) public UsuarioResponse cadastrar(@RequestBody @jakarta.validation.Valid CadastroRequest d){return service.cadastrar(d);}
 @PostMapping("/auth/login") public UsuarioResponse login(@RequestBody @jakarta.validation.Valid LoginRequest d){return service.login(d);}
 @GetMapping("/usuarios/{id}") public UsuarioResponse buscar(@PathVariable Long id){return UsuarioResponse.from(repo.findById(id).orElseThrow(()->new ResponseStatusException(HttpStatus.NOT_FOUND,"Usuário não encontrado")));}
}
