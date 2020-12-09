document.querySelector('section').innerHTML = '';
const section = document.querySelector('section');


let weekday = [ 'Sun', 'Mon', 'Tue', 
'Wed', 'Thu', 'Fri', 'Sat' ];

const today = new Date()

const contenaire = document.createElement('div')
contenaire.className = 'contenaire_horaire'
section.appendChild(contenaire)

const Horaire = document.createElement('div');
Horaire.id = 'heure'
Horaire.className = 'Horaire_ouverture_fermeture';
contenaire.appendChild(Horaire);

const phrase_Ouvert_Fermer = document.createElement('div')
    phrase_Ouvert_Fermer.className = 'phrase_Ouvert_Fermer'
    contenaire.appendChild(phrase_Ouvert_Fermer)

//======================== POPUP DE LHORAIRE ==========================//
if(weekday[1] == weekday[today.getDay()]){
    phrase_Ouvert_Fermer.style = 'color: red;'
    phrase_Ouvert_Fermer.innerHTML +=  " (closed)"

}else if (today.getHours() >= 12 && today.getHours() < 14 || today.getHours() >= 18 && today.getHours() < 23){
    phrase_Ouvert_Fermer.style = 'color:green'
    phrase_Ouvert_Fermer.innerHTML +=  " (open)"

}else {
    phrase_Ouvert_Fermer.style = 'color: red;'
    phrase_Ouvert_Fermer.innerHTML +=  " (closed)"
}


//====================== POPUP VOIR HORAIRE =======================//
const boutonVoirPlus = document.createElement('button');
    boutonVoirPlus.type = "button";
    boutonVoirPlus.className = "btn btn-primary schedulebtn"
    boutonVoirPlus.setAttribute("data-toggle", "modal");
    boutonVoirPlus.setAttribute("data-target", "#HorairePopup");
    boutonVoirPlus.textContent = "Schedule"
    contenaire.appendChild(boutonVoirPlus);

//===================== FONCTION HEURE DYNAMIQUE ======================//
function UR_Start()
{
UR_Nu = new Date();
UR_Indhold = showFilled(weekday[UR_Nu.getDay()]) + ' ' + showFilled(UR_Nu.toLocaleTimeString('en-UK'));
Horaire.textContent = UR_Indhold;
setTimeout("UR_Start()",1000);
}
function showFilled(Value)
{
return (Value > 9) ? "" + Value : "" + Value;
}
