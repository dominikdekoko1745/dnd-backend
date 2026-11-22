// профиль пользовател 
let Header = document.getElementById("headerA")

// кнопка для фона
let darkBtn = document.getElementById("dark")

// наш body
let all = document.getElementById("All")

// мэйн где кнопок много 
let Main = document.getElementById("mainA")

//а - это ссылка на сменить профиль 
let AH = document.getElementById("Adda")

// бокс где создать игру или присоединиться
let second = document.getElementById("secondBox")

// кнопка играть 
let play = document.getElementById("playBtn")

// это ограмная коробка где основные кнопки профиль и тому подобное 
let menu = document.getElementById("mainBox")

let pas = document.getElementById("pass")

// картинка 2
let image2 = document.getElementById("img2")

// картинка 3
let image3 = document.getElementById("img3")


// кнопка создать 
let create = document.getElementById("createBtn")

// кнопка присоедининини
let join = document.getElementById("joinBtn")

// кнопка персонажа 
let character = document.getElementById("characterBtn")

// бокс третий для персонажи
let third = document.getElementById("thirdBox")

// создать в персонажах 
let createAlt = document.getElementById("createBtnAlt")
 
// мини бокс внутри третьего 
let list1 = document.getElementById("miniBox")

let joinibb = document.getElementById("inBB")

// кнопка библиотека 
let library = document.getElementById("libraryBtn")

// 4 бокс для библиотеки 
let four = document.getElementById("fourBox")

// кнопка нипов
let NYP = document.getElementById("NYPbtn")

// кнопка предметов
let Item = document.getElementById("ItemBtn")

// кнопка карты
let Map = document.getElementById("MapBtn")

//  кнопка закрывашка 
let clse1 = document.getElementById("close1")

//  кнопка закрывашка 
let clse2 = document.getElementById("close2")

//  кнопка закрывашка 
let clse3 = document.getElementById("close3")

// бокс для присоедения к лобби 
let joinBoxy = document.getElementById("joinBox")

// бокс создания лоби 
let createBoxy = document.getElementById("createBox")

// бак саозания лобби
let createLobb = document.getElementById("createLobby")

// бокс с кнопками в создании лобби
let bit = document.getElementById("buttonss")

// кнопка ка мпания в сзданной лобби
let ful = document.getElementById("fool")

// кнопка выйти 
let inCreateBtn = document.getElementById("btn1")

let inputC = document.getElementById("inputCode")
 
let cod = document.getElementById("code")

let one1 = document.getElementById("one")

let mainNickname = document.getElementById("mainNickname")

let roomNameCreate = document.getElementById("inputName")

let GMnick = document.getElementById("GMnickname")

// кнопка смена фона
darkBtn.addEventListener("click", function() {
    all.classList.toggle("newBG")
    if (all.classList.contains("newBG")) {
        darkBtn.textContent = "Dark"
        Main.classList.toggle("newBG")
        darkBtn.classList.toggle("newBG")
        Header.classList.toggle("newBG")
        AH.classList.toggle("newBG")
        image2.src = "icons8-dungeons-and-dragons-96.png"
        image3.src = "icons8-dungeons-and-dragons-96.png"
        second.classList.toggle("newBG")
        create.classList.toggle("newBG")
        join.classList.toggle("newBG")
        third.classList.toggle("newBG")
        createAlt.classList.toggle("newBG")
        four.classList.toggle("newBG")
        Map.classList.toggle("newBG")
        NYP.classList.toggle("newBG")
        Item.classList.toggle("newBG")
        joinBoxy.classList.toggle("newBG")
        createBoxy.classList.toggle("newBG")
        createLobb.classList.toggle("newBG")
        bit.classList.toggle("newBG")
        ful.classList.toggle("newBG")
    } else {
        darkBtn.textContent = "Light"
        Main.classList.toggle("newBG")
        darkBtn.classList.toggle("newBG")
        Header.classList.toggle("newBG")
        AH.classList.toggle("newBG")
        image2.src = "icons8-dungeons-and-dragons-961.png"
        image3.src = "icons8-dungeons-and-dragons-961.png"
        second.classList.toggle("newBG")
        create.classList.toggle("newBG")
        join.classList.toggle("newBG")
        third.classList.toggle("newBG")
        createAlt.classList.toggle("newBG")
        four.classList.toggle("newBG")
        Map.classList.toggle("newBG")
        NYP.classList.toggle("newBG")
        Item.classList.toggle("newBG")
        joinBoxy.classList.toggle("newBG")
        createBoxy.classList.toggle("newBG")
        createLobb.classList.toggle("newBG")
        bit.classList.toggle("newBG")
        ful.classList.toggle("newBG")
    }
})

roomNameCreate.textContent = mainNickname.innerText
GMnick.textContent = mainNickname.innerText

// функция нажатия "Играть""
play.addEventListener("click", function(){
    second.style.display = "flex";
    third.style.display = "none"
    four.style.display = "none"
    play.style.color = "white"
    character.style.color = ""
    library.style.color = ""
})

// кнопка для возвращеня ну функция не кнопка
clse1.addEventListener("click", function(){
    second.style.display = "none";
    play.style.color = ""
    createBtn.disabled = false
})


// кнопка персонажа
character.addEventListener("click", function(){
    second.style.display = "none";
    third.style.display = "flex"
    four.style.display = "none"
    character.style.color = "white"
    play.style.color = ""
    library.style.color = ""
    createLobb.style.display = "none"
    createBtn.disabled = false
})

// кнопка назада у персонажа ну функция 
clse2.addEventListener("click", function(){
    third.style.display = "none";
    character.style.color = ""
})


// кнопка библиотека 
library.addEventListener("click", function(){
    second.style.display = "none";
    third.style.display = "none"
    four.style.display = "flex"
    library.style.color = "white"
    play.style.color = ""
    character.style.color = ""
    createLobb.style.display = "none"
    createBtn.disabled = false
})

// кнопка возватат для библиотеки 
clse3.addEventListener("click", function(){
    four.style.display = "none";
    library.style.color = ""
})



let errora = document.createElement("h4")
errora.classList.add("errrooorr")



// кнопка создания лабби
createBtn.addEventListener("click", function(){
        createLobb.style.display = "flex"
        let codee = Math.floor(Math.random() * (9999 - 1000 + 1)) + 1000;
        inputC.textContent = codee
        errora.remove()
        createBtn.disabled = true

})





// кнопка котрая убираю лобби создателя 
inCreateBtn.addEventListener("click", function(){
    createLobb.style.display = "none"
    let codee = Math.random() * (1000 - 9999)
    createBtn.disabled = false
    
})


// кнопка присоедения по коду 
join.addEventListener("click", function(){
    createLobb.style.display = "none"
    createBtn.disabled = false
    if (one1.value == "") {
        errora.textContent = "Ввод пуст!"
        joinibb.appendChild(errora)
    }
     else if(cod.value.length >= 6) {
        errora.textContent = "Макс. до 5 знаков!"
        joinibb.appendChild(errora)   
    }

})