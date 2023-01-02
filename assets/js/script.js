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
function verifierTel(element){
    let regex = /^[0-9]{10,10}$/i;
    if(regex.test(element.value)){
        element.style.background = 'lightgreen';
    } else {
        element.style.background = 'orange';
    }
}
function verifierEmail(element){
    let regex = /^[a-z0-9.-_]{4,}@+[a-z0-9.-_]{4,}.+[a-z]{2,}$/i;
    if(regex.test(element.value)){
        element.style.background = 'lightgreen';
    } else {
        element.style.background = 'orange';
    }
}
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
            return false;
        })
        .fail(function(error){
            alert('Le formulaire a rencontré une erreur');
            return false;
        });
        return false;
    });
})