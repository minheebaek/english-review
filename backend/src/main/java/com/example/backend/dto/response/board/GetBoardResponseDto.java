package com.example.backend.dto.response.board;

import com.example.backend.common.ResponseCode;
import com.example.backend.common.ResponseMessage;
import com.example.backend.dto.response.ResponseDto;
import com.example.backend.entity.BoardEntity;
import lombok.Getter;
import org.apache.catalina.connector.Response;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;

@Getter
public class GetBoardResponseDto extends ResponseDto {
    private int boardNumber;
    private String title;
    private String content;
    private String writeDatetime;
    private String writeremail;
    private boolean aram;

    private GetBoardResponseDto(BoardEntity boardEntity){
        super(ResponseCode.SUCCESS, ResponseMessage.SUCCESS);
        this.boardNumber = boardEntity.getBoardNumber();
        this.title = boardEntity.getTitle();
        this.content = boardEntity.getContent();
        this.writeDatetime = boardEntity.getWriteDatetime();
        this.writeremail = boardEntity.getWriterEmail();
        this.aram = boardEntity.isAram();
    }

    public static ResponseEntity<GetBoardResponseDto> success(BoardEntity boardEntity){
        GetBoardResponseDto result = new GetBoardResponseDto(boardEntity);
        return ResponseEntity.status(HttpStatus.OK).body(result);
    }
    public static ResponseEntity<ResponseDto> notExistUser(){
        ResponseDto result = new ResponseDto(ResponseCode.NOT_EXISTED_USER, ResponseMessage.NOT_EXISTED_USER);
        return ResponseEntity.status(HttpStatus.UNAUTHORIZED).body(result);
    }
    public static ResponseEntity<ResponseDto> notExistBoard(){
        ResponseDto result = new ResponseDto(ResponseCode.NOT_EXISTED_BOARD, ResponseMessage.NOT_EXISTED_BOARD);
        return ResponseEntity.status(HttpStatus.BAD_REQUEST).body(result);
    }

    public static ResponseEntity<ResponseDto> notPermission(){
        ResponseDto result = new ResponseDto(ResponseCode.NO_PERMISSION, ResponseMessage.NO_PERMISSION);
        return ResponseEntity.status(HttpStatus.FORBIDDEN).body(result);
    }
}
