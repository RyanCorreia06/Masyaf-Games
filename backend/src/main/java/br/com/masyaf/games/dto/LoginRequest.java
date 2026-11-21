package br.com.masyaf.games.dto;
import jakarta.validation.constraints.*;
public record LoginRequest(@Email @NotBlank String email,@NotBlank String senha){}
