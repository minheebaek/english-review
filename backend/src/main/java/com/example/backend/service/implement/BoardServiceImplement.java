package com.example.backend.service.implement;

import com.example.backend.common.ResponseCode;
import com.example.backend.common.ResponseMessage;
import com.example.backend.dto.request.board.PatchBoardRequestDto;
import com.example.backend.dto.request.board.PostBoardRequestDto;
import com.example.backend.dto.response.ResponseDto;
import com.example.backend.dto.response.board.GetBoardResponseDto;
import com.example.backend.dto.response.board.PatchBoardResponseDto;
import com.example.backend.dto.response.board.PostBoardResponseDto;
import com.example.backend.entity.BoardEntity;
import com.example.backend.entity.UserEntity;
import com.example.backend.repository.BoardRepository;
import com.example.backend.repository.UserRepository;
import com.example.backend.service.BoardService;
import lombok.RequiredArgsConstructor;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Service;

@Service
@RequiredArgsConstructor
public class BoardServiceImplement implements BoardService {
    private final BoardRepository boardRepository;
    private final UserRepository userRepository;

    @Override
    public ResponseEntity<? > deleteBoard(Integer boardNumber, String email) {
        BoardEntity boardEntity = null;
        try {
            boolean existedEmail = userRepository.existsByEmail(email);
            if (!existedEmail){
                ResponseDto result = new ResponseDto(ResponseCode.NOT_EXISTED_USER, ResponseMessage.NOT_EXISTED_USER);
                return ResponseEntity.status(HttpStatus.UNAUTHORIZED).body(result);
            }

            boardEntity = boardRepository.findByBoardNumber(boardNumber);
            if (boardEntity == null) {
                ResponseDto result = new ResponseDto(ResponseCode.NOT_EXISTED_BOARD, ResponseMessage.NOT_EXISTED_BOARD);
                return ResponseEntity.status(HttpStatus.BAD_REQUEST).body(result);
            }

            if(!boardEntity.getWriterEmail().equals(email)) {
                ResponseDto result = new ResponseDto(ResponseCode.NO_PERMISSION, ResponseMessage.NO_PERMISSION);
                return ResponseEntity.status(HttpStatus.FORBIDDEN).body(result);
            }

            boardRepository.delete(boardEntity);
        } catch (Exception exception) {
            exception.printStackTrace();
            return ResponseDto.databaseError();
        }
        ResponseDto result = new ResponseDto(ResponseCode.SUCCESS, ResponseMessage.SUCCESS);
        return ResponseEntity.status(HttpStatus.OK).body(result);
    }

    @Override
    public ResponseEntity<? super PatchBoardResponseDto> patchBoard(PatchBoardRequestDto dto, Integer boardNumber, String email) {
        BoardEntity boardEntity = null;
        try {
            boolean existedEmail = userRepository.existsByEmail(email);
            if (!existedEmail) return PatchBoardResponseDto.notExistUser();

            boardEntity = boardRepository.findByBoardNumber(boardNumber);
            if (boardEntity == null) return PatchBoardResponseDto.notExistBoard();

            if(!boardEntity.getWriterEmail().equals(email)) return PatchBoardResponseDto.notpermission();

            boardEntity.updateBoard(dto);
            boardRepository.save(boardEntity);

        } catch (Exception exception) {
            exception.printStackTrace();
            return ResponseDto.databaseError();
        }
        return PatchBoardResponseDto.success();
    }

    @Override
    public ResponseEntity<? super GetBoardResponseDto> getBoard(Integer boardNumber) {
        BoardEntity boardEntity = null;
        try {
            boardEntity = boardRepository.findByBoardNumber(boardNumber);
            if (boardEntity == null) return GetBoardResponseDto.notExistBoard();

        } catch (Exception exception) {
            exception.printStackTrace();
            return ResponseDto.databaseError();
        }
        return GetBoardResponseDto.success(boardEntity);
    }

    @Override
    public ResponseEntity<? super PostBoardResponseDto> postBoard(PostBoardRequestDto dto, String email) {
        try {
            boolean existedEmail = userRepository.existsByEmail(email);
            if (!existedEmail) return PostBoardResponseDto.notExistUser();

            BoardEntity boardEntity = new BoardEntity(dto, email);
            boardRepository.save(boardEntity);

            int boardNumber = boardEntity.getBoardNumber();

        } catch (Exception exception) {
            exception.printStackTrace();
            return ResponseDto.databaseError();
        }
        return PostBoardResponseDto.success();
    }
}
