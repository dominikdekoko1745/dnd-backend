package com.kurbanov.dnd_backend;

import com.kurbanov.dnd_backend.model.Hero;
import com.kurbanov.dnd_backend.repository.HeroRepository;
import org.springframework.boot.CommandLineRunner;
import org.springframework.stereotype.Component;

@Component
public class TestDataLoader implements CommandLineRunner {

    // 1. Поле для репозитория, через который мы общаемся с БД
    private final HeroRepository heroRepository;

    // 2. Обычный Java-конструктор: Spring сам передаст сюда готовый репозиторий
    public TestDataLoader(HeroRepository heroRepository) {
        this.heroRepository = heroRepository;
    }

    // 3. Метод, который запустится сам ровно один раз при старте
    @Override
    public void run(String... args) throws Exception {
        System.out.println("Сервер запущен, начинаем запись данных...");

        // Простой цикл на чистой Java
        for (int i = 1; i <= 100; i++) {
            // Создаем обычный Java-объект через твой пустой конструктор
            Hero hero = new Hero();

            // Заполняем поля через твои сеттеры
            hero.setName("Воин #" + i);
            hero.setRace("Человек");
            hero.setHeroClass("Воин");
            hero.setLevel(1);
            hero.setMaxHitPoints(12);
            hero.setCurrentHitPoints(12);
            hero.setArmorClass(15);
            hero.setStrength(16);
            hero.setDexterity(12);
            hero.setConstitution(14);
            hero.setIntelligence(10);
            hero.setWisdom(10);
            hero.setCharisma(8);

            // Координаты на доске (каждый следующий стоит чуть правее)
            hero.setPosX(i);
            hero.setPosY(0);

            // Сохраняем один объект в базу данных
            heroRepository.save(hero);
        }

        System.out.println("Готово! Все 100 объектов записаны в MySQL.");
    }
}