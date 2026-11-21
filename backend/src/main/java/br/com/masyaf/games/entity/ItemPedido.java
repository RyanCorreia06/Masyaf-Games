package br.com.masyaf.games.entity;
import jakarta.persistence.*; import com.fasterxml.jackson.annotation.JsonIgnore;
@Entity @Table(name="itens_pedido")
public class ItemPedido {
 @Id @GeneratedValue(strategy=GenerationType.IDENTITY) private Long id;
 @JsonIgnore @ManyToOne(optional=false) @JoinColumn(name="pedido_id") private Pedido pedido;
 @ManyToOne(optional=false) @JoinColumn(name="jogo_id") private Produto jogo;
 @Column(nullable=false) private Integer quantidade;
 @Column(nullable=false) private Double precoUnitario;
 public Long getId(){return id;} public Pedido getPedido(){return pedido;} public void setPedido(Pedido v){pedido=v;} public Produto getJogo(){return jogo;} public void setJogo(Produto v){jogo=v;} public Integer getQuantidade(){return quantidade;} public void setQuantidade(Integer v){quantidade=v;} public Double getPrecoUnitario(){return precoUnitario;} public void setPrecoUnitario(Double v){precoUnitario=v;}
}
