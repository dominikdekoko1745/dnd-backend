package com.kurbanov.dnd_backend.service;

import com.kurbanov.dnd_backend.model.Hero;
import com.kurbanov.dnd_backend.repository.HeroRepository;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class HeroService {
    private final HeroRepository heroRepository;

    public HeroService(HeroRepository heroRepository) {
        this.heroRepository = heroRepository;
    }

    public Hero makeHero(Hero hero) {
        return heroRepository.save(hero);
    }

    public List<Hero> getListOfHeroes(){
        return heroRepository.findAll();
    }
}
