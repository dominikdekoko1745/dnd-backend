// картинка
let myImg = document.getElementById("img1")

// НАШ body
let bod = document.getElementById("SOmain")

// короче это коробка для ВХОД И регистрация 
let main = document.getElementById("logy")

// кнопки входа и регистрации
let logBtn = document.getElementById("logIN");
let singBtn = document.getElementById("singUP");

// кнопка после выбоа "вХОД"
let final = document.getElementById("final")

// input 2 вида и логин и пароль
let inp1 = document.getElementById("input1");
let inp2 = document.getElementById("input2");

// коробка для inputa 
let box1 = document.getElementById("InLog") 

// h2 ну он там единственный текст чел
let text1 = document.getElementById("text")

// НУ уже второй текст да вот так вот
let err = document.getElementById("error")
err.classList.add("text2")

// тестовый логин и пароль
let testLOG = "K";
let testPASS = "123";

// кнопка для изменения фона 
let backBtn = document.getElementById("background")


// кнопка при выборе "ВХОД" убирает все и добавляет инпуты 
logBtn.addEventListener("click", function () {

    box1.style.display = "flex";
    logBtn.remove();
    singBtn.remove();
});


// кнопка проверки входа 
final.addEventListener("click", function () {

    if (inp1.value != "" && inp2.value != "" && inp1.value == testLOG && inp2.value == testPASS) {
        window.location.href = "lobby.html"
        err.style.display = "none"
    }
    else {
        err.style.display = "flex"
        inp1.value = "";
        inp2.value = "";
    }
})

// кнопка для измены фона
backBtn.addEventListener("click" , function () {
    bod.classList.toggle("newBG")
    backBtn.textContent = "LIGHT"
    main.classList.toggle("logBACK")

    if (bod.classList.contains("newBG")) {
        backBtn.textContent = "DARK"
        myImg.src = "icons8-dungeons-and-dragons-96.png"
        text1.classList.toggle("newText")
        err.classList.toggle("newText") 
    }
    else {
        myImg.src = "icons8-dungeons-and-dragons-961.png"
        text1.classList.toggle("newText")
        err.classList.toggle("newText")
    }
})

