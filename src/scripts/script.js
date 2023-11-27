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