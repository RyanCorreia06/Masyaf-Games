package br.com.masyaf.games.controller;
import br.com.masyaf.games.entity.Produto; import br.com.masyaf.games.repository.ProdutoRepository; import org.springframework.http.HttpStatus; import org.springframework.web.bind.annotation.*; import org.springframework.web.server.ResponseStatusException; import java.util.List;
@RestController @RequestMapping("/api/jogos") public class ProdutoController {
 private final ProdutoRepository repo; public ProdutoController(ProdutoRepository r){repo=r;}
 @GetMapping public List<Produto> listar(@RequestParam(required=false) String nome,@RequestParam(required=false) String plataforma){if(nome!=null&&!nome.isBlank())return repo.findByNomeContainingIgnoreCase(nome);if(plataforma!=null&&!plataforma.isBlank())return repo.findByPlataformaIgnoreCase(plataforma);return repo.findAll();}
 @GetMapping("/{id}") public Produto buscar(@PathVariable Long id){return repo.findById(id).orElseThrow(()->new ResponseStatusException(HttpStatus.NOT_FOUND,"Jogo não encontrado"));}
 @PostMapping @ResponseStatus(HttpStatus.CREATED) public Produto criar(@RequestBody Produto p){p.setId(null);return repo.save(p);}
 @PutMapping("/{id}") public Produto atualizar(@PathVariable Long id,@RequestBody Produto dados){Produto p=buscar(id);p.setNome(dados.getNome());p.setPreco(dados.getPreco());p.setImagem(dados.getImagem());p.setDescricao(dados.getDescricao());p.setPlataforma(dados.getPlataforma());return repo.save(p);}
 @DeleteMapping("/{id}") @ResponseStatus(HttpStatus.NO_CONTENT) public void excluir(@PathVariable Long id){repo.delete(buscar(id));}
}
