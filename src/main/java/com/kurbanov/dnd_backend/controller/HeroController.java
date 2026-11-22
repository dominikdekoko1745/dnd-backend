package com.kurbanov.dnd_backend.controller;

import com.kurbanov.dnd_backend.model.Hero;
import com.kurbanov.dnd_backend.service.HeroService;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api/heroes")
@CrossOrigin

public class HeroController {
    private final HeroService heroService;
    public HeroController(HeroService heroService) {
        this.heroService = heroService;
    }
    @GetMapping("/user/{userId}")
    public List<Hero> getAllHeroes(@PathVariable Long userId) {
        return heroService.getHeroesByUserId(userId);
    }
    @PostMapping
    public Hero createHero(@RequestBody Hero hero) {
        return heroService.makeHero(hero);
    }
}
