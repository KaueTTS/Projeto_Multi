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