package com.example.backend.dto.request;

import lombok.Data;

import javax.validation.constraints.NotEmpty;

@Data
public class RefreshTokenDto {
    @NotEmpty
    String refreshToken;
}