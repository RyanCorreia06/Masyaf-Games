package br.com.masyaf.games.repository;
import br.com.masyaf.games.entity.Pedido; import org.springframework.data.jpa.repository.JpaRepository; import java.util.List;
public interface PedidoRepository extends JpaRepository<Pedido,Long>{ List<Pedido> findByUsuarioIdOrderByDataDesc(Long usuarioId); }
