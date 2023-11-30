package com.example.backend.service;

import com.example.backend.dto.request.auth.PostBoardRequestDto;
import com.example.backend.dto.response.board.GetBoardResponseDto;
import com.example.backend.dto.response.board.PostBoardResponseDto;
import org.springframework.http.ResponseEntity;

public interface BoardService {
    ResponseEntity<? super GetBoardResponseDto> getBoard(Integer boardNumber);
    ResponseEntity<? super PostBoardResponseDto> postBoard(PostBoardRequestDto dto, String email);
}
