package com.example.backend.controller;

import com.example.backend.dto.RefreshTokenDto;
import com.example.backend.dto.request.auth.SignInRequestDto;
import com.example.backend.dto.request.auth.SignUpRequestDto;
import com.example.backend.dto.response.auth.SignInResponseDto;
import com.example.backend.dto.response.auth.SignUpResponseDto;
import com.example.backend.entity.RefreshToken;
import com.example.backend.entity.UserEntity;
import com.example.backend.service.AuthService;
import com.example.backend.service.MemberService;
import com.example.backend.service.RefreshTokenService;
import com.example.backend.util.JwtTokenizer;
import io.jsonwebtoken.Claims;
import lombok.RequiredArgsConstructor;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.web.bind.annotation.*;

import javax.validation.Valid;

@RestController
@RequestMapping("/auth")
@RequiredArgsConstructor
public class AuthController {
    private final AuthService authService;
    private final JwtTokenizer jwtTokenizer;
    private final MemberService memberService;
    private final RefreshTokenService refreshTokenService;
    private final PasswordEncoder passwordEncoder;

    /**
     * 회원가입
     * localhost:8080/signup
     *
     * @return response
     * @parm requestBody
     */
    @PostMapping("/signup")
    public ResponseEntity<? super SignUpResponseDto> signUp(
            @RequestBody @Valid SignUpRequestDto requestBody
    ) {
        ResponseEntity<? super SignUpResponseDto> response = authService.signUp(requestBody);
        return response;
    }

    /**
     * 로그인
     * localhost:8080/signin
     *
     * @return response
     * @parm requestBody
     */
    @PostMapping("/signin")
    public ResponseEntity login(@RequestBody @Valid SignInRequestDto signInRequestDto) {

        // email이 없을 경우 Exception이 발생한다. Global Exception에 대한 처리가 필요하다.
        UserEntity userEntity = memberService.findByEmail(signInRequestDto.getEmail());
        if (!passwordEncoder.matches(signInRequestDto.getPassword(), userEntity.getPassword())) {
            return new ResponseEntity(HttpStatus.UNAUTHORIZED);
        }

        // JWT토큰을 생성하였다. jwt라이브러리를 이용하여 생성.
        String accessToken = jwtTokenizer.createAccessToken(userEntity.getUserId(), userEntity.getEmail(), userEntity.getNickname());
        String refreshToken = jwtTokenizer.createRefreshToken(userEntity.getUserId(), userEntity.getEmail(), userEntity.getNickname());

        RefreshToken refreshTokenEntity = new RefreshToken();
        refreshTokenEntity.setValue(refreshToken);
        refreshTokenEntity.setUserId(userEntity.getUserId());
        refreshTokenService.addRefreshToken(refreshTokenEntity);

        SignInResponseDto signInResponseDto = SignInResponseDto.builder()
                .accessToken(accessToken)
                .refreshToken(refreshToken)
                .userId(userEntity.getUserId())
                .nickname(userEntity.getNickname())
                .build();
        return new ResponseEntity(signInResponseDto, HttpStatus.OK);
    }

    @DeleteMapping("/logout")
    public ResponseEntity logout(@RequestBody RefreshTokenDto refreshTokenDto) {
        refreshTokenService.deleteRefreshToken(refreshTokenDto.getRefreshToken());
        return new ResponseEntity(HttpStatus.OK);
    }


    /*1. 전달받은 유저의 아이디로 유저가 존재하는지 확인한다.
    2. RefreshToken이 유효한지 체크한다.
    3. AccessToken을 발급하여 기존 RefreshToken과 함께 응답한다.*/

    @PostMapping("/refreshToken")
    public ResponseEntity requestRefresh(@RequestBody RefreshTokenDto refreshTokenDto) {
        RefreshToken refreshToken = refreshTokenService.findRefreshToken(refreshTokenDto.getRefreshToken()).orElseThrow(() -> new IllegalArgumentException("Refresh token not found"));
        Claims claims = jwtTokenizer.parseRefreshToken(refreshToken.getValue());

        Long userId = Long.valueOf((Integer)claims.get("userId"));

        UserEntity userEntity = memberService.getMember(userId).orElseThrow(() -> new IllegalArgumentException("Member not found"));


        String email = claims.getSubject();

        String accessToken = jwtTokenizer.createAccessToken(userId, email, userEntity.getNickname());

        SignInResponseDto signInResponseDto = SignInResponseDto.builder()
                .accessToken(accessToken)
                .refreshToken(refreshTokenDto.getRefreshToken())
                .userId(userEntity.getUserId())
                .nickname(userEntity.getNickname())
                .build();
        return new ResponseEntity(signInResponseDto, HttpStatus.OK);

    }

}