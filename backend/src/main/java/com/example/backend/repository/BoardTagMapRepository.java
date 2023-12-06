package com.example.backend.repository;

import com.example.backend.entity.BoardTagMapEntity;
import org.springframework.data.jpa.repository.JpaRepository;

public interface BoardTagMapRepository extends JpaRepository<BoardTagMapEntity, Integer> {
}
