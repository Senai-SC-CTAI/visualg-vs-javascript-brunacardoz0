let usuario = JSON.parse(localStorage.getItem("logdo"));
document.getElementById("titulo").innerHTML = "Bem vindo, "+usuario.login+"!";
function deslogar(){
 window.location.href = "index.html"
}
