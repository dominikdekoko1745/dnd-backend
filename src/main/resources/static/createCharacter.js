
document.addEventListener("DOMContentLoaded", function() {

    // Блоки для отображения информации об оружии
    let weaponNameList = document.getElementById("combat-plotsANDweapon_Name_note");
    let weaponBonusList = document.getElementById("bonus-difficult_note");
    let weaponDamageList = document.getElementById("damage_note");
    let weaponNotesList = document.getElementById("note_note");

    // Кнопка добавления оружия
    let addWeaponButton = document.getElementById("readyBAT");

    // Поля ввода информации об оружии
    let weaponNameInput = document.getElementById("combat-plotsANDweapon_Name_input");
    let weaponBonusInput = document.getElementById("bonus-difficult_input");
    let weaponDamageInput = document.getElementById("damage_input");
    let weaponNotesInput = document.getElementById("note_input");

    // Кнопка добавления заметки
    let addNoteButton = document.getElementById("readyBTN");

    // Блоки для заметок
    let notesContainer = document.getElementById("blocknote");
    let noteInput = document.getElementById("blocknote1");
    let notesList = document.getElementById("boxList");

    let SandA_BTN = document.getElementById("skillsANDabilities_BTN")

    let SandA_Input = document.getElementById("skillsANDabilities_input")

    let SandA_place = document.getElementById("skillsANDabilities_notePlace")

    let aANDs_BTN = document.getElementById("attackANDspell_BTN")
   
    let aANDs_note = document.getElementById("attackANDspell_note")

    let aANDs_INP = document.getElementById("attackANDspell_input")

    let F_BTN = document.getElementById("features_BTN")
   
    let F_note = document.getElementById("features_note")

    let F_INP = document.getElementById("features_input")

    let AliceAndOrg_BTN = document.getElementById("AliceAndOrg_BTN")
   
    let AliceAndOrg_note = document.getElementById("AliceAndOrg_note")

    let AliceAndOrg_INP = document.getElementById("AliceAndOrg_input")
    
    
    let goal_BTN = document.getElementById("goal_BTN")
   
    let goal_note = document.getElementById("goal_note")

    let goal_INP = document.getElementById("goal_input")

    let additional_skillsBTN = document.getElementById("additional_skills_BTN")
   
    let additional_skills_note = document.getElementById("additional_skills_note")

    let additional_skills_INP = document.getElementById("additional_skills_input")


    let treasures_BTN = document.getElementById("treasures_BTN")
   
    let treasures_note = document.getElementById("treasures_note")

    let treasures_INP = document.getElementById("treasures_input")
    
    let imageInput = document.getElementById("imageInput");
    let characterImage = document.getElementById("characterImage");

    addWeaponButton.addEventListener("click", function() {

        if (weaponNameInput.value !== "" && weaponBonusInput.value !== "" && weaponDamageInput.value !== "" && weaponNotesInput.value !== "") {

            let weaponNameButton = document.createElement("button");
            let weaponBonusButton = document.createElement("button");
            let weaponDamageButton = document.createElement("button");
            let weaponNotesButton = document.createElement("button");

            weaponNameButton.classList.add("pp1BTN");
            weaponBonusButton.classList.add("pp2BTN");
            weaponDamageButton.classList.add("pp3BTN");
            weaponNotesButton.classList.add("pp4BTN");

            weaponNameList.appendChild(weaponNameButton);
            weaponBonusList.appendChild(weaponBonusButton);
            weaponDamageList.appendChild(weaponDamageButton);
            weaponNotesList.appendChild(weaponNotesButton);

            weaponNameButton.textContent = weaponNameInput.value;
            weaponBonusButton.textContent = weaponBonusInput.value;
            weaponDamageButton.textContent = weaponDamageInput.value;
            weaponNotesButton.textContent = weaponNotesInput.value;

            weaponNameInput.value = "";
            weaponBonusInput.value = "";
            weaponDamageInput.value = "";
            weaponNotesInput.value = "";

            weaponBonusButton.addEventListener("click", function () {
                weaponBonusButton.remove()
                weaponDamageButton.remove()
                weaponNameButton.remove()
                weaponNotesButton.remove()
            })
            weaponNotesButton.addEventListener("click", function () {
                weaponBonusButton.remove()
                weaponDamageButton.remove()
                weaponNameButton.remove()
                weaponNotesButton.remove()
            })
            weaponNameButton.addEventListener("click", function () {
                weaponBonusButton.remove()
                weaponDamageButton.remove()
                weaponNameButton.remove()
                weaponNotesButton.remove()
            })
            weaponDamageButton.addEventListener("click", function () {
                weaponBonusButton.remove()
                weaponDamageButton.remove()
                weaponNameButton.remove()
                weaponNotesButton.remove()
            })
        }
    });


    addNoteButton.addEventListener("click", function() {
        if (noteInput.value !== "") {
        let noteBox = document.createElement("div");
        notesList.appendChild(noteBox);

        noteInput.classList.add("newOROROR");

        let noteText = document.createElement("p");
        noteText.textContent = noteInput.value;
        noteBox.appendChild(noteText);

        noteText.classList.add("Boxy1");

        noteInput.value = "";

        let deleteNoteButton = document.createElement("button");
        deleteNoteButton.textContent = "❌";
        deleteNoteButton.classList.add("BTAA");

        noteBox.appendChild(deleteNoteButton);
        noteBox.classList.add("boxa");
        deleteNoteButton.addEventListener("click", function() {
        noteBox.remove();
        });
        }
    });
    

    SandA_BTN.addEventListener("click", function(){
        if (SandA_Input.value !== "") {
        let SandA_boxy = document.createElement("div")
        SandA_boxy.classList.add("SandA-BOX")
        let SandA_pp = document.createElement("p")
        SandA_place.appendChild(SandA_boxy)
        SandA_pp.textContent = SandA_Input.value;
        SandA_boxy.appendChild(SandA_pp)
        SandA_Input.value = ""; 
        
        
        let SandA_Btn_delete = document.createElement("button")
        SandA_Btn_delete.textContent = "❌"
        SandA_Btn_delete.classList.add("SANDA_BTN")
        SandA_boxy.appendChild(SandA_Btn_delete)
    
        SandA_Btn_delete.addEventListener("click", function(){
            SandA_boxy.remove()
        })
    }
    })


    aANDs_BTN.addEventListener("click", function () {
        if (aANDs_INP.value !== "") {
        let aANDs_boxy = document.createElement("div")
        aANDs_boxy.classList.add("aANDs-BOX")
        let aANDs_pp = document.createElement("p")
        aANDs_note.appendChild(aANDs_boxy)
        aANDs_pp.textContent = aANDs_INP.value;
        aANDs_boxy.appendChild(aANDs_pp)
        aANDs_INP.value = ""; 
        
        
        let aANDs_Btn_delete = document.createElement("button")
        aANDs_Btn_delete.textContent = "❌"
        aANDs_Btn_delete.classList.add("AANDS_BTN")
        aANDs_boxy.appendChild(aANDs_Btn_delete)
        aANDs_Btn_delete.addEventListener("click", function(){
        aANDs_boxy.remove()
        })
    } 
    })


    imageInput.addEventListener("change", function() {

    let file = imageInput.files[0];

    if (file) {
        characterImage.style.display = "flex"
        characterImage.src = URL.createObjectURL(file);
    }

});

    F_BTN.addEventListener("click", function () {
        if (F_INP.value !== "") {
        let F_boxy = document.createElement("div")
        F_boxy.classList.add("F-BOX")
        let F_pp = document.createElement("p")
        F_note.appendChild(F_boxy)
        F_pp.textContent = F_INP.value;
        F_boxy.appendChild(F_pp)
        F_INP.value = ""; 
        
        
        let F_Btn_delete = document.createElement("button")
        F_Btn_delete.textContent = "❌"
        F_Btn_delete.classList.add("F_BTN")
        F_boxy.appendChild(F_Btn_delete)
        F_Btn_delete.addEventListener("click", function(){
        F_boxy.remove()
        })
    } 
    })



        AliceAndOrg_BTN.addEventListener("click", function () {
        if (AliceAndOrg_INP.value !== "") {
        let AliceAndOrg_boxy = document.createElement("div")
        AliceAndOrg_boxy.classList.add("AliceAndOrg-BOX")
        let AliceAndOrg_pp = document.createElement("p")
        AliceAndOrg_note.appendChild(AliceAndOrg_boxy)
        AliceAndOrg_pp.textContent = AliceAndOrg_INP.value;
        AliceAndOrg_boxy.appendChild(AliceAndOrg_pp)
        AliceAndOrg_INP.value = ""; 
        
        
        let AliceAndOrg_Btn_delete = document.createElement("button")
        AliceAndOrg_Btn_delete.textContent = "❌"
        AliceAndOrg_Btn_delete.classList.add("AliceAndOrg_BTN")
        AliceAndOrg_boxy.appendChild(AliceAndOrg_Btn_delete)
        AliceAndOrg_Btn_delete.addEventListener("click", function(){
        AliceAndOrg_boxy.remove()
        })
    } 
    })

        goal_BTN.addEventListener("click", function () {
        if (goal_INP.value !== "") {
        let goal_boxy = document.createElement("div")
        goal_boxy.classList.add("goal-BOX")
        let goal_pp = document.createElement("p")
        goal_note.appendChild(goal_boxy)
        goal_pp.textContent = goal_INP.value;
        goal_boxy.appendChild(goal_pp)
        goal_INP.value = ""; 
        
        
        let goal_Btn_delete = document.createElement("button")
        goal_Btn_delete.textContent = "❌"
        goal_Btn_delete.classList.add("F_BTN")
        goal_boxy.appendChild(goal_Btn_delete)
        goal_Btn_delete.addEventListener("click", function(){
        goal_boxy.remove()
        })
    } 
    })

            additional_skills.addEventListener("click", function () {
        if (additional_skills_INP.value !== "") {
        let additional_skills_boxy = document.createElement("div")
        additional_skills_boxy.classList.add("additional_skills-BOX")
        let additional_skills_pp = document.createElement("p")
        additional_skills_note.appendChild(additional_skills_boxy)
        additional_skills_pp.textContent = additional_skills_INP.value;
        additional_skills_boxy.appendChild(additional_skills_pp)
        additional_skills_INP.value = ""; 
        
        
        let additional_skills_Btn_delete = document.createElement("button")
        additional_skills_Btn_delete.textContent = "❌"
        additional_skills_Btn_delete.classList.add("F_BTN")
        additional_skills_boxy.appendChild(additional_skills_Btn_delete)
        additional_skills_Btn_delete.addEventListener("click", function(){
        additional_skills_boxy.remove()
        })
    } 
    })

            treasures_BTN.addEventListener("click", function () {
        if (treasures_INP.value !== "") {
        let treasures_boxy = document.createElement("div")
        treasures_boxy.classList.add("treasures-BOX")
        let treasures_pp = document.createElement("p")
        treasures_note.appendChild(treasures_boxy)
        treasures_pp.textContent = treasures_INP.value;
        treasures_boxy.appendChild(treasures_pp)
        treasures_INP.value = ""; 
        
        
        let treasures_Btn_delete = document.createElement("button")
        treasures_Btn_delete.textContent = "❌"
        treasures_Btn_delete.classList.add("treasures_BTN")
        treasures_boxy.appendChild(treasures_Btn_delete)
        treasures_Btn_delete.addEventListener("click", function(){
        treasures_boxy.remove()
        })
    } 
    })

});
