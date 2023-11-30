// Sidebar
let btn = document.querySelector('#btn')
let sidebar = document.querySelector('.sidebar')

btn.onclick = function () {
    sidebar.classList.toggle('active')
}

// Content
function openContent(id) {
    const content = document.getElementById(id + "-content")

    const contents = document.getElementsByClassName("main-content")

    for (var i = 0; i < contents.length; i++) {
        contents[i].style.display = "none"
    }

    content.style.display = "grid"
}

// Forgout
function showPopup(redirectFunc) {
    document.getElementById("popup").style.display = "block"
    setTimeout(function() {
        redirectFunc()
    }, 3000) // redireciona após 2 segundos
}

function hidePopup() {
    document.getElementById("popup").style.display = "none"
}

function redirectToLogin() {
    window.location.href = "../index.html"
}

// Input-panfletos
function gerarArquivo() {
    let limparUser = document.getElementById("clearUser").value
    let limparPassword = document.getElementById("clearPassword").value

    function clearInput() {
        clearUser = document.querySelector("#clearUser")
        clearPassword = document.querySelector("#clearPassword")

        clearUser.value = ''    
        clearPassword.value = ''      
    }

    clearInput()
}

// Password Generator 
let inputSlider = document.getElementById("inputSlider")
let sliderValue = document.getElementById("sliderValue")
let passBox = document.getElementById("passBox")
let lowercase = document.getElementById("lowercase")
let uppercase = document.getElementById("uppercase")
let numbers = document.getElementById("numbers")
let symbols = document.getElementById("symbols")
let passBtn = document.getElementById("passBtn")

sliderValue.textContent = inputSlider.value
inputSlider.addEventListener('input', ()=>{
    sliderValue.textContent = inputSlider.value
})

passBtn.addEventListener('click', () => {
    passBox.value = gerarSenha()
})

let lowerChars = "abdefghijklmnopqrstuvwxyz"
let upperChars= "ABCDEFGHIJKLMNOPQRSTUVWXYZ"
let allNumbers = "0123456789"
let allSymbols = "!@#$%&*"

function gerarSenha() {
    let genPassword = ""
    let allChars = ""

    allChars += lowercase.checked ? lowerChars : ""
    allChars += uppercase.checked ? upperChars : ""
    allChars += numbers.checked ? allNumbers : ""
    allChars += symbols.checked ? allSymbols : ""

    if (allChars == "" || allChars.length == 0) {
        return genPassword
    }

    for (let i = 1; i <= inputSlider.value; i++) {
        genPassword += allChars.charAt(Math.floor(Math.random() * allChars.length))
    }

    return genPassword

}