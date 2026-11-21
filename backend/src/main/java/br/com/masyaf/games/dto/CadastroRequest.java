package br.com.masyaf.games.dto;
import jakarta.validation.constraints.*;
public record CadastroRequest(@NotBlank String nome,@Email @NotBlank String email,@Size(min=6) String senha,@NotBlank String cpf,String telefone,String cep,String rua,String numero,String bairro,String cidade,String estado){}
