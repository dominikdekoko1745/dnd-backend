// боди ну вся страница
let bod = document.body;

//разделенная часть внутри box
let main = document.getElementById("main");

// h1 наш 
let text234 = document.getElementById("h1text")

// кнопка фона
let backBtn = document.getElementById("background")

// инпут логина 
let logInput = document.getElementById("newLogin")

// инпут пароля 
let passInput = document.getElementById("newPass")

// инпут проверочного пароля
let returnInput = document.getElementById("returnPass")

// кнопка для подтверждения 
let finalBtn = document.getElementById("finalSing")

// ошибка ввода 
let error1 = document.getElementById("notGood")

// ошибка ввода повторного пароля 
let error2 = document.getElementById("notPass")

// картинка
let myImg = document.getElementById("img1")

// бокс внутри боди
let newBox = document.getElementById("box")

async function singUP(){
    try {
        const response = await fetch("api/users/register",{
            method: "POST",
            headers : {"Content-Type" : "application/json"
            },
            body : JSON.stringify({
                username: logInput.value,
                password: passInput.value
            })

        })



        if (!response.ok){
            throw new Error("Ошибка бэка")
        }
        console.log("Регистрация успешна")
        window.location.href = "login.html"

        return true;

    } catch (error){
        console.log(error)
        return false;
    } finally {
        console.log("Кодд завершен!")
    }

}


// проверка регистрации что все заполнено или пароль похож
finalBtn.addEventListener("click", async function (event) {
    event.preventDefault();
    if (logInput.value !== "" && passInput.value !== "" && returnInput.value !== "" && passInput.value === returnInput.value) {
        await singUP()
        error1.style.display = "none"
        error2.style.display = "none"
    } else if (passInput.value === "" || returnInput.value === ""){
        error1.style.display = "none"
        error2.style.display = "none"
        error1.style.display = "flex"
    } else if (passInput.value !== returnInput.value) {
        error1.style.display = "none"
        error2.style.display = "none"
        error2.style.display = "flex"
    } else {
        error1.style.display = "none"
        error2.style.display = "none"
        error1.style.display = "flex"
    }
})






// кнопка для измены фона
backBtn.addEventListener("click" , function () {
    bod.classList.toggle("newBG")
    backBtn.textContent = "LIGHT"
    main.classList.toggle("logBACK")
        myImg.src = "icons8-dungeons-and-dragons-96.png"
        newBox.classList.toggle("HaNew")
    if (bod.classList.contains("newBG")) {
        backBtn.textContent = "DARK"
        error1.classList.toggle("another")
        error2.classList.toggle("another")
        text234.classList.toggle("another")
    }
    else {
        myImg.src = "icons8-dungeons-and-dragons-961.png"
        error1.classList.toggle("another")
        error2.classList.toggle("another")
        text234.classList.toggle("another")

    }
})

