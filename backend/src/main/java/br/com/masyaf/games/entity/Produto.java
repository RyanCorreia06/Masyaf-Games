package br.com.masyaf.games.entity;
import jakarta.persistence.*;
@Entity @Table(name="jogos")
public class Produto {
 @Id private Long id;
 @Column(nullable=false,length=180) private String nome;
 @Column(nullable=false) private Double preco;
 @Column(nullable=false,length=500) private String imagem;
 @Column(columnDefinition="text") private String descricao;
 @Column(nullable=false,length=40) private String plataforma;
 public Produto(){}
 public Produto(Long id,String nome,Double preco,String imagem,String descricao,String plataforma){this.id=id;this.nome=nome;this.preco=preco;this.imagem=imagem;this.descricao=descricao;this.plataforma=plataforma;}
 public Long getId(){return id;} public void setId(Long v){id=v;} public String getNome(){return nome;} public void setNome(String v){nome=v;} public Double getPreco(){return preco;} public void setPreco(Double v){preco=v;} public String getImagem(){return imagem;} public void setImagem(String v){imagem=v;} public String getDescricao(){return descricao;} public void setDescricao(String v){descricao=v;} public String getPlataforma(){return plataforma;} public void setPlataforma(String v){plataforma=v;}
}
