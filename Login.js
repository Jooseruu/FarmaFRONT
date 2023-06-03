function send() {
  // Obtener los valores de email y password
  let email = document.getElementById("email").value;
  let password = document.getElementById("password").value;

  // Crear una solicitud HTTP GET
  var http = new XMLHttpRequest();
  http.open("GET", "http://localhost:8080/FarmaBACK/ServeLogin?email=" + email + "&password=" + password, true);

  // Establecer la función a ejecutar cuando se reciba una respuesta
  http.onreadystatechange = function () {
      if (this.readyState == 4 && this.status == 200) {
          var session = http.responseText;
          console.log("Respuesta del backend:", session);
          if (session !== "") {
              sessionStorage.setItem("session", session);
              sessionStorage.setItem("mail", email);
              window.location.href = "./gestion.html";
          } else {
              alert("Inicio de sesión incorrecto. Inténtalo de nuevo.");
          }
      }
  }

  // Enviar la solicitud
  http.send();
}
