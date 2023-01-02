// Fonction pour générer un mot de passe
function genereMotDePasse(){
    let char = '0123456789azertyuiopqsdfghjklmwxcvbnAZERTYUIOPQSDFGHJKLMWXCVBNù*^$¨£%µéàçè';
    let taille = Math.floor(Math.random()*8);
    taille = 8+taille;
    let Mdp = '';
    for(let i=0;i<=taille;i++){
        Mdp+= char.charAt(Math.floor(Math.random()*char.length));
    }
    document.getElementById('MDP').value = Mdp;
    document.getElementById('MDPR').value = Mdp;
}
// Fonction pour vérifier le mot de passe
function verifierMotDePasse(){
    let MDP = document.getElementById('MDP');
    let MDPR = document.getElementById('MDPR');
    if(MDP.value == MDPR.value){
        if(MDP.value.length >= 8){
            return true;
        } else {
            document.getElementById('infomdp').innerHTML = "Votre mot de passe est trop court";
            return false;
        }
    } else {
        document.getElementById('infomdp').innerHTML = "Les 2 mots de passe ne correspondent pas, veuillez réessayer";
        return false;
    }
}
//Fonction pour vérifier le numéro de téléphone
function verifierTel(element){
    let regex = /^[0-9]{10,10}$/i;
    if(regex.test(element.value)){
        element.style.background = 'lightgreen';
        document.getElementById('infotel').innerHTML = "Votre numéro de téléphone est valide"
    } else {
        element.style.background = 'orange';
        document.getElementById('infotel').innerHTML = "Votre numéro de téléphone n'est pas valide"
    }
}
// Fonction pour vérifier l'adresse mail
function verifierEmail(element){
    let regex = /^[a-z0-9.-_]{4,}@+[a-z0-9.-_]{4,}.+[a-z]{2,}$/i;
    if(regex.test(element.value)){
        element.style.background = 'lightgreen';
        document.getElementById('infoemail').innerHTML = "Votre adresse mail est valide"
    } else {
        element.style.background = 'orange';
        document.getElementById('infoemail').innerHTML = "Votre adresse mail n'est pas valide"
    }
}
// Jquery pour envoyer les données du formulaire en Ajax 
$(document).ready(function(){
    $('#FormEval').on('submit',function(){
        let form = $('#FormEval').serialize();
        $.ajax({
            url: 'assets/ajax/evalajax.php',
            method: 'GET',
            data: form,
            datatType: 'html',
        })
        .done(function(response){
            alert(response);
        })
        .fail(function(error){
            alert('Le formulaire a rencontré une erreur');
        });
        return false;
    });
});
// Fonction pour vider les champs du formulaire et afficher un message après avoir soumis le formulaire
function viderChamps(){
    document.getElementById('message').innerHTML = "Votre formulaire a été validé";
    document.getElementById('FormEval').reset();
}