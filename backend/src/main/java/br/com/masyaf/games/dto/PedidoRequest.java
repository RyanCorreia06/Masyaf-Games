package br.com.masyaf.games.dto;
import jakarta.validation.Valid; import jakarta.validation.constraints.*; import java.util.List;
public record PedidoRequest(@NotNull Long usuarioId,@NotEmpty List<@Valid ItemPedidoRequest> itens){}
