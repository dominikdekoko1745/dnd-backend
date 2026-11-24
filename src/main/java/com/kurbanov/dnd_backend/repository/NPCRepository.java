package com.kurbanov.dnd_backend.repository;

import com.kurbanov.dnd_backend.model.NPC;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface NPCRepository extends JpaRepository<NPC,Long> {
    List<NPC> findByUserId(Long userId);
}
