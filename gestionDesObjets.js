function emporter(objet){
	// alert(objet.src);
	pocketimg.src=objet.src;
	pocketimg.hidden="";
	actionJoueur=objet.id;
	// Remettre l'objet à sa place ?
	//objet.style.opacity=0.2;
	narrationObjet(actionJoueur);
}

function utiliser(objet){
	if (pocketimg.hidden == true) {
		alert("tu n'as rien dans ta poche")
	} else {
		tab1=pocketimg.src.split("/");
		alert(tab1[tab1.length-1].split(".")[0]);
	}
}

// QUESTION G
/*

*/
