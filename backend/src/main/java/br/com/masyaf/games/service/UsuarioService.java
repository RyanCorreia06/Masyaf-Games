package br.com.masyaf.games.service;
import br.com.masyaf.games.dto.*; import br.com.masyaf.games.entity.Usuario; import br.com.masyaf.games.repository.UsuarioRepository; import org.springframework.http.HttpStatus; import org.springframework.security.crypto.password.PasswordEncoder; import org.springframework.stereotype.Service; import org.springframework.web.server.ResponseStatusException;
@Service public class UsuarioService {
 private final UsuarioRepository repo; private final PasswordEncoder encoder;
 public UsuarioService(UsuarioRepository r,PasswordEncoder e){repo=r;encoder=e;}
 public UsuarioResponse cadastrar(CadastroRequest d){if(repo.existsByEmailIgnoreCase(d.email())) throw new ResponseStatusException(HttpStatus.CONFLICT,"E-mail já cadastrado"); String cpf=d.cpf().replaceAll("\\D",""); if(repo.existsByCpf(cpf)) throw new ResponseStatusException(HttpStatus.CONFLICT,"CPF já cadastrado"); Usuario u=new Usuario();u.setNome(d.nome());u.setEmail(d.email().toLowerCase());u.setSenha(encoder.encode(d.senha()));u.setCpf(cpf);u.setTelefone(d.telefone());u.setCep(d.cep());u.setRua(d.rua());u.setNumero(d.numero());u.setBairro(d.bairro());u.setCidade(d.cidade());u.setEstado(d.estado());return UsuarioResponse.from(repo.save(u));}
 public UsuarioResponse login(LoginRequest d){Usuario u=repo.findByEmailIgnoreCase(d.email()).orElseThrow(()->new ResponseStatusException(HttpStatus.UNAUTHORIZED,"Credenciais inválidas"));if(!encoder.matches(d.senha(),u.getSenha()))throw new ResponseStatusException(HttpStatus.UNAUTHORIZED,"Credenciais inválidas");return UsuarioResponse.from(u);}
}
