package br.com.masyaf.games.dto;
import br.com.masyaf.games.entity.Usuario;
public record UsuarioResponse(Long id,String nome,String email){ public static UsuarioResponse from(Usuario u){return new UsuarioResponse(u.getId(),u.getNome(),u.getEmail());} }
