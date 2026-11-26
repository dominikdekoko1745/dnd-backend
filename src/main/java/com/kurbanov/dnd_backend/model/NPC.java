package com.kurbanov.dnd_backend.model;

import jakarta.persistence.*;

@Entity
@Table(name = "npcs")
public class NPC {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @ManyToOne
    @JoinColumn(name = "user_id")
    private User user;

    private int posX;
    private int posY;

    private String name;
    private int size;
    private String type;
    private int armorClass;
    private String challengeRating;
    private int proficiencyBonus;
    private int strength;
    private int dexterity;
    private int constitution;
    private int intelligence;
    private int charisma;
    private int wisdom;
    private int hitPoints;
    private String hitDice;
    private String skills;
    private String resistances;
    private String senses;
    private String languages;
    private String abilitiesActions;
    private String description;

    public NPC() {}

    public int getConstitution() {
        return constitution;
    }

    public void setConstitution(int constitution) {
        this.constitution = constitution;
    }

    public String getAbilitiesActions() {
        return abilitiesActions;
    }

    public void setAbilitiesActions(String abilitiesActions) {
        this.abilitiesActions = abilitiesActions;
    }

    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public User getUser() {
        return user;
    }

    public void setUser(User user) {
        this.user = user;
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

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public int getSize() {
        return size;
    }

    public void setSize(int size) {
        this.size = size;
    }

    public String getType() {
        return type;
    }

    public void setType(String type) {
        this.type = type;
    }

    public int getArmorClass() {
        return armorClass;
    }

    public void setArmorClass(int armorClass) {
        this.armorClass = armorClass;
    }

    public String getChallengeRating() {
        return challengeRating;
    }

    public void setChallengeRating(String challengeRating) {
        this.challengeRating = challengeRating;
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

    public int getWisdom() {
        return wisdom;
    }

    public void setWisdom(int wisdom) {
        this.wisdom = wisdom;
    }

    public int getHitPoints() {
        return hitPoints;
    }

    public void setHitPoints(int hitPoints) {
        this.hitPoints = hitPoints;
    }

    public String getHitDice() {
        return hitDice;
    }

    public void setHitDice(String hitDice) {
        this.hitDice = hitDice;
    }

    public String getSkills() {
        return skills;
    }

    public void setSkills(String skills) {
        this.skills = skills;
    }

    public String getResistances() {
        return resistances;
    }

    public void setResistances(String resistances) {
        this.resistances = resistances;
    }

    public String getSenses() {
        return senses;
    }

    public void setSenses(String senses) {
        this.senses = senses;
    }

    public String getLanguages() {
        return languages;
    }

    public void setLanguages(String languages) {
        this.languages = languages;
    }

    public String getDescription() {
        return description;
    }

    public void setDescription(String description) {
        this.description = description;
    }
}

