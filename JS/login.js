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
        let objetDate = new Object();
        let myDate = new Date();
        let dateform = myDate.toLocaleDateString();
        let heureform = myDate.toLocaleTimeString();
        let dateObj = "date";
        let heureObj = "heure";
        objetDate[dateObj] = dateform;
        objetDate[heureObj] = heureform;
        localStorage.setItem("Date", JSON.stringify(objetDate));
        document.location.href = "../HTML/forum.html"
        evenement.preventDefault();
    }
});