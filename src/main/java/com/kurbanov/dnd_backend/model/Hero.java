package com.kurbanov.dnd_backend.model;

import jakarta.persistence.*;

/*
Напоминание себе:
Этот класс нужен для Персонажей игроков
*/
@Entity
@Table(name = "heroes")
public class Hero {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    private int posX;
    private int posY;

    private String name;
    private String race;
    private String gender;
    private String heroClass;
    private String subclass;
    private int level;
    private int experiencePoints;
    private int proficiencyBonus;
    private int strength;
    private int dexterity;
    private int constitution;
    private int wisdom;
    private int intelligence;
    private int charisma;
    private int armorClass;
    private int savingThrow;
    private int maxHitPoints;
    private int tempHitPoints;
    private int currentHitPoints;
    private int initiative;
    private String notes;

    public Hero(){
    }

    public String getName() {
        return name;
    }
    public void setName(String name) {
        this.name = name;
    }

    public String getRace() {
        return race;
    }
    public void setRace(String race) {
        this.race = race;
    }

    public String getSubclass() {
        return subclass;
    }
    public void setSubclass(String subclass) {
        this.subclass = subclass;
    }

    public int getLevel() {
        return level;
    }
    public void setLevel(int level) {
        this.level = level;
    }

    public int getExperiencePoints() {
        return experiencePoints;
    }
    public void setExperiencePoints(int experiencePoints) {
        this.experiencePoints = experiencePoints;
    }

    public int getProficiencyBonus() {
        return proficiencyBonus;
    }
    public void setProficiencyBonus(int proficiencyBonus) {
        this.proficiencyBonus = proficiencyBonus;
    }

    public int getStrength() {
        return strength;
    }
    public void setStrength(int strength) {
        this.strength = strength;
    }

    public int getDexterity() {
        return dexterity;
    }
    public void setDexterity(int dexterity) {
        this.dexterity = dexterity;
    }

    public int getConstitution() {
        return constitution;
    }
    public void setConstitution(int constitution) {
        this.constitution = constitution;
    }

    public int getWisdom() {
        return wisdom;
    }
    public void setWisdom(int wisdom) {
        this.wisdom = wisdom;
    }

    public int getIntelligence() {
        return intelligence;
    }
    public void setIntelligence(int intelligence) {
        this.intelligence = intelligence;
    }

    public int getCharisma() {
        return charisma;
    }
    public void setCharisma(int charisma) {
        this.charisma = charisma;
    }

    public int getArmorClass() {
        return armorClass;
    }
    public void setArmorClass(int armorClass) {
        this.armorClass = armorClass;
    }

    public int getSavingThrow() {
        return savingThrow;
    }
    public void setSavingThrow(int savingThrow) {
        this.savingThrow = savingThrow;
    }

    public int getMaxHitPoints() {
        return maxHitPoints;
    }
    public void setMaxHitPoints(int maxHitPoints) {
        this.maxHitPoints = maxHitPoints;
    }

    public int getTempHitPoints() {
        return tempHitPoints;
    }
    public void setTempHitPoints(int tempHitPoints) {
        this.tempHitPoints = tempHitPoints;
    }

    public int getCurrentHitPoints() {
        return currentHitPoints;
    }
    public void setCurrentHitPoints(int currentHitPoints) {
        this.currentHitPoints = currentHitPoints;
    }

    public int getInitiative() {
        return initiative;
    }
    public void setInitiative(int initiative) {
        this.initiative = initiative;
    }

    public String getNotes() {
        return notes;
    }
    public void setNotes(String notes) {
        this.notes = notes;
    }

    public String getHeroClass() {
        return heroClass;
    }
    public void setHeroClass(String heroClass) {
        this.heroClass = heroClass;
    }

    public int getPosX() {
        return posX;
    }
    public void setPosX(int posX) {
        this.posX = posX;
    }

    public int getPosY() {
        return posY;
    }
    public void setPosY(int posY) {
        this.posY = posY;
    }

}

