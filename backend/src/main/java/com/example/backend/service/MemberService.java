package com.example.backend.service;


import com.example.backend.entity.UserEntity;
import com.example.backend.repository.UserRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.util.Optional;

@Service
@RequiredArgsConstructor
public class MemberService {
    private final UserRepository userRepository;

    @Transactional(readOnly = true)
    public UserEntity findByEmail(String email){
        return userRepository.findByEmail(email); //orElse 대신에 추가하기
    }


    @Transactional(readOnly = true)
    public Optional<UserEntity> getMember(Long userId){
        return userRepository.findById(userId);
    }
}
