function verif(){
    Nom=document.getElementById('nom').value;
    Prenom=document.getElementById('prenom').value;
    Email=document.getElementById('email').value;
    Tel=document.getElementById('tel').value;
    Dateness=document.getElementById('dateness').value;
    Password=document.getElementById('password').value;
    var lettersOnly = /^[A-Za-z]+$/;
    var emailFormat = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    var passwordFormat = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])$/;
    var telephoneFormat = /^\d{8}$/;
    if(!Nom.match(lettersOnly) || Nom.length < 2 || Nom.value=="")
    {
        alert("verifier votre nom");
        return false;
    }
    if(!Prenom.match(lettersOnly) || Prenom.length < 2 || Prenom.value=="")
    {
        alert("verifier votre prenom");
        return false;
    }
    if(!Email.match(emailFormat) || Email.value=="")
    {
        alert("verifier votre email");
        return false;
    }
    if(!Tel.match(telephoneFormat) || Tel.value=="")
    {
        alert("verifier votre numero de telephone");
        return false;
    }
    if(Dateness.value=="")
    {
        alert("verifier votre date de naissence");
        return false;
    }
    if(!Password.match(passwordFormat) || Password.value=="")
    {
        alert("verifier votre mot de passe");
        return false;
    }

}
