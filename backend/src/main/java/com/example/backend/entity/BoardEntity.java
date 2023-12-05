package com.example.backend.entity;

import com.example.backend.dto.request.board.PatchBoardRequestDto;
import com.example.backend.dto.request.board.PostBoardRequestDto;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;

import javax.persistence.*;
import java.text.SimpleDateFormat;
import java.time.Instant;
import java.util.Date;

@Getter
@NoArgsConstructor
@AllArgsConstructor
@Entity(name = "board")
@Table(name = "board")
public class BoardEntity {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private int boardNumber;
    private String title;
    private String content;
    private String writeDatetime;
    private String writerEmail;
    private boolean alarm;

    public BoardEntity(PostBoardRequestDto dto, String email){

        Date now = Date.from(Instant.now());
        SimpleDateFormat simpleDateFormat = new SimpleDateFormat("yyyy-MM-dd HH:mm:ss");
        String writeDatetime = simpleDateFormat.format(now);

        this.title = dto.getTitle();
        this.content = dto.getContent();
        this.writeDatetime = writeDatetime;
        this.writerEmail = email;
        this.alarm = dto.isAlarm();
    }

    public void updateBoard(PatchBoardRequestDto dto){
        this.title = dto.getTitle();
        this.content = dto.getContent();
        this.alarm=dto.isAlarm();
    }
}
