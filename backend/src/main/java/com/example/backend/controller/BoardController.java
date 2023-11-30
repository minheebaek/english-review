package com.example.backend.controller;

import com.example.backend.dto.request.auth.PostBoardRequestDto;
import com.example.backend.dto.response.board.GetBoardResponseDto;
import com.example.backend.dto.response.board.PostBoardResponseDto;
import com.example.backend.service.BoardService;
import lombok.RequiredArgsConstructor;
import org.springframework.http.ResponseEntity;
import org.springframework.security.core.annotation.AuthenticationPrincipal;
import org.springframework.web.bind.annotation.*;

import javax.validation.Valid;

@RestController
@RequestMapping("/mystudy")
@RequiredArgsConstructor
public class BoardController {
    private final BoardService boardService;

    /**
     * 게시글 상세보기
     * localhost:8080/mystudy/{boardNumber}
     *
     * @parm boardNumber
     * @return response
     */
    @GetMapping("/{boardNumber}")
    public ResponseEntity<? super GetBoardResponseDto> getBoard(
            @PathVariable("boardNumber") Integer boardNumber
    ){
        ResponseEntity<? super GetBoardResponseDto> response = boardService.getBoard(boardNumber);
        return response;
    }

    /**
     * 게시글 작성
     * localhost:8080/mystudy/create
     *
     * @parm requestBody, email
     * @return response
     */
    @PostMapping("/create")
    public ResponseEntity<? super PostBoardResponseDto> postBoard(
            @RequestBody @Valid PostBoardRequestDto requestBody,
            @AuthenticationPrincipal String email
            ){
        ResponseEntity<? super PostBoardResponseDto> response = boardService.postBoard(requestBody, email);
        return response;
    }
}
