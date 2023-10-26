let sujetObject = localStorage.getItem("sujet");
let sujet = JSON.parse(sujetObject);
let newObject = localStorage.getItem("informations");
let info = JSON.parse(newObject);
let newDate = localStorage.getItem("Date");
let dateConnex = JSON.parse(newDate);
let i = 0;
document.getElementById("prenom").innerHTML = info["prenom"];
document.getElementById("date").innerHTML = dateConnex["date"];
document.getElementById("heure").innerHTML = dateConnex["heure"];
document.getElementById("register-title").innerHTML = sujet["titre"];
document.title = sujet["titre"];

function addRow() {
    let table = document.getElementById("tableBody");
    let Date2 = new Date();
    let dateNow = Date2.toLocaleDateString();
    let heureNow = Date2.toLocaleTimeString();
    let sujet = document.getElementById("sujet").value;
    let row = document.createElement("tr");
    let c1 = document.createElement("td");
    let c2 = document.createElement("td");
    let c3 = document.createElement("td");
    c1.innerText = sujet;
    c2.innerText = dateNow + " " + heureNow;
    c3.innerText = info["nom"] + " " + info["prenom"];
    document.getElementById("sujet").value = "";
    row.appendChild(c1);
    row.appendChild(c2);
    row.appendChild(c3);
    table.appendChild(row);

}
const showError = (input) => {
    // get the form-field element
    const formField = input.parentElement;
    // add the error class
    formField.classList.remove('success');
    formField.classList.add('error');
};
const showSuccess = (input) => {
    // get the form-field element
    const formField = input.parentElement;
    // remove the error class
    formField.classList.remove('error');
    formField.classList.add('success');
}
document.forms[0].addEventListener("submit", function (evenement) {
    if (document.getElementById("sujet").value == "") {
        showError(document.getElementById("sujet"));
        evenement.preventDefault();
    } else { addRow()
        showSuccess(document.getElementById("sujet"));
        evenement.preventDefault(); };
});


