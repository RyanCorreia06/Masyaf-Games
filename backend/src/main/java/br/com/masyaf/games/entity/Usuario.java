package br.com.masyaf.games.entity;
import jakarta.persistence.*; import com.fasterxml.jackson.annotation.JsonIgnore;
@Entity @Table(name="usuarios", uniqueConstraints={@UniqueConstraint(columnNames="email"),@UniqueConstraint(columnNames="cpf")})
public class Usuario {
 @Id @GeneratedValue(strategy=GenerationType.IDENTITY) private Long id;
 @Column(nullable=false,length=120) private String nome;
 @Column(nullable=false,length=160) private String email;
 @JsonIgnore @Column(nullable=false) private String senha;
 @Column(nullable=false,length=14) private String cpf;
 private String telefone; private String cep; private String rua; private String numero; private String bairro; private String cidade; private String estado;
 public Long getId(){return id;} public void setId(Long v){id=v;} public String getNome(){return nome;} public void setNome(String v){nome=v;} public String getEmail(){return email;} public void setEmail(String v){email=v;} public String getSenha(){return senha;} public void setSenha(String v){senha=v;} public String getCpf(){return cpf;} public void setCpf(String v){cpf=v;} public String getTelefone(){return telefone;} public void setTelefone(String v){telefone=v;} public String getCep(){return cep;} public void setCep(String v){cep=v;} public String getRua(){return rua;} public void setRua(String v){rua=v;} public String getNumero(){return numero;} public void setNumero(String v){numero=v;} public String getBairro(){return bairro;} public void setBairro(String v){bairro=v;} public String getCidade(){return cidade;} public void setCidade(String v){cidade=v;} public String getEstado(){return estado;} public void setEstado(String v){estado=v;}
}
