// USERS (данные сгенерировал ИИ, потому что кодер ленивый:))
let users = [
    //user 1
    {
        login: "admin",
        password: "SuperSecurePassword123",
        name: "Александр"
    },
    //user 2
    {
        login: "jdoe",
        password: "PasswordExtract99",
        name: "Иван"
    },
    //user 3
    {
        login: "marina_k",
        password: "Qwerty789!@#",
        name: "Марина"
    },
    //user 4
    {
        login: "dev_user",
        password: "CompileTimeError404",
        name: "Дмитрий"
    },
    //user 5
    {
        login: "elena_sm",
        password: "SpringVibe2026",
        name: "Елена"
    },
    //user 6
    {
        login: "alex_fox",
        password: "FoxTailSecret!",
        name: "Алексей"
    },
    //user 7
    {
        login: "guest_acc",
        password: "JustForVisitorPass",
        name: "Гость"
    }
]

//ЗАПРОСЫ
//Принять вводные данные:
let login = document.getElementById("login"); //найти input в HTML с тем самым логин
let password = document.getElementById("password"); //найти password с тем самым логин

let currentUser; //создание "пустой коробки" юзера, которого ищем для хранения введенных данных

login.addEventListener("keydown", function(event) { //этот код ИИшка написал, чтоб он пароль выводил только после того, как найдет логин в массивах
    // Проверяем, нажата ли клавиша Enter
    if (event.key === "Enter") {
        const enteredLogin = login.value.trim();

        currentUser = users.find(user => user.login === enteredLogin);

        if (currentUser) {
            password.style.display = "block"; //выводит инпут для пароля только в том случае, если нашел логин в массиве (отображает)
            password.focus(); //сразу наводит пользователя на этот инпут, чтоб он сразу мог вводить
            login.style.border = "2px solid green" //это ИИшка придумал, что, если логин нашел, чтоб он рамочки добавил и они светились зеленым
            alert("Здравия желаю!")
        } else {
            password.style.display = "none"; //это чтоб он не отображал место ввода для пароля
            login.style.border = "2px solid red" //это уже, если логин не нашел, рамочки будут красными
            login.style.outline = "none"
            alert("Здравия не желаю. Вводи внимательнее!")
        }
    }
})

password.addEventListener("keydown", function(event) {
    if (event.key === "Enter") {
        const enteredPassword = password.value;

        if (currentUser && currentUser.password === enteredPassword) {
            alert ("А ты хароош!")
            password.style.border = "2px solid green"
        } else {
            alert ("Ай-я-яй, как тебе не стыдно? Твоей маме позвонить?")
            password.style.border = "2px solid red"
        }
    }
})