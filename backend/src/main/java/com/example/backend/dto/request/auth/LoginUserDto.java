package com.example.backend.dto.request.auth;

import lombok.Data;

@Data
public class LoginUserDto {
    private String email;
    private String nickname;
    private Long memberId;
}
