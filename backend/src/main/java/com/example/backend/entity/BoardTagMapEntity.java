package com.example.backend.entity;

import lombok.Getter;
import lombok.NoArgsConstructor;

import javax.persistence.*;

@Getter
@NoArgsConstructor
@Entity(name="boardtagmap")
@Table(name="boardtagmap")
public class BoardTagMapEntity {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "board_tag_number")
    private Long id;

    @ManyToOne(optional = false, fetch = FetchType.LAZY)
    @JoinColumn(name="board_number")
    private BoardEntity boardEntity;

    @ManyToOne(optional = false, fetch = FetchType.LAZY)
    @JoinColumn(name="tag_number")
    private TagEntity tagEntity;


}
