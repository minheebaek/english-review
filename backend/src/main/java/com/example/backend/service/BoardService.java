package com.example.backend.service;

import com.example.backend.dto.request.board.PatchBoardRequestDto;
import com.example.backend.dto.request.board.PostBoardRequestDto;
import com.example.backend.dto.response.board.GetBoardResponseDto;
import com.example.backend.dto.response.board.PatchBoardResponseDto;
import com.example.backend.dto.response.board.PostBoardResponseDto;
import org.springframework.http.ResponseEntity;

public interface BoardService {
    ResponseEntity<? super PatchBoardResponseDto> patchBoard(PatchBoardRequestDto dto, Integer boardNumber, String email);
    ResponseEntity<? super GetBoardResponseDto> getBoard(Integer boardNumber);
    ResponseEntity<? super PostBoardResponseDto> postBoard(PostBoardRequestDto dto, String email);
}
