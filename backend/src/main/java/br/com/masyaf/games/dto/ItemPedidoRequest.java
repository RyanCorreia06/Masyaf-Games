package br.com.masyaf.games.dto;
import jakarta.validation.constraints.*;
public record ItemPedidoRequest(@NotNull Long jogoId,@Min(1) Integer quantidade){}
