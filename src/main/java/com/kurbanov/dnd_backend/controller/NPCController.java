package com.kurbanov.dnd_backend.controller;

import com.kurbanov.dnd_backend.model.NPC;
import com.kurbanov.dnd_backend.service.NPCService;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api/npcs")
@CrossOrigin
public class NPCController {
    private final NPCService npcService;

    public NPCController(NPCService npcService) {this.npcService = npcService;}

    @GetMapping("users/{id}")
    public List<NPC> getAllNPCs(@PathVariable Long id) {
        return npcService.getNPCsByUserId(id);
    }

    @PostMapping
    public NPC createNPC(@RequestBody NPC npc) {
        return npcService.makeNPC(npc);
    }

    @DeleteMapping("/{id}")
    public void deleteNPC(@PathVariable Long id) {
        npcService.delete(id);
    }
}
