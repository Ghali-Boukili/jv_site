function narrationObjet(actionJoueur){
	var histoire;
	switch (actionJoueur) {
  case "fleur" :
  	histoire = "";
  	break;
  	}
  fenetreDeNarration.insertAdjacentHTML("beforeend",histoire+"<br/>")	
}

function narrationCase(x,y){
	var histoire = "";
	histoire = texteCase(x,y);
	fenetreDeNarration.insertAdjacentHTML("beforeend",histoire+"<br/>");
}

function texteCase(x,y) {
switch (x & y) {
	// Sur Terre
	case 0 & -1000 :
	histoire = "";
	break;
	case -500 & -1000 :
	histoire = "";
	break;
	case -1000 & -1000 :
	histoire = "";
	break;
	
	// Dans l'espace
	case 0 & -500 :
	histoire = "";
	break;
	case -500 & -500 :
	histoire = "";
	break;
	case -1000 & -500 :
	histoire = "";
	break;
	
	// Sur Xénon
	case 0 & 0 :
	histoire = "";
	break;
	case -500 & 0 :
	histoire = "";
	break;
	case -1000 & 0 :
	histoire = "";
	break;
}
return histoire;
}
