package com.example.backend.service;

import com.example.backend.dto.request.auth.PostBoardRequestDto;
import com.example.backend.dto.response.board.PostBoardResponseDto;
import org.springframework.http.ResponseEntity;

public interface BoardService {
    ResponseEntity<? super PostBoardResponseDto> postBoard(PostBoardRequestDto dto, String email);
}
