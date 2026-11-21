package br.com.masyaf.games.entity;
import jakarta.persistence.*; import java.time.LocalDateTime; import java.util.ArrayList; import java.util.List;
@Entity @Table(name="pedidos")
public class Pedido {
 @Id @GeneratedValue(strategy=GenerationType.IDENTITY) private Long id;
 @ManyToOne(optional=false) @JoinColumn(name="usuario_id") private Usuario usuario;
 @Column(nullable=false) private LocalDateTime data = LocalDateTime.now();
 @Column(nullable=false) private Double total;
 @OneToMany(mappedBy="pedido",cascade=CascadeType.ALL,orphanRemoval=true) private List<ItemPedido> itens=new ArrayList<>();
 public Long getId(){return id;} public Usuario getUsuario(){return usuario;} public void setUsuario(Usuario v){usuario=v;} public LocalDateTime getData(){return data;} public void setData(LocalDateTime v){data=v;} public Double getTotal(){return total;} public void setTotal(Double v){total=v;} public List<ItemPedido> getItens(){return itens;} public void setItens(List<ItemPedido> v){itens=v;}
}
