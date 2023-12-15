package com.example.backend.util;

import com.example.backend.dto.LoginInfoDto;
import com.example.backend.dto.request.auth.LoginUserDto;
import com.example.backend.token.JwtAuthenticationToken;
import org.springframework.core.MethodParameter;
import org.springframework.security.core.Authentication;
import org.springframework.security.core.GrantedAuthority;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.web.bind.support.WebDataBinderFactory;
import org.springframework.web.context.request.NativeWebRequest;
import org.springframework.web.method.support.HandlerMethodArgumentResolver;
import org.springframework.web.method.support.ModelAndViewContainer;

import java.util.Collection;
import java.util.Iterator;


public class IfLoginArgumentResolver implements HandlerMethodArgumentResolver {
    @Override
    public boolean supportsParameter(MethodParameter parameter) {
        return parameter.getParameterAnnotation(IfLogin.class) != null
                && parameter.getParameterType() == LoginUserDto.class;
    }

    @Override
    public Object resolveArgument(MethodParameter parameter, ModelAndViewContainer mavContainer, NativeWebRequest webRequest, WebDataBinderFactory binderFactory) throws Exception {
        Authentication authentication = null;
        try{
            authentication = SecurityContextHolder.getContext().getAuthentication();

        }catch (Exception ex){
            return null;
        }
        if(authentication == null){
            return null;
        }
        JwtAuthenticationToken jwtAuthenticationToken = (JwtAuthenticationToken)authentication;
        LoginUserDto loginUserDto = new LoginUserDto();
        Object principal = jwtAuthenticationToken.getPrincipal(); //email
        System.out.println("principal 출력"+principal);
        if(principal == null)
            return null;

        LoginInfoDto loginInfoDto = new LoginInfoDto();
        loginUserDto.setEmail(loginInfoDto.getEmail());
        loginUserDto.setMemberId(loginInfoDto.getMemberId());
        loginUserDto.setNickname(loginInfoDto.getNickname());

        System.out.println(loginInfoDto.getEmail());
        System.out.println(loginUserDto.getEmail());


        return loginUserDto;

    }
}
