package com.example.backend.entity;



import lombok.Getter;
import lombok.NoArgsConstructor;

import javax.persistence.*;

@Getter
@NoArgsConstructor
@Entity(name="tag")
@Table(name="tag")
public class TagEntity {

    @Id @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name="tag_number")
    private int  tagNumber;
    private int boardNumber;
    @Column(name="tag_content")
    private String tag;


    public TagEntity(int boardNumber, String tag){
        this.boardNumber = boardNumber;
        this.tag = tag;
    }
}
