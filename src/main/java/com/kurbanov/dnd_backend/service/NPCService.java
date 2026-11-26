package com.kurbanov.dnd_backend.service;

import com.kurbanov.dnd_backend.model.NPC;
import com.kurbanov.dnd_backend.repository.NPCRepository;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class NPCService {
    private final NPCRepository npcRepository;

    public NPCService(NPCRepository npcRepository) { this.npcRepository = npcRepository;}

    public NPC makeNPC(NPC npc) { return npcRepository.save(npc);}

    public List<NPC> getNPCsByUserId(Long id) { return npcRepository.findByUserId(id);}

    public void delete(Long id) {
        npcRepository.deleteById(id);
    }
}
