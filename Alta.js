// Función para obtener pacientes
function getPatient() {
    //servePatient
    let email = sessionStorage.getItem("mail");
    let session = sessionStorage.getItem("session");

    var http = new XMLHttpRequest();
    http.open("GET", "http://localhost:8080/FarmaBACK/ServePatients?email=" + email + "&session=" + session, true);

    http.onload = function () {
        if (this.readyState == 4 && http.status == 200) {
            let listPatients = JSON.parse(http.response);
            let selectPcientes = document.getElementById("pacientes");
            selectPcientes.innerHTML = "";
            var i = 0;
            while (i < listPatients.length) {
                for (var key in listPatients[i]) {

                    const option = document.createElement("option");
                    option.value = listPatients[i][key];
                    option.text = listPatients[i][key];
                    selectPcientes.appendChild(option);
                }
                i++;
            }

        }
    }
    http.send();
}

// Función para obtener medicamentos
function getMedicine() {
    //servMedicine
    let email = sessionStorage.getItem("mail");
    let session = sessionStorage.getItem("session");
    var http = new XMLHttpRequest();
    http.open("GET", "http://localhost:8080/FarmaBACK/ServeMedicines?email=" + email + "&session=" + session, true);

    http.onload = function () {
        if (this.readyState == 4 && http.status == 200) {

            let listPatients = JSON.parse(http.response);
            let selectMedicines = document.getElementById("medicamentos");
            selectMedicines.innerHTML = "";

            const keys = Object.keys(listPatients);
            for (let x = 0; x < listPatients.length; x++) {
                const option = document.createElement("option");
                option.value = listPatients[x].id;
                option.text = JSON.stringify(listPatients[keys[x]]);
                selectMedicines.appendChild(option);
            }

        }
    }
    http.send();

}

// Función para enviar datos
function enviar() {
    //servRelease
    let email = sessionStorage.getItem("mail");
    let session = sessionStorage.getItem("session");
    let xip = document.getElementById("xip").value;
    let pacientes = document.getElementById("pacientes").value;
    var medicamentos = document.getElementById("medicamentos").value;
    let date = document.getElementById("date").value;

    var http = new XMLHttpRequest();
    http.open("GET", "http://localhost:8080/FarmaBack/ServeXips?email=" + email + "&session=" + session, true);
    let mok = http.response;
    alert(mok);

    http.onreadystatechange = function () {

        if (this.readyState == 4 && http.status == 200) {
            var response = http.responseText;

            if (response == true) {
                alert("XIP dado de alta");
            } else {
                alert("Error no se ha podido dar de alta el xip")
            }


        }
    }
}

// Función para ir a la página de gestión
function goGestion() {
    window.location.href = "./Gestion.html";
}

// Funciones a ejecutar al cargar la página
window.onload = function () {
    getPatient();
    getMedicine();
}
