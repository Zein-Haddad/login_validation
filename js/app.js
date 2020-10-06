accounts = [
    {email: "asdf@gmail.com", password: "asdf"},
    {email: "contoh@gmail.com", password: "contoh"}
];

document.addEventListener('DOMContentLoaded', function () {
    let email = document.getElementById("email");
    let password = document.getElementById("password");
    let loginBtn = document.getElementById("login");
    let failLogin = document.getElementById("fail-login");
    let emptyLogin = document.getElementById("empty-login");

    loginBtn.addEventListener('click', function () {
        if (email.value === '' || password.value === '') {
            emptyLogin.style.display = "block";
            return;
        }

        let isFound = false;
        accounts.forEach (function(acc) {
            if (email.value === acc.email && password.value === acc.password) {
                isFound = true;
            }
        });

        if (isFound) window.alert("Berhasil Login!");
        if (!isFound) failLogin.style.display = "block";
    });
})

function hideElem(elem) {
    elem.style.display = "none";
}