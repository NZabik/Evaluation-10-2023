let deco = document.getElementById("deco");
deco.addEventListener("click", function (e) {
    localStorage.removeItem("Date");
    document.location.href = "../index.html"
    e.preventDefault()
})
deco2.addEventListener("click", function (e) {
    if (localStorage.getItem("Date") == null) {
        alert("Veuillez vous connecter");
        e.preventDefault();
    } else {
        document.location.href = "../HTML/forum.html";
        e.preventDefault();
    };
});

let newObject = localStorage.getItem("informations");
let info = JSON.parse(newObject);

function masquernotification() {
    document.getElementById("erreur1").style.display = "none";
    document.getElementById("erreur2").style.display = "none";
}
document.forms[0].addEventListener("submit", function (evenement) {
    if (document.getElementById("mail").value != info["Email"]) {
        evenement.preventDefault();
        let show = document.getElementById("erreur1");
        show.style.display = "block";
        window.setTimeout(masquernotification, 3000);
    }
    if (document.getElementById("password").value != info["mdp"]) {
        evenement.preventDefault();
        let show = document.getElementById("erreur2");
        show.style.display = "block";
        window.setTimeout(masquernotification, 3000);
    }
});
document.forms[0].addEventListener("submit", function (evenement) {
    if (document.getElementById("mail").value == info["Email"] && document.getElementById("password").value == info["mdp"]) {
        let mailform2 = document.getElementById("mail").value;
        let mdpform2 = document.getElementById("password").value;
        let objetDate = new Object();
        let myDate = new Date();
        let dateform = myDate.toLocaleDateString();
        let heureform = myDate.toLocaleTimeString();
        let dateObj = "date";
        let heureObj = "heure";
        objetDate[dateObj] = dateform;
        objetDate[heureObj] = heureform;
        let emailObj2 = "Email";
        let mdpObj2 = "mdp";
        let nomObj2 = "nom";
        let prenomObj2 = "prenom";
        objetDate[emailObj2] = mailform2;
        objetDate[mdpObj2] = mdpform2;
        objetDate[nomObj2] = info["nom"];
        objetDate[prenomObj2] = info["prenom"];
        localStorage.setItem("Date", JSON.stringify(objetDate));

        alert("Connexion réussie")
        document.location.href = "../HTML/forum.html"
        evenement.preventDefault();

    }
});