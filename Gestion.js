// Procede a la página de alta
function irAlta() {
    window.location.href = "./Alta.html";
}

// Elimina la sesión y procede a la página de login
function logOut() {
    sessionStorage.removeItem('session');
    sessionStorage.removeItem('mail');
    window.location.href = "./Login.html";
}

// Devuelve los chips correspondientes al doctor
function verTabla() {
    let email = sessionStorage.getItem("mail");
    let session = sessionStorage.getItem("session");

    var http = new XMLHttpRequest();
    http.open("GET", "http://localhost:8080/FarmaBACK/ServeXips?email=" + email + "&session=" + session, true);

    http.onreadystatechange = function () {
        if (this.readyState == 4 && http.status == 200) {
            let table = http.response;
            if (table !== null) {
                document.getElementById("tab").innerHTML = table;
            } else {
                alert("Error en la conexión")
            }
        }
    }
    http.send();
}
